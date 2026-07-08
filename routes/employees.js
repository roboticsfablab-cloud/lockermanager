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
            { folder: 'locker-manager/' + folder },
            (error, result) => { if (error) reject(error); else resolve(result); }
        );
        Readable.from(buffer).pipe(stream);
    });
}

module.exports = function (db) {

    // List all employees (employees scoped to own department)
    router.get('/', async (req, res) => {
        const scopeToDept = req.user && req.user.role === 'employee' ? Number(req.user.department_id) : null;
        const result = await db.execute({
            sql: `SELECT e.*, d.name AS department_name,
                         ((SELECT COUNT(*) FROM department_items di WHERE di.employee_id = e.id) +
                          (SELECT COUNT(*) FROM department_equipment de WHERE de.employee_id = e.id)) AS item_count
                  FROM employees e
                  LEFT JOIN departments d ON d.id = e.department_id
                  ${scopeToDept ? 'WHERE e.department_id = ?' : ''}
                  ORDER BY e.name`,
            args: scopeToDept ? [scopeToDept] : []
        });
        res.json(result.rows);
    });

    // Get single employee with items + covenant details
    router.get('/:id', async (req, res) => {
        const id = req.params.id;
        const [emp, items, equipment, history, itemHistRaw, eqHistRaw] = await Promise.all([
            db.execute({ sql: 'SELECT e.*, d.name AS department_name FROM employees e LEFT JOIN departments d ON d.id = e.department_id WHERE e.id = ?', args: [id] }),
            db.execute({
                sql: `SELECT di.*, d.name AS department_name, 'item' AS entity_type FROM department_items di
                      LEFT JOIN departments d ON d.id = di.department_id
                      WHERE di.employee_id = ? ORDER BY di.created_at`,
                args: [id]
            }),
            db.execute({
                sql: `SELECT de.*, d.name AS department_name, 'equipment' AS entity_type FROM department_equipment de
                      LEFT JOIN departments d ON d.id = de.department_id
                      WHERE de.employee_id = ? ORDER BY de.created_at`,
                args: [id]
            }),
            db.execute({
                sql: `SELECT rh.*, d.name AS department_name FROM responsibility_history rh
                      LEFT JOIN departments d ON d.id = rh.department_id
                      WHERE rh.employee_id = ? ORDER BY rh.start_date DESC`,
                args: [id]
            }),
            db.execute({
                sql: `SELECT ch.*, di.name AS item_name, di.image AS item_image, di.qty AS item_qty,
                             di.department_id AS item_department_id, d.name AS item_department_name,
                             fe.name AS from_employee_name, te.name AS to_employee_name
                      FROM covenant_history ch
                      LEFT JOIN department_items di ON di.id = ch.item_id
                      LEFT JOIN departments d ON d.id = di.department_id
                      LEFT JOIN employees fe ON fe.id = ch.from_employee_id
                      LEFT JOIN employees te ON te.id = ch.to_employee_id
                      WHERE ch.entity_type = 'item' AND ch.to_employee_id = ? AND ch.status <> 'active'`,
                args: [id]
            }),
            db.execute({
                sql: `SELECT ch.*, de.name AS item_name, de.image AS item_image, de.qty AS item_qty,
                             de.department_id AS item_department_id, d.name AS item_department_name,
                             fe.name AS from_employee_name, te.name AS to_employee_name
                      FROM covenant_history ch
                      LEFT JOIN department_equipment de ON de.id = ch.item_id
                      LEFT JOIN departments d ON d.id = de.department_id
                      LEFT JOIN employees fe ON fe.id = ch.from_employee_id
                      LEFT JOIN employees te ON te.id = ch.to_employee_id
                      WHERE ch.entity_type = 'equipment' AND ch.to_employee_id = ? AND ch.status <> 'active'`,
                args: [id]
            }),
        ]);
        if (emp.rows.length === 0) return res.status(404).json({ error: 'Employee not found' });
        // Single bulk covenant fetch (avoids N+1)
        const itemIds = items.rows.map(r => r.id);
        const eqIds = equipment.rows.map(r => r.id);
        const covByKey = {};
        if (itemIds.length || eqIds.length) {
            const clauses = [];
            const args = [];
            if (itemIds.length) {
                clauses.push(`(ch.entity_type = 'item' AND ch.item_id IN (${itemIds.map(() => '?').join(',')}))`);
                args.push(...itemIds);
            }
            if (eqIds.length) {
                clauses.push(`(ch.entity_type = 'equipment' AND ch.item_id IN (${eqIds.map(() => '?').join(',')}))`);
                args.push(...eqIds);
            }
            const all = await db.execute({
                sql: `SELECT ch.*, fe.name AS from_employee_name, te.name AS to_employee_name
                      FROM covenant_history ch
                      LEFT JOIN employees fe ON fe.id = ch.from_employee_id
                      LEFT JOIN employees te ON te.id = ch.to_employee_id
                      WHERE ${clauses.join(' OR ')}
                      ORDER BY ch.transfer_date DESC`,
                args: args
            });
            for (const row of all.rows) {
                const key = row.entity_type + ':' + row.item_id;
                (covByKey[key] = covByKey[key] || []).push(row);
            }
        }
        const itemsWithCovenant = [
            ...items.rows.map(it => ({ ...it, covenant_history: covByKey['item:' + it.id] || [] })),
            ...equipment.rows.map(eq => ({ ...eq, covenant_history: covByKey['equipment:' + eq.id] || [] }))
        ];
        const allHist = [...itemHistRaw.rows, ...eqHistRaw.rows].sort((a, b) => {
            const ad = a.end_date || a.transfer_date || ''; const bd = b.end_date || b.transfer_date || '';
            return bd.localeCompare(ad);
        });
        const [lockerItemCustody, warehouseItemCustody] = await Promise.all([
            db.execute({
                sql: `SELECT ch.*, i.name AS item_name, i.image AS item_image, i.description, l.id AS locker_id, l.name AS locker_name, 'locker_item' AS entity_type
                      FROM covenant_history ch
                      JOIN items i ON i.id = ch.item_id
                      JOIN lockers l ON l.id = i.locker_id
                      WHERE ch.entity_type = 'locker_item' AND ch.to_employee_id = ? AND ch.status = 'active'`,
                args: [id]
            }),
            db.execute({
                sql: `SELECT ch.*, wi.name AS item_name, wi.image AS item_image, wi.description, wz.id AS zone_id, wz.name AS zone_name, 'warehouse_item' AS entity_type
                      FROM covenant_history ch
                      JOIN warehouse_items wi ON wi.id = ch.item_id
                      JOIN warehouse_zones wz ON wz.id = wi.zone_id
                      WHERE ch.entity_type = 'warehouse_item' AND ch.to_employee_id = ? AND ch.status = 'active'`,
                args: [id]
            })
        ]);
        res.json({ ...emp.rows[0], items: itemsWithCovenant, history: history.rows, custody_history: allHist, incoming_storage_items: [...lockerItemCustody.rows, ...warehouseItemCustody.rows] });
    });

    // Create employee
    router.post('/', async (req, res) => {
        const { name, job_title, department_id } = req.body;
        if (!name || !name.trim()) return res.status(400).json({ error: 'Employee name required' });
        const result = await db.execute({
            sql: 'INSERT INTO employees (name, job_title, department_id) VALUES (?, ?, ?)',
            args: [name.trim(), job_title || '', department_id || null]
        });
        const emp = await db.execute({ sql: 'SELECT e.*, d.name AS department_name FROM employees e LEFT JOIN departments d ON d.id = e.department_id WHERE e.id = ?', args: [Number(result.lastInsertRowid)] });
        res.status(201).json(emp.rows[0]);
    });

    // Update employee
    router.put('/:id', async (req, res) => {
        const { name, job_title, department_id } = req.body;
        if (name !== undefined) await db.execute({ sql: 'UPDATE employees SET name = ? WHERE id = ?', args: [name.trim(), req.params.id] });
        if (job_title !== undefined) await db.execute({ sql: 'UPDATE employees SET job_title = ? WHERE id = ?', args: [job_title, req.params.id] });
        if (department_id !== undefined) await db.execute({ sql: 'UPDATE employees SET department_id = ? WHERE id = ?', args: [department_id, req.params.id] });
        const updated = await db.execute({ sql: 'SELECT e.*, d.name AS department_name FROM employees e LEFT JOIN departments d ON d.id = e.department_id WHERE e.id = ?', args: [req.params.id] });
        res.json(updated.rows[0]);
    });

    // Delete employee
    router.delete('/:id', async (req, res) => {
        await db.execute({ sql: 'UPDATE department_items SET employee_id = NULL WHERE employee_id = ?', args: [req.params.id] });
        await db.execute({ sql: 'UPDATE department_equipment SET employee_id = NULL WHERE employee_id = ?', args: [req.params.id] });
        await db.execute({ sql: 'DELETE FROM responsibility_history WHERE employee_id = ?', args: [req.params.id] });
        await db.execute({ sql: 'DELETE FROM covenant_history WHERE to_employee_id = ? OR from_employee_id = ?', args: [req.params.id, req.params.id] });
        await db.execute({ sql: 'DELETE FROM employees WHERE id = ?', args: [req.params.id] });
        res.json({ success: true });
    });

    // Upload employee photo
    router.post('/:id/photo', upload.single('image'), async (req, res) => {
        if (!req.file) return res.status(400).json({ error: 'No image uploaded' });
        const cloudResult = await uploadToCloudinary(req.file.buffer, 'employees');
        await db.execute({ sql: 'UPDATE employees SET photo = ? WHERE id = ?', args: [cloudResult.secure_url, req.params.id] });
        const updated = await db.execute({ sql: 'SELECT * FROM employees WHERE id = ?', args: [req.params.id] });
        res.json(updated.rows[0]);
    });

    // Add item to employee
    router.post('/:id/items', async (req, res) => {
        const { name, description, qty, department_id, receipt_date, purpose } = req.body;
        if (!name || !name.trim()) return res.status(400).json({ error: 'Item name required' });
        const emp = await db.execute({ sql: 'SELECT department_id FROM employees WHERE id = ?', args: [req.params.id] });
        const deptId = department_id || (emp.rows[0] ? emp.rows[0].department_id : null) || null;
        const result = await db.execute({
            sql: 'INSERT INTO department_items (department_id, employee_id, name, description, qty, receipt_date, purpose) VALUES (?, ?, ?, ?, ?, ?, ?)',
            args: [deptId, req.params.id, name.trim(), description || '', Math.max(1, parseInt(qty) || 1), receipt_date || '', purpose || '']
        });
        const item = await db.execute({ sql: 'SELECT * FROM department_items WHERE id = ?', args: [Number(result.lastInsertRowid)] });
        res.status(201).json(item.rows[0]);
    });

    return router;
};
