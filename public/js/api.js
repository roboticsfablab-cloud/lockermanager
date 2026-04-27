function _handleUnauthorized(res) {
    if (res.status === 401 && location.pathname !== '/login' && !location.pathname.endsWith('/login.html')) {
        location.href = '/login';
        throw new Error('Not authenticated');
    }
}

const API = {
    async request(method, url, body) {
        const opts = { method, headers: { 'Content-Type': 'application/json' }, credentials: 'same-origin' };
        if (body) opts.body = JSON.stringify(body);
        const res = await fetch('/api' + url, opts);
        _handleUnauthorized(res);
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'Request failed');
        return data;
    },
    async upload(url, file) {
        const form = new FormData();
        form.append('image', file);
        const res = await fetch('/api' + url, { method: 'POST', body: form, credentials: 'same-origin' });
        _handleUnauthorized(res);
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'Upload failed');
        return data;
    },

    // Auth
    me()                 { return this.request('GET', '/auth/me'); },
    logout()             { return this.request('POST', '/auth/logout'); },
    changeOwnPassword(current_password, new_password) { return this.request('PUT', '/auth/password', { current_password, new_password }); },

    // Users (manager only)
    getUsers()                          { return this.request('GET', '/users'); },
    createUser(data)                    { return this.request('POST', '/users', data); },
    updateUser(id, data)                { return this.request('PUT', '/users/' + id, data); },
    resetUserPassword(id, password)     { return this.request('POST', '/users/' + id + '/password', { password }); },
    deleteUser(id)                      { return this.request('DELETE', '/users/' + id); },

    // Lockers
    getLockers()           { return this.request('GET', '/lockers'); },
    getLocker(id)          { return this.request('GET', '/lockers/' + id); },
    createLocker(data)     { return this.request('POST', '/lockers', data); },
    updateLocker(id, data) { return this.request('PUT', '/lockers/' + id, data); },
    deleteLocker(id)       { return this.request('DELETE', '/lockers/' + id); },
    uploadLockerImage(id, f) { return this.upload('/lockers/' + id + '/image', f); },

    // Items
    getAllItems()           { return this.request('GET', '/items'); },
    addItem(lid, data)     { return this.request('POST', '/items/locker/' + lid, data); },
    updateItem(id, data)   { return this.request('PUT', '/items/' + id, data); },
    changeQty(id, delta)   { return this.request('PATCH', '/items/' + id + '/qty', { delta }); },
    moveItem(id, lockerId) { return this.request('PATCH', '/items/' + id + '/move', { locker_id: lockerId }); },
    deleteItem(id)         { return this.request('DELETE', '/items/' + id); },
    uploadImage(id, file)  { return this.upload('/items/' + id + '/image', file); },

    // Alerts
    getAlerts()            { return this.request('GET', '/alerts'); },
    getAlertSummary()      { return this.request('GET', '/alerts/summary'); },

    // Search
    search(q)              { return this.request('GET', '/search?q=' + encodeURIComponent(q)); },

    // Warehouse Zones
    getZones()             { return this.request('GET', '/warehouse'); },
    getZone(id)            { return this.request('GET', '/warehouse/' + id); },
    createZone(data)       { return this.request('POST', '/warehouse', data); },
    updateZone(id, data)   { return this.request('PUT', '/warehouse/' + id, data); },
    deleteZone(id)         { return this.request('DELETE', '/warehouse/' + id); },
    uploadZoneImage(id, f) { return this.upload('/warehouse/' + id + '/image', f); },

    // Warehouse Areas
    getAreas(zoneId)         { return this.request('GET', '/warehouse/' + zoneId + '/areas'); },
    createArea(zoneId, data) { return this.request('POST', '/warehouse/' + zoneId + '/areas', data); },
    updateArea(id, data)     { return this.request('PUT', '/warehouse/areas/' + id, data); },
    deleteArea(id)           { return this.request('DELETE', '/warehouse/areas/' + id); },
    uploadAreaImage(id, f)   { return this.upload('/warehouse/areas/' + id + '/image', f); },

    // Warehouse Items
    addZoneItem(zid, data) { return this.request('POST', '/warehouse/' + zid + '/items', data); },
    updateZoneItem(id, d)  { return this.request('PUT', '/warehouse/items/' + id, d); },
    deleteZoneItem(id)     { return this.request('DELETE', '/warehouse/items/' + id); },
    transferZoneItem(id, data) { return this.request('PATCH', '/warehouse/items/' + id + '/transfer', data); },
    uploadZoneItemImage(id, file) { return this.upload('/warehouse/items/' + id + '/image', file); },

    // Departments
    getDepartments()         { return this.request('GET', '/departments'); },
    getDepartment(id)        { return this.request('GET', '/departments/' + id); },
    createDepartment(data)   { return this.request('POST', '/departments', data); },
    updateDepartment(id, d)  { return this.request('PUT', '/departments/' + id, d); },
    deleteDepartment(id)     { return this.request('DELETE', '/departments/' + id); },
    uploadDeptImage(id, f)   { return this.upload('/departments/' + id + '/image', f); },

    // Department Items (العهدة)
    getDeptItems(did)             { return this.request('GET', '/departments/' + did + '/items'); },
    addDeptItem(did, data)        { return this.request('POST', '/departments/' + did + '/items', data); },
    updateDeptItem(id, data)      { return this.request('PUT', '/departments/items/' + id, data); },
    deleteDeptItem(id)            { return this.request('DELETE', '/departments/items/' + id); },
    uploadDeptItemImage(id, file) { return this.upload('/departments/items/' + id + '/image', file); },

    // Covenant History
    getCovenantHistory(itemId)          { return this.request('GET', '/departments/items/' + itemId + '/covenant'); },
    addCovenantHistory(itemId, data)    { return this.request('POST', '/departments/items/' + itemId + '/covenant', data); },
    updateCovenantHistory(id, data)     { return this.request('PUT', '/departments/covenant/' + id, data); },
    deleteCovenantHistory(id)           { return this.request('DELETE', '/departments/covenant/' + id); },
    returnCustody(itemId, data)         { return this.request('POST', '/departments/items/' + itemId + '/return-custody', data || {}); },

    // Department Equipment (separate from Items)
    getDeptEquipment(did)               { return this.request('GET', '/departments/' + did + '/equipment'); },
    addDeptEquipment(did, data)         { return this.request('POST', '/departments/' + did + '/equipment', data); },
    updateDeptEquipment(id, data)       { return this.request('PUT', '/departments/equipment/' + id, data); },
    deleteDeptEquipment(id)             { return this.request('DELETE', '/departments/equipment/' + id); },
    uploadDeptEquipmentImage(id, file)  { return this.upload('/departments/equipment/' + id + '/image', file); },
    getEquipmentCovenant(id)            { return this.request('GET', '/departments/equipment/' + id + '/covenant'); },
    addEquipmentCovenant(id, data)      { return this.request('POST', '/departments/equipment/' + id + '/covenant', data); },
    returnEquipmentCustody(id, data)    { return this.request('POST', '/departments/equipment/' + id + '/return-custody', data || {}); },

    // Responsibility History
    getDeptHistory(did)           { return this.request('GET', '/departments/' + did + '/history'); },
    addDeptHistory(did, data)     { return this.request('POST', '/departments/' + did + '/history', data); },
    updateDeptHistory(id, data)   { return this.request('PUT', '/departments/history/' + id, data); },
    deleteDeptHistory(id)         { return this.request('DELETE', '/departments/history/' + id); },

    // Employees
    getEmployees()              { return this.request('GET', '/employees'); },
    getEmployee(id)             { return this.request('GET', '/employees/' + id); },
    createEmployee(data)        { return this.request('POST', '/employees', data); },
    updateEmployee(id, data)    { return this.request('PUT', '/employees/' + id, data); },
    deleteEmployee(id)          { return this.request('DELETE', '/employees/' + id); },
    uploadEmployeePhoto(id, f)  { return this.upload('/employees/' + id + '/photo', f); },
    addEmployeeItem(id, data)   { return this.request('POST', '/employees/' + id + '/items', data); },
};
