const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const { client, ensureTables } = require('./db/schema');
const { requireAuth, htmlAuthGate } = require('./middleware/auth');
const { managerOnly, readOnlyForNonManager, makeDepartmentsGuard, makeEmployeesGuard } = require('./middleware/permissions');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Gate every HTML request behind auth. Static assets and /api/* flow through here;
// /api/* has its own JSON auth layer mounted below.
app.use(htmlAuthGate);

// Clean URL for the login page.
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, 'public', 'login.html')));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', async (req, res, next) => {
    try { await ensureTables(); next(); }
    catch (err) { next(err); }
});

app.use('/api/auth', require('./routes/auth')(client));

app.use('/api/users', requireAuth, managerOnly, require('./routes/users')(client));

app.use('/api/lockers',    requireAuth, readOnlyForNonManager, require('./routes/lockers')(client));
app.use('/api/items',      requireAuth, readOnlyForNonManager, require('./routes/items')(client));
app.use('/api/alerts',     requireAuth, readOnlyForNonManager, require('./routes/alerts')(client));
app.use('/api/warehouse',  requireAuth, readOnlyForNonManager, require('./routes/warehouse')(client));
app.use('/api/employees',  requireAuth, makeEmployeesGuard(client),  require('./routes/employees')(client));
app.use('/api/departments', requireAuth, makeDepartmentsGuard(client), require('./routes/departments')(client));

// Global search — DB-side ILIKE across every searchable surface, including the
// three warehouse levels (zone → area → item) so a single query reaches each
// one and returns the parent path for context.
app.get('/api/search', requireAuth, async (req, res) => {
    const raw = (req.query.q || '').trim();
    if (!raw) return res.json({ lockers: [], items: [], zones: [], areas: [], warehouse_items: [], employees: [], departments: [] });
    const term = `%${raw.toLowerCase()}%`;
    const [lockers, items, zones, areas, whItems, employees, departments] = await Promise.all([
        client.execute({
            sql: `SELECT l.*, COUNT(i.id) AS item_count, COALESCE(SUM(i.qty), 0) AS total_qty
                  FROM lockers l LEFT JOIN items i ON i.locker_id = l.id
                  WHERE LOWER(l.name) LIKE ? OR CAST(l.id AS TEXT) LIKE ?
                  GROUP BY l.id ORDER BY l.id`,
            args: [term, term]
        }),
        client.execute({
            sql: `SELECT i.*, l.name AS locker_name FROM items i
                  JOIN lockers l ON l.id = i.locker_id
                  WHERE LOWER(i.name) LIKE ? OR LOWER(i.description) LIKE ?
                  ORDER BY i.name`,
            args: [term, term]
        }),
        client.execute({
            sql: `SELECT * FROM warehouse_zones
                  WHERE LOWER(name) LIKE ? OR LOWER(location) LIKE ? OR LOWER(description) LIKE ?
                  ORDER BY name`,
            args: [term, term, term]
        }),
        client.execute({
            sql: `SELECT a.*, z.name AS zone_name, z.color AS zone_color
                  FROM warehouse_areas a
                  JOIN warehouse_zones z ON z.id = a.zone_id
                  WHERE LOWER(a.name) LIKE ? OR LOWER(a.description) LIKE ?
                  ORDER BY a.name`,
            args: [term, term]
        }),
        client.execute({
            sql: `SELECT wi.*, z.name AS zone_name, z.color AS zone_color, a.name AS area_name
                  FROM warehouse_items wi
                  JOIN warehouse_zones z ON z.id = wi.zone_id
                  LEFT JOIN warehouse_areas a ON a.id = wi.area_id
                  WHERE LOWER(wi.name) LIKE ? OR LOWER(wi.description) LIKE ?
                  ORDER BY wi.name`,
            args: [term, term]
        }),
        client.execute({
            sql: `SELECT e.*, d.name AS department_name FROM employees e
                  LEFT JOIN departments d ON d.id = e.department_id
                  WHERE LOWER(e.name) LIKE ? OR LOWER(e.job_title) LIKE ?
                  ORDER BY e.name`,
            args: [term, term]
        }),
        client.execute({
            sql: `SELECT * FROM departments
                  WHERE LOWER(name) LIKE ? OR LOWER(manager) LIKE ?
                  ORDER BY name`,
            args: [term, term]
        }),
    ]);
    res.json({
        lockers: lockers.rows,
        items: items.rows,
        zones: zones.rows,
        areas: areas.rows,
        warehouse_items: whItems.rows,
        employees: employees.rows,
        departments: departments.rows,
    });
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal server error' });
});

if (!process.env.VERCEL) {
    app.listen(PORT, () => { console.log(`\n  FABY Keeper running at http://localhost:${PORT}\n`); });
}

module.exports = app;
