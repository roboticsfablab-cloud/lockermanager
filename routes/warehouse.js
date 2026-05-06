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
    // 'repairable' was added in v5 alongside 'maintenance' so the warehouse and
    // departments modules share the same condition vocabulary.
    const VALID_CONDITIONS = new Set(['new', 'used', 'damaged', 'maintenance', 'repairable']);
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

    // ========== Bulk transfer (zone or area as source) ==========
    // Both endpoints accept the same destination shape so the client can reuse one dialog:
    //   { destination_type: 'department', department_id }
    //   { destination_type: 'warehouse',  zone_id, area_id? }   // area_id optional
    // The source's items are MOVED (not copied). Quantities, names, descriptions,
    // images, and conditions are preserved verbatim. We use db.batch with mode='write'
    // so the whole move runs as a single libsql transaction — partial moves are
    // impossible. Idempotency: if the source has no items, we return moved=0
    // without erroring, so retries after a successful move are no-ops.
    async function performBulkTransfer({ sourceType, sourceId, dest }) {
        if (sourceType !== 'zone' && sourceType !== 'area') throw new Error('Invalid source type');
        const sourceIdNum = parseInt(sourceId);
        if (!sourceIdNum) throw new Error('Source id required');

        // Resolve the items belonging to the source
        const itemsResult = sourceType === 'zone'
            ? await db.execute({ sql: 'SELECT * FROM warehouse_items WHERE zone_id = ?', args: [sourceIdNum] })
            : await db.execute({ sql: 'SELECT * FROM warehouse_items WHERE area_id = ?', args: [sourceIdNum] });
        const items = itemsResult.rows;

        // Validate the destination once before we touch anything.
        if (!dest || !dest.destination_type) throw new Error('Destination required');

        if (dest.destination_type === 'department') {
            const deptId = parseInt(dest.department_id);
            if (!deptId) throw new Error('Target department required');
            const depCheck = await db.execute({ sql: 'SELECT id FROM departments WHERE id = ?', args: [deptId] });
            if (depCheck.rows.length === 0) throw new Error('Target department not found');

            if (items.length === 0) return { moved: 0, destination: 'department', destination_id: deptId };

            // Move each warehouse item into department_items as a flat row, then
            // delete the original. We do it inside one batch so there's no window
            // where the items could appear in both places (or vanish from both).
            const stmts = [];
            for (const it of items) {
                stmts.push({
                    sql: `INSERT INTO department_items (department_id, name, description, qty, image, condition)
                          VALUES (?, ?, ?, ?, ?, ?)`,
                    args: [deptId, it.name, it.description || '', Number(it.qty) || 0, it.image || '', it.condition || 'new']
                });
            }
            // After inserts, remove the source rows so the move is exclusive.
            stmts.push(sourceType === 'zone'
                ? { sql: 'DELETE FROM warehouse_items WHERE zone_id = ?', args: [sourceIdNum] }
                : { sql: 'DELETE FROM warehouse_items WHERE area_id = ?', args: [sourceIdNum] });
            await db.batch(stmts, 'write');

            return { moved: items.length, destination: 'department', destination_id: deptId };
        }

        if (dest.destination_type === 'warehouse') {
            const targetZoneId = parseInt(dest.zone_id);
            if (!targetZoneId) throw new Error('Target zone required');
            const zoneCheck = await db.execute({ sql: 'SELECT id FROM warehouse_zones WHERE id = ?', args: [targetZoneId] });
            if (zoneCheck.rows.length === 0) throw new Error('Target zone not found');

            let targetAreaId = null;
            if (dest.area_id !== null && dest.area_id !== undefined && dest.area_id !== '') {
                targetAreaId = parseInt(dest.area_id);
                const areaCheck = await db.execute({ sql: 'SELECT id, zone_id FROM warehouse_areas WHERE id = ?', args: [targetAreaId] });
                if (areaCheck.rows.length === 0) throw new Error('Target area not found');
                if (Number(areaCheck.rows[0].zone_id) !== targetZoneId) {
                    throw new Error('Target area does not belong to the target zone');
                }
            }

            // No-op when source == destination so retries don't churn the DB.
            if (sourceType === 'zone' && sourceIdNum === targetZoneId && targetAreaId === null) {
                return { moved: 0, destination: 'warehouse', zone_id: targetZoneId, area_id: null };
            }
            if (sourceType === 'area' && targetAreaId !== null && sourceIdNum === targetAreaId) {
                return { moved: 0, destination: 'warehouse', zone_id: targetZoneId, area_id: targetAreaId };
            }

            if (items.length === 0) {
                return { moved: 0, destination: 'warehouse', zone_id: targetZoneId, area_id: targetAreaId };
            }

            // Reparent the rows in place — IDs and history are preserved, which
            // matters for any covenant_history references pointing at them.
            const sql = sourceType === 'zone'
                ? 'UPDATE warehouse_items SET zone_id = ?, area_id = ? WHERE zone_id = ?'
                : 'UPDATE warehouse_items SET zone_id = ?, area_id = ? WHERE area_id = ?';
            await db.execute({ sql, args: [targetZoneId, targetAreaId, sourceIdNum] });

            return { moved: items.length, destination: 'warehouse', zone_id: targetZoneId, area_id: targetAreaId };
        }

        throw new Error('Unknown destination type');
    }

    router.post('/zones/:id/transfer', async (req, res) => {
        try {
            const result = await performBulkTransfer({ sourceType: 'zone', sourceId: req.params.id, dest: req.body });
            res.json({ success: true, source_type: 'zone', source_id: Number(req.params.id), ...result });
        } catch (e) {
            res.status(400).json({ error: e.message });
        }
    });

    router.post('/areas/:id/transfer', async (req, res) => {
        try {
            const result = await performBulkTransfer({ sourceType: 'area', sourceId: req.params.id, dest: req.body });
            res.json({ success: true, source_type: 'area', source_id: Number(req.params.id), ...result });
        } catch (e) {
            res.status(400).json({ error: e.message });
        }
    });

    return router;
};
