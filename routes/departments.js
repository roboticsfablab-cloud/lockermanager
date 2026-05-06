const express = require('express');
const multer = require('multer');
const path = require('path');
const cloudinary = require('cloudinary').v2;
const { Readable } = require('stream');
const router = express.Router();

const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 5 * 1024 * 1024 },
    fileFilter: (req, file, cb) => {
        const allowed = /\.(jpg|jpeg|png|gif|webp|svg)$/i;
        if (allowed.test(path.extname(file.originalname))) cb(null, true);
        else cb(new Error('Only image files are allowed'));
    }
});

function uploadToCloudinary(buffer, folder) {
    return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
            { folder: 'locker-manager/' + (folder || 'departments') },
            (error, result) => { if (error) reject(error); else resolve(result); }
        );
        Readable.from(buffer).pipe(stream);
    });
}

module.exports = function (db) {

    // Shared with routes/warehouse.js — keep the two lists in sync.
    const VALID_CONDITIONS = new Set(['new', 'used', 'damaged', 'maintenance', 'repairable']);
    const normalizeCondition = (v) => VALID_CONDITIONS.has(v) ? v : 'new';

    // List departments (employees only see their own)
    router.get('/', async (req, res) => {
        const scopeToDept = req.user && req.user.role === 'employee' ? Number(req.user.department_id) : null;
        const result = await db.execute({
            sql: `SELECT d.*,
                         (SELECT COUNT(*) FROM employees e WHERE e.department_id = d.id) AS employee_count,
                         (SELECT COUNT(*) FROM department_items di WHERE di.department_id = d.id) AS item_count
                  FROM departments d
                  ${scopeToDept ? 'WHERE d.id = ?' : ''}
                  ORDER BY d.name`,
            args: scopeToDept ? [scopeToDept] : []
        });
        res.json(result.rows);
    });

    // Get department detail
    router.get('/:id', async (req, res) => {
        const id = req.params.id;
        const [dept, employees, items, equipment, history, allCov, incomingItems, incomingEquipment] = await Promise.all([
            db.execute({ sql: 'SELECT * FROM departments WHERE id = ?', args: [id] }),
            db.execute({ sql: 'SELECT * FROM employees WHERE department_id = ? ORDER BY name', args: [id] }),
            db.execute({
                sql: `SELECT di.*, e.name AS employee_name FROM department_items di
                      LEFT JOIN employees e ON e.id = di.employee_id
                      WHERE di.department_id = ? ORDER BY di.created_at`,
                args: [id]
            }),
            db.execute({
                sql: `SELECT de.*, e.name AS employee_name FROM department_equipment de
                      LEFT JOIN employees e ON e.id = de.employee_id
                      WHERE de.department_id = ? ORDER BY de.created_at`,
                args: [id]
            }),
            db.execute({
                sql: `SELECT rh.*, e.name AS employee_name, e.job_title, e.photo AS employee_photo
                      FROM responsibility_history rh
                      LEFT JOIN employees e ON e.id = rh.employee_id
                      WHERE rh.department_id = ? ORDER BY rh.start_date DESC`,
                args: [id]
            }),
            db.execute({
                sql: `SELECT ch.*, fe.name AS from_employee_name, te.name AS to_employee_name,
                             td.name AS to_department_name, fd.name AS from_department_name
                      FROM covenant_history ch
                      LEFT JOIN employees fe ON fe.id = ch.from_employee_id
                      LEFT JOIN employees te ON te.id = ch.to_employee_id
                      LEFT JOIN departments td ON td.id = ch.to_department_id
                      LEFT JOIN departments fd ON fd.id = ch.from_department_id
                      WHERE ((ch.entity_type = 'item'      AND ch.item_id IN (SELECT id FROM department_items     WHERE department_id = ?))
                          OR (ch.entity_type = 'equipment' AND ch.item_id IN (SELECT id FROM department_equipment WHERE department_id = ?)))
                      ORDER BY ch.transfer_date DESC`,
                args: [id, id]
            }),
            db.execute({
                sql: `SELECT di.*, ch.id AS transfer_id, ch.start_date, ch.end_date, ch.transfer_date,
                             ch.condition, ch.condition_notes, ch.notes,
                             fd.id AS source_dept_id, fd.name AS source_dept_name
                      FROM covenant_history ch
                      JOIN department_items di ON di.id = ch.item_id
                      LEFT JOIN departments fd ON fd.id = di.department_id
                      WHERE ch.entity_type = 'item' AND ch.status = 'active'
                        AND ch.to_department_id = ? AND di.department_id <> ?`,
                args: [id, id]
            }),
            db.execute({
                sql: `SELECT de.*, ch.id AS transfer_id, ch.start_date, ch.end_date, ch.transfer_date,
                             ch.condition, ch.condition_notes, ch.notes,
                             fd.id AS source_dept_id, fd.name AS source_dept_name
                      FROM covenant_history ch
                      JOIN department_equipment de ON de.id = ch.item_id
                      LEFT JOIN departments fd ON fd.id = de.department_id
                      WHERE ch.entity_type = 'equipment' AND ch.status = 'active'
                        AND ch.to_department_id = ? AND de.department_id <> ?`,
                args: [id, id]
            }),
        ]);
        if (dept.rows.length === 0) return res.status(404).json({ error: 'Department not found' });
        const covByKey = {};
        for (const row of allCov.rows) {
            const key = row.entity_type + ':' + row.item_id;
            (covByKey[key] = covByKey[key] || []).push(row);
        }
        const itemsWithCovenant = items.rows.map(it => ({ ...it, covenant_history: covByKey['item:' + it.id] || [] }));
        const equipmentWithCovenant = equipment.rows.map(eq => ({ ...eq, covenant_history: covByKey['equipment:' + eq.id] || [] }));
        res.json({
            ...dept.rows[0],
            employees: employees.rows,
            items: itemsWithCovenant,
            equipment: equipmentWithCovenant,
            incoming_items: incomingItems.rows,
            incoming_equipment: incomingEquipment.rows,
            history: history.rows
        });
    });

    // Create department
    router.post('/', async (req, res) => {
        const { name, manager, description } = req.body;
        if (!name || !name.trim()) return res.status(400).json({ error: 'Department name required' });
        const result = await db.execute({ sql: 'INSERT INTO departments (name, manager, description) VALUES (?, ?, ?)', args: [name.trim(), manager || '', description || ''] });
        const dept = await db.execute({ sql: 'SELECT * FROM departments WHERE id = ?', args: [Number(result.lastInsertRowid)] });
        res.status(201).json(dept.rows[0]);
    });

    // Update department
    router.put('/:id', async (req, res) => {
        const { name, manager, description } = req.body;
        if (name !== undefined) await db.execute({ sql: 'UPDATE departments SET name = ? WHERE id = ?', args: [name.trim(), req.params.id] });
        if (manager !== undefined) await db.execute({ sql: 'UPDATE departments SET manager = ? WHERE id = ?', args: [manager, req.params.id] });
        if (description !== undefined) await db.execute({ sql: 'UPDATE departments SET description = ? WHERE id = ?', args: [description, req.params.id] });
        const updated = await db.execute({ sql: 'SELECT * FROM departments WHERE id = ?', args: [req.params.id] });
        res.json(updated.rows[0]);
    });

    // Delete department
    router.delete('/:id', async (req, res) => {
        await db.execute({ sql: 'DELETE FROM department_lockers WHERE department_id = ?', args: [req.params.id] });
        await db.execute({ sql: "DELETE FROM covenant_history WHERE entity_type = 'item' AND item_id IN (SELECT id FROM department_items WHERE department_id = ?)", args: [req.params.id] });
        await db.execute({ sql: "DELETE FROM covenant_history WHERE entity_type = 'equipment' AND item_id IN (SELECT id FROM department_equipment WHERE department_id = ?)", args: [req.params.id] });
        await db.execute({ sql: 'DELETE FROM department_items WHERE department_id = ?', args: [req.params.id] });
        await db.execute({ sql: 'DELETE FROM department_equipment WHERE department_id = ?', args: [req.params.id] });
        await db.execute({ sql: 'DELETE FROM responsibility_history WHERE department_id = ?', args: [req.params.id] });
        await db.execute({ sql: 'UPDATE employees SET department_id = NULL WHERE department_id = ?', args: [req.params.id] });
        await db.execute({ sql: 'DELETE FROM departments WHERE id = ?', args: [req.params.id] });
        res.json({ success: true });
    });

    // Department image
    router.post('/:id/image', upload.single('image'), async (req, res) => {
        if (!req.file) return res.status(400).json({ error: 'No image uploaded' });
        const cloudResult = await uploadToCloudinary(req.file.buffer, 'departments');
        await db.execute({ sql: 'UPDATE departments SET image = ? WHERE id = ?', args: [cloudResult.secure_url, req.params.id] });
        const updated = await db.execute({ sql: 'SELECT * FROM departments WHERE id = ?', args: [req.params.id] });
        res.json(updated.rows[0]);
    });

    // ========== Department Items (العهدة) ==========
    router.get('/:id/items', async (req, res) => {
        const items = await db.execute({
            sql: `SELECT di.*, e.name AS employee_name FROM department_items di
                  LEFT JOIN employees e ON e.id = di.employee_id
                  WHERE di.department_id = ? ORDER BY di.created_at`,
            args: [req.params.id]
        });
        res.json(items.rows);
    });

    router.post('/:id/items', async (req, res) => {
        const { name, description, qty, employee_id, receipt_date, purpose, condition } = req.body;
        if (!name || !name.trim()) return res.status(400).json({ error: 'Item name required' });
        const result = await db.execute({
            sql: 'INSERT INTO department_items (department_id, employee_id, name, description, qty, receipt_date, purpose, condition) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            args: [req.params.id, employee_id || null, name.trim(), description || '', Math.max(1, parseInt(qty) || 1), receipt_date || '', purpose || '', normalizeCondition(condition)]
        });
        const item = await db.execute({ sql: 'SELECT * FROM department_items WHERE id = ?', args: [Number(result.lastInsertRowid)] });
        res.status(201).json(item.rows[0]);
    });

    router.put('/items/:id', async (req, res) => {
        const { name, description, qty, employee_id, receipt_date, purpose, condition } = req.body;
        if (name !== undefined) await db.execute({ sql: 'UPDATE department_items SET name = ? WHERE id = ?', args: [name.trim(), req.params.id] });
        if (description !== undefined) await db.execute({ sql: 'UPDATE department_items SET description = ? WHERE id = ?', args: [description, req.params.id] });
        if (qty !== undefined) await db.execute({ sql: 'UPDATE department_items SET qty = ? WHERE id = ?', args: [Math.max(1, parseInt(qty)), req.params.id] });
        if (employee_id !== undefined) await db.execute({ sql: 'UPDATE department_items SET employee_id = ? WHERE id = ?', args: [employee_id, req.params.id] });
        if (receipt_date !== undefined) await db.execute({ sql: 'UPDATE department_items SET receipt_date = ? WHERE id = ?', args: [receipt_date, req.params.id] });
        if (purpose !== undefined) await db.execute({ sql: 'UPDATE department_items SET purpose = ? WHERE id = ?', args: [purpose, req.params.id] });
        if (condition !== undefined) await db.execute({ sql: 'UPDATE department_items SET condition = ? WHERE id = ?', args: [normalizeCondition(condition), req.params.id] });
        const updated = await db.execute({ sql: 'SELECT * FROM department_items WHERE id = ?', args: [req.params.id] });
        res.json(updated.rows[0]);
    });

    router.delete('/items/:id', async (req, res) => {
        await db.execute({ sql: 'DELETE FROM covenant_history WHERE item_id = ?', args: [req.params.id] });
        await db.execute({ sql: 'DELETE FROM department_items WHERE id = ?', args: [req.params.id] });
        res.json({ success: true });
    });

    router.post('/items/:id/image', upload.single('image'), async (req, res) => {
        if (!req.file) return res.status(400).json({ error: 'No image uploaded' });
        const cloudResult = await uploadToCloudinary(req.file.buffer, 'departments/items');
        await db.execute({ sql: 'UPDATE department_items SET image = ? WHERE id = ?', args: [cloudResult.secure_url, req.params.id] });
        const updated = await db.execute({ sql: 'SELECT * FROM department_items WHERE id = ?', args: [req.params.id] });
        res.json(updated.rows[0]);
    });

    // ========== Covenant History ==========
    router.get('/items/:id/covenant', async (req, res) => {
        const ch = await db.execute({
            sql: `SELECT ch.*, fe.name AS from_employee_name, te.name AS to_employee_name,
                         td.name AS to_department_name, fd.name AS from_department_name
                  FROM covenant_history ch
                  LEFT JOIN employees fe ON fe.id = ch.from_employee_id
                  LEFT JOIN employees te ON te.id = ch.to_employee_id
                  LEFT JOIN departments td ON td.id = ch.to_department_id
                  LEFT JOIN departments fd ON fd.id = ch.from_department_id
                  WHERE ch.item_id = ? AND ch.entity_type = 'item' ORDER BY ch.transfer_date DESC`,
            args: [req.params.id]
        });
        res.json(ch.rows);
    });

    router.post('/items/:id/covenant', async (req, res) => {
        const { from_employee_id, to_employee_id, to_department_id, transfer_date, status, notes, start_date, end_date, condition, condition_notes } = req.body;
        if (!to_employee_id && !to_department_id) return res.status(400).json({ error: 'Target employee or department required' });
        // Close any existing active custody for this item (entity_type=item)
        await db.execute({ sql: "UPDATE covenant_history SET status = 'transferred' WHERE entity_type = 'item' AND item_id = ? AND status = 'active'", args: [req.params.id] });
        const td = transfer_date || start_date || new Date().toISOString().split('T')[0];
        const result = await db.execute({
            sql: `INSERT INTO covenant_history
                  (entity_type, item_id, from_employee_id, to_employee_id, to_department_id, transfer_date, status, notes, start_date, end_date, condition, condition_notes)
                  VALUES ('item', ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            args: [req.params.id, from_employee_id || null, to_employee_id || null, to_department_id || null, td, status || 'active', notes || '', start_date || td, end_date || '', condition || '', condition_notes || '']
        });
        // If transferring to an employee, set department_items.employee_id; else clear it (item is on loan to another dept)
        if (to_employee_id) {
            await db.execute({ sql: 'UPDATE department_items SET employee_id = ? WHERE id = ?', args: [to_employee_id, req.params.id] });
        } else {
            await db.execute({ sql: 'UPDATE department_items SET employee_id = NULL WHERE id = ?', args: [req.params.id] });
        }
        const entry = await db.execute({ sql: 'SELECT * FROM covenant_history WHERE id = ?', args: [Number(result.lastInsertRowid)] });
        res.status(201).json(entry.rows[0]);
    });

    router.put('/covenant/:id', async (req, res) => {
        const { status, notes, start_date, end_date, condition, condition_notes } = req.body;
        if (status !== undefined) await db.execute({ sql: 'UPDATE covenant_history SET status = ? WHERE id = ?', args: [status, req.params.id] });
        if (notes !== undefined) await db.execute({ sql: 'UPDATE covenant_history SET notes = ? WHERE id = ?', args: [notes, req.params.id] });
        if (start_date !== undefined) await db.execute({ sql: 'UPDATE covenant_history SET start_date = ? WHERE id = ?', args: [start_date, req.params.id] });
        if (end_date !== undefined) await db.execute({ sql: 'UPDATE covenant_history SET end_date = ? WHERE id = ?', args: [end_date, req.params.id] });
        if (condition !== undefined) await db.execute({ sql: 'UPDATE covenant_history SET condition = ? WHERE id = ?', args: [condition, req.params.id] });
        if (condition_notes !== undefined) await db.execute({ sql: 'UPDATE covenant_history SET condition_notes = ? WHERE id = ?', args: [condition_notes, req.params.id] });
        const updated = await db.execute({ sql: 'SELECT * FROM covenant_history WHERE id = ?', args: [req.params.id] });
        res.json(updated.rows[0]);
    });

    router.delete('/covenant/:id', async (req, res) => {
        await db.execute({ sql: 'DELETE FROM covenant_history WHERE id = ?', args: [req.params.id] });
        res.json({ success: true });
    });

    // Mark item as returned (early return from custody) — works for employee OR department transfer
    router.post('/items/:id/return-custody', async (req, res) => {
        const { return_date, return_notes, return_condition } = req.body;
        const today = return_date || new Date().toISOString().split('T')[0];
        const active = await db.execute({
            sql: "SELECT id FROM covenant_history WHERE entity_type = 'item' AND item_id = ? AND status = 'active' ORDER BY id DESC LIMIT 1",
            args: [req.params.id]
        });
        if (active.rows.length > 0) {
            const cid = active.rows[0].id;
            await db.execute({
                sql: "UPDATE covenant_history SET status = 'returned', end_date = ?, return_notes = ?, return_condition = ? WHERE id = ?",
                args: [today, return_notes || '', return_condition || '', cid]
            });
        }
        await db.execute({ sql: 'UPDATE department_items SET employee_id = NULL WHERE id = ?', args: [req.params.id] });
        res.json({ success: true });
    });

    // ========== Department Equipment (NEW: data fully separated from Items) ==========
    router.get('/:id/equipment', async (req, res) => {
        const eq = await db.execute({
            sql: `SELECT de.*, e.name AS employee_name FROM department_equipment de
                  LEFT JOIN employees e ON e.id = de.employee_id
                  WHERE de.department_id = ? ORDER BY de.created_at`,
            args: [req.params.id]
        });
        res.json(eq.rows);
    });

    router.post('/:id/equipment', async (req, res) => {
        const { name, description, qty, employee_id, receipt_date, purpose, condition } = req.body;
        if (!name || !name.trim()) return res.status(400).json({ error: 'Equipment name required' });
        const result = await db.execute({
            sql: 'INSERT INTO department_equipment (department_id, employee_id, name, description, qty, receipt_date, purpose, condition) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            args: [req.params.id, employee_id || null, name.trim(), description || '', Math.max(1, parseInt(qty) || 1), receipt_date || '', purpose || '', normalizeCondition(condition)]
        });
        const eq = await db.execute({ sql: 'SELECT * FROM department_equipment WHERE id = ?', args: [Number(result.lastInsertRowid)] });
        res.status(201).json(eq.rows[0]);
    });

    router.put('/equipment/:id', async (req, res) => {
        const { name, description, qty, employee_id, receipt_date, purpose, condition } = req.body;
        if (name !== undefined) await db.execute({ sql: 'UPDATE department_equipment SET name = ? WHERE id = ?', args: [name.trim(), req.params.id] });
        if (description !== undefined) await db.execute({ sql: 'UPDATE department_equipment SET description = ? WHERE id = ?', args: [description, req.params.id] });
        if (qty !== undefined) await db.execute({ sql: 'UPDATE department_equipment SET qty = ? WHERE id = ?', args: [Math.max(1, parseInt(qty)), req.params.id] });
        if (employee_id !== undefined) await db.execute({ sql: 'UPDATE department_equipment SET employee_id = ? WHERE id = ?', args: [employee_id, req.params.id] });
        if (receipt_date !== undefined) await db.execute({ sql: 'UPDATE department_equipment SET receipt_date = ? WHERE id = ?', args: [receipt_date, req.params.id] });
        if (purpose !== undefined) await db.execute({ sql: 'UPDATE department_equipment SET purpose = ? WHERE id = ?', args: [purpose, req.params.id] });
        if (condition !== undefined) await db.execute({ sql: 'UPDATE department_equipment SET condition = ? WHERE id = ?', args: [normalizeCondition(condition), req.params.id] });
        const updated = await db.execute({ sql: 'SELECT * FROM department_equipment WHERE id = ?', args: [req.params.id] });
        res.json(updated.rows[0]);
    });

    router.delete('/equipment/:id', async (req, res) => {
        await db.execute({ sql: "DELETE FROM covenant_history WHERE entity_type = 'equipment' AND item_id = ?", args: [req.params.id] });
        await db.execute({ sql: 'DELETE FROM department_equipment WHERE id = ?', args: [req.params.id] });
        res.json({ success: true });
    });

    router.post('/equipment/:id/image', upload.single('image'), async (req, res) => {
        if (!req.file) return res.status(400).json({ error: 'No image uploaded' });
        const cloudResult = await uploadToCloudinary(req.file.buffer, 'departments/equipment');
        await db.execute({ sql: 'UPDATE department_equipment SET image = ? WHERE id = ?', args: [cloudResult.secure_url, req.params.id] });
        const updated = await db.execute({ sql: 'SELECT * FROM department_equipment WHERE id = ?', args: [req.params.id] });
        res.json(updated.rows[0]);
    });

    // Equipment covenant
    router.get('/equipment/:id/covenant', async (req, res) => {
        const ch = await db.execute({
            sql: `SELECT ch.*, fe.name AS from_employee_name, te.name AS to_employee_name,
                         td.name AS to_department_name, fd.name AS from_department_name
                  FROM covenant_history ch
                  LEFT JOIN employees fe ON fe.id = ch.from_employee_id
                  LEFT JOIN employees te ON te.id = ch.to_employee_id
                  LEFT JOIN departments td ON td.id = ch.to_department_id
                  LEFT JOIN departments fd ON fd.id = ch.from_department_id
                  WHERE ch.item_id = ? AND ch.entity_type = 'equipment' ORDER BY ch.transfer_date DESC`,
            args: [req.params.id]
        });
        res.json(ch.rows);
    });

    router.post('/equipment/:id/covenant', async (req, res) => {
        const { from_employee_id, to_employee_id, to_department_id, transfer_date, status, notes, start_date, end_date, condition, condition_notes } = req.body;
        if (!to_employee_id && !to_department_id) return res.status(400).json({ error: 'Target employee or department required' });
        await db.execute({ sql: "UPDATE covenant_history SET status = 'transferred' WHERE entity_type = 'equipment' AND item_id = ? AND status = 'active'", args: [req.params.id] });
        const td = transfer_date || start_date || new Date().toISOString().split('T')[0];
        const result = await db.execute({
            sql: `INSERT INTO covenant_history
                  (entity_type, item_id, from_employee_id, to_employee_id, to_department_id, transfer_date, status, notes, start_date, end_date, condition, condition_notes)
                  VALUES ('equipment', ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            args: [req.params.id, from_employee_id || null, to_employee_id || null, to_department_id || null, td, status || 'active', notes || '', start_date || td, end_date || '', condition || '', condition_notes || '']
        });
        if (to_employee_id) {
            await db.execute({ sql: 'UPDATE department_equipment SET employee_id = ? WHERE id = ?', args: [to_employee_id, req.params.id] });
        } else {
            await db.execute({ sql: 'UPDATE department_equipment SET employee_id = NULL WHERE id = ?', args: [req.params.id] });
        }
        const entry = await db.execute({ sql: 'SELECT * FROM covenant_history WHERE id = ?', args: [Number(result.lastInsertRowid)] });
        res.status(201).json(entry.rows[0]);
    });

    router.post('/equipment/:id/return-custody', async (req, res) => {
        const { return_date, return_notes, return_condition } = req.body;
        const today = return_date || new Date().toISOString().split('T')[0];
        const active = await db.execute({
            sql: "SELECT id FROM covenant_history WHERE entity_type = 'equipment' AND item_id = ? AND status = 'active' ORDER BY id DESC LIMIT 1",
            args: [req.params.id]
        });
        if (active.rows.length > 0) {
            const cid = active.rows[0].id;
            await db.execute({
                sql: "UPDATE covenant_history SET status = 'returned', end_date = ?, return_notes = ?, return_condition = ? WHERE id = ?",
                args: [today, return_notes || '', return_condition || '', cid]
            });
        }
        await db.execute({ sql: 'UPDATE department_equipment SET employee_id = NULL WHERE id = ?', args: [req.params.id] });
        res.json({ success: true });
    });

    // ========== Move / list-swap transfers (items ↔ equipment, dept → dept) ==========
    // The existing covenant_history flow covers temporary "out-of-dept" custody.
    // These two routes are different: they hard-move the source row's ownership.
    // We log a 'transferred' record into covenant_history so the dept's record
    // tab shows the move. Same fields (name/qty/desc/image/condition) are
    // carried over verbatim — no copy, the original row is deleted.

    function moveSnapshot(target_dept_id, source_type, source_id, source_name) {
        return {
            // Used to write a 'moved' line in covenant_history. We re-use entity_type
            // because the column already exists; status='transferred' tells the UI
            // this is not a live custody.
            entity_type: source_type,
            item_id: source_id,
            from_department_id: null, // filled by caller
            to_department_id: target_dept_id,
            transfer_date: new Date().toISOString().split('T')[0],
            status: 'transferred',
            notes: source_name ? ('Transferred: ' + source_name) : 'Transferred',
        };
    }

    // Item -> another department's items list, OR Item -> same/another dept's equipment list (swap)
    router.post('/items/:id/transfer-record', async (req, res) => {
        const itemId = req.params.id;
        const { target_department_id, target_list } = req.body; // target_list: 'items' | 'equipment'
        if (!target_department_id) return res.status(400).json({ error: 'Target department required' });
        if (target_list !== 'items' && target_list !== 'equipment') return res.status(400).json({ error: 'target_list must be items or equipment' });

        const src = await db.execute({ sql: 'SELECT * FROM department_items WHERE id = ?', args: [itemId] });
        if (src.rows.length === 0) return res.status(404).json({ error: 'Item not found' });
        const it = src.rows[0];
        const dep = await db.execute({ sql: 'SELECT id FROM departments WHERE id = ?', args: [target_department_id] });
        if (dep.rows.length === 0) return res.status(404).json({ error: 'Target department not found' });

        const sourceDeptId = Number(it.department_id);
        const targetTable = target_list === 'equipment' ? 'department_equipment' : 'department_items';
        const result = await db.execute({
            sql: `INSERT INTO ${targetTable} (department_id, name, description, qty, image, condition, receipt_date, purpose)
                  VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
            args: [target_department_id, it.name, it.description || '', it.qty || 1, it.image || '', it.condition || 'new', it.receipt_date || '', it.purpose || '']
        });

        // Log into covenant_history so the source dept's Record tab shows it.
        await db.execute({
            sql: `INSERT INTO covenant_history
                  (entity_type, item_id, from_department_id, to_department_id, transfer_date, status, notes)
                  VALUES ('item', ?, ?, ?, ?, 'transferred', ?)`,
            args: [itemId, sourceDeptId, target_department_id, new Date().toISOString().split('T')[0], 'Moved to ' + (target_list === 'equipment' ? 'equipment' : 'items') + ' list']
        });

        // Remove the source row last so a failed insert above doesn't leave the user
        // with no copy of the item.
        await db.execute({ sql: 'DELETE FROM covenant_history WHERE entity_type = \'item\' AND item_id = ? AND status = \'active\'', args: [itemId] });
        await db.execute({ sql: 'DELETE FROM department_items WHERE id = ?', args: [itemId] });

        res.json({ success: true, new_id: Number(result.lastInsertRowid), target_list, target_department_id });
    });

    // Equipment -> another department's equipment list, OR Equipment -> same/another dept's items list (swap)
    router.post('/equipment/:id/transfer-record', async (req, res) => {
        const eqId = req.params.id;
        const { target_department_id, target_list } = req.body;
        if (!target_department_id) return res.status(400).json({ error: 'Target department required' });
        if (target_list !== 'items' && target_list !== 'equipment') return res.status(400).json({ error: 'target_list must be items or equipment' });

        const src = await db.execute({ sql: 'SELECT * FROM department_equipment WHERE id = ?', args: [eqId] });
        if (src.rows.length === 0) return res.status(404).json({ error: 'Equipment not found' });
        const eq = src.rows[0];
        const dep = await db.execute({ sql: 'SELECT id FROM departments WHERE id = ?', args: [target_department_id] });
        if (dep.rows.length === 0) return res.status(404).json({ error: 'Target department not found' });

        const sourceDeptId = Number(eq.department_id);
        const targetTable = target_list === 'equipment' ? 'department_equipment' : 'department_items';
        const result = await db.execute({
            sql: `INSERT INTO ${targetTable} (department_id, name, description, qty, image, condition, receipt_date, purpose)
                  VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
            args: [target_department_id, eq.name, eq.description || '', eq.qty || 1, eq.image || '', eq.condition || 'new', eq.receipt_date || '', eq.purpose || '']
        });

        await db.execute({
            sql: `INSERT INTO covenant_history
                  (entity_type, item_id, from_department_id, to_department_id, transfer_date, status, notes)
                  VALUES ('equipment', ?, ?, ?, ?, 'transferred', ?)`,
            args: [eqId, sourceDeptId, target_department_id, new Date().toISOString().split('T')[0], 'Moved to ' + (target_list === 'equipment' ? 'equipment' : 'items') + ' list']
        });

        await db.execute({ sql: 'DELETE FROM covenant_history WHERE entity_type = \'equipment\' AND item_id = ? AND status = \'active\'', args: [eqId] });
        await db.execute({ sql: 'DELETE FROM department_equipment WHERE id = ?', args: [eqId] });

        res.json({ success: true, new_id: Number(result.lastInsertRowid), target_list, target_department_id });
    });

    // ========== Responsibility History ==========
    router.get('/:id/history', async (req, res) => {
        const history = await db.execute({
            sql: `SELECT rh.*, e.name AS employee_name, e.job_title, e.photo AS employee_photo
                  FROM responsibility_history rh
                  LEFT JOIN employees e ON e.id = rh.employee_id
                  WHERE rh.department_id = ? ORDER BY rh.start_date DESC`,
            args: [req.params.id]
        });
        res.json(history.rows);
    });

    router.post('/:id/history', async (req, res) => {
        const { employee_id, start_date, end_date, status, notes } = req.body;
        if (!employee_id) return res.status(400).json({ error: 'Employee required' });
        if (!start_date) return res.status(400).json({ error: 'Start date required' });
        const result = await db.execute({
            sql: 'INSERT INTO responsibility_history (department_id, employee_id, start_date, end_date, status, notes) VALUES (?, ?, ?, ?, ?, ?)',
            args: [req.params.id, employee_id, start_date, end_date || '', status || 'active', notes || '']
        });
        const entry = await db.execute({ sql: 'SELECT rh.*, e.name AS employee_name FROM responsibility_history rh LEFT JOIN employees e ON e.id = rh.employee_id WHERE rh.id = ?', args: [Number(result.lastInsertRowid)] });
        res.status(201).json(entry.rows[0]);
    });

    router.put('/history/:id', async (req, res) => {
        const { employee_id, start_date, end_date, status, notes } = req.body;
        if (employee_id !== undefined) await db.execute({ sql: 'UPDATE responsibility_history SET employee_id = ? WHERE id = ?', args: [employee_id, req.params.id] });
        if (start_date !== undefined) await db.execute({ sql: 'UPDATE responsibility_history SET start_date = ? WHERE id = ?', args: [start_date, req.params.id] });
        if (end_date !== undefined) await db.execute({ sql: 'UPDATE responsibility_history SET end_date = ? WHERE id = ?', args: [end_date, req.params.id] });
        if (status !== undefined) await db.execute({ sql: 'UPDATE responsibility_history SET status = ? WHERE id = ?', args: [status, req.params.id] });
        if (notes !== undefined) await db.execute({ sql: 'UPDATE responsibility_history SET notes = ? WHERE id = ?', args: [notes, req.params.id] });
        const updated = await db.execute({ sql: 'SELECT * FROM responsibility_history WHERE id = ?', args: [req.params.id] });
        res.json(updated.rows[0]);
    });

    router.delete('/history/:id', async (req, res) => {
        await db.execute({ sql: 'DELETE FROM responsibility_history WHERE id = ?', args: [req.params.id] });
        res.json({ success: true });
    });

    return router;
};
