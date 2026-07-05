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
            { folder: 'locker-manager' },
            (error, result) => { if (error) reject(error); else resolve(result); }
        );
        Readable.from(buffer).pipe(stream);
    });
}

module.exports = function (db) {

    // GET all items across all lockers
    router.get('/', async (req, res) => {
        const result = await db.execute(`
            SELECT i.*, l.name AS locker_name
            FROM items i JOIN lockers l ON l.id = i.locker_id
            ORDER BY i.name
        `);
        res.json(result.rows);
    });

    router.get('/locker/:lockerId', async (req, res) => {
        const result = await db.execute({ sql: 'SELECT * FROM items WHERE locker_id = ? ORDER BY created_at', args: [req.params.lockerId] });
        res.json(result.rows);
    });

    router.post('/locker/:lockerId', async (req, res) => {
        const locker = await db.execute({ sql: 'SELECT id FROM lockers WHERE id = ?', args: [req.params.lockerId] });
        if (locker.rows.length === 0) return res.status(404).json({ error: 'Locker not found' });

        const { name, qty, image, description, min_stock } = req.body;
        if (!name || !name.trim()) return res.status(400).json({ error: 'Item name required' });

        const result = await db.execute({
            sql: 'INSERT INTO items (locker_id, name, qty, image, description, min_stock) VALUES (?, ?, ?, ?, ?, ?)',
            args: [req.params.lockerId, name.trim(), Math.max(0, parseInt(qty) || 0), image || '', description || '', parseInt(min_stock) || 5]
        });

        const item = await db.execute({ sql: 'SELECT * FROM items WHERE id = ?', args: [Number(result.lastInsertRowid)] });
        res.status(201).json(item.rows[0]);
    });

    router.put('/:id', async (req, res) => {
        const itemResult = await db.execute({ sql: 'SELECT * FROM items WHERE id = ?', args: [req.params.id] });
        if (itemResult.rows.length === 0) return res.status(404).json({ error: 'Item not found' });

        const { name, qty, image, description, min_stock } = req.body;
        if (name !== undefined) await db.execute({ sql: 'UPDATE items SET name = ? WHERE id = ?', args: [name.trim(), req.params.id] });
        if (qty !== undefined) await db.execute({ sql: 'UPDATE items SET qty = ? WHERE id = ?', args: [Math.max(0, parseInt(qty)), req.params.id] });
        if (image !== undefined) await db.execute({ sql: 'UPDATE items SET image = ? WHERE id = ?', args: [image, req.params.id] });
        if (description !== undefined) await db.execute({ sql: 'UPDATE items SET description = ? WHERE id = ?', args: [description, req.params.id] });
        if (min_stock !== undefined) await db.execute({ sql: 'UPDATE items SET min_stock = ? WHERE id = ?', args: [Math.max(0, parseInt(min_stock)), req.params.id] });

        const updated = await db.execute({ sql: 'SELECT * FROM items WHERE id = ?', args: [req.params.id] });
        res.json(updated.rows[0]);
    });

    router.patch('/:id/move', async (req, res) => {
        const itemResult = await db.execute({ sql: 'SELECT * FROM items WHERE id = ?', args: [req.params.id] });
        if (itemResult.rows.length === 0) return res.status(404).json({ error: 'Item not found' });

        const targetId = parseInt(req.body.locker_id);
        if (!targetId) return res.status(400).json({ error: 'Target locker required' });

        const target = await db.execute({ sql: 'SELECT id FROM lockers WHERE id = ?', args: [targetId] });
        if (target.rows.length === 0) return res.status(404).json({ error: 'Target locker not found' });

        if (Number(itemResult.rows[0].locker_id) === targetId) {
            return res.json(itemResult.rows[0]);
        }

        await db.execute({ sql: 'UPDATE items SET locker_id = ? WHERE id = ?', args: [targetId, req.params.id] });
        const updated = await db.execute({ sql: 'SELECT * FROM items WHERE id = ?', args: [req.params.id] });
        res.json(updated.rows[0]);
    });

    router.patch('/:id/qty', async (req, res) => {
        const itemResult = await db.execute({ sql: 'SELECT * FROM items WHERE id = ?', args: [req.params.id] });
        if (itemResult.rows.length === 0) return res.status(404).json({ error: 'Item not found' });

        const item = itemResult.rows[0];
        const delta = parseInt(req.body.delta) || 0;
        const newQty = Math.max(0, Number(item.qty) + delta);
        await db.execute({ sql: 'UPDATE items SET qty = ? WHERE id = ?', args: [newQty, req.params.id] });

        const updated = await db.execute({ sql: 'SELECT * FROM items WHERE id = ?', args: [req.params.id] });
        res.json(updated.rows[0]);
    });

    router.delete('/:id', async (req, res) => {
        const itemResult = await db.execute({ sql: 'SELECT * FROM items WHERE id = ?', args: [req.params.id] });
        if (itemResult.rows.length === 0) return res.status(404).json({ error: 'Item not found' });

        await db.execute({ sql: 'DELETE FROM items WHERE id = ?', args: [req.params.id] });
        res.json({ success: true });
    });

    router.post('/:id/image', upload.single('image'), async (req, res) => {
        if (!req.file) return res.status(400).json({ error: 'No image uploaded' });

        const itemResult = await db.execute({ sql: 'SELECT * FROM items WHERE id = ?', args: [req.params.id] });
        if (itemResult.rows.length === 0) return res.status(404).json({ error: 'Item not found' });

        const cloudResult = await uploadToCloudinary(req.file.buffer);
        await db.execute({ sql: 'UPDATE items SET image = ? WHERE id = ?', args: [cloudResult.secure_url, req.params.id] });

        const updated = await db.execute({ sql: 'SELECT * FROM items WHERE id = ?', args: [req.params.id] });
        res.json(updated.rows[0]);
    });

    // ========== Locker item custody ==========
    router.get('/:id/custody', async (req, res) => {
        try {
            const result = await db.execute({
                sql: `SELECT ch.*, e.name AS to_employee_name, e.photo AS employee_photo, e.job_title,
                      d.name AS to_department_name
                      FROM covenant_history ch
                      LEFT JOIN employees e ON e.id = ch.to_employee_id
                      LEFT JOIN departments d ON d.id = ch.to_department_id
                      WHERE ch.item_id = ? AND ch.entity_type = 'locker_item'
                      ORDER BY ch.created_at DESC`,
                args: [req.params.id]
            });
            res.json(result.rows);
        } catch (e) { res.status(500).json({ error: e.message }); }
    });

    router.post('/:id/custody', async (req, res) => {
        try {
            const item = await db.execute({ sql: 'SELECT * FROM items WHERE id = ?', args: [req.params.id] });
            if (item.rows.length === 0) return res.status(404).json({ error: 'Item not found' });
            const { to_employee_id, to_department_id, transfer_date, start_date, end_date, condition, condition_notes, notes } = req.body;
            await db.execute({ sql: `UPDATE covenant_history SET status='transferred' WHERE item_id=? AND entity_type='locker_item' AND status='active'`, args: [req.params.id] });
            const today = new Date().toISOString().split('T')[0];
            const result = await db.execute({
                sql: `INSERT INTO covenant_history (entity_type, item_id, to_employee_id, to_department_id, transfer_date, start_date, end_date, status, condition, condition_notes, notes) VALUES ('locker_item', ?, ?, ?, ?, ?, ?, 'active', ?, ?, ?)`,
                args: [req.params.id, to_employee_id || null, to_department_id || null, transfer_date || today, start_date || today, end_date || '', condition || '', condition_notes || '', notes || '']
            });
            const created = await db.execute({ sql: `SELECT ch.*, e.name AS to_employee_name, d.name AS to_department_name FROM covenant_history ch LEFT JOIN employees e ON e.id=ch.to_employee_id LEFT JOIN departments d ON d.id=ch.to_department_id WHERE ch.id=?`, args: [Number(result.lastInsertRowid)] });
            res.status(201).json(created.rows[0]);
        } catch (e) { res.status(500).json({ error: e.message }); }
    });

    router.post('/:id/custody/return', async (req, res) => {
        try {
            const { return_condition, return_notes } = req.body;
            await db.execute({ sql: `UPDATE covenant_history SET status='returned', return_condition=?, return_notes=?, end_date=? WHERE item_id=? AND entity_type='locker_item' AND status='active'`, args: [return_condition || '', return_notes || '', new Date().toISOString().split('T')[0], req.params.id] });
            res.json({ success: true });
        } catch (e) { res.status(500).json({ error: e.message }); }
    });

    return router;
};
