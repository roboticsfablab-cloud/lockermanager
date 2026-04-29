const express = require('express');
const multer = require('multer');
const path = require('path');
const cloudinary = require('cloudinary').v2;
const { Readable } = require('stream');
const router = express.Router();

const ALLOWED_EXT = /\.(jpg|jpeg|png|webp)$/i;
const ALLOWED_MIME = /^image\/(jpeg|jpg|png|webp)$/i;

const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 5 * 1024 * 1024 },
    fileFilter: (req, file, cb) => {
        if (ALLOWED_EXT.test(path.extname(file.originalname)) && ALLOWED_MIME.test(file.mimetype)) {
            return cb(null, true);
        }
        cb(new Error('Only JPG, JPEG, PNG, or WEBP images are allowed'));
    }
});

function uploadImage(req, res, next) {
    upload.single('image')(req, res, (err) => {
        if (!err) return next();
        if (err.code === 'LIMIT_FILE_SIZE') return res.status(413).json({ error: 'Image exceeds the 5 MB limit' });
        return res.status(400).json({ error: err.message || 'Upload failed' });
    });
}

function uploadToCloudinary(buffer, folder) {
    return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
            { folder: 'locker-manager/' + (folder || 'warehouse') },
            (error, result) => { if (error) reject(error); else resolve(result); }
        );
        Readable.from(buffer).pipe(stream);
    });
}

module.exports = function (db) {

    // ========== Zones ==========
    router.get('/', async (req, res) => {
        const result = await db.execute(`
            SELECT z.*, COUNT(wi.id) AS item_count, COALESCE(SUM(wi.qty), 0) AS total_qty,
                   COALESCE(SUM(CASE WHEN wi.qty <= wi.min_stock THEN 1 ELSE 0 END), 0) AS low_stock_count,
                   (SELECT COUNT(*) FROM warehouse_areas wa WHERE wa.zone_id = z.id) AS area_count
            FROM warehouse_zones z
            LEFT JOIN warehouse_items wi ON wi.zone_id = z.id
            GROUP BY z.id ORDER BY z.id
        `);
        res.json(result.rows);
    });

    router.get('/:id', async (req, res) => {
        const zone = await db.execute({ sql: 'SELECT * FROM warehouse_zones WHERE id = ?', args: [req.params.id] });
        if (zone.rows.length === 0) return res.status(404).json({ error: 'Zone not found' });
        const items = await db.execute({ sql: 'SELECT * FROM warehouse_items WHERE zone_id = ? ORDER BY created_at', args: [req.params.id] });
        const areas = await db.execute({ sql: 'SELECT * FROM warehouse_areas WHERE zone_id = ? ORDER BY created_at', args: [req.params.id] });
        const areasWithItems = [];
        for (const area of areas.rows) {
            const areaItems = await db.execute({ sql: 'SELECT * FROM warehouse_items WHERE area_id = ? ORDER BY created_at', args: [area.id] });
            areasWithItems.push({ ...area, items: areaItems.rows, item_count: areaItems.rows.length, total_qty: areaItems.rows.reduce((s, i) => s + Number(i.qty), 0) });
        }
        const unassigned = await db.execute({ sql: 'SELECT * FROM warehouse_items WHERE zone_id = ? AND (area_id IS NULL OR area_id = 0) ORDER BY created_at', args: [req.params.id] });
        res.json({ ...zone.rows[0], items: items.rows, areas: areasWithItems, unassigned_items: unassigned.rows });
    });

    router.post('/', async (req, res) => {
        const { name, location, description, color } = req.body;
        if (!name || !name.trim()) return res.status(400).json({ error: 'Zone name required' });
        const result = await db.execute({ sql: 'INSERT INTO warehouse_zones (name, location, description, color) VALUES (?, ?, ?, ?)', args: [name.trim(), location || '', description || '', color || '#7b2ff7'] });
        const zone = await db.execute({ sql: 'SELECT * FROM warehouse_zones WHERE id = ?', args: [Number(result.lastInsertRowid)] });
        res.status(201).json(zone.rows[0]);
    });

    router.put('/:id', async (req, res) => {
        const { name, location, description, color, image } = req.body;
        if (name !== undefined) await db.execute({ sql: 'UPDATE warehouse_zones SET name = ? WHERE id = ?', args: [name.trim(), req.params.id] });
        if (location !== undefined) await db.execute({ sql: 'UPDATE warehouse_zones SET location = ? WHERE id = ?', args: [location, req.params.id] });
        if (description !== undefined) await db.execute({ sql: 'UPDATE warehouse_zones SET description = ? WHERE id = ?', args: [description, req.params.id] });
        if (color !== undefined) await db.execute({ sql: 'UPDATE warehouse_zones SET color = ? WHERE id = ?', args: [color, req.params.id] });
        if (image !== undefined) await db.execute({ sql: 'UPDATE warehouse_zones SET image = ? WHERE id = ?', args: [image, req.params.id] });
        const updated = await db.execute({ sql: 'SELECT * FROM warehouse_zones WHERE id = ?', args: [req.params.id] });
        res.json(updated.rows[0]);
    });

    router.delete('/:id', async (req, res) => {
        await db.execute({ sql: 'DELETE FROM warehouse_items WHERE zone_id = ?', args: [req.params.id] });
        await db.execute({ sql: 'DELETE FROM warehouse_areas WHERE zone_id = ?', args: [req.params.id] });
        await db.execute({ sql: 'DELETE FROM warehouse_zones WHERE id = ?', args: [req.params.id] });
        res.json({ success: true });
    });

    // Zone image
    router.post('/:id/image', uploadImage, async (req, res) => {
        if (!req.file) return res.status(400).json({ error: 'No image uploaded' });
        const cloudResult = await uploadToCloudinary(req.file.buffer, 'warehouse/zones');
        await db.execute({ sql: 'UPDATE warehouse_zones SET image = ? WHERE id = ?', args: [cloudResult.secure_url, req.params.id] });
        const updated = await db.execute({ sql: 'SELECT * FROM warehouse_zones WHERE id = ?', args: [req.params.id] });
        res.json(updated.rows[0]);
    });

    // ========== Areas ==========
    router.get('/:zoneId/areas', async (req, res) => {
        const areas = await db.execute({ sql: 'SELECT * FROM warehouse_areas WHERE zone_id = ? ORDER BY created_at', args: [req.params.zoneId] });
        const result = [];
        for (const area of areas.rows) {
            const items = await db.execute({ sql: 'SELECT * FROM warehouse_items WHERE area_id = ? ORDER BY created_at', args: [area.id] });
            result.push({ ...area, items: items.rows, item_count: items.rows.length, total_qty: items.rows.reduce((s, i) => s + Number(i.qty), 0) });
        }
        res.json(result);
    });

    router.post('/:zoneId/areas', async (req, res) => {
        const { name, description } = req.body;
        if (!name || !name.trim()) return res.status(400).json({ error: 'Area name required' });
        const result = await db.execute({ sql: 'INSERT INTO warehouse_areas (zone_id, name, description) VALUES (?, ?, ?)', args: [req.params.zoneId, name.trim(), description || ''] });
        const area = await db.execute({ sql: 'SELECT * FROM warehouse_areas WHERE id = ?', args: [Number(result.lastInsertRowid)] });
        res.status(201).json(area.rows[0]);
    });

    router.put('/areas/:id', async (req, res) => {
        const { name, description, image } = req.body;
        if (name !== undefined) await db.execute({ sql: 'UPDATE warehouse_areas SET name = ? WHERE id = ?', args: [name.trim(), req.params.id] });
        if (description !== undefined) await db.execute({ sql: 'UPDATE warehouse_areas SET description = ? WHERE id = ?', args: [description, req.params.id] });
        if (image !== undefined) await db.execute({ sql: 'UPDATE warehouse_areas SET image = ? WHERE id = ?', args: [image, req.params.id] });
        const updated = await db.execute({ sql: 'SELECT * FROM warehouse_areas WHERE id = ?', args: [req.params.id] });
        res.json(updated.rows[0]);
    });

    router.delete('/areas/:id', async (req, res) => {
        await db.execute({ sql: 'UPDATE warehouse_items SET area_id = NULL WHERE area_id = ?', args: [req.params.id] });
        await db.execute({ sql: 'DELETE FROM warehouse_areas WHERE id = ?', args: [req.params.id] });
        res.json({ success: true });
    });

    // Area image
    router.post('/areas/:id/image', uploadImage, async (req, res) => {
        if (!req.file) return res.status(400).json({ error: 'No image uploaded' });
        const cloudResult = await uploadToCloudinary(req.file.buffer, 'warehouse/areas');
        await db.execute({ sql: 'UPDATE warehouse_areas SET image = ? WHERE id = ?', args: [cloudResult.secure_url, req.params.id] });
        const updated = await db.execute({ sql: 'SELECT * FROM warehouse_areas WHERE id = ?', args: [req.params.id] });
        res.json(updated.rows[0]);
    });

    // ========== Zone items ==========
    const VALID_CONDITIONS = new Set(['new', 'used', 'damaged', 'maintenance']);
    const normalizeCondition = (v) => VALID_CONDITIONS.has(v) ? v : 'new';

    router.post('/:id/items', async (req, res) => {
        const { name, qty, description, min_stock, image, area_id, condition } = req.body;
        if (!name || !name.trim()) return res.status(400).json({ error: 'Item name required' });
        const result = await db.execute({
            sql: 'INSERT INTO warehouse_items (zone_id, area_id, name, qty, min_stock, image, description, condition) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            args: [req.params.id, area_id || null, name.trim(), Math.max(0, parseInt(qty) || 0), parseInt(min_stock) || 5, image || '', description || '', normalizeCondition(condition)]
        });
        const item = await db.execute({ sql: 'SELECT * FROM warehouse_items WHERE id = ?', args: [Number(result.lastInsertRowid)] });
        res.status(201).json(item.rows[0]);
    });

    router.put('/items/:id', async (req, res) => {
        const { name, qty, description, min_stock, image, area_id, condition } = req.body;
        if (name !== undefined) await db.execute({ sql: 'UPDATE warehouse_items SET name = ? WHERE id = ?', args: [name.trim(), req.params.id] });
        if (qty !== undefined) await db.execute({ sql: 'UPDATE warehouse_items SET qty = ? WHERE id = ?', args: [Math.max(0, parseInt(qty)), req.params.id] });
        if (description !== undefined) await db.execute({ sql: 'UPDATE warehouse_items SET description = ? WHERE id = ?', args: [description, req.params.id] });
        if (min_stock !== undefined) await db.execute({ sql: 'UPDATE warehouse_items SET min_stock = ? WHERE id = ?', args: [Math.max(0, parseInt(min_stock)), req.params.id] });
        if (image !== undefined) await db.execute({ sql: 'UPDATE warehouse_items SET image = ? WHERE id = ?', args: [image, req.params.id] });
        if (area_id !== undefined) await db.execute({ sql: 'UPDATE warehouse_items SET area_id = ? WHERE id = ?', args: [area_id, req.params.id] });
        if (condition !== undefined) await db.execute({ sql: 'UPDATE warehouse_items SET condition = ? WHERE id = ?', args: [normalizeCondition(condition), req.params.id] });
        const updated = await db.execute({ sql: 'SELECT * FROM warehouse_items WHERE id = ?', args: [req.params.id] });
        res.json(updated.rows[0]);
    });

    router.delete('/items/:id', async (req, res) => {
        await db.execute({ sql: 'DELETE FROM warehouse_items WHERE id = ?', args: [req.params.id] });
        res.json({ success: true });
    });

    // Transfer an item to another zone / area. Validates the zone exists, and
    // — if an area is provided — that the area actually lives in that zone,
    // so we never end up with cross-zone area_id pointers.
    router.patch('/items/:id/transfer', async (req, res) => {
        const itemId = req.params.id;
        const zoneId = parseInt(req.body.zone_id);
        const rawArea = req.body.area_id;
        const areaId = (rawArea === null || rawArea === undefined || rawArea === '' || rawArea === 0) ? null : parseInt(rawArea);

        if (!zoneId) return res.status(400).json({ error: 'Target zone is required' });

        const item = await db.execute({ sql: 'SELECT * FROM warehouse_items WHERE id = ?', args: [itemId] });
        if (item.rows.length === 0) return res.status(404).json({ error: 'Item not found' });

        const zone = await db.execute({ sql: 'SELECT id FROM warehouse_zones WHERE id = ?', args: [zoneId] });
        if (zone.rows.length === 0) return res.status(404).json({ error: 'Target zone not found' });

        if (areaId !== null) {
            const area = await db.execute({ sql: 'SELECT id, zone_id FROM warehouse_areas WHERE id = ?', args: [areaId] });
            if (area.rows.length === 0) return res.status(404).json({ error: 'Target area not found' });
            if (Number(area.rows[0].zone_id) !== zoneId) {
                return res.status(400).json({ error: 'Target area does not belong to the target zone' });
            }
        }

        await db.execute({
            sql: 'UPDATE warehouse_items SET zone_id = ?, area_id = ? WHERE id = ?',
            args: [zoneId, areaId, itemId]
        });
        const updated = await db.execute({ sql: 'SELECT * FROM warehouse_items WHERE id = ?', args: [itemId] });
        res.json(updated.rows[0]);
    });

    router.post('/items/:id/image', uploadImage, async (req, res) => {
        if (!req.file) return res.status(400).json({ error: 'No image uploaded' });
        const cloudResult = await uploadToCloudinary(req.file.buffer, 'warehouse');
        await db.execute({ sql: 'UPDATE warehouse_items SET image = ? WHERE id = ?', args: [cloudResult.secure_url, req.params.id] });
        const updated = await db.execute({ sql: 'SELECT * FROM warehouse_items WHERE id = ?', args: [req.params.id] });
        res.json(updated.rows[0]);
    });

    return router;
};
