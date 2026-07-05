const express = require('express');
const multer = require('multer');
const path = require('path');
const cloudinary = require('cloudinary').v2;
const { Readable } = require('stream');
const router = express.Router();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 5 * 1024 * 1024 },
    fileFilter: (req, file, cb) => {
        const allowed = /\.(jpg|jpeg|png|gif|webp|svg)$/i;
        if (allowed.test(path.extname(file.originalname))) cb(null, true);
        else cb(new Error('Only image files are allowed'));
    }
});

function uploadToCloudinary(buffer) {
    return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
            { folder: 'locker-manager/lockers' },
            (error, result) => { if (error) reject(error); else resolve(result); }
        );
        Readable.from(buffer).pipe(stream);
    });
}

module.exports = function (db) {

    router.get('/', async (req, res) => {
        const result = await db.execute(`
            SELECT l.*,
                   COUNT(i.id) AS item_count,
                   COALESCE(SUM(i.qty), 0) AS total_qty,
                   COALESCE(SUM(CASE WHEN i.qty <= i.min_stock THEN 1 ELSE 0 END), 0) AS low_stock_count
            FROM lockers l
            LEFT JOIN items i ON i.locker_id = l.id
            GROUP BY l.id
            ORDER BY l.position, l.id
        `);
        res.json(result.rows);
    });

    router.get('/:id', async (req, res) => {
        const lockerResult = await db.execute({ sql: 'SELECT * FROM lockers WHERE id = ?', args: [req.params.id] });
        if (lockerResult.rows.length === 0) return res.status(404).json({ error: 'Locker not found' });

        const itemsResult = await db.execute({ sql: `SELECT i.*, ch.id AS custody_id, ch.to_employee_id AS custody_emp_id, e.name AS custody_emp_name, ch.to_department_id AS custody_dept_id, d.name AS custody_dept_name, ch.start_date AS custody_start, ch.end_date AS custody_end FROM items i LEFT JOIN covenant_history ch ON ch.item_id=i.id AND ch.entity_type='locker_item' AND ch.status='active' LEFT JOIN employees e ON e.id=ch.to_employee_id LEFT JOIN departments d ON d.id=ch.to_department_id WHERE i.locker_id=? ORDER BY i.created_at`, args: [req.params.id] });
        res.json({ ...lockerResult.rows[0], items: itemsResult.rows });
    });

    router.post('/', async (req, res) => {
        const { id, name, description, image } = req.body;
        if (!id || id < 1) return res.status(400).json({ error: 'Valid locker number required' });

        const existing = await db.execute({ sql: 'SELECT id FROM lockers WHERE id = ?', args: [id] });
        if (existing.rows.length > 0) return res.status(409).json({ error: 'Locker already exists' });

        const maxPosResult = await db.execute('SELECT COALESCE(MAX(position), 0) + 1 AS p FROM lockers');
        const maxPos = Number(maxPosResult.rows[0].p);
        await db.execute({
            sql: 'INSERT INTO lockers (id, name, min_stock, position, description, image) VALUES (?, ?, 5, ?, ?, ?)',
            args: [id, name || '', maxPos, description || '', image || '']
        });

        const locker = await db.execute({ sql: 'SELECT * FROM lockers WHERE id = ?', args: [id] });
        res.status(201).json(locker.rows[0]);
    });

    router.put('/:id', async (req, res) => {
        const lockerResult = await db.execute({ sql: 'SELECT * FROM lockers WHERE id = ?', args: [req.params.id] });
        if (lockerResult.rows.length === 0) return res.status(404).json({ error: 'Locker not found' });

        const { name, min_stock, description, image, new_id } = req.body;
        let currentId = req.params.id;

        if (new_id !== undefined && new_id !== null && Number(new_id) !== Number(currentId)) {
            const newId = parseInt(new_id);
            if (!newId || newId < 1) return res.status(400).json({ error: 'Valid locker number required' });
            const conflict = await db.execute({ sql: 'SELECT id FROM lockers WHERE id = ?', args: [newId] });
            if (conflict.rows.length > 0) return res.status(409).json({ error: 'Locker number already in use' });
            // Move FK manually since FK is ON DELETE CASCADE (no ON UPDATE CASCADE in libsql/sqlite by default)
            await db.execute({ sql: 'INSERT INTO lockers (id, name, min_stock, position, description, image, created_at) SELECT ?, name, min_stock, position, description, image, created_at FROM lockers WHERE id = ?', args: [newId, currentId] });
            await db.execute({ sql: 'UPDATE items SET locker_id = ? WHERE locker_id = ?', args: [newId, currentId] });
            await db.execute({ sql: 'DELETE FROM lockers WHERE id = ?', args: [currentId] });
            currentId = newId;
        }

        if (name !== undefined) {
            await db.execute({ sql: 'UPDATE lockers SET name = ? WHERE id = ?', args: [name, currentId] });
        }
        if (description !== undefined) {
            await db.execute({ sql: 'UPDATE lockers SET description = ? WHERE id = ?', args: [description, currentId] });
        }
        if (image !== undefined) {
            await db.execute({ sql: 'UPDATE lockers SET image = ? WHERE id = ?', args: [image, currentId] });
        }
        if (min_stock !== undefined) {
            await db.execute({ sql: 'UPDATE lockers SET min_stock = ? WHERE id = ?', args: [Math.max(0, parseInt(min_stock)), currentId] });
        }

        const updated = await db.execute({ sql: 'SELECT * FROM lockers WHERE id = ?', args: [currentId] });
        res.json(updated.rows[0]);
    });

    router.delete('/:id', async (req, res) => {
        const locker = await db.execute({ sql: 'SELECT id FROM lockers WHERE id = ?', args: [req.params.id] });
        if (locker.rows.length === 0) return res.status(404).json({ error: 'Locker not found' });

        await db.execute({ sql: 'DELETE FROM items WHERE locker_id = ?', args: [req.params.id] });
        await db.execute({ sql: 'DELETE FROM lockers WHERE id = ?', args: [req.params.id] });
        res.json({ success: true });
    });

    router.post('/:id/image', upload.single('image'), async (req, res) => {
        if (!req.file) return res.status(400).json({ error: 'No image uploaded' });

        const lockerResult = await db.execute({ sql: 'SELECT * FROM lockers WHERE id = ?', args: [req.params.id] });
        if (lockerResult.rows.length === 0) return res.status(404).json({ error: 'Locker not found' });

        const cloudResult = await uploadToCloudinary(req.file.buffer);
        await db.execute({ sql: 'UPDATE lockers SET image = ? WHERE id = ?', args: [cloudResult.secure_url, req.params.id] });

        const updated = await db.execute({ sql: 'SELECT * FROM lockers WHERE id = ?', args: [req.params.id] });
        res.json(updated.rows[0]);
    });

    return router;
};
