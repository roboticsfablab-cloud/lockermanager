// ============ i18n ============
const i18n = {
    en: {
        appTitle:'FABY Keeper', home:'Home', lockers:'Lockers', warehouse:'Warehouse',
        departments:'Departments', employees:'Employees',
        homeSubtitle:'Manage your storage, warehouse, and departments',
        lockersDesc:'Manage locker cabinets and inventory items',
        warehouseDesc:'Manage warehouse zones and bulk storage',
        departmentsDesc:'Manage teams, employees and responsibilities',
        searchAll:'Search everything...', searchLockers:'Search lockers and items...',
        searchWarehouse:'Search zones and items...', searchDepartments:'Search departments and employees...',
        addLocker:'Add Locker', addZone:'Add Zone', addArea:'Add Area',
        addDepartment:'Add Department', addEmployee:'Add Employee', addItem:'Add Item',
        totalLockers:'Total Lockers', totalItems:'Total Items', totalStock:'Total Stock', alerts:'Alerts',
        loading:'Loading...', noLockers:'No lockers yet.', noZones:'No zones yet.',
        noDepts:'No departments yet.', noEmployees:'No employees yet.', noItems:'No items yet.',
        items:'items', pcs:'pcs', zones:'zones', areas:'areas',
        locker:'Locker', zone:'Zone', area:'Area',
        itemName:'Item Name', description:'Description', stock:'Stock', minStock:'Min',
        status:'Status', actions:'Actions', add:'Add', cancel:'Cancel', save:'Save', delete:'Delete',
        edit:'Edit', back:'Back', picture:'Picture', count:'Count',
        equipment:'Equipment', equipmentAr:'العهدة', history:'History',
        responsibleEmployee:'Responsible Employee', currentEmployee:'Current Employee',
        receiptDate:'Receipt Date', purpose:'Purpose', duration:'Duration',
        covenantHistory:'Covenant History', transferTo:'Transfer To', transferDate:'Transfer Date',
        noResults:'No results found', failedLoad:'Failed to load.',
        outOfStock:'Out of Stock', lowStock:'Low Stock', inStock:'In Stock',
        itemRemoved:'Item removed', imageUploaded:'Image uploaded', added:'Added',
        lockerAdded:'Locker added', lockerDeleted:'Locker deleted',
        deleteConfirm:'Delete this? All related data will be removed.',
        enterLockerName:'Enter locker name:', left:'left', min:'min',
        allItems:'All Items', allAreas:'All Areas', spaces:'Spaces', spacesIn:'spaces in',
        lowStockAlerts:'Low Stock Alerts', allHealthy:'All stock levels are healthy!',
        addItem:'Add Item', addSpace:'Add Space', addNew:'Add New',
        areaItemsTitle:'Area Items', noAreasYet:'No areas yet.',
        lockerNumber:'Locker Number', lockerNameOptional:'Locker Name (optional)',
        zoneName:'Zone Name', location:'Location', areaName:'Area Name',
        deptName:'Department Name', manager:'Manager', employeeName:'Employee Name',
        jobTitle:'Job Title', department:'Department', generalItems:'General Items',
        assignedTo:'Assigned To', active:'Active', paused:'Paused', ended:'Ended',
        returned:'Returned', transferred:'Transferred',
        startDate:'Start Date', endDate:'End Date', notes:'Notes',
        itemsRunningLow:'{count} item(s) in {lockers} locker(s) running low!',
        addNewLocker:'Add New Locker', lockerNameUpdated:'Cabinet updated',
        qty:'Qty', descriptionPlaceholder:'Description (optional)',
        itemNamePlaceholder:'Item name...',
        editLocker:'Edit Cabinet', moveItem:'Move Item', move:'Move',
        targetLocker:'Target Cabinet', selectTargetLocker:'Select target cabinet',
        itemMoved:'Item moved', allCabinetItems:'All Cabinet Items',
        layout:'Layout', rows:'Rows', columns:'Columns',
        chooseImage:'Choose image', changeImage:'Change image',
        employeesDesc:'Manage employees and custody',
        custodyItems:'Custody Items', selectManager:'Select Manager', allEquipment:'All Equipment',
        searchEmployees:'Search employees...',
        custodyDuration:'Custody Duration', days:'days',
        transferCustody:'Transfer Custody', transferBtn:'Transfer',
        deviceCondition:'Device Condition Before Handover',
        conditionGood:'Good', conditionNotGood:'Not Good',
        conditionNotes:'Condition Notes', conditionNotesPh:'Describe the condition...',
        additionalNotes:'Additional Notes', selectEmployee:'Select Employee',
        outOfDeptCustody:'Out of Department Custody',
        currentlyWith:'Currently with', custodyPeriod:'Custody Period',
        markReturned:'Mark Returned', returnConfirm:'Mark this item as returned?',
        returnedSuccessfully:'Item marked as returned',
        custodyTransferred:'Custody transferred',
        viewCustodyDetails:'View Custody Details',
        custodyDetails:'Custody Details',
        conditionOnReceipt:'Item Condition Upon Receipt',
        originalNotes:'Original Transfer Notes',
        originalDepartment:'Original Department',
        returnToDepartment:'Return to Department',
        returnToDepartmentBtn:'Return to Department',
        returnCondition:'Item Condition Upon Return',
        returnNotes:'Return Notes', returnNotesPh:'Notes about the return...',
        notRecorded:'Not recorded',
        custodyHistory:'Custody History', currentCustody:'Current Custody',
        searchHistoryPh:'Search by item, dates, notes...',
        allRecords:'All records', noHistory:'No custody history yet.',
        returnedOn:'Returned on', transferredOn:'Transferred on',
        receivedFrom:'Received from', returnConditionLabel:'Return condition',
        addEquipment:'Add Equipment', searchEquipPh:'Search equipment...',
        inDept:'In Department', expand:'Expand', collapse:'Collapse',
        details:'Details',
        transferToEmployee:'Transfer to Employee',
        transferToDepartment:'Transfer to Department',
        targetDepartment:'Target Department',
        selectDepartment:'Select Department',
        incomingCustody:'Incoming Custody',
        incomingCustodyTitle:'Items Under Temporary Custody from Other Departments',
        sourceDepartment:'Source Department',
        returnToOriginalDept:'Return to Original Department',
        noIncoming:'No items currently under temporary custody.',
        underTempCustody:'Under Temporary Custody',
        print:'Print', printIncoming:'Print Incoming', printCurrent:'Print Current',
        printHistory:'Print History',
        report:'Report', generatedOn:'Generated on', page:'Page', of:'of',
        filteredResults:'Filtered results', allResults:'All results',
        noData:'No data to print', category:'Category', location:'Location',
        imageOptional:'Image (optional)', removeImage:'Remove image', replaceImage:'Replace image',
        imageTooLarge:'Image is too large. Maximum 5 MB.',
        imageInvalidType:'Only JPG, PNG, or WEBP images are allowed.',
        uploading:'Uploading…',
        transferItem:'Transfer Item', transfer:'Transfer',
        targetZone:'Target Zone', selectTargetZone:'Select target zone',
        targetArea:'Target Area', noArea:'No area (zone-level)',
        itemTransferred:'Item transferred',
        currentLocation:'Current location',
        users:'Users', addUser:'Add User', editUser:'Edit User',
        username:'Username', password:'Password', newPassword:'New Password',
        passwordHint:'(min 6 characters)', usernameExample:'e.g. alice',
        role:'Role', linkedEmployee:'Linked Employee', linkedEmpHint:'(optional)',
        departmentScope:'Department Scope', deptScopeHint:'(used if no employee linked)',
        roleEmployee:'Employee — CRUD within own department',
        roleAdmin:'Admin — view everywhere, add in Departments',
        roleManager:'Manager — full access',
        inactive:'Inactive', noUsers:'No users yet.', you:'(you)',
        none:'— none —',
        resetPassword:'Reset Password', settingNewPassword:'Setting a new password for',
        deleteUserConfirm:'Delete user "{name}"? This cannot be undone.',
        userCreated:'User created', userUpdated:'User updated', userDeleted:'User deleted',
        passwordReset:'Password reset',
        usernameRequired:'Username is required',
        passwordMin6:'Password must be at least 6 characters',
        saveFailed:'Save failed', resetFailed:'Reset failed',
        failedLoadUsers:'Failed to load users', failedLoadFormData:'Failed to load form data',
        signOut:'Sign out', toggleTheme:'Toggle Theme', toggleLanguage:'Toggle Language',
        autoLayout:'Auto', autoPlaceholder:'auto', emptyDash:'—',
        printIncomingTitle:'Print incoming',
        printCurrentTitle:'Print current custody',
        printHistoryTitle:'Print custody history',
        quantity:'Quantity', minStockTitle:'Min stock',
        uploadImage:'Upload image',
        popupBlocked:'Popup blocked',
        unknown:'Unknown',
        editZoneBtn:'Edit Zone',
        deleteBtn:'Delete', editBtn:'Edit',
        printBtn:'Print',
        defaultAreaItems:'Area Items',
        reset:'Reset',
        condition:'Condition',
        conditionNew:'New', conditionUsed:'Used', conditionDamaged:'Damaged', conditionMaintenance:'Needs Maintenance',
        filterByCondition:'Filter by condition', allConditions:'All',
        warehouseImageAlt:'Cover image of {name}',
    },
    ar: {
        appTitle:'FABY Keeper', home:'الرئيسية', lockers:'الخزائن', warehouse:'المستودع',
        departments:'الأقسام', employees:'الموظفون',
        homeSubtitle:'إدارة التخزين والمستودعات والأقسام',
        lockersDesc:'إدارة خزائن التخزين وعناصر المخزون',
        warehouseDesc:'إدارة مناطق المستودع والتخزين',
        departmentsDesc:'إدارة الفرق والموظفين والمسؤوليات',
        searchAll:'البحث في كل شيء...', searchLockers:'البحث في الخزائن والعناصر...',
        searchWarehouse:'البحث في المناطق والعناصر...', searchDepartments:'البحث في الأقسام والموظفين...',
        addLocker:'إضافة خزانة', addZone:'إضافة منطقة', addArea:'إضافة مساحة',
        addDepartment:'إضافة قسم', addEmployee:'إضافة موظف', addItem:'إضافة عنصر',
        totalLockers:'إجمالي الخزائن', totalItems:'إجمالي العناصر', totalStock:'إجمالي المخزون', alerts:'التنبيهات',
        loading:'جاري التحميل...', noLockers:'لا توجد خزائن بعد.', noZones:'لا توجد مناطق بعد.',
        noDepts:'لا توجد أقسام بعد.', noEmployees:'لا يوجد موظفون بعد.', noItems:'لا توجد عناصر بعد.',
        items:'عناصر', pcs:'قطعة', zones:'مناطق', areas:'مساحات',
        locker:'خزانة', zone:'منطقة', area:'مساحة',
        itemName:'اسم العنصر', description:'الوصف', stock:'المخزون', minStock:'الحد الأدنى',
        status:'الحالة', actions:'الإجراءات', add:'إضافة', cancel:'إلغاء', save:'حفظ', delete:'حذف',
        edit:'تعديل', back:'رجوع', picture:'صورة', count:'العدد',
        equipment:'المعدات', equipmentAr:'العهدة', history:'السجل',
        responsibleEmployee:'الموظف المسؤول', currentEmployee:'الموظف الحالي',
        receiptDate:'تاريخ الاستلام', purpose:'الغرض', duration:'المدة',
        covenantHistory:'سجل العهدة', transferTo:'نقل إلى', transferDate:'تاريخ النقل',
        noResults:'لم يتم العثور على نتائج', failedLoad:'فشل التحميل.',
        outOfStock:'نفد المخزون', lowStock:'مخزون منخفض', inStock:'متوفر',
        itemRemoved:'تم حذف العنصر', imageUploaded:'تم رفع الصورة', added:'تمت الإضافة',
        lockerAdded:'تمت إضافة الخزانة', lockerDeleted:'تم حذف الخزانة',
        deleteConfirm:'حذف هذا؟ سيتم إزالة جميع البيانات المرتبطة.',
        enterLockerName:'أدخل اسم الخزانة:', left:'متبقي', min:'الحد الأدنى',
        allItems:'جميع العناصر', allAreas:'جميع المساحات', spaces:'مساحات', spacesIn:'مساحات في',
        lowStockAlerts:'تنبيهات المخزون المنخفض', allHealthy:'جميع مستويات المخزون جيدة!',
        addItem:'إضافة عنصر', addSpace:'إضافة مساحة', addNew:'إضافة جديد',
        areaItemsTitle:'عناصر المساحة', noAreasYet:'لا توجد مساحات بعد.',
        lockerNumber:'رقم الخزانة', lockerNameOptional:'اسم الخزانة (اختياري)',
        zoneName:'اسم المنطقة', location:'الموقع', areaName:'اسم المساحة',
        deptName:'اسم القسم', manager:'المدير', employeeName:'اسم الموظف',
        jobTitle:'المسمى الوظيفي', department:'القسم', generalItems:'عناصر عامة',
        assignedTo:'مسند إلى', active:'نشط', paused:'متوقف', ended:'منتهي',
        returned:'مُرجع', transferred:'منقول',
        startDate:'تاريخ البداية', endDate:'تاريخ النهاية', notes:'ملاحظات',
        itemsRunningLow:'{count} عنصر في {lockers} خزانة بمخزون منخفض!',
        addNewLocker:'إضافة خزانة جديدة', lockerNameUpdated:'تم تحديث الخزانة',
        qty:'الكمية', descriptionPlaceholder:'الوصف (اختياري)',
        itemNamePlaceholder:'اسم العنصر...',
        editLocker:'تعديل الخزانة', moveItem:'نقل العنصر', move:'نقل',
        targetLocker:'الخزانة المستهدفة', selectTargetLocker:'اختر الخزانة المستهدفة',
        itemMoved:'تم نقل العنصر', allCabinetItems:'جميع عناصر الخزائن',
        layout:'التخطيط', rows:'الصفوف', columns:'الأعمدة',
        chooseImage:'اختر صورة', changeImage:'تغيير الصورة',
        employeesDesc:'إدارة الموظفين والعهدة',
        custodyItems:'عناصر العهدة', selectManager:'اختر المدير', allEquipment:'جميع المعدات',
        searchEmployees:'البحث عن موظفين...',
        custodyDuration:'مدة العهدة', days:'يوم',
        transferCustody:'نقل العهدة', transferBtn:'نقل',
        deviceCondition:'حالة الجهاز قبل التسليم',
        conditionGood:'جيد', conditionNotGood:'غير جيد',
        conditionNotes:'ملاحظات الحالة', conditionNotesPh:'صف حالة الجهاز...',
        additionalNotes:'ملاحظات إضافية', selectEmployee:'اختر موظفاً',
        outOfDeptCustody:'خارج عهدة القسم',
        currentlyWith:'حالياً مع', custodyPeriod:'فترة العهدة',
        markReturned:'إرجاع الجهاز', returnConfirm:'هل تم إرجاع هذا العنصر؟',
        returnedSuccessfully:'تم تسجيل إرجاع العنصر',
        custodyTransferred:'تم نقل العهدة',
        viewCustodyDetails:'عرض تفاصيل العهدة',
        custodyDetails:'تفاصيل العهدة',
        conditionOnReceipt:'حالة الجهاز عند الاستلام',
        originalNotes:'ملاحظات النقل الأصلية',
        originalDepartment:'القسم الأصلي',
        returnToDepartment:'إرجاع إلى القسم',
        returnToDepartmentBtn:'إرجاع إلى القسم',
        returnCondition:'حالة الجهاز عند الإرجاع',
        returnNotes:'ملاحظات الإرجاع', returnNotesPh:'ملاحظات حول الإرجاع...',
        notRecorded:'غير مسجل',
        custodyHistory:'سجل العهدة', currentCustody:'العهدة الحالية',
        searchHistoryPh:'البحث بالعنصر أو التواريخ أو الملاحظات...',
        allRecords:'جميع السجلات', noHistory:'لا يوجد سجل عهدة بعد.',
        returnedOn:'تم الإرجاع في', transferredOn:'تم النقل في',
        receivedFrom:'تم الاستلام من', returnConditionLabel:'حالة الإرجاع',
        addEquipment:'إضافة معدة', searchEquipPh:'البحث في المعدات...',
        inDept:'في القسم', expand:'توسيع', collapse:'طي',
        details:'التفاصيل',
        transferToEmployee:'نقل إلى موظف',
        transferToDepartment:'نقل إلى قسم',
        targetDepartment:'القسم المستهدف',
        selectDepartment:'اختر قسماً',
        incomingCustody:'عهدة واردة',
        incomingCustodyTitle:'عناصر تحت العهدة المؤقتة من أقسام أخرى',
        sourceDepartment:'القسم المصدر',
        returnToOriginalDept:'إرجاع إلى القسم الأصلي',
        noIncoming:'لا توجد عناصر تحت عهدة مؤقتة حالياً.',
        underTempCustody:'تحت عهدة مؤقتة',
        print:'طباعة', printIncoming:'طباعة الواردة', printCurrent:'طباعة الحالية',
        printHistory:'طباعة السجل',
        report:'تقرير', generatedOn:'تم التوليد في', page:'صفحة', of:'من',
        filteredResults:'النتائج المصفاة', allResults:'جميع النتائج',
        noData:'لا توجد بيانات للطباعة', category:'الفئة', location:'الموقع',
        imageOptional:'صورة (اختياري)', removeImage:'إزالة الصورة', replaceImage:'تغيير الصورة',
        imageTooLarge:'حجم الصورة كبير جداً. الحد الأقصى 5 ميجابايت.',
        imageInvalidType:'يُسمح فقط بصور JPG أو PNG أو WEBP.',
        uploading:'جاري الرفع…',
        transferItem:'نقل العنصر', transfer:'نقل',
        targetZone:'المنطقة المستهدفة', selectTargetZone:'اختر المنطقة المستهدفة',
        targetArea:'المساحة المستهدفة', noArea:'بدون مساحة (مستوى المنطقة)',
        itemTransferred:'تم نقل العنصر',
        currentLocation:'الموقع الحالي',
        users:'المستخدمون', addUser:'إضافة مستخدم', editUser:'تعديل المستخدم',
        username:'اسم المستخدم', password:'كلمة المرور', newPassword:'كلمة مرور جديدة',
        passwordHint:'(٦ أحرف على الأقل)', usernameExample:'مثال: alice',
        role:'الصلاحية', linkedEmployee:'الموظف المرتبط', linkedEmpHint:'(اختياري)',
        departmentScope:'نطاق القسم', deptScopeHint:'(يُستخدم إذا لم يُربط موظف)',
        roleEmployee:'موظف — تعديل ضمن قسمه فقط',
        roleAdmin:'مشرف — عرض شامل وإضافة في الأقسام',
        roleManager:'مدير — صلاحية كاملة',
        inactive:'غير نشط', noUsers:'لا يوجد مستخدمون بعد.', you:'(أنت)',
        none:'— لا شيء —',
        resetPassword:'إعادة تعيين كلمة المرور', settingNewPassword:'تعيين كلمة مرور جديدة لـ',
        deleteUserConfirm:'حذف المستخدم "{name}"؟ لا يمكن التراجع.',
        userCreated:'تم إنشاء المستخدم', userUpdated:'تم تحديث المستخدم', userDeleted:'تم حذف المستخدم',
        passwordReset:'تمت إعادة تعيين كلمة المرور',
        usernameRequired:'اسم المستخدم مطلوب',
        passwordMin6:'يجب أن تكون كلمة المرور ٦ أحرف على الأقل',
        saveFailed:'فشل الحفظ', resetFailed:'فشلت إعادة التعيين',
        failedLoadUsers:'فشل تحميل المستخدمين', failedLoadFormData:'فشل تحميل بيانات النموذج',
        signOut:'تسجيل الخروج', toggleTheme:'تبديل السمة', toggleLanguage:'تبديل اللغة',
        autoLayout:'تلقائي', autoPlaceholder:'تلقائي', emptyDash:'—',
        printIncomingTitle:'طباعة الواردة',
        printCurrentTitle:'طباعة العهدة الحالية',
        printHistoryTitle:'طباعة سجل العهدة',
        quantity:'الكمية', minStockTitle:'الحد الأدنى للمخزون',
        uploadImage:'رفع صورة',
        popupBlocked:'تم حظر النافذة المنبثقة',
        unknown:'غير معروف',
        editZoneBtn:'تعديل المنطقة',
        deleteBtn:'حذف', editBtn:'تعديل',
        printBtn:'طباعة',
        defaultAreaItems:'عناصر المساحة',
        reset:'إعادة تعيين',
        condition:'الحالة',
        conditionNew:'جديد', conditionUsed:'مستعمل', conditionDamaged:'تالف', conditionMaintenance:'بحاجة للصيانة',
        filterByCondition:'تصفية حسب الحالة', allConditions:'الكل',
        warehouseImageAlt:'صورة غلاف {name}',
    }
};

// ============ State ============
let currentPage = 'home';
let currentLockerId = null, currentLockerData = null, currentView = 'list';
let currentLang = localStorage.getItem('lang') || 'en';
let currentTheme = localStorage.getItem('theme') || 'dark';
let highlightItemId = null;
let currentZoneId = null, currentZoneData = null;
let currentAreaId = null;
let currentDeptId = null, currentDeptData = null;
let currentEmpId = null, currentEmpData = null;
let currentDeptTab = 'depts'; // kept for legacy compat
let searchTimeout = null;
let currentCovenantItemId = null;
let currentCovenantEntity = 'item'; // 'item' | 'equipment'
let currentTransferMode = 'employee'; // 'employee' | 'department'

// ============ Helpers ============
function t(k) { return (i18n[currentLang] && i18n[currentLang][k]) || i18n.en[k] || k; }
function escapeHtml(s) { if (!s) return ''; const d = document.createElement('div'); d.textContent = s; return d.innerHTML; }
function showToast(msg, type) {
    type = type || 'success';
    var c = document.querySelector('.toast-container');
    if (!c) { c = document.createElement('div'); c.className = 'toast-container'; document.body.appendChild(c); }
    var icons = { success: 'fa-check-circle', error: 'fa-times-circle', warning: 'fa-exclamation-triangle', info: 'fa-info-circle' };
    var el = document.createElement('div');
    el.className = 'toast ' + type;
    el.innerHTML = '<i class="fas ' + (icons[type] || icons.info) + ' toast-icon"></i>' +
        '<span class="toast-message">' + escapeHtml(msg) + '</span>' +
        '<button class="toast-close" onclick="this.parentElement.remove()"><i class="fas fa-times"></i></button>';
    c.appendChild(el);
    setTimeout(function() {
        if (el.parentElement) { el.classList.add('removing'); setTimeout(function() { el.remove(); }, 300); }
    }, 3500);
}

function getActiveCustody(item) {
    if (!item || !item.covenant_history || !item.covenant_history.length) return null;
    for (var i = 0; i < item.covenant_history.length; i++) {
        if (item.covenant_history[i].status === 'active') return item.covenant_history[i];
    }
    return null;
}

// ============ Image Picker (shared by zone/area/item create+edit) ============
// Validates type/size client-side, draws a live preview, and lets the user
// remove the pick or revert to the placeholder before saving.
const ALLOWED_IMG_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
const MAX_IMG_BYTES = 5 * 1024 * 1024;
const _imagePickerState = {}; // key -> { file, removed }

function _imagePickerEls(key) {
    return {
        preview: document.getElementById(key + 'Preview'),
        file:    document.getElementById(key + 'ImageFile'),
        remove:  document.getElementById(key + 'RemoveBtn'),
    };
}

function _drawPreview(previewEl, src, fallbackSvg) {
    if (!previewEl) return;
    if (src) {
        previewEl.innerHTML = '<img src="' + src + '" alt="">';
        previewEl.classList.add('has-image');
    } else {
        previewEl.innerHTML = fallbackSvg || '';
        previewEl.classList.remove('has-image');
    }
}

function handleImagePick(key, inputEl) {
    var els = _imagePickerEls(key);
    var file = inputEl && inputEl.files && inputEl.files[0];
    if (!file) return;
    if (ALLOWED_IMG_TYPES.indexOf(file.type) === -1) {
        showToast(t('imageInvalidType'), 'error');
        inputEl.value = '';
        return;
    }
    if (file.size > MAX_IMG_BYTES) {
        showToast(t('imageTooLarge'), 'error');
        inputEl.value = '';
        return;
    }
    _imagePickerState[key] = { file: file, removed: false };
    var fallback = els.preview ? els.preview.dataset.fallback || '' : '';
    var url = URL.createObjectURL(file);
    _drawPreview(els.preview, url, fallback);
    if (els.remove) els.remove.hidden = false;
}

function clearImagePick(key) {
    var els = _imagePickerEls(key);
    if (els.file) els.file.value = '';
    _imagePickerState[key] = { file: null, removed: true };
    var fallback = els.preview ? els.preview.dataset.fallback || '' : '';
    _drawPreview(els.preview, null, fallback);
    if (els.remove) els.remove.hidden = true;
}

function resetImagePicker(key, currentImageUrl) {
    var els = _imagePickerEls(key);
    if (els.file) els.file.value = '';
    _imagePickerState[key] = { file: null, removed: false };
    if (els.preview && !els.preview.dataset.fallback) {
        // Snapshot the original SVG placeholder once so we can restore it on remove.
        els.preview.dataset.fallback = els.preview.innerHTML;
    }
    var fallback = els.preview ? els.preview.dataset.fallback : '';
    _drawPreview(els.preview, currentImageUrl || null, fallback);
    if (els.remove) els.remove.hidden = !currentImageUrl;
}

function getPickedFile(key) {
    var s = _imagePickerState[key];
    return s && s.file ? s.file : null;
}

function getStatus(qty, minStock) {
    if (qty === 0) return { cls: 'status-out', qcls: 'out', label: t('outOfStock'), icon: '<i class="fas fa-times-circle"></i>' };
    if (qty <= minStock) return { cls: 'status-low', qcls: 'low', label: t('lowStock'), icon: '<i class="fas fa-exclamation-triangle"></i>' };
    return { cls: 'status-ok', qcls: 'ok', label: t('inStock'), icon: '<i class="fas fa-check-circle"></i>' };
}

// Item condition: enum that travels with each warehouse_item
// ('new'|'used'|'damaged'|'maintenance'). Anything else falls back to 'new'
// so legacy or malformed values still render cleanly.
const ITEM_CONDITIONS = ['new', 'used', 'damaged', 'maintenance'];
function normalizeCondition(c) { return ITEM_CONDITIONS.indexOf(c) === -1 ? 'new' : c; }
function getConditionMeta(c) {
    var key = normalizeCondition(c);
    if (key === 'used')         return { key: 'used',        cls: 'cond-used',        label: t('conditionUsed'),        icon: '<i class="fas fa-history"></i>' };
    if (key === 'damaged')      return { key: 'damaged',     cls: 'cond-damaged',     label: t('conditionDamaged'),     icon: '<i class="fas fa-exclamation-triangle"></i>' };
    if (key === 'maintenance')  return { key: 'maintenance', cls: 'cond-maintenance', label: t('conditionMaintenance'), icon: '<i class="fas fa-wrench"></i>' };
    return                             { key: 'new',         cls: 'cond-new',         label: t('conditionNew'),         icon: '<i class="fas fa-star"></i>' };
}
function conditionBadgeHtml(c) {
    var m = getConditionMeta(c);
    return '<span class="condition-badge ' + m.cls + '" role="status" aria-label="' + escapeHtml(t('condition')) + ': ' + escapeHtml(m.label) + '">' +
        '<span class="condition-badge-icon" aria-hidden="true">' + m.icon + '</span>' +
        '<span class="condition-badge-label">' + escapeHtml(m.label) + '</span>' +
        '</span>';
}
// Active filter for the area-items modal. 'all' shows everything.
var currentConditionFilter = 'all';

function closeModal(id) {
    var el = document.getElementById(id);
    if (el) { el.classList.remove('active'); el.classList.remove('open'); }
    if (id === 'lockerModal') { currentLockerId = null; currentLockerData = null; highlightItemId = null; renderGrid(); }
    if (id === 'areaItemsModal') { currentAreaId = null; currentConditionFilter = 'all'; }
    if (id === 'covenantModal') { currentCovenantItemId = null; }
}

// ============ Theme & Language ============
function applyTheme() {
    document.documentElement.setAttribute('data-theme', currentTheme);
    var icon = document.getElementById('themeIcon');
    if (icon) icon.className = currentTheme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
}

function toggleTheme() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', currentTheme);
    applyTheme();
}

function applyLanguage() {
    var html = document.documentElement;
    html.lang = currentLang;
    html.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.body.style.fontFamily = currentLang === 'ar' ? "'Tajawal','Inter',sans-serif" : "'Inter',sans-serif";
    var langLabel = document.getElementById('langLabel');
    if (langLabel) langLabel.textContent = currentLang === 'en' ? 'AR' : 'EN';
    document.querySelectorAll('[data-i18n]').forEach(function(el) { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) { el.placeholder = t(el.dataset.i18nPlaceholder); });
    document.querySelectorAll('[data-i18n-title]').forEach(function(el) { el.title = t(el.dataset.i18nTitle); });
    document.querySelectorAll('[data-i18n-aria]').forEach(function(el) { el.setAttribute('aria-label', t(el.dataset.i18nAria)); });
}

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    localStorage.setItem('lang', currentLang);
    applyLanguage();
    // Re-render any page whose contents are produced by JS so dynamic strings
    // (table headers, status chips, list rows, button titles, etc.) refresh too.
    if (currentPage === 'home') loadHomeCounts();
    else if (currentPage === 'lockers') renderGrid();
    else if (currentPage === 'warehouse') renderWarehouse();
    else if (currentPage === 'departments') renderDepartments();
    else if (currentPage === 'employees') renderEmployees();
    else if (currentPage === 'dept-detail') renderDeptDetail();
    else if (currentPage === 'emp-detail') renderEmpDetail();
    else if (currentPage === 'users') renderUsers();
}

// ============ Sidebar ============
function toggleSidebar() {
    var sb = document.getElementById('sidebar');
    var overlay = document.getElementById('sidebarOverlay');
    var isMobile = window.innerWidth <= 1024;

    if (isMobile) {
        sb.classList.toggle('open');
        overlay.classList.toggle('open');
    } else {
        sb.classList.toggle('hidden');
        // Update margin for RTL
        var mc = document.querySelector('.main-content');
        var isRtl = document.documentElement.dir === 'rtl';
        if (sb.classList.contains('hidden')) {
            if (isRtl) mc.style.marginRight = '0';
            else mc.style.marginLeft = '0';
        } else {
            mc.style.marginLeft = '';
            mc.style.marginRight = '';
        }
    }
}

document.addEventListener('click', function(e) {
    var sb = document.getElementById('sidebar');
    if (sb.classList.contains('open') && !e.target.closest('.sidebar') && !e.target.closest('.sidebar-toggle') && !e.target.closest('.topbar-hamburger')) {
        sb.classList.remove('open');
        document.getElementById('sidebarOverlay').classList.remove('open');
    }
});

// ============ Navigation ============
function persistNavState() {
    try {
        var state = {
            page: currentPage,
            deptId: currentDeptId,
            empId: currentEmpId,
            zoneId: currentZoneId,
            deptTab: currentDeptTab,
        };
        localStorage.setItem('navState', JSON.stringify(state));
    } catch (e) {}
}

function navigateTo(page) {
    document.querySelectorAll('.page').forEach(function(p) { p.classList.remove('active'); });
    var pageEl = document.getElementById('page-' + page);
    if (pageEl) pageEl.classList.add('active');
    currentPage = page;
    persistNavState();

    // Update sidebar active state
    document.querySelectorAll('.sidebar-link').forEach(function(l) { l.classList.remove('active'); });
    var link = document.querySelector('.sidebar-link[data-page="' + page + '"]');
    if (link) link.classList.add('active');
    // For sub-pages, highlight parent
    if (page === 'dept-detail') {
        var deptLink = document.querySelector('.sidebar-link[data-page="departments"]');
        if (deptLink) deptLink.classList.add('active');
    }
    if (page === 'emp-detail') {
        var empLink = document.querySelector('.sidebar-link[data-page="employees"]');
        if (empLink) empLink.classList.add('active');
    }

    updateAddBtnVisibility();

    // Update alert count globally on every navigation
    updateAlertBadge();

    if (page === 'lockers') {
        document.getElementById('addBtnText').textContent = t('addLocker');
        applyLockerLayout();
        renderGrid();
    } else if (page === 'warehouse') {
        document.getElementById('addBtnText').textContent = t('addZone');
        renderWarehouse();
    } else if (page === 'departments') {
        document.getElementById('addBtnText').textContent = t('addDepartment');
        renderDepartments();
    } else if (page === 'employees') {
        document.getElementById('addBtnText').textContent = t('addEmployee');
        renderEmployees();
    } else if (page === 'home') {
        loadHomeCounts();
    } else if (page === 'dept-detail') {
        renderDeptDetail();
    } else if (page === 'emp-detail') {
        renderEmpDetail();
    } else if (page === 'users') {
        renderUsers();
    }

    // Update page title
    var titles = {
        home: 'FABY Keeper',
        lockers: t('lockers'),
        warehouse: t('warehouse'),
        departments: t('departments'),
        employees: t('employees'),
        'dept-detail': t('departments'),
        'emp-detail': t('employees'),
        users: 'Users'
    };
    var pageTitleEl = document.getElementById('pageTitle');
    if (pageTitleEl) pageTitleEl.textContent = titles[page] || 'FABY Keeper';

    applyLanguage();

    // Close mobile drawer on navigate
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sidebarOverlay').classList.remove('open');
}

function handleAddBtn() {
    if (currentPage === 'lockers') openAddLockerModal();
    else if (currentPage === 'warehouse') openAddZoneModal();
    else if (currentPage === 'departments') openAddDeptModal();
    else if (currentPage === 'employees') openAddEmpModal();
}

async function loadHomeCounts() {
    try {
        var results = await Promise.all([API.getLockers(), API.getZones(), API.getDepartments(), API.getEmployees()]);
        var lockers = results[0], zones = results[1], depts = results[2], emps = results[3];
        document.getElementById('homeLockerCount').textContent = lockers.length + ' ' + t('lockers');
        document.getElementById('homeWarehouseCount').textContent = zones.length + ' ' + t('zones');
        document.getElementById('homeDeptCount').textContent = depts.length + ' ' + t('departments');
        document.getElementById('homeEmpCount').textContent = emps.length + ' ' + t('employees');
    } catch (e) { /* ignore */ }
}

// ============ Image Viewer ============
function openImageViewer(src) {
    document.getElementById('imageViewerImg').src = src;
    document.getElementById('imageViewer').classList.add('active');
}
function closeImageViewer() { document.getElementById('imageViewer').classList.remove('active'); }

// ============ Deep Search (single endpoint, abort + debounce) ============
// One in-flight request at a time per search box, cancelled on next keystroke.
// 300ms debounce keeps the DB cool while feeling responsive.
var _searchAbort = null;

function _renderSearchLoading(container) {
    container.style.display = 'block';
    container.classList.add('open');
    container.innerHTML = '<div class="search-empty"><i class="fas fa-spinner fa-spin"></i> ' + t('loading') + '</div>';
}
function _renderSearchEmpty(container) {
    container.style.display = 'none';
    container.classList.remove('open');
    container.innerHTML = '';
}
async function _runSearch(value, container, render) {
    var v = (value || '').trim();
    if (!v) return _renderSearchEmpty(container);
    _renderSearchLoading(container);
    if (_searchAbort) { try { _searchAbort.abort(); } catch (_) {} }
    var ctrl = new AbortController();
    _searchAbort = ctrl;
    try {
        var res = await fetch('/api/search?q=' + encodeURIComponent(v), { credentials: 'same-origin', signal: ctrl.signal });
        if (!res.ok) throw new Error('Search failed');
        var data = await res.json();
        if (ctrl.signal.aborted) return;
        render(container, data, v);
    } catch (e) {
        if (e.name === 'AbortError') return;
        container.innerHTML = '<div class="search-empty">' + t('failedLoad') + '</div>';
    }
}

// ============ Global Search (Sidebar) ============
function handleGlobalSearch(value) {
    clearTimeout(searchTimeout);
    var results = document.getElementById('sidebarSearchResults');
    if (!value.trim()) { _renderSearchEmpty(results); return; }
    searchTimeout = setTimeout(function() {
        _runSearch(value, results, function(c, data) { renderSearchResults(c, data, true); });
    }, 300);
}

// ============ Page-specific searches ============
function handleLockerSearch(value) {
    clearTimeout(searchTimeout);
    var results = document.getElementById('lockerSearchResults');
    if (!value.trim()) { _renderSearchEmpty(results); return; }
    searchTimeout = setTimeout(function() {
        _runSearch(value, results, function(c, data) { renderSearchResults(c, { lockers: data.lockers, items: data.items }, false); });
    }, 300);
}

function handleWarehouseSearch(value) {
    clearTimeout(searchTimeout);
    var results = document.getElementById('warehouseSearchResults');
    if (!value.trim()) { _renderSearchEmpty(results); return; }
    searchTimeout = setTimeout(function() {
        _runSearch(value, results, function(c, data) {
            renderSearchResults(c, { zones: data.zones, areas: data.areas, warehouse_items: data.warehouse_items }, false);
        });
    }, 300);
}

function handleDeptSearch(value) {
    clearTimeout(searchTimeout);
    var results = document.getElementById('deptSearchResults');
    if (!value.trim()) { _renderSearchEmpty(results); return; }
    searchTimeout = setTimeout(function() {
        _runSearch(value, results, function(c, data) { renderSearchResults(c, { departments: data.departments }, false); });
    }, 300);
}

function handleEmpSearch(value) {
    clearTimeout(searchTimeout);
    var results = document.getElementById('empSearchResults');
    if (!value.trim()) { _renderSearchEmpty(results); return; }
    searchTimeout = setTimeout(function() {
        _runSearch(value, results, function(c, data) { renderSearchResults(c, { employees: data.employees }, false); });
    }, 300);
}

function renderSearchResults(container, data, isGlobal) {
    container.innerHTML = '';
    var hasResults = false;

    if (data.lockers && data.lockers.length > 0) {
        hasResults = true;
        container.innerHTML += '<div class="search-section-title">' + t('lockers') + '</div>';
        data.lockers.forEach(function(l) {
            container.innerHTML += '<div class="search-item" onclick="pickSearchResult(this);navigateTo(\'lockers\');setTimeout(function(){openLockerModal(' + l.id + ')},200)"><i class="fas fa-box-open"></i><div class="search-item-text"><div class="search-item-name">' + t('locker') + ' ' + l.id + (l.name ? ' - ' + escapeHtml(l.name) : '') + '</div><div class="search-item-sub">' + Number(l.item_count || 0) + ' ' + t('items') + '</div></div></div>';
        });
    }
    if (data.items && data.items.length > 0) {
        hasResults = true;
        container.innerHTML += '<div class="search-section-title">' + t('allItems') + '</div>';
        data.items.forEach(function(item) {
            container.innerHTML += '<div class="search-item" onclick="pickSearchResult(this);highlightItemId=' + item.id + ';navigateTo(\'lockers\');setTimeout(function(){openLockerModal(' + item.locker_id + ')},200)"><i class="fas fa-cube"></i><div class="search-item-text"><div class="search-item-name">' + escapeHtml(item.name) + '</div><div class="search-item-sub">' + t('locker') + ' ' + item.locker_id + ' &middot; ' + t('qty') + ': ' + Number(item.qty) + '</div></div></div>';
        });
    }
    if (data.zones && data.zones.length > 0) {
        hasResults = true;
        container.innerHTML += '<div class="search-section-title">' + t('zones') + '</div>';
        data.zones.forEach(function(z) {
            container.innerHTML += '<div class="search-item" onclick="pickSearchResult(this);openZoneFromSearch(' + z.id + ')">' +
                '<svg class="wh-svg-icon wh-svg-zone" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 11.5L12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"/></svg>' +
                '<div class="search-item-text"><div class="search-item-name">' + escapeHtml(z.name) +
                ' <span class="search-level-badge level-warehouse">' + t('zone') + '</span></div>' +
                '<div class="search-item-sub">' + escapeHtml(z.location || z.description || '') + '</div></div></div>';
        });
    }
    if (data.areas && data.areas.length > 0) {
        hasResults = true;
        container.innerHTML += '<div class="search-section-title">' + t('areas') + '</div>';
        data.areas.forEach(function(a) {
            container.innerHTML += '<div class="search-item" onclick="pickSearchResult(this);openAreaFromSearch(' + a.zone_id + ',' + a.id + ',\'' + escapeHtml(a.name).replace(/\'/g, "\\\'") + '\')">' +
                '<svg class="wh-svg-icon wh-svg-area" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z"/></svg>' +
                '<div class="search-item-text"><div class="search-item-name">' + escapeHtml(a.name) +
                ' <span class="search-level-badge level-area">' + t('area') + '</span></div>' +
                '<div class="search-item-sub">' + escapeHtml(a.zone_name || '') + ' &rsaquo; ' + escapeHtml(a.name) + '</div></div></div>';
        });
    }
    if (data.warehouse_items && data.warehouse_items.length > 0) {
        hasResults = true;
        container.innerHTML += '<div class="search-section-title">' + t('items') + '</div>';
        data.warehouse_items.forEach(function(wi) {
            var path = escapeHtml(wi.zone_name || '') + (wi.area_name ? ' &rsaquo; ' + escapeHtml(wi.area_name) : '') + ' &rsaquo; ' + escapeHtml(wi.name);
            container.innerHTML += '<div class="search-item" onclick="pickSearchResult(this);openWarehouseItemFromSearch(' + wi.zone_id + ',' + (wi.area_id || 'null') + ',\'' + escapeHtml(wi.area_name || '').replace(/\'/g, "\\\'") + '\')">' +
                '<svg class="wh-svg-icon wh-svg-item" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l9 5v10l-9 5-9-5V7zM12 4.2L5 8v8l7 3.8 7-3.8V8z"/><path d="M12 8.5l3.5 1.9v3.2L12 15.5l-3.5-1.9V10.4z"/></svg>' +
                '<div class="search-item-text"><div class="search-item-name">' + escapeHtml(wi.name) +
                ' <span class="search-level-badge level-item">' + t('itemName') + '</span></div>' +
                '<div class="search-item-sub">' + path + ' &middot; ' + t('qty') + ': ' + Number(wi.qty) + '</div></div></div>';
        });
    }
    if (data.employees && data.employees.length > 0) {
        hasResults = true;
        container.innerHTML += '<div class="search-section-title">' + t('employees') + '</div>';
        data.employees.forEach(function(emp) {
            container.innerHTML += '<div class="search-item" onclick="pickSearchResult(this);currentEmpId=' + emp.id + ';navigateTo(\'emp-detail\')"><i class="fas fa-user-tie"></i><div class="search-item-text"><div class="search-item-name">' + escapeHtml(emp.name) + '</div><div class="search-item-sub">' + escapeHtml(emp.job_title || '') + (emp.department_name ? ' &middot; ' + escapeHtml(emp.department_name) : '') + '</div></div></div>';
        });
    }
    if (data.departments && data.departments.length > 0) {
        hasResults = true;
        container.innerHTML += '<div class="search-section-title">' + t('departments') + '</div>';
        data.departments.forEach(function(d) {
            container.innerHTML += '<div class="search-item" onclick="pickSearchResult(this);currentDeptId=' + d.id + ';navigateTo(\'dept-detail\')"><i class="fas fa-building"></i><div class="search-item-text"><div class="search-item-name">' + escapeHtml(d.name) + '</div><div class="search-item-sub">' + (d.manager ? escapeHtml(d.manager) : '') + '</div></div></div>';
        });
    }

    if (!hasResults) {
        container.innerHTML = '<div class="search-empty">' + t('noResults') + '</div>';
    }
    container.style.display = 'block';
}

function pickSearchResult(el) {
    document.querySelectorAll('.search-item.search-active').forEach(function(s) { s.classList.remove('search-active'); });
    el.classList.add('search-active');
    setTimeout(function() {
        var parent = el.closest('.sidebar-search-results,.page-search-results');
        if (parent) parent.style.display = 'none';
        document.querySelectorAll('.search-item.search-active').forEach(function(s) { s.classList.remove('search-active'); });
    }, 600);
}

// Close search results on outside click
document.addEventListener('click', function(e) {
    if (!e.target.closest('.sidebar-search')) {
        var sr = document.getElementById('sidebarSearchResults');
        if (sr) sr.style.display = 'none';
    }
    if (!e.target.closest('.page-search-box')) {
        document.querySelectorAll('.page-search-results').forEach(function(r) { r.style.display = 'none'; });
    }
});

// ============ Lockers ============
function updateStats(lockers) {
    document.getElementById('statLockers').textContent = lockers.length;
    var stockEl = document.getElementById('statStock');
    if (stockEl) stockEl.textContent = lockers.reduce(function(s, l) { return s + Number(l.total_qty); }, 0);
    document.getElementById('statAlerts').textContent = lockers.reduce(function(s, l) { return s + Number(l.low_stock_count); }, 0);
}

// ----- Layout (rows × columns) -----
function applyLockerLayout() {
    var grid = document.getElementById('lockerGrid');
    if (!grid) return;
    var cols = parseInt(localStorage.getItem('lockerCols')) || 0;
    var rows = parseInt(localStorage.getItem('lockerRows')) || 0;
    if (cols > 0) {
        grid.style.gridTemplateColumns = 'repeat(' + cols + ', minmax(0, 1fr))';
    } else {
        grid.style.gridTemplateColumns = '';
    }
    if (rows > 0) {
        grid.style.gridAutoRows = 'minmax(0, 1fr)';
        grid.style.gridTemplateRows = 'repeat(' + rows + ', minmax(0, 1fr))';
    } else {
        grid.style.gridTemplateRows = '';
    }
    grid.classList.toggle('custom-layout', cols > 0 || rows > 0);
    var ci = document.getElementById('lockerColsInput');
    var ri = document.getElementById('lockerRowsInput');
    if (ci && document.activeElement !== ci) ci.value = cols || '';
    if (ri && document.activeElement !== ri) ri.value = rows || '';
}

function setLockerLayout() {
    var c = parseInt(document.getElementById('lockerColsInput').value) || 0;
    var r = parseInt(document.getElementById('lockerRowsInput').value) || 0;
    localStorage.setItem('lockerCols', c);
    localStorage.setItem('lockerRows', r);
    applyLockerLayout();
}

function resetLockerLayout() {
    localStorage.removeItem('lockerCols');
    localStorage.removeItem('lockerRows');
    var ci = document.getElementById('lockerColsInput'); if (ci) ci.value = '';
    var ri = document.getElementById('lockerRowsInput'); if (ri) ri.value = '';
    applyLockerLayout();
}

async function renderGrid() {
    var grid = document.getElementById('lockerGrid');
    try {
        var lockers = await API.getLockers();
        grid.innerHTML = '';
        updateStats(lockers);
        if (lockers.length === 0) {
            grid.innerHTML = '<div class="empty-state" style="grid-column:1/-1"><i class="fas fa-box-open"></i><p>' + t('noLockers') + '</p></div>';
            updateAlertBadge();
            return;
        }
        lockers.forEach(function(locker) {
            var hasAlert = Number(locker.low_stock_count) > 0;
            var ic = Number(locker.item_count), tq = Number(locker.total_qty);
            var card = document.createElement('div');
            card.className = 'locker-card' + (hasAlert ? ' has-alert' : '') + (locker.image ? ' has-image' : '');
            card.onclick = function() { openLockerModal(locker.id); };
            var visualInner = locker.image
                ? '<div class="locker-img-wrap"><img src="' + escapeHtml(locker.image) + '" alt="" onerror="this.parentElement.innerHTML=\'<i class=\\\'fas fa-box-open\\\'></i>\'"></div>'
                : '<div class="locker-number">' + locker.id + '</div>';
            var displayName = locker.name ? (locker.name + ' #' + locker.id) : (t('locker') + ' #' + locker.id);
            card.innerHTML = '<button class="btn-icon locker-delete-btn" onclick="event.stopPropagation();deleteLocker(' + locker.id + ')" title="' + t('deleteBtn') + '" aria-label="' + t('deleteBtn') + '"><i class="fas fa-trash-alt"></i></button>' +
                '<button class="btn-icon locker-edit-btn" onclick="event.stopPropagation();openEditLockerModal(' + locker.id + ')" title="' + t('editBtn') + '" aria-label="' + t('editBtn') + '"><i class="fas fa-pen"></i></button>' +
                '<div class="locker-visual"><div class="locker-door">' + visualInner + '<div class="locker-handle"></div></div></div>' +
                '<div class="locker-info"><div class="locker-name">' + escapeHtml(displayName) + '</div>' +
                (locker.description ? '<div class="locker-desc">' + escapeHtml(locker.description) + '</div>' : '') +
                '<div class="locker-stock-count"><i class="fas fa-box"></i> ' + ic + ' ' + t('items') + ' &middot; ' + tq + ' ' + t('pcs') + '</div>' +
                '<div class="locker-progress"><div class="locker-progress-bar ' + (hasAlert ? 'bar-alert' : 'bar-ok') + '" style="width:' + (ic > 0 ? Math.min(100, Math.round(tq / (ic * 5) * 100)) : 100) + '%"></div></div></div>';
            grid.appendChild(card);
        });
        applyLockerLayout();
        updateAlertBadge();
    } catch (e) {
        grid.innerHTML = '<div class="empty-state" style="grid-column:1/-1"><p>' + t('failedLoad') + '</p></div>';
    }
}

async function updateAlertBadge() {
    try {
        var s = await API.getAlertSummary();
        var total = Number(s.total_alerts), lk = Number(s.lockers_affected);
        document.getElementById('alertCount').textContent = total;
        var banner = document.getElementById('alertBanner');
        if (total > 0 && currentPage === 'lockers') {
            banner.style.display = 'flex';
            document.getElementById('alertText').textContent = t('itemsRunningLow').replace('{count}', total).replace('{lockers}', lk);
        } else {
            banner.style.display = 'none';
        }
    } catch (e) { /* ignore */ }
}

function dismissAlertBanner() { document.getElementById('alertBanner').style.display = 'none'; }

async function openLockerModal(id) {
    currentLockerId = id;
    try {
        currentLockerData = await API.getLocker(id);
        document.getElementById('modalLockerName').textContent = currentLockerData.name || t('locker') + ' ' + currentLockerData.id;
        renderItems();
        document.getElementById('lockerModal').classList.add('active');
    } catch (e) { showToast(t('failedLoad'), 'error'); }
}

function closeLockerModal() {
    document.getElementById('lockerModal').classList.remove('active');
    currentLockerId = null;
    currentLockerData = null;
    highlightItemId = null;
    renderGrid();
}

function switchLockerView(v) {
    currentView = v;
    document.getElementById('listViewBtn').classList.toggle('active', v === 'list');
    document.getElementById('gridViewBtn').classList.toggle('active', v === 'grid');
    document.getElementById('listView').classList.toggle('active', v === 'list');
    document.getElementById('gridView').classList.toggle('active', v === 'grid');
    renderItems();
}
// alias
function switchView(v) { switchLockerView(v); }

function renderItems() {
    if (!currentLockerData) return;
    var items = currentLockerData.items || [];
    var dir = currentLang === 'ar' ? 'right' : 'left';

    // List view (card-based)
    var listEl = document.getElementById('itemsTableBody');
    listEl.innerHTML = '';
    if (items.length === 0) {
        listEl.innerHTML = '<div class="empty-state"><i class="fas fa-box-open"></i><p>' + t('noItems') + '</p></div>';
    } else {
        items.forEach(function(item, idx) {
            var q = Number(item.qty), ms = Number(item.min_stock), status = getStatus(q, ms);
            var hl = highlightItemId == item.id ? ' lk-hl' : '';
            var pct = ms > 0 ? Math.min(100, Math.round((q / (ms * 3)) * 100)) : 100;
            var card = document.createElement('div');
            card.className = 'lk-item' + hl;
            card.style.animationDelay = (idx * 0.05) + 's';
            card.innerHTML =
                '<div class="lk-item-color-bar ' + status.qcls + '"></div>' +
                '<div class="lk-item-img"' + (item.image ? ' onclick="openImageViewer(\'' + escapeHtml(item.image) + '\')" style="cursor:pointer"' : '') + '>' +
                    (item.image ? '<img src="' + escapeHtml(item.image) + '" onerror="this.parentElement.innerHTML=\'<i class=\\\'fas fa-cube\\\'></i>\'">' : '<i class="fas fa-cube"></i>') +
                '</div>' +
                '<div class="lk-item-body">' +
                    '<div class="lk-item-top-row">' +
                        '<input type="text" class="lk-item-name" style="text-align:' + dir + '" value="' + escapeHtml(item.name) + '" onchange="updateItem(' + item.id + ',{name:this.value})">' +
                        '<span class="lk-item-status ' + status.qcls + '">' + status.icon + ' ' + status.label + '</span>' +
                    '</div>' +
                    '<input type="text" class="lk-item-desc" style="text-align:' + dir + '" value="' + escapeHtml(item.description || '') + '" placeholder="' + t('descriptionPlaceholder') + '" onchange="updateItem(' + item.id + ',{description:this.value})">' +
                    '<div class="lk-item-meters">' +
                        '<div class="lk-item-meter">' +
                            '<span class="lk-meter-label"><i class="fas fa-cubes"></i> ' + t('stock') + '</span>' +
                            '<input type="number" class="lk-meter-input" min="0" value="' + q + '" onchange="updateItem(' + item.id + ',{qty:parseInt(this.value)})">' +
                        '</div>' +
                        '<div class="lk-item-meter">' +
                            '<span class="lk-meter-label"><i class="fas fa-shield-alt"></i> ' + t('minStock') + '</span>' +
                            '<input type="number" class="lk-meter-input" min="0" value="' + ms + '" onchange="updateItem(' + item.id + ',{min_stock:parseInt(this.value)})">' +
                        '</div>' +
                        '<div class="lk-item-bar-wrap"><div class="lk-item-bar ' + status.qcls + '" style="width:' + pct + '%"></div></div>' +
                    '</div>' +
                '</div>' +
                '<div class="lk-item-actions">' +
                    '<button class="lk-act lk-act-plus" onclick="changeQty(' + item.id + ',1)" title="+1"><i class="fas fa-plus"></i></button>' +
                    '<button class="lk-act lk-act-minus" onclick="changeQty(' + item.id + ',-1)" title="-1"><i class="fas fa-minus"></i></button>' +
                    '<label class="lk-act lk-act-cam" title="Image"><i class="fas fa-camera"></i><input type="file" accept="image/*" style="display:none" onchange="uploadItemImage(' + item.id + ',this.files[0])"></label>' +
                    '<button class="lk-act lk-act-move" title="' + t('moveItem') + '" onclick="openMoveItemModal(' + item.id + ',\'' + escapeHtml(item.name).replace(/\\/g,"\\\\").replace(/'/g,"\\'") + '\')"><i class="fas fa-dolly"></i></button>' +
                    '<button class="lk-act lk-act-del" onclick="removeItem(' + item.id + ')"><i class="fas fa-trash-alt"></i></button>' +
                '</div>';
            listEl.appendChild(card);
        });
    }

    // Grid view
    var gridEl = document.getElementById('itemsGrid');
    gridEl.innerHTML = '';
    if (items.length === 0) {
        gridEl.innerHTML = '<div class="empty-state" style="grid-column:1/-1"><i class="fas fa-box-open"></i><p>' + t('noItems') + '</p></div>';
    } else {
        items.forEach(function(item, idx) {
            var q = Number(item.qty), ms = Number(item.min_stock), status = getStatus(q, ms);
            var hl = highlightItemId == item.id ? ' highlighted' : '';
            var card = document.createElement('div');
            card.className = 'item-card-v2' + hl;
            card.style.animationDelay = (idx * 0.06) + 's';
            card.innerHTML =
                '<div class="item-v2-toolbar">' +
                    '<button class="item-v2-tool item-v2-tool-move" title="' + t('moveItem') + '" onclick="openMoveItemModal(' + item.id + ',\'' + escapeHtml(item.name).replace(/\\/g,"\\\\").replace(/'/g,"\\'") + '\')"><i class="fas fa-dolly"></i></button>' +
                    '<button class="item-v2-tool item-v2-tool-delete" onclick="removeItem(' + item.id + ')"><i class="fas fa-trash-alt"></i></button>' +
                '</div>' +
                '<div class="item-v2-visual"' + (item.image ? ' onclick="openImageViewer(\'' + escapeHtml(item.image) + '\')" style="cursor:pointer"' : '') + '>' +
                    (item.image ? '<img src="' + escapeHtml(item.image) + '" onerror="this.parentElement.innerHTML=\'<i class=\\\'fas fa-cube\\\'></i>\'">' : '<i class="fas fa-cube"></i>') +
                    '<div class="item-v2-status-dot ' + status.qcls + '"></div>' +
                '</div>' +
                '<input type="text" class="item-v2-name" value="' + escapeHtml(item.name) + '" onchange="updateItem(' + item.id + ',{name:this.value})">' +
                (item.description ? '<div class="item-v2-desc">' + escapeHtml(item.description) + '</div>' : '') +
                '<div class="item-v2-qty-ring">' +
                    '<button class="item-v2-qty-btn" onclick="changeQty(' + item.id + ',-1)"><i class="fas fa-minus"></i></button>' +
                    '<div class="item-v2-qty-display ' + status.qcls + '">' + q + '</div>' +
                    '<button class="item-v2-qty-btn" onclick="changeQty(' + item.id + ',1)"><i class="fas fa-plus"></i></button>' +
                '</div>' +
                '<div class="item-v2-footer">' +
                    '<div class="item-v2-min">' + t('minStock') + ': <input type="number" value="' + ms + '" min="0" class="stock-input" onchange="updateItem(' + item.id + ',{min_stock:parseInt(this.value)})"></div>' +
                    '<label class="item-v2-upload" title="Upload"><i class="fas fa-camera"></i><input type="file" accept="image/*" style="display:none" onchange="uploadItemImage(' + item.id + ',this.files[0])"></label>' +
                '</div>' +
                '<div class="item-v2-label ' + status.qcls + '">' + status.icon + ' ' + status.label + '</div>';
            gridEl.appendChild(card);
        });
    }

    if (highlightItemId) setTimeout(function() { highlightItemId = null; }, 4000);
}

// ============ Item CRUD ============
async function updateItem(id, data) {
    // Optimistic local patch — input DOM already reflects the value
    if (currentLockerData && Array.isArray(currentLockerData.items)) {
        var it = currentLockerData.items.find(function(x){ return x.id === id; });
        if (it) Object.assign(it, data);
    }
    try { await API.updateItem(id, data); }
    catch (e) { showToast(e.message, 'error'); currentLockerData = await API.getLocker(currentLockerId); renderItems(); }
}

async function addItem() {
    var name = document.getElementById('newItemName').value.trim();
    if (!name) { document.getElementById('newItemName').focus(); return; }
    try {
        var newItem = await API.addItem(currentLockerId, {
            name: name,
            qty: Math.max(0, parseInt(document.getElementById('newItemQty').value) || 0),
            min_stock: parseInt(document.getElementById('newItemMin').value) || 5,
            description: document.getElementById('newItemDesc').value.trim()
        });
        var fileInput = document.getElementById('newItemFile');
        if (fileInput.files[0]) {
            var updated = await API.uploadImage(newItem.id, fileInput.files[0]);
            if (updated) Object.assign(newItem, updated);
        }
        // Push to local state, no refetch
        if (currentLockerData) {
            currentLockerData.items = (currentLockerData.items || []).concat([newItem]);
        }
        renderItems();
        showToast(t('added') + ' "' + name + '"');
        document.getElementById('newItemName').value = '';
        document.getElementById('newItemQty').value = '1';
        document.getElementById('newItemMin').value = '5';
        document.getElementById('newItemDesc').value = '';
        fileInput.value = '';
    } catch (e) { showToast(e.message, 'error'); }
}

async function removeItem(id) {
    // Optimistic delete
    var prev = currentLockerData && currentLockerData.items ? currentLockerData.items.slice() : null;
    if (currentLockerData && currentLockerData.items) {
        currentLockerData.items = currentLockerData.items.filter(function(x){ return x.id !== id; });
        renderItems();
    }
    try { await API.deleteItem(id); showToast(t('itemRemoved')); }
    catch (e) { showToast(e.message, 'error'); if (prev) { currentLockerData.items = prev; renderItems(); } }
}

async function changeQty(id, delta) {
    // Optimistic qty bump
    var target = null;
    if (currentLockerData && currentLockerData.items) {
        target = currentLockerData.items.find(function(x){ return x.id === id; });
        if (target) { target.qty = Math.max(0, Number(target.qty || 0) + delta); renderItems(); }
    }
    try { await API.changeQty(id, delta); }
    catch (e) {
        showToast(e.message, 'error');
        if (target) { target.qty = Math.max(0, Number(target.qty || 0) - delta); renderItems(); }
    }
}

async function uploadItemImage(id, file) {
    if (!file) return;
    try {
        await API.uploadImage(id, file);
        currentLockerData = await API.getLocker(currentLockerId);
        renderItems();
        showToast(t('imageUploaded'));
    } catch (e) { showToast(e.message, 'error'); }
}

async function editLockerName() {
    if (!currentLockerData) return;
    var n = prompt(t('enterLockerName'), currentLockerData.name || '');
    if (n === null) return;
    try {
        await API.updateLocker(currentLockerId, { name: n.trim() });
        currentLockerData = await API.getLocker(currentLockerId);
        document.getElementById('modalLockerName').textContent = currentLockerData.name || t('locker') + ' ' + currentLockerData.id;
        showToast(t('lockerNameUpdated'));
    } catch (e) { showToast(e.message, 'error'); }
}

function openAddLockerModal() {
    document.getElementById('newLockerNumber').value = '';
    document.getElementById('newLockerName').value = '';
    var d = document.getElementById('newLockerDesc'); if (d) d.value = '';
    var f = document.getElementById('newLockerFile'); if (f) f.value = '';
    document.getElementById('addLockerModal').classList.add('active');
}

function closeAddLockerModal() { document.getElementById('addLockerModal').classList.remove('active'); }

async function saveNewLocker() {
    var num = parseInt(document.getElementById('newLockerNumber').value);
    if (!num || num < 1) { document.getElementById('newLockerNumber').focus(); return; }
    try {
        var created = await API.createLocker({
            id: num,
            name: document.getElementById('newLockerName').value.trim(),
            description: (document.getElementById('newLockerDesc') || {}).value || ''
        });
        var fi = document.getElementById('newLockerFile');
        if (fi && fi.files && fi.files[0]) {
            try { await API.uploadLockerImage(created.id, fi.files[0]); } catch (e) {}
        }
        showToast(t('lockerAdded') + ' ' + num);
        closeAddLockerModal();
        renderGrid();
    } catch (e) { showToast(e.message, 'error'); }
}

// ============ Edit Locker ============
let editingLockerId = null;
async function openEditLockerModal(id) {
    try {
        var locker = await API.getLocker(id);
        editingLockerId = id;
        document.getElementById('editLockerNumber').value = locker.id;
        document.getElementById('editLockerName').value = locker.name || '';
        document.getElementById('editLockerDesc').value = locker.description || '';
        var img = document.getElementById('editLockerImage');
        img.innerHTML = locker.image
            ? '<img src="' + escapeHtml(locker.image) + '" alt="">'
            : '<i class="fas fa-box-open"></i>';
        var fi = document.getElementById('editLockerFile'); if (fi) fi.value = '';
        document.getElementById('editLockerModal').classList.add('active');
    } catch (e) { showToast(e.message, 'error'); }
}

function onEditLockerFile(input) {
    if (!input.files || !input.files[0]) return;
    var reader = new FileReader();
    reader.onload = function(ev) {
        document.getElementById('editLockerImage').innerHTML = '<img src="' + ev.target.result + '" alt="">';
    };
    reader.readAsDataURL(input.files[0]);
}

async function saveEditLocker() {
    if (!editingLockerId) return;
    var newNum = parseInt(document.getElementById('editLockerNumber').value);
    var name = document.getElementById('editLockerName').value.trim();
    var desc = document.getElementById('editLockerDesc').value.trim();
    if (!newNum || newNum < 1) { document.getElementById('editLockerNumber').focus(); return; }
    try {
        var payload = { name: name, description: desc };
        if (Number(newNum) !== Number(editingLockerId)) payload.new_id = newNum;
        var updated = await API.updateLocker(editingLockerId, payload);
        var newId = updated && updated.id ? updated.id : newNum;
        var fi = document.getElementById('editLockerFile');
        if (fi && fi.files && fi.files[0]) {
            try { await API.uploadLockerImage(newId, fi.files[0]); } catch (e) {}
        }
        showToast(t('lockerNameUpdated'));
        closeModal('editLockerModal');
        editingLockerId = null;
        renderGrid();
    } catch (e) { showToast(e.message, 'error'); }
}

// ============ Move Item ============
let movingItemId = null;
let moveTargetLockerId = null;
async function openMoveItemModal(itemId, itemName) {
    movingItemId = itemId;
    moveTargetLockerId = null;
    document.getElementById('moveItemInfo').innerHTML =
        '<i class="fas fa-cube"></i> <strong>' + escapeHtml(itemName) + '</strong>';
    var grid = document.getElementById('moveLockerGrid');
    grid.innerHTML = '<div class="loading-spinner"><i class="fas fa-spinner fa-spin"></i></div>';
    document.getElementById('moveItemModal').classList.add('active');
    try {
        var lockers = await API.getLockers();
        grid.innerHTML = '';
        lockers.forEach(function(l) {
            var disabled = Number(l.id) === Number(currentLockerId);
            var cell = document.createElement('div');
            cell.className = 'move-locker-cell' + (disabled ? ' disabled' : '');
            cell.innerHTML = (l.image
                ? '<div class="move-locker-img"><img src="' + escapeHtml(l.image) + '" alt=""></div>'
                : '<div class="move-locker-num">' + l.id + '</div>') +
                '<div class="move-locker-name">' + escapeHtml(l.name || (t('locker') + ' ' + l.id)) + '</div>';
            if (!disabled) {
                cell.onclick = function() {
                    moveTargetLockerId = l.id;
                    grid.querySelectorAll('.move-locker-cell').forEach(function(c) { c.classList.remove('selected'); });
                    cell.classList.add('selected');
                };
            }
            grid.appendChild(cell);
        });
    } catch (e) {
        grid.innerHTML = '<div class="empty-state">' + t('failedLoad') + '</div>';
    }
}

async function confirmMoveItem() {
    if (!movingItemId || !moveTargetLockerId) {
        showToast(t('selectTargetLocker') || 'Select target cabinet', 'warning');
        return;
    }
    try {
        await API.moveItem(movingItemId, moveTargetLockerId);
        showToast(t('itemMoved') || 'Item moved');
        closeModal('moveItemModal');
        movingItemId = null;
        moveTargetLockerId = null;
        if (currentLockerId) {
            currentLockerData = await API.getLocker(currentLockerId);
            renderItems();
        }
        renderGrid();
    } catch (e) { showToast(e.message, 'error'); }
}

// ============ All Cabinet Items ============
async function showAllCabinetItems() {
    var body = document.getElementById('allCabinetItemsBody');
    body.innerHTML = '<div class="loading-spinner"><i class="fas fa-spinner fa-spin"></i> ' + t('loading') + '</div>';
    document.getElementById('allCabinetItemsModal').classList.add('active');
    try {
        var items = await API.getAllItems();
        if (!items.length) {
            body.innerHTML = '<div class="empty-state"><i class="fas fa-box-open"></i><p>' + t('noItems') + '</p></div>';
            return;
        }
        // Group by locker
        var groups = {};
        items.forEach(function(it) {
            var k = it.locker_id;
            if (!groups[k]) groups[k] = { locker_id: k, locker_name: it.locker_name, items: [] };
            groups[k].items.push(it);
        });
        body.innerHTML = '';
        Object.keys(groups).sort(function(a,b){return Number(a)-Number(b);}).forEach(function(k) {
            var g = groups[k];
            var section = document.createElement('div');
            section.className = 'all-cab-section';
            var inner = '<div class="all-cab-section-header"><i class="fas fa-box-open"></i> ' +
                '<span class="all-cab-section-name">' + t('locker') + ' ' + g.locker_id + (g.locker_name ? ' · ' + escapeHtml(g.locker_name) : '') + '</span>' +
                '<span class="all-cab-section-count">' + g.items.length + ' ' + t('items') + '</span>' +
                '<button class="btn-icon" onclick="closeModal(\'allCabinetItemsModal\');openLockerModal(' + g.locker_id + ')"><i class="fas fa-arrow-right"></i></button>' +
                '</div><div class="all-cab-items">';
            g.items.forEach(function(it) {
                var q = Number(it.qty), ms = Number(it.min_stock), st = getStatus(q, ms);
                inner += '<div class="all-cab-item ' + st.qcls + '" onclick="closeModal(\'allCabinetItemsModal\');highlightItemId=' + it.id + ';openLockerModal(' + it.locker_id + ')">' +
                    (it.image ? '<img src="' + escapeHtml(it.image) + '" alt="">' : '<div class="all-cab-item-icon"><i class="fas fa-cube"></i></div>') +
                    '<div class="all-cab-item-info">' +
                    '<div class="all-cab-item-name">' + escapeHtml(it.name) + '</div>' +
                    '<div class="all-cab-item-meta">' + t('qty') + ': ' + q + ' · ' + st.label + '</div>' +
                    '</div></div>';
            });
            inner += '</div>';
            section.innerHTML = inner;
            body.appendChild(section);
        });
    } catch (e) {
        body.innerHTML = '<div class="empty-state"><p>' + t('failedLoad') + '</p></div>';
    }
}
// alias for compatibility
function addLocker() { saveNewLocker(); }

async function deleteLocker(id) {
    if (!confirm(t('deleteConfirm'))) return;
    try {
        await API.deleteLocker(id);
        showToast(t('lockerDeleted') + ' ' + id);
        renderGrid();
    } catch (e) { showToast(e.message, 'error'); }
}

// ============ All Areas Panel ============
async function showAllAreas() {
    var body = document.getElementById('allAreasBody');
    body.innerHTML = '<div class="loading"><i class="fas fa-spinner fa-spin"></i> ' + t('loading') + '</div>';
    document.getElementById('allAreasPanel').classList.add('active');
    try {
        var zones = await API.getZones();
        body.innerHTML = '';
        // Collect all areas across all zones
        var zoneList = [];
        for (var i = 0; i < zones.length; i++) {
            var zoneDetail = await API.getZone(zones[i].id);
            zoneList.push(zoneDetail);
        }

        var totalAreas = zoneList.reduce(function(sum, z) { return sum + (z.areas ? z.areas.length : 0); }, 0);
        if (totalAreas === 0) {
            body.innerHTML = '<div class="empty-state"><i class="fas fa-th-large"></i><p>' + t('noAreasYet') + '</p></div>';
            return;
        }

        zoneList.forEach(function(zone) {
            var areas = zone.areas || [];
            if (areas.length === 0) return;
            var color = zone.color || '#7b2ff7';
            var section = document.createElement('div');
            section.className = 'all-areas-section';
            var html = '<div class="all-areas-zone-header" style="border-color:' + color + '">' +
                '<div class="all-areas-zone-dot" style="background:' + color + '"></div>' +
                '<span class="all-areas-zone-name">' + escapeHtml(zone.name) + '</span>' +
                '<span class="all-areas-zone-count">' + areas.length + ' ' + t('areas') + '</span>' +
                '</div><div class="all-areas-cards">';
            areas.forEach(function(area) {
                var spaceCount = (area.items || []).length;
                html += '<div class="all-area-card" onclick="closeModal(\'allAreasPanel\');navigateTo(\'warehouse\');setTimeout(function(){selectZone(' + zone.id + ');setTimeout(function(){openAreaItems(' + area.id + ',\'' + escapeHtml(area.name).replace(/'/g, "\\'") + '\');},200);},200)">' +
                    '<div class="all-area-icon" style="background:' + color + '"><i class="fas fa-th-large"></i></div>' +
                    '<div class="all-area-name">' + escapeHtml(area.name) + '</div>' +
                    '<div class="all-area-count"><i class="fas fa-cube"></i> ' + spaceCount + ' ' + t('spaces') + '</div>' +
                    '</div>';
            });
            html += '</div>';
            section.innerHTML = html;
            body.appendChild(section);
        });
    } catch (e) {
        body.innerHTML = '<div class="empty-state"><p>' + t('failedLoad') + '</p></div>';
    }
}
// Legacy alias
function showAllItems() { showAllAreas(); }

// ============ Alerts Panel ============
function openAlertsPanel() {
    var list = document.getElementById('alertsList');
    list.innerHTML = '<div class="loading"><i class="fas fa-spinner fa-spin"></i></div>';
    document.getElementById('alertsPanel').classList.add('active');
    var countEl = document.getElementById('alertPanelCount');
    API.getAlerts().then(function(alerts) {
        list.innerHTML = '';
        if (countEl) countEl.textContent = alerts.length + ' ' + t('items');
        if (alerts.length === 0) {
            list.innerHTML = '<div class="alert-healthy"><div class="alert-healthy-icon"><i class="fas fa-shield-alt"></i></div><p>' + t('allHealthy') + '</p></div>';
            return;
        }
        // Group by locker
        var groups = {};
        alerts.forEach(function(a) {
            var k = a.locker_id;
            if (!groups[k]) groups[k] = { id: k, name: a.locker_name, items: [] };
            groups[k].items.push(a);
        });
        Object.keys(groups).forEach(function(k, gi) {
            var g = groups[k];
            var section = document.createElement('div');
            section.className = 'alert-section';
            section.style.animationDelay = (gi * 0.08) + 's';
            var inner = '<div class="alert-section-header" onclick="closeModal(\'alertsPanel\');openLockerModal(' + g.id + ')">' +
                '<div class="alert-section-icon"><i class="fas fa-box-open"></i></div>' +
                '<div class="alert-section-info">' +
                    '<div class="alert-section-name">' + t('locker') + ' ' + g.id + (g.name ? ' — ' + escapeHtml(g.name) : '') + '</div>' +
                    '<div class="alert-section-count">' + g.items.length + ' ' + t('alerts') + '</div>' +
                '</div>' +
                '<i class="fas fa-chevron-right alert-section-arrow"></i>' +
            '</div><div class="alert-section-items">';
            g.items.forEach(function(a, idx) {
                var q = Number(a.qty), ms = Number(a.min_stock);
                var isOut = q === 0;
                var pct = ms > 0 ? Math.min(100, Math.round((q / ms) * 100)) : 0;
                inner += '<div class="alert-card' + (isOut ? ' alert-card-danger' : '') + '" style="animation-delay:' + ((gi * 0.08) + (idx * 0.04)) + 's" onclick="closeModal(\'alertsPanel\');highlightItemId=' + a.id + ';openLockerModal(' + a.locker_id + ')">' +
                    '<div class="alert-card-indicator ' + (isOut ? 'out' : 'low') + '"></div>' +
                    '<div class="alert-card-body">' +
                        '<div class="alert-card-top">' +
                            '<span class="alert-card-name">' + escapeHtml(a.item_name) + '</span>' +
                            '<span class="alert-card-badge ' + (isOut ? 'out' : 'low') + '">' +
                                (isOut ? '<i class="fas fa-times-circle"></i> ' + t('outOfStock') : '<i class="fas fa-exclamation-triangle"></i> ' + t('lowStock')) +
                            '</span>' +
                        '</div>' +
                        '<div class="alert-card-meters">' +
                            '<div class="alert-card-stat"><span class="alert-card-stat-label"><i class="fas fa-cubes"></i> ' + t('stock') + '</span><span class="alert-card-stat-value ' + (isOut ? 'out' : 'low') + '">' + q + '</span></div>' +
                            '<div class="alert-card-stat"><span class="alert-card-stat-label"><i class="fas fa-shield-alt"></i> ' + t('minStock') + '</span><span class="alert-card-stat-value">' + ms + '</span></div>' +
                            '<div class="alert-card-bar-wrap"><div class="alert-card-bar ' + (isOut ? 'out' : 'low') + '" style="width:' + pct + '%"></div></div>' +
                        '</div>' +
                    '</div>' +
                '</div>';
            });
            inner += '</div>';
            section.innerHTML = inner;
            list.appendChild(section);
        });
    }).catch(function() { list.innerHTML = '<div class="empty-state">' + t('failedLoad') + '</div>'; });
}

function closeAlertsPanel() { document.getElementById('alertsPanel').classList.remove('active'); }

// ============ Warehouse ============
async function renderWarehouse() {
    var zoneBar = document.getElementById('whZoneBar');
    var content = document.getElementById('warehouseContent');

    try {
        var zones = await API.getZones();

        // Render zone bar icons
        zoneBar.innerHTML = '';
        // "All Zones" button
        var allBtn = document.createElement('div');
        allBtn.className = 'zone-icon-btn' + (currentZoneId === null ? ' active' : '');
        allBtn.onclick = function() { selectZone(null); };
        allBtn.innerHTML = '<i class="fas fa-th-large"></i><span>' + t('allItems') + '</span>';
        zoneBar.appendChild(allBtn);

        zones.forEach(function(z) {
            var btn = document.createElement('div');
            btn.className = 'zone-icon-btn' + (currentZoneId === z.id ? ' active' : '');
            btn.onclick = function() { selectZone(z.id); };
            btn.innerHTML = '<i class="fas fa-warehouse"></i><span>' + escapeHtml(z.name) + '</span>';
            zoneBar.appendChild(btn);
        });

        if (currentZoneId === null) {
            // Render zone cards grid
            renderZoneGrid(zones);
        } else {
            // Render zone detail
            await renderZoneDetail();
        }
    } catch (e) {
        content.innerHTML = '<div class="empty-state" style="grid-column:1/-1"><p>' + t('failedLoad') + '</p></div>';
    }
}

function selectZone(id) {
    currentZoneId = id;
    currentZoneData = null;
    persistNavState();
    renderWarehouse();
}

// Search-result navigation: jump straight to the matched warehouse level.
function openZoneFromSearch(zoneId) {
    selectZone(zoneId);
    if (currentPage !== 'warehouse') navigateTo('warehouse');
}
function openAreaFromSearch(zoneId, areaId, areaName) {
    selectZone(zoneId);
    if (currentPage !== 'warehouse') navigateTo('warehouse');
    setTimeout(function() { openAreaItems(areaId, areaName); }, 250);
}
function openWarehouseItemFromSearch(zoneId, areaId, areaName) {
    selectZone(zoneId);
    if (currentPage !== 'warehouse') navigateTo('warehouse');
    if (areaId) setTimeout(function() { openAreaItems(areaId, areaName); }, 250);
}

function renderZoneGrid(zones) {
    var content = document.getElementById('warehouseContent');
    content.innerHTML = '';

    if (zones.length === 0) {
        content.innerHTML = '<div class="empty-state" style="grid-column:1/-1"><i class="fas fa-warehouse"></i><p>' + t('noZones') + '</p></div>';
        return;
    }

    var grid = document.createElement('div');
    grid.className = 'wh-zones-grid';

    zones.forEach(function(z, idx) {
        var color = z.color || '#7b2ff7';
        var hasAlert = Number(z.low_stock_count) > 0;
        var card = document.createElement('div');
        card.className = 'zone-card' + (z.image ? ' zone-card-with-image' : '');
        card.style.animationDelay = (idx * 0.08) + 's';
        card.onclick = function() { selectZone(z.id); };

        // Cover hero strip — when an image is uploaded, show it as a proper banner
        // across the top of the card. Without an image, render a tinted placeholder
        // using the zone's accent color so cards still feel composed and on-brand.
        // The accent color flows in via --zone-color so the no-image fallback and
        // the on-error fallback share one CSS-driven gradient.
        var coverAlt = (t('warehouseImageAlt') || 'Cover image of {name}').replace('{name}', escapeHtml(z.name));
        var coverStyle = ' style="--zone-color:' + color + '"';
        var fallbackGlyph = '<svg class="wh-svg-icon wh-svg-zone zone-card-cover-glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 11.5L12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"/></svg>';
        var cover = z.image
            ? '<div class="zone-card-cover"' + coverStyle + '>' +
                '<img src="' + escapeHtml(z.image) + '" alt="' + coverAlt + '" loading="lazy" decoding="async"' +
                ' onload="this.classList.add(\'is-loaded\')"' +
                ' onerror="this.parentNode.classList.add(\'cover-fallback\');this.remove();">' +
                fallbackGlyph +
                '<div class="zone-card-cover-shade"></div>' +
                '</div>'
            : '<div class="zone-card-cover cover-fallback"' + coverStyle + ' aria-hidden="true">' +
                fallbackGlyph +
                '<div class="zone-card-cover-shade"></div>' +
                '</div>';

        // Small badge icon stays for color/level consistency. When the cover already
        // shows the photo, the badge falls back to the zone glyph (or alert chevron).
        var iconInner = hasAlert
            ? '<svg class="wh-svg-icon wh-svg-alert" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2L1 21h22L12 2zm0 6l7.53 13H4.47L12 8zm-1 5h2v4h-2zm0 5h2v2h-2z"/></svg>'
            : '<svg class="wh-svg-icon wh-svg-zone" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 11.5L12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"/></svg>';

        card.innerHTML = '<button class="btn-icon zone-card-print" onclick="event.stopPropagation();printZone(' + z.id + ')" title="' + t('print') + '" aria-label="' + t('print') + '"><i class="fas fa-print"></i></button>' +
            '<button class="btn-icon zone-card-delete" onclick="event.stopPropagation();deleteZone(' + z.id + ')" aria-label="' + t('delete') + '"><i class="fas fa-trash-alt" style="color:var(--danger)"></i></button>' +
            cover +
            '<div class="zone-card-color" style="background:' + color + '"></div>' +
            '<div class="zone-card-header">' +
            '<div class="zone-card-icon zone-card-icon-fancy" style="background:' + color + '" aria-label="' + t('zone') + '">' + iconInner + '</div>' +
            '<div class="zone-card-title">' + escapeHtml(z.name) + '</div>' +
            (z.location ? '<div class="zone-card-location"><i class="fas fa-map-marker-alt"></i> ' + escapeHtml(z.location) + '</div>' : '') +
            '</div>' +
            '<div class="zone-card-body">' +
            '<div class="zone-card-stats">' +
            '<div class="zone-card-stat"><div class="zone-card-stat-value">' + Number(z.area_count || 0) + '</div><div class="zone-card-stat-label">' + t('areas') + '</div></div>' +
            '<div class="zone-card-stat"><div class="zone-card-stat-value">' + Number(z.item_count) + '</div><div class="zone-card-stat-label">' + t('items') + '</div></div>' +
            '<div class="zone-card-stat"><div class="zone-card-stat-value">' + Number(z.total_qty) + '</div><div class="zone-card-stat-label">' + t('stock') + '</div></div>' +
            '</div></div>';
        grid.appendChild(card);
    });

    content.appendChild(grid);
}

async function renderZoneDetail() {
    var content = document.getElementById('warehouseContent');
    content.innerHTML = '<div class="loading-spinner"><i class="fas fa-spinner fa-spin"></i> ' + t('loading') + '</div>';

    try {
        currentZoneData = await API.getZone(currentZoneId);
        var zone = currentZoneData;
        var areas = zone.areas || [];
        var color = zone.color || '#7b2ff7';

        var html = '<div class="zone-detail">';
        // Zone header
        html += '<div class="zone-detail-header" style="border-color:' + color + '">';
        var headIcon = zone.image
            ? '<img src="' + escapeHtml(zone.image) + '" alt="" loading="lazy" decoding="async">'
            : '<svg class="wh-svg-icon wh-svg-zone" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 11.5L12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"/></svg>';
        html += '<div class="zone-detail-head-icon zone-card-icon-fancy" style="background:' + color + '" aria-label="' + t('zone') + '">' + headIcon + '</div>';
        html += '<div class="zone-detail-head-info"><h2>' + escapeHtml(zone.name) + '</h2>';
        if (zone.location) html += '<div class="zone-detail-location"><i class="fas fa-map-marker-alt"></i> ' + escapeHtml(zone.location) + '</div>';
        if (zone.description) html += '<div class="zone-detail-desc">' + escapeHtml(zone.description) + '</div>';
        html += '</div>';
        html += '<button class="btn-icon zone-edit-btn" onclick="printZone(' + zone.id + ')" title="' + t('print') + '" style="margin-right:6px"><i class="fas fa-print" style="color:' + color + '"></i></button>';
        html += '<button class="btn-icon zone-edit-btn" onclick="openEditZoneModal()" title="' + t('editZoneBtn') + '" aria-label="' + t('editZoneBtn') + '"><i class="fas fa-pen" style="color:' + color + '"></i></button>';
        html += '</div>';

        // Areas section
        html += '<div class="zone-areas-section">';
        html += '<div class="zone-areas-header"><h3><i class="fas fa-th-large"></i> ' + t('areas') + ' <span class="section-count">(' + areas.length + ')</span></h3>';
        html += '<button class="btn-add-strong" onclick="openAddAreaModal()"><i class="fas fa-plus-circle"></i> ' + t('addArea') + '</button></div>';

        if (areas.length === 0) {
            html += '<div class="empty-state"><i class="fas fa-th-large"></i><p>' + t('noAreasYet') + '</p></div>';
        } else {
            html += '<div class="zone-areas-grid">';
            areas.forEach(function(area) {
                var areaItemCount = (area.items || []).length;
                var areaIcon = area.image
                    ? '<img src="' + escapeHtml(area.image) + '" alt="" loading="lazy" decoding="async">'
                    : '<svg class="wh-svg-icon wh-svg-area" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z"/></svg>';
                html += '<div class="zone-area-card' + (area.image ? ' has-image' : '') + '" onclick="openAreaItems(' + area.id + ',\'' + escapeHtml(area.name).replace(/'/g, "\\'") + '\')" tabindex="0" role="button" aria-label="' + escapeHtml(area.name) + '">';
                html += '<button class="zone-area-edit" onclick="event.stopPropagation();openEditAreaModal(' + area.id + ',\'' + escapeHtml(area.name).replace(/'/g, "\\'") + '\',\'' + escapeHtml(area.description || '').replace(/'/g, "\\'") + '\')" title="' + t('editBtn') + '" aria-label="' + t('editBtn') + '"><i class="fas fa-pen"></i></button>';
                html += '<button class="zone-area-delete" onclick="event.stopPropagation();deleteArea(' + area.id + ')" title="' + t('deleteBtn') + '" aria-label="' + t('deleteBtn') + '"><i class="fas fa-times"></i></button>';
                html += '<div class="zone-area-card-icon zone-card-icon-fancy" style="background:' + color + '">' + areaIcon + '</div>';
                html += '<div class="zone-area-card-name">' + escapeHtml(area.name) + '</div>';
                html += '<div class="zone-area-card-count"><i class="fas fa-cube"></i> ' + areaItemCount + ' ' + t('items') + '</div>';
                html += '</div>';
            });
            html += '</div>';
        }

        html += '</div></div>';
        content.innerHTML = html;
    } catch (e) {
        content.innerHTML = '<div class="empty-state"><p>' + t('failedLoad') + '</p></div>';
    }
}

function openAreaItems(areaId, areaName) {
    currentAreaId = areaId;
    document.getElementById('areaModalName').textContent = areaName;

    // Find items for this area from currentZoneData
    var areaItems = [];
    if (currentZoneData && currentZoneData.areas) {
        var area = currentZoneData.areas.find(function(a) { return a.id === areaId; });
        if (area) areaItems = area.items || [];
    }

    renderConditionFilterChips(areaItems);

    var visibleItems = currentConditionFilter === 'all'
        ? areaItems
        : areaItems.filter(function(it) { return normalizeCondition(it.condition) === currentConditionFilter; });

    document.getElementById('areaModalCount').textContent = visibleItems.length;
    var grid = document.getElementById('areaItemsBody');
    grid.innerHTML = '';
    if (visibleItems.length === 0) {
        grid.innerHTML = '<div class="empty-state" style="grid-column:1/-1"><i class="fas fa-box-open"></i><p>' + t('noItems') + '</p></div>';
    } else {
        visibleItems.forEach(function(item) {
            var q = Number(item.qty), ms = Number(item.min_stock), status = getStatus(q, ms);
            var cond = normalizeCondition(item.condition);
            var card = document.createElement('div');
            card.className = 'area-item-card cond-card-' + cond;
            card.innerHTML =
                '<button class="area-item-transfer" onclick="openTransferItemModal(' + item.id + ',\'' + escapeHtml(item.name).replace(/\\/g,"\\\\").replace(/\'/g,"\\\'") + '\')" title="' + t('transferItem') + '" aria-label="' + t('transferItem') + '"><i class="fas fa-exchange-alt"></i></button>' +
                '<button class="area-item-delete" onclick="deleteZoneItem(' + item.id + ')" title="' + t('delete') + '" aria-label="' + t('delete') + '"><i class="fas fa-times"></i></button>' +
                '<div class="area-item-image" ' + (item.image ? 'onclick="openImageViewer(\'' + escapeHtml(item.image) + '\')" style="cursor:pointer"' : '') + '>' +
                    (item.image
                        ? '<img src="' + escapeHtml(item.image) + '" alt="' + escapeHtml(item.name) + '" loading="lazy" decoding="async" onerror="this.outerHTML=\'<svg class=&quot;wh-svg-icon wh-svg-item&quot; viewBox=&quot;0 0 24 24&quot; aria-hidden=&quot;true&quot;><path d=&quot;M12 2l9 5v10l-9 5-9-5V7zM12 4.2L5 8v8l7 3.8 7-3.8V8z&quot;/></svg>\'">'
                        : '<svg class="wh-svg-icon wh-svg-item area-item-svg-placeholder" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l9 5v10l-9 5-9-5V7zM12 4.2L5 8v8l7 3.8 7-3.8V8z"/></svg>') +
                    '<label class="area-item-upload-overlay" title="' + t('chooseImage') + '" aria-label="' + t('chooseImage') + '">' +
                        '<i class="fas fa-camera"></i>' +
                        '<input type="file" accept="image/jpeg,image/jpg,image/png,image/webp" style="display:none" onchange="uploadZoneItemImg(' + item.id + ',this.files[0])">' +
                    '</label>' +
                    conditionBadgeHtml(cond) +
                '</div>' +
                '<input type="text" class="area-item-name" value="' + escapeHtml(item.name) + '" onchange="updateZoneItem(' + item.id + ',{name:this.value})">' +
                '<input type="text" class="area-item-desc" placeholder="' + t('descriptionPlaceholder') + '" value="' + escapeHtml(item.description || '') + '" onchange="updateZoneItem(' + item.id + ',{description:this.value})">' +
                '<div class="area-item-stock">' +
                    '<button class="area-item-qty-btn" onclick="(function(el){var inp=el.parentElement.querySelector(\'input\');var v=Math.max(0,parseInt(inp.value||0)-1);inp.value=v;updateZoneItem(' + item.id + ',{qty:v});})(this)">−</button>' +
                    '<input type="number" class="area-item-qty ' + status.qcls + '" min="0" value="' + q + '" onchange="updateZoneItem(' + item.id + ',{qty:parseInt(this.value)})">' +
                    '<button class="area-item-qty-btn" onclick="(function(el){var inp=el.parentElement.querySelector(\'input\');var v=parseInt(inp.value||0)+1;inp.value=v;updateZoneItem(' + item.id + ',{qty:v});})(this)">+</button>' +
                '</div>' +
                '<div class="area-item-min">' +
                    '<label>' + t('minStock') + '</label>' +
                    '<input type="number" min="0" value="' + ms + '" onchange="updateZoneItem(' + item.id + ',{min_stock:parseInt(this.value)})">' +
                '</div>' +
                '<div class="area-item-condition-row">' +
                    '<label>' + t('condition') + '</label>' +
                    '<select class="area-item-condition-select" onchange="updateZoneItem(' + item.id + ',{condition:this.value});this.closest(\'.area-item-card\').className=\'area-item-card cond-card-\'+this.value;var b=this.closest(\'.area-item-card\').querySelector(\'.condition-badge\');if(b)b.outerHTML=window.__condBadge(this.value);">' +
                        '<option value="new"'         + (cond === 'new'         ? ' selected' : '') + '>' + t('conditionNew')         + '</option>' +
                        '<option value="used"'        + (cond === 'used'        ? ' selected' : '') + '>' + t('conditionUsed')        + '</option>' +
                        '<option value="damaged"'     + (cond === 'damaged'     ? ' selected' : '') + '>' + t('conditionDamaged')     + '</option>' +
                        '<option value="maintenance"' + (cond === 'maintenance' ? ' selected' : '') + '>' + t('conditionMaintenance') + '</option>' +
                    '</select>' +
                '</div>' +
                '<div class="area-item-status ' + status.cls + '">' + status.icon + ' ' + status.label + '</div>';
            grid.appendChild(card);
        });
    }

    document.getElementById('areaItemsModal').classList.add('active');
}

// Wired into the inline <select> onchange so a condition flip can refresh the badge
// without re-rendering the whole grid (keeps focus / scroll where the user left them).
window.__condBadge = function(c) { return conditionBadgeHtml(c); };

function renderConditionFilterChips(items) {
    var bar = document.getElementById('areaItemsFilter');
    if (!bar) return;
    var counts = { all: items.length, new: 0, used: 0, damaged: 0, maintenance: 0 };
    items.forEach(function(it) { counts[normalizeCondition(it.condition)]++; });
    var chips = [
        { key: 'all',         label: t('allConditions'),        icon: '<i class="fas fa-layer-group"></i>' },
        { key: 'new',         label: t('conditionNew'),         icon: '<i class="fas fa-star"></i>' },
        { key: 'used',        label: t('conditionUsed'),        icon: '<i class="fas fa-history"></i>' },
        { key: 'damaged',     label: t('conditionDamaged'),     icon: '<i class="fas fa-exclamation-triangle"></i>' },
        { key: 'maintenance', label: t('conditionMaintenance'), icon: '<i class="fas fa-wrench"></i>' }
    ];
    bar.innerHTML = '<span class="cond-filter-label">' + escapeHtml(t('filterByCondition')) + ':</span>' +
        chips.map(function(c) {
            return '<button type="button" class="cond-chip cond-chip-' + c.key + (currentConditionFilter === c.key ? ' active' : '') + '"' +
                ' aria-pressed="' + (currentConditionFilter === c.key ? 'true' : 'false') + '"' +
                ' onclick="setConditionFilter(\'' + c.key + '\')">' +
                c.icon + ' <span>' + escapeHtml(c.label) + '</span>' +
                ' <span class="cond-chip-count">' + counts[c.key] + '</span></button>';
        }).join('');
}

function setConditionFilter(key) {
    if (ITEM_CONDITIONS.indexOf(key) === -1 && key !== 'all') return;
    currentConditionFilter = key;
    if (currentAreaId && currentZoneData && currentZoneData.areas) {
        var area = currentZoneData.areas.find(function(a) { return a.id === currentAreaId; });
        if (area) openAreaItems(currentAreaId, area.name);
    }
}

async function addZone() {
    var name = document.getElementById('newZoneName').value.trim();
    if (!name) return;
    try {
        var created = await API.createZone({
            name: name,
            location: document.getElementById('newZoneLocation').value.trim(),
            description: document.getElementById('newZoneDesc').value.trim(),
            color: document.getElementById('newZoneColor').value
        });
        var picked = getPickedFile('newZone');
        if (picked && created && created.id) {
            await API.uploadZoneImage(created.id, picked);
        }
        document.getElementById('addZoneModal').classList.remove('active');
        renderWarehouse();
        showToast(t('added'));
    } catch (e) { showToast(e.message, 'error'); }
}
function openAddZoneModal() {
    document.getElementById('newZoneName').value = '';
    document.getElementById('newZoneLocation').value = '';
    document.getElementById('newZoneDesc').value = '';
    document.getElementById('newZoneColor').value = '#7b2ff7';
    resetImagePicker('newZone', null);
    document.getElementById('addZoneModal').classList.add('active');
}
function saveNewZone() { addZone(); }

function openEditZoneModal() {
    if (!currentZoneData) return;
    document.getElementById('editZoneName').value = currentZoneData.name || '';
    document.getElementById('editZoneLocation').value = currentZoneData.location || '';
    document.getElementById('editZoneDesc').value = currentZoneData.description || '';
    document.getElementById('editZoneColor').value = currentZoneData.color || '#7b2ff7';
    resetImagePicker('editZone', currentZoneData.image || null);
    document.getElementById('editZoneModal').classList.add('active');
}

async function saveEditZone() {
    var name = document.getElementById('editZoneName').value.trim();
    if (!name) return;
    try {
        await API.updateZone(currentZoneId, {
            name: name,
            location: document.getElementById('editZoneLocation').value.trim(),
            description: document.getElementById('editZoneDesc').value.trim(),
            color: document.getElementById('editZoneColor').value
        });
        var state = _imagePickerState['editZone'] || {};
        if (state.file) {
            await API.uploadZoneImage(currentZoneId, state.file);
        } else if (state.removed) {
            // Persist removal: writing an empty image string clears the field.
            await API.updateZone(currentZoneId, { image: '' });
        }
        document.getElementById('editZoneModal').classList.remove('active');
        renderWarehouse();
        showToast(t('saved') || 'Saved');
    } catch (e) { showToast(e.message, 'error'); }
}

async function deleteZone(id) {
    if (!confirm(t('deleteConfirm'))) return;
    try {
        await API.deleteZone(id);
        if (currentZoneId === id) currentZoneId = null;
        renderWarehouse();
    } catch (e) { showToast(e.message, 'error'); }
}

function openAddAreaModal() {
    document.getElementById('newAreaName').value = '';
    document.getElementById('newAreaDesc').value = '';
    resetImagePicker('newArea', null);
    document.getElementById('addAreaModal').classList.add('active');
}

async function addArea() {
    var name = document.getElementById('newAreaName').value.trim();
    if (!name) return;
    try {
        var created = await API.createArea(currentZoneId, { name: name, description: document.getElementById('newAreaDesc').value.trim() });
        var picked = getPickedFile('newArea');
        if (picked && created && created.id) {
            await API.uploadAreaImage(created.id, picked);
        }
        document.getElementById('addAreaModal').classList.remove('active');
        currentZoneData = await API.getZone(currentZoneId);
        await renderZoneDetail();
        showToast(t('added'));
    } catch (e) { showToast(e.message, 'error'); }
}
function saveNewArea() { addArea(); }

var editingAreaId = null;

function openEditAreaModal(areaId, areaName, areaDesc) {
    editingAreaId = areaId;
    document.getElementById('editAreaName').value = areaName || '';
    document.getElementById('editAreaDesc').value = areaDesc || '';
    var existing = (currentZoneData && currentZoneData.areas) ? (currentZoneData.areas.find(function(a) { return a.id === areaId; }) || {}) : {};
    resetImagePicker('editArea', existing.image || null);
    document.getElementById('editAreaModal').classList.add('active');
}

async function saveEditArea() {
    if (!editingAreaId) return;
    var name = document.getElementById('editAreaName').value.trim();
    if (!name) return;
    try {
        await API.updateArea(editingAreaId, {
            name: name,
            description: document.getElementById('editAreaDesc').value.trim()
        });
        var state = _imagePickerState['editArea'] || {};
        if (state.file) {
            await API.uploadAreaImage(editingAreaId, state.file);
        } else if (state.removed) {
            await API.updateArea(editingAreaId, { image: '' });
        }
        document.getElementById('editAreaModal').classList.remove('active');
        currentZoneData = await API.getZone(currentZoneId);
        await renderZoneDetail();
        showToast(t('saved') || 'Saved');
    } catch (e) { showToast(e.message, 'error'); }
}

async function deleteArea(id) {
    if (!confirm(t('deleteConfirm'))) return;
    try {
        await API.deleteArea(id);
        currentZoneData = await API.getZone(currentZoneId);
        await renderZoneDetail();
        showToast(t('itemRemoved'));
    } catch (e) { showToast(e.message, 'error'); }
}

async function addZoneItem() {
    var nameEl = document.getElementById('newZoneItemName');
    var name = nameEl.value.trim();
    if (!name) return;
    try {
        var condEl = document.getElementById('newZoneItemCondition');
        await API.addZoneItem(currentZoneId, {
            name: name,
            qty: parseInt(document.getElementById('newZoneItemQty').value) || 0,
            min_stock: parseInt(document.getElementById('newZoneItemMin').value) || 5,
            description: document.getElementById('newZoneItemDesc').value.trim(),
            condition: condEl ? normalizeCondition(condEl.value) : 'new',
            area_id: null
        });
        currentZoneData = await API.getZone(currentZoneId);
        await renderZoneDetail();
        showToast(t('added'));
    } catch (e) { showToast(e.message, 'error'); }
}

async function addAreaItem() {
    var name = document.getElementById('newAreaItemName').value.trim();
    if (!name) return;
    var fileInput = document.getElementById('newAreaItemFile');
    var file = fileInput && fileInput.files && fileInput.files[0];
    if (file) {
        if (ALLOWED_IMG_TYPES.indexOf(file.type) === -1) { showToast(t('imageInvalidType'), 'error'); return; }
        if (file.size > MAX_IMG_BYTES) { showToast(t('imageTooLarge'), 'error'); return; }
    }
    try {
        var conditionEl = document.getElementById('newAreaItemCondition');
        var newItem = await API.addZoneItem(currentZoneId, {
            name: name,
            qty: parseInt(document.getElementById('newAreaItemQty').value) || 0,
            min_stock: parseInt(document.getElementById('newAreaItemMin').value) || 5,
            description: document.getElementById('newAreaItemDesc').value.trim(),
            condition: conditionEl ? normalizeCondition(conditionEl.value) : 'new',
            area_id: currentAreaId
        });
        // Upload image if selected
        if (file) {
            await API.uploadZoneItemImage(newItem.id, file);
        }
        currentZoneData = await API.getZone(currentZoneId);
        // Re-open area items modal with refreshed data
        var area = currentZoneData.areas.find(function(a) { return a.id === currentAreaId; });
        if (area) openAreaItems(currentAreaId, area.name);
        // Also refresh zone detail behind modal
        showToast(t('added'));
        document.getElementById('newAreaItemName').value = '';
        document.getElementById('newAreaItemQty').value = '1';
        document.getElementById('newAreaItemMin').value = '0';
        document.getElementById('newAreaItemDesc').value = '';
        if (conditionEl) conditionEl.value = 'new';
        if (fileInput) fileInput.value = '';
    } catch (e) { showToast(e.message, 'error'); }
}

async function updateZoneItem(id, data) {
    // Optimistic: patch local state, skip the heavy refetch + re-render.
    // Items can live at zone level (currentZoneData.items) OR under an area
    // (currentZoneData.areas[].items) — patch wherever we find it so subsequent
    // filters/badge updates see fresh values without a round-trip.
    if (currentZoneData) {
        var arrays = [currentZoneData.items].concat((currentZoneData.areas || []).map(function(a){ return a.items; }));
        arrays.forEach(function(list) {
            if (!Array.isArray(list)) return;
            var it = list.find(function(x){ return x.id === id; });
            if (it) Object.assign(it, data);
        });
    }
    try { await API.updateZoneItem(id, data); }
    catch (e) {
        showToast(e.message, 'error');
        currentZoneData = await API.getZone(currentZoneId);
        if (currentAreaId) {
            var area = currentZoneData.areas.find(function(a) { return a.id === currentAreaId; });
            if (area) openAreaItems(currentAreaId, area.name);
        }
        await renderZoneDetail();
    }
}

async function deleteZoneItem(id) {
    try {
        await API.deleteZoneItem(id);
        currentZoneData = await API.getZone(currentZoneId);
        if (currentAreaId) {
            var area = currentZoneData.areas.find(function(a) { return a.id === currentAreaId; });
            if (area) openAreaItems(currentAreaId, area.name);
        }
        await renderZoneDetail();
        showToast(t('itemRemoved'));
    } catch (e) { showToast(e.message, 'error'); }
}

// ============ Transfer Warehouse Item ============
// State for the in-flight transfer (item id + cached areas-by-zone).
var _transfer = { itemId: null, item: null, areasCache: {} };

function _findWarehouseItem(itemId) {
    if (!currentZoneData) return null;
    var hit = (currentZoneData.items || []).find(function(i) { return i.id === itemId; });
    if (hit) return hit;
    var areas = currentZoneData.areas || [];
    for (var i = 0; i < areas.length; i++) {
        var inArea = (areas[i].items || []).find(function(it) { return it.id === itemId; });
        if (inArea) return inArea;
    }
    return null;
}

async function openTransferItemModal(itemId, itemName) {
    _transfer.itemId = itemId;
    _transfer.item = _findWarehouseItem(itemId);
    _transfer.areasCache = {};

    var zoneSel = document.getElementById('transferTargetZone');
    var areaSel = document.getElementById('transferTargetArea');
    zoneSel.innerHTML = '<option value="">' + t('selectTargetZone') + '</option>';
    areaSel.innerHTML = '<option value="">' + t('noArea') + '</option>';

    var info = document.getElementById('transferItemInfo');
    var pathBits = [];
    if (_transfer.item) {
        if (currentZoneData && currentZoneData.name) pathBits.push(escapeHtml(currentZoneData.name));
        var currArea = (currentZoneData.areas || []).find(function(a) { return a.id === _transfer.item.area_id; });
        if (currArea) pathBits.push(escapeHtml(currArea.name));
    }
    info.innerHTML = '<div class="search-item-name">' + escapeHtml(itemName || '') + '</div>' +
        (pathBits.length ? '<div class="search-item-sub">' + t('currentLocation') + ': ' + pathBits.join(' &rsaquo; ') + '</div>' : '');

    try {
        var zones = await API.getZones();
        zones.forEach(function(z) {
            var opt = document.createElement('option');
            opt.value = String(z.id);
            opt.textContent = z.name;
            if (currentZoneId && Number(z.id) === Number(currentZoneId)) opt.selected = true;
            zoneSel.appendChild(opt);
        });
        if (currentZoneId) await onTransferZoneChange();
    } catch (e) { showToast(e.message, 'error'); }

    document.getElementById('transferItemModal').classList.add('active');
}

async function onTransferZoneChange() {
    var zoneSel = document.getElementById('transferTargetZone');
    var areaSel = document.getElementById('transferTargetArea');
    var zid = parseInt(zoneSel.value);
    areaSel.innerHTML = '<option value="">' + t('noArea') + '</option>';
    if (!zid) return;
    try {
        if (!_transfer.areasCache[zid]) {
            _transfer.areasCache[zid] = await API.getAreas(zid);
        }
        _transfer.areasCache[zid].forEach(function(a) {
            var opt = document.createElement('option');
            opt.value = String(a.id);
            opt.textContent = a.name;
            // Pre-select the item's current area when the user lands on its current zone.
            if (_transfer.item && Number(a.id) === Number(_transfer.item.area_id) && Number(zid) === Number(_transfer.item.zone_id)) {
                opt.selected = true;
            }
            areaSel.appendChild(opt);
        });
    } catch (e) { showToast(e.message, 'error'); }
}

async function confirmTransferItem() {
    if (!_transfer.itemId) return;
    var zid = parseInt(document.getElementById('transferTargetZone').value);
    var aidRaw = document.getElementById('transferTargetArea').value;
    if (!zid) { showToast(t('selectTargetZone'), 'error'); return; }
    var aid = aidRaw ? parseInt(aidRaw) : null;

    try {
        await API.transferZoneItem(_transfer.itemId, { zone_id: zid, area_id: aid });
        closeModal('transferItemModal');
        showToast(t('itemTransferred'));

        // Reload the zone we are viewing — the item may have left it. If we
        // were inside an area modal, refresh it, then the zone detail.
        currentZoneData = await API.getZone(currentZoneId);
        if (currentAreaId) {
            var stillThere = (currentZoneData.areas || []).find(function(a) { return a.id === currentAreaId; });
            if (stillThere) openAreaItems(currentAreaId, stillThere.name);
            else closeModal('areaItemsModal');
        }
        await renderZoneDetail();
    } catch (e) {
        showToast(e.message, 'error');
    }
}

async function uploadZoneItemImg(id, file) {
    if (!file) return;
    if (ALLOWED_IMG_TYPES.indexOf(file.type) === -1) { showToast(t('imageInvalidType'), 'error'); return; }
    if (file.size > MAX_IMG_BYTES) { showToast(t('imageTooLarge'), 'error'); return; }
    try {
        await API.uploadZoneItemImage(id, file);
        currentZoneData = await API.getZone(currentZoneId);
        if (currentAreaId) {
            var area = currentZoneData.areas.find(function(a) { return a.id === currentAreaId; });
            if (area) openAreaItems(currentAreaId, area.name);
        }
        await renderZoneDetail();
        showToast(t('imageUploaded'));
    } catch (e) { showToast(e.message, 'error'); }
}

// ============ Departments Page (Tabs) ============
function switchDeptTab(tab) {
    // legacy compat - no-op now since employees have their own page
    currentDeptTab = tab;
    persistNavState();
}

// ============ Departments ============
async function renderDepartments() {
    var grid = document.getElementById('deptGrid');
    try {
        var depts = await API.getDepartments();
        grid.innerHTML = '';

        // Update stats
        var totalItems = depts.reduce(function(s,d) { return s + Number(d.item_count || 0); }, 0);
        var totalEmps = depts.reduce(function(s,d) { return s + Number(d.employee_count || 0); }, 0);
        var sd = document.getElementById('statDepts'); if (sd) sd.textContent = depts.length;
        var si = document.getElementById('statDeptItems'); if (si) si.textContent = totalItems;
        var se = document.getElementById('statDeptEmps'); if (se) se.textContent = totalEmps;

        if (depts.length === 0) {
            grid.innerHTML = '<div class="empty-state" style="grid-column:1/-1"><i class="fas fa-building"></i><p>' + t('noDepts') + '</p></div>';
            return;
        }
        depts.forEach(function(d) {
            var card = document.createElement('div');
            card.className = 'dept-card';
            card.onclick = function() { currentDeptId = d.id; navigateTo('dept-detail'); };
            card.innerHTML = '<button class="btn-icon locker-delete-btn" onclick="event.stopPropagation();deleteDept(' + d.id + ')"><i class="fas fa-trash-alt"></i></button>' +
                '<div class="dept-card-icon"><i class="fas fa-building"></i></div>' +
                '<div class="dept-card-name">' + escapeHtml(d.name) + '</div>' +
                (d.manager ? '<div class="dept-card-manager"><i class="fas fa-user-shield"></i> ' + escapeHtml(d.manager) + '</div>' : '') +
                '<div class="dept-card-counts">' +
                '<div class="dept-card-count"><i class="fas fa-users"></i> ' + Number(d.employee_count || 0) + ' ' + t('employees') + '</div>' +
                '<div class="dept-card-count"><i class="fas fa-tools"></i> ' + Number(d.item_count || 0) + ' ' + t('items') + '</div>' +
                '</div>';
            grid.appendChild(card);
        });
    } catch (e) { grid.innerHTML = '<div class="empty-state" style="grid-column:1/-1">' + t('failedLoad') + '</div>'; }
}

async function openAddDeptModal() {
    document.getElementById('newDeptName').value = '';
    document.getElementById('newDeptDesc').value = '';
    var mgrSelect = document.getElementById('newDeptManager');
    mgrSelect.innerHTML = '<option value="">' + t('selectManager') + '</option>';
    try {
        var emps = await API.getEmployees();
        emps.forEach(function(e) {
            mgrSelect.innerHTML += '<option value="' + escapeHtml(e.name) + '">' + escapeHtml(e.name) + (e.job_title ? ' - ' + escapeHtml(e.job_title) : '') + '</option>';
        });
    } catch (e) { /* ignore */ }
    document.getElementById('addDeptModal').classList.add('active');
}

async function addDepartment() {
    var name = document.getElementById('newDeptName').value.trim();
    if (!name) return;
    try {
        await API.createDepartment({
            name: name,
            manager: document.getElementById('newDeptManager').value || '',
            description: document.getElementById('newDeptDesc').value.trim()
        });
        document.getElementById('addDeptModal').classList.remove('active');
        renderDepartments();
        showToast(t('added'));
    } catch (e) { showToast(e.message, 'error'); }
}
function saveNewDept() { addDepartment(); }

async function deleteDept(id) {
    if (!confirm(t('deleteConfirm'))) return;
    try {
        await API.deleteDepartment(id);
        renderDepartments();
    } catch (e) { showToast(e.message, 'error'); }
}

// ============ Department Stat Actions ============
function showAllDepts() {
    // Scroll to the department grid
    var grid = document.getElementById('deptGrid');
    if (grid) grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

async function showAllDeptEquipment() {
    var body = document.getElementById('allDeptEquipBody');
    body.innerHTML = '<div class="loading-spinner"><i class="fas fa-spinner fa-spin"></i> ' + t('loading') + '</div>';
    document.getElementById('allDeptEquipPanel').classList.add('active');
    try {
        var depts = await API.getDepartments();
        var allItems = [];
        for (var i = 0; i < depts.length; i++) {
            var detail = await API.getDepartment(depts[i].id);
            (detail.items || []).forEach(function(item) {
                item._deptName = detail.name;
                item._deptId = detail.id;
                allItems.push(item);
            });
        }
        body.innerHTML = '';
        if (allItems.length === 0) {
            body.innerHTML = '<div class="empty-state"><i class="fas fa-tools"></i><p>' + t('noItems') + '</p></div>';
            return;
        }
        allItems.forEach(function(item) {
            var card = document.createElement('div');
            card.className = 'all-equip-card';
            card.onclick = function() { closeModal('allDeptEquipPanel'); currentDeptId = item._deptId; navigateTo('dept-detail'); };
            card.innerHTML =
                '<div class="all-equip-card-img">' +
                    (item.image ? '<img src="' + escapeHtml(item.image) + '" onerror="this.parentElement.innerHTML=\'<i class=\\\'fas fa-cube\\\'></i>\'">' : '<i class="fas fa-cube"></i>') +
                '</div>' +
                '<div class="all-equip-card-info">' +
                    '<div class="all-equip-card-name">' + escapeHtml(item.name) + '</div>' +
                    '<div class="all-equip-card-meta"><i class="fas fa-building"></i> ' + escapeHtml(item._deptName) + '</div>' +
                    '<div class="all-equip-card-meta"><i class="fas fa-sort-numeric-up"></i> x' + Number(item.qty) + '</div>' +
                    (item.employee_name ? '<div class="all-equip-card-meta"><i class="fas fa-user"></i> ' + escapeHtml(item.employee_name) + '</div>' : '') +
                '</div>';
            body.appendChild(card);
        });
    } catch (e) {
        body.innerHTML = '<div class="empty-state"><p>' + t('failedLoad') + '</p></div>';
    }
}

// ============ Employee Stat Actions ============
function showAllEmps() {
    var grid = document.getElementById('empGrid');
    if (grid) grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

async function showAllCustodyItems() {
    var body = document.getElementById('allCustodyBody');
    body.innerHTML = '<div class="loading-spinner"><i class="fas fa-spinner fa-spin"></i> ' + t('loading') + '</div>';
    document.getElementById('allCustodyPanel').classList.add('active');
    try {
        var employees = await API.getEmployees();
        var allItems = [];
        for (var i = 0; i < employees.length; i++) {
            var detail = await API.getEmployee(employees[i].id);
            (detail.items || []).forEach(function(item) {
                item._empName = detail.name;
                item._empId = detail.id;
                item._empPhoto = detail.photo;
                allItems.push(item);
            });
        }
        body.innerHTML = '';
        if (allItems.length === 0) {
            body.innerHTML = '<div class="empty-state"><i class="fas fa-hand-holding"></i><p>' + t('noItems') + '</p></div>';
            return;
        }
        allItems.forEach(function(item) {
            var statusLabel = item.covenant_status || item.status || t('active');
            var statusCls = 'active';
            if (statusLabel === 'returned') statusCls = 'returned';
            else if (statusLabel === 'transferred') statusCls = 'transferred';
            else if (statusLabel === 'ended') statusCls = 'ended';

            var durationText = '';
            if (item.receipt_date || item.start_date) {
                var start = new Date(item.receipt_date || item.start_date);
                var now = new Date();
                var days = Math.floor((now - start) / (1000 * 60 * 60 * 24));
                durationText = days + ' ' + t('days');
            }

            var card = document.createElement('div');
            card.className = 'all-custody-card';
            card.onclick = function() { closeModal('allCustodyPanel'); currentEmpId = item._empId; navigateTo('emp-detail'); };
            card.innerHTML =
                '<div class="all-custody-card-img">' +
                    (item.image ? '<img src="' + escapeHtml(item.image) + '" onerror="this.parentElement.innerHTML=\'<i class=\\\'fas fa-box\\\'></i>\'">' : '<i class="fas fa-box"></i>') +
                '</div>' +
                '<div class="all-custody-card-info">' +
                    '<div class="all-equip-card-name">' + escapeHtml(item.name) + '</div>' +
                    '<div class="all-equip-card-meta"><i class="fas fa-user"></i> ' + escapeHtml(item._empName) + '</div>' +
                    (durationText ? '<div class="all-equip-card-meta"><i class="fas fa-clock"></i> ' + durationText + '</div>' : '') +
                    '<div class="all-equip-card-meta"><span class="history-status-badge ' + statusCls + '">' + escapeHtml(statusLabel) + '</span></div>' +
                '</div>';
            body.appendChild(card);
        });
    } catch (e) {
        body.innerHTML = '<div class="empty-state"><p>' + t('failedLoad') + '</p></div>';
    }
}

// ============ Employees ============
async function renderEmployees() {
    var grid = document.getElementById('empGrid');
    try {
        var employees = await API.getEmployees();
        grid.innerHTML = '';

        // Update stats
        var totalCustody = employees.reduce(function(s,e) { return s + Number(e.item_count || 0); }, 0);
        var se = document.getElementById('statEmps'); if (se) se.textContent = employees.length;
        var sc = document.getElementById('statEmpCustody'); if (sc) sc.textContent = totalCustody;

        if (employees.length === 0) {
            grid.innerHTML = '<div class="empty-state" style="grid-column:1/-1"><i class="fas fa-id-badge"></i><p>' + t('noEmployees') + '</p></div>';
            return;
        }
        employees.forEach(function(emp) {
            var card = document.createElement('div');
            card.className = 'emp-card';
            card.onclick = function() { currentEmpId = emp.id; navigateTo('emp-detail'); };
            card.innerHTML = '<button class="btn-icon emp-card-delete" onclick="event.stopPropagation();deleteEmployee(' + emp.id + ')"><i class="fas fa-trash-alt" style="color:var(--danger)"></i></button>' +
                '<div class="emp-card-top">' +
                '<div class="emp-avatar">' + (emp.photo ? '<img src="' + escapeHtml(emp.photo) + '" onerror="this.parentElement.innerHTML=\'<i class=\\\'fas fa-user\\\'></i>\'">' : '<i class="fas fa-user"></i>') + '</div>' +
                '<div>' +
                '<div class="emp-card-name">' + escapeHtml(emp.name) + '</div>' +
                '<div class="emp-card-title"><i class="fas fa-briefcase" style="font-size:10px;opacity:0.6;margin-right:4px"></i>' + escapeHtml(emp.job_title || '') + '</div>' +
                (emp.department_name ? '<div class="emp-card-dept" onclick="event.stopPropagation();currentDeptId=' + (emp.department_id || 0) + ';navigateTo(\'dept-detail\')"><i class="fas fa-building"></i> ' + escapeHtml(emp.department_name) + '</div>' : '') +
                '</div></div>' +
                '<div class="emp-card-footer">' +
                '<div class="emp-card-stat"><i class="fas fa-hand-holding" style="color:var(--accent)"></i> ' + Number(emp.item_count || 0) + ' ' + t('custodyItems') + '</div>' +
                '<label class="btn-icon" style="cursor:pointer" onclick="event.stopPropagation()"><i class="fas fa-camera" style="font-size:12px"></i><input type="file" accept="image/*" style="display:none" onchange="uploadEmpPhoto(' + emp.id + ',this.files[0])"></label>' +
                '</div>';
            grid.appendChild(card);
        });
    } catch (e) { grid.innerHTML = '<div class="empty-state" style="grid-column:1/-1">' + t('failedLoad') + '</div>'; }
}

async function openAddEmpModal() {
    document.getElementById('newEmpName').value = '';
    document.getElementById('newEmpTitle').value = '';
    var photoInput = document.getElementById('newEmpPhoto'); if (photoInput) photoInput.value = '';
    var select = document.getElementById('newEmpDept');
    select.innerHTML = '<option value="">--</option>';
    try {
        var depts = await API.getDepartments();
        depts.forEach(function(d) {
            select.innerHTML += '<option value="' + d.id + '">' + escapeHtml(d.name) + '</option>';
        });
    } catch (e) { /* ignore */ }
    document.getElementById('addEmpModal').classList.add('active');
}

async function addEmployee() {
    var name = document.getElementById('newEmpName').value.trim();
    if (!name) return;
    try {
        var created = await API.createEmployee({
            name: name,
            job_title: document.getElementById('newEmpTitle').value.trim(),
            department_id: document.getElementById('newEmpDept').value || null
        });
        var photoInput = document.getElementById('newEmpPhoto');
        if (photoInput && photoInput.files && photoInput.files[0] && created && created.id) {
            try { await API.uploadEmployeePhoto(created.id, photoInput.files[0]); } catch (e) {}
        }
        document.getElementById('addEmpModal').classList.remove('active');
        renderEmployees();
        showToast(t('added'));
    } catch (e) { showToast(e.message, 'error'); }
}
function saveNewEmployee() { addEmployee(); }

async function deleteEmployee(id) {
    if (!confirm(t('deleteConfirm'))) return;
    try {
        await API.deleteEmployee(id);
        renderEmployees();
    } catch (e) { showToast(e.message, 'error'); }
}

async function uploadEmpPhoto(id, file) {
    if (!file) return;
    try {
        await API.uploadEmployeePhoto(id, file);
        renderEmployees();
        showToast(t('imageUploaded'));
    } catch (e) { showToast(e.message, 'error'); }
}

// ============ Department Detail Page ============
async function renderDeptDetail() {
    var header = document.getElementById('deptDetailHeader');
    if (!currentDeptId) return;

    try {
        currentDeptData = await API.getDepartment(currentDeptId);
        var dept = currentDeptData;

        // Render header
        var nameEl = header.querySelector('.dept-detail-name');
        if (nameEl) nameEl.textContent = dept.name;
        var imgEl = header.querySelector('.dept-detail-image');
        if (imgEl) {
            imgEl.innerHTML = dept.image
                ? '<img src="' + escapeHtml(dept.image) + '" onclick="openImageViewer(\'' + escapeHtml(dept.image) + '\')" style="cursor:pointer">'
                : '<i class="fas fa-building" style="font-size:32px;color:var(--text-muted)"></i>';
        }

        // Reset to equipment tab
        document.querySelectorAll('.dept-dtab').forEach(function(b, i) { b.classList.toggle('active', i === 0); });
        document.querySelectorAll('.dept-dtab-content').forEach(function(c, i) { c.classList.toggle('active', i === 0); });

        await renderEquipmentTab();
        await renderHistoryTab();
        await renderItemsTab();
        renderIncomingTab();

    } catch (e) {
        showToast(t('failedLoad'), 'error');
    }
}

function switchDeptDetailTab(tabName) {
    document.querySelectorAll('.dept-dtab').forEach(function(b) { b.classList.remove('active'); });
    document.getElementById('deptEquipmentTab').classList.toggle('active', tabName === 'equipment');
    document.getElementById('deptHistoryTab').classList.toggle('active', tabName === 'history');
    document.getElementById('deptItemsTab').classList.toggle('active', tabName === 'items');
    var inc = document.getElementById('deptIncomingTab');
    if (inc) inc.classList.toggle('active', tabName === 'incoming');

    if (tabName === 'equipment') document.getElementById('tabEquipment').classList.add('active');
    else if (tabName === 'history') document.getElementById('tabHistory').classList.add('active');
    else if (tabName === 'items') document.getElementById('tabItems').classList.add('active');
    else if (tabName === 'incoming') { var t = document.getElementById('tabIncoming'); if (t) t.classList.add('active'); }
}

function renderIncomingTab() {
    var dept = currentDeptData || {};
    var incomingItems = (dept.incoming_items || []).map(function(x){ return Object.assign({}, x, { entity_type: 'item' }); });
    var incomingEq = (dept.incoming_equipment || []).map(function(x){ return Object.assign({}, x, { entity_type: 'equipment' }); });
    var all = incomingItems.concat(incomingEq);
    var grid = document.getElementById('deptIncomingGrid');
    var badge = document.getElementById('incomingBadge');
    if (badge) {
        if (all.length > 0) { badge.style.display = ''; badge.textContent = all.length; }
        else badge.style.display = 'none';
    }
    if (!grid) return;
    if (all.length === 0) {
        grid.innerHTML = '<div class="empty-state" style="grid-column:1/-1;padding:30px"><i class="fas fa-inbox" style="font-size:32px;opacity:0.3"></i><p>' + t('noIncoming') + '</p></div>';
        return;
    }
    grid.innerHTML = '';
    all.forEach(function(it, idx) {
        var period = (it.start_date || it.transfer_date || '') + (it.end_date ? ' → ' + it.end_date : '');
        var typeLabel = it.entity_type === 'equipment' ? t('equipment') : t('items');
        var typeIcon = it.entity_type === 'equipment' ? 'fa-cog' : 'fa-cube';
        var card = document.createElement('div');
        card.className = 'incoming-card';
        card.style.animationDelay = (idx * 0.05) + 's';
        var safeName = escapeHtml(it.name || '').replace(/'/g, "\\'");
        card.innerHTML =
            '<div class="incoming-card-banner"><i class="fas fa-inbox"></i> ' + t('underTempCustody') + '</div>' +
            '<div class="incoming-card-body">' +
                '<div class="incoming-card-visual">' +
                    (it.image ? '<img src="' + escapeHtml(it.image) + '">' : '<i class="fas ' + typeIcon + '"></i>') +
                '</div>' +
                '<div class="incoming-card-info">' +
                    '<div class="incoming-card-name">' + escapeHtml(it.name || '') + '</div>' +
                    '<div class="incoming-card-type"><i class="fas ' + typeIcon + '"></i> ' + escapeHtml(typeLabel) + '</div>' +
                    (it.source_dept_name ? '<div class="incoming-card-source" onclick="if(' + (it.source_dept_id || 0) + '){currentDeptId=' + (it.source_dept_id || 0) + ';navigateTo(\'dept-detail\')}"><i class="fas fa-building"></i> ' + t('sourceDepartment') + ': <strong>' + escapeHtml(it.source_dept_name) + '</strong></div>' : '') +
                    '<div class="incoming-card-period"><i class="fas fa-calendar-alt"></i> ' + escapeHtml(period) + '</div>' +
                    (it.condition ? '<div class="incoming-card-meta"><i class="fas fa-clipboard-check"></i> ' + (it.condition === 'good' ? t('conditionGood') : t('conditionNotGood')) + (it.condition_notes ? ' — ' + escapeHtml(it.condition_notes) : '') + '</div>' : '') +
                    (it.notes ? '<div class="incoming-card-meta"><i class="fas fa-sticky-note"></i> ' + escapeHtml(it.notes) + '</div>' : '') +
                '</div>' +
            '</div>' +
            '<div class="incoming-card-actions">' +
                '<button class="equip-action equip-action-history" onclick="openCovenantModal({id:' + it.id + ',name:\'' + safeName + '\',entity_type:\'' + it.entity_type + '\'})"><i class="fas fa-clock-rotate-left"></i><span>' + t('history') + '</span></button>' +
                '<button class="equip-action equip-action-return" onclick="returnIncomingCustody(' + it.id + ',\'' + it.entity_type + '\')"><i class="fas fa-undo"></i><span>' + t('returnToOriginalDept') + '</span></button>' +
            '</div>';
        grid.appendChild(card);
    });
}

let currentDeptReturnId = null;
let currentDeptReturnEntity = 'item';

function returnIncomingCustody(itemId, entityType) {
    currentDeptReturnId = itemId;
    currentDeptReturnEntity = entityType === 'equipment' ? 'equipment' : 'item';

    var dept = currentDeptData || {};
    var list = currentDeptReturnEntity === 'equipment'
        ? (dept.incoming_equipment || [])
        : (dept.incoming_items || []);
    var rec = list.find(function(x){ return x.id === itemId; });

    document.getElementById('deptReturnItemName').textContent = rec ? ' - ' + (rec.name || '') : '';
    document.getElementById('deptReturnSource').textContent = rec && rec.source_dept_name ? rec.source_dept_name : t('notRecorded');
    var period = '';
    if (rec) {
        period = (rec.start_date || rec.transfer_date || '');
        if (rec.end_date) period += ' → ' + rec.end_date;
    }
    document.getElementById('deptReturnPeriod').textContent = period || t('notRecorded');

    var condText = rec && rec.condition
        ? (rec.condition === 'good' ? t('conditionGood') : t('conditionNotGood'))
        : t('notRecorded');
    if (rec && rec.condition_notes) condText += ' — ' + rec.condition_notes;
    document.getElementById('deptReturnOrigCondition').textContent = condText;

    var origNotesRow = document.getElementById('deptReturnOrigNotesRow');
    if (rec && rec.notes) {
        origNotesRow.style.display = '';
        document.getElementById('deptReturnOrigNotes').textContent = rec.notes;
    } else {
        origNotesRow.style.display = 'none';
    }

    document.getElementById('deptReturnNotes').value = '';
    var goodRadio = document.querySelector('input[name="deptReturnCondition"][value="good"]');
    if (goodRadio) goodRadio.checked = true;

    document.getElementById('deptReturnModal').classList.add('active');
}

async function submitDeptReturn() {
    if (!currentDeptReturnId) return;
    var conditionEl = document.querySelector('input[name="deptReturnCondition"]:checked');
    var condition = conditionEl ? conditionEl.value : 'good';
    var notes = document.getElementById('deptReturnNotes').value.trim();
    var payload = {
        return_date: new Date().toISOString().split('T')[0],
        return_condition: condition,
        return_notes: notes
    };
    try {
        if (currentDeptReturnEntity === 'equipment') {
            await API.returnEquipmentCustody(currentDeptReturnId, payload);
        } else {
            await API.returnCustody(currentDeptReturnId, payload);
        }
        closeModal('deptReturnModal');
        currentDeptReturnId = null;
        if (currentDeptId && currentPage === 'dept-detail') {
            currentDeptData = await API.getDepartment(currentDeptId);
            renderIncomingTab();
            await renderEquipmentTab();
            await renderItemsTab();
        }
        showToast(t('returnedSuccessfully'));
    } catch (e) { showToast(e.message, 'error'); }
}

async function renderEquipmentTab() {
    var dept = currentDeptData || {};
    var items = (dept.equipment || []).slice();
    var grid = document.getElementById('equipGrid');
    if (!grid) return;

    var qEl = document.getElementById('equipSearch');
    var fEl = document.getElementById('equipFilter');
    var q = qEl ? qEl.value.trim().toLowerCase() : '';
    var f = fEl ? fEl.value : 'all';

    var filtered = items.filter(function(it) {
        var active = getActiveCustody(it);
        var isOut = !!active;
        if (f === 'in' && isOut) return false;
        if (f === 'out' && !isOut) return false;
        if (!q) return true;
        var hay = [it.name, it.description, it.purpose, it.receipt_date, it.employee_name, active && active.to_employee_name].filter(Boolean).join(' ').toLowerCase();
        return hay.indexOf(q) !== -1;
    });

    grid.innerHTML = '';
    if (filtered.length === 0) {
        grid.innerHTML = '<div class="empty-state" style="grid-column:1/-1;padding:28px"><i class="fas fa-cogs" style="font-size:32px;opacity:0.3"></i><p>' + t('noItems') + '</p></div>';
        return;
    }

    filtered.forEach(function(item, idx) {
        var active = getActiveCustody(item);
        var isOut = !!active;
        var statusLabel = isOut ? t('outOfDeptCustody') : t('inDept');
        var statusCls = isOut ? 'out-custody' : 'in-dept';
        var custodian = isOut ? (active.to_employee_name || '') : (item.employee_name || '');
        var period = isOut ? ((active.start_date || active.transfer_date || '') + (active.end_date ? ' → ' + active.end_date : '')) : '';

        var card = document.createElement('div');
        card.className = 'equip-card' + (isOut ? ' equip-card-out' : '');
        card.style.animationDelay = (idx * 0.05) + 's';
        card.dataset.id = item.id;

        var safeName = escapeHtml(item.name || '').replace(/'/g, "\\'");

        card.innerHTML =
            (isOut ? '<div class="equip-out-banner"><i class="fas fa-user-clock"></i> ' + t('outOfDeptCustody') + '</div>' : '') +
            '<div class="equip-card-top">' +
                '<div class="equip-card-visual"' + (item.image ? ' onclick="event.stopPropagation();openImageViewer(\'' + escapeHtml(item.image) + '\')" style="cursor:pointer"' : '') + '>' +
                    (item.image ? '<img src="' + escapeHtml(item.image) + '" onerror="this.parentElement.innerHTML=\'<i class=\\\'fas fa-cog equip-spin-icon\\\'></i>\'">' : '<i class="fas fa-cog equip-spin-icon"></i>') +
                    '<span class="equip-card-qty">x' + Number(item.qty || 0) + '</span>' +
                '</div>' +
                '<div class="equip-card-head">' +
                    '<div class="equip-card-name" title="' + escapeHtml(item.name || '') + '">' + escapeHtml(item.name || '') + '</div>' +
                    (item.description ? '<div class="equip-card-desc">' + escapeHtml(item.description) + '</div>' : '') +
                    '<div class="equip-card-status-wrap">' +
                        '<span class="equip-status-pill ' + statusCls + '"><i class="fas ' + (isOut ? 'fa-user-clock' : 'fa-check-circle') + '"></i> ' + escapeHtml(statusLabel) + '</span>' +
                        (custodian ? '<span class="equip-custodian-pill" onclick="event.stopPropagation();if(' + ((active && active.to_employee_id) || item.employee_id || 0) + '){currentEmpId=' + ((active && active.to_employee_id) || item.employee_id || 0) + ';navigateTo(\'emp-detail\')}"><i class="fas fa-user"></i> ' + escapeHtml(custodian) + '</span>' : '') +
                    '</div>' +
                '</div>' +
            '</div>' +
            (period ? '<div class="equip-card-period"><i class="fas fa-calendar-alt"></i> ' + escapeHtml(period) + '</div>' : '') +
            '<div class="equip-card-actions">' +
                '<button class="equip-action equip-action-transfer" onclick="event.stopPropagation();openCovenantModal({id:' + item.id + ',name:\'' + safeName + '\',entity_type:\'equipment\'})" title="' + t('transferCustody') + '">' +
                    '<i class="fas fa-exchange-alt"></i><span>' + t('transferBtn') + '</span>' +
                '</button>' +
                '<button class="equip-action equip-action-history" onclick="event.stopPropagation();openCovenantModal({id:' + item.id + ',name:\'' + safeName + '\',entity_type:\'equipment\'})" title="' + t('history') + '">' +
                    '<i class="fas fa-clock-rotate-left"></i><span>' + t('history') + '</span>' +
                '</button>' +
                (isOut ?
                '<button class="equip-action equip-action-return" onclick="event.stopPropagation();returnCustody(' + item.id + ',\'equipment\')" title="' + t('markReturned') + '">' +
                    '<i class="fas fa-undo"></i><span>' + t('markReturned') + '</span>' +
                '</button>' : '') +
                '<button class="equip-action equip-action-expand" onclick="event.stopPropagation();toggleEquipDetails(' + item.id + ')" title="' + t('details') + '">' +
                    '<i class="fas fa-sliders-h"></i><span>' + t('details') + '</span>' +
                '</button>' +
                '<button class="equip-action equip-action-delete" onclick="event.stopPropagation();deleteEquipment(' + item.id + ')" title="' + t('delete') + '">' +
                    '<i class="fas fa-trash-alt"></i>' +
                '</button>' +
            '</div>' +
            '<div class="equip-card-details" id="equipDetails-' + item.id + '">' +
                '<div class="equip-detail-grid">' +
                    '<div class="equip-detail-field">' +
                        '<label><i class="fas fa-tag"></i> ' + t('itemName') + '</label>' +
                        '<input type="text" value="' + escapeHtml(item.name || '') + '" onchange="updateEquipmentInline(' + item.id + ',{name:this.value})">' +
                    '</div>' +
                    '<div class="equip-detail-field">' +
                        '<label><i class="fas fa-sort-numeric-up"></i> ' + t('count') + '</label>' +
                        '<input type="number" min="1" value="' + Number(item.qty || 1) + '" onchange="updateEquipmentInline(' + item.id + ',{qty:parseInt(this.value)})">' +
                    '</div>' +
                    '<div class="equip-detail-field">' +
                        '<label><i class="fas fa-calendar-alt"></i> ' + t('receiptDate') + '</label>' +
                        '<input type="date" value="' + escapeHtml(item.receipt_date || '') + '" onchange="updateEquipmentInline(' + item.id + ',{receipt_date:this.value})">' +
                    '</div>' +
                    '<div class="equip-detail-field">' +
                        '<label><i class="fas fa-bullseye"></i> ' + t('purpose') + '</label>' +
                        '<input type="text" value="' + escapeHtml(item.purpose || '') + '" onchange="updateEquipmentInline(' + item.id + ',{purpose:this.value})">' +
                    '</div>' +
                    '<div class="equip-detail-field equip-detail-field-full">' +
                        '<label><i class="fas fa-align-left"></i> ' + t('description') + '</label>' +
                        '<input type="text" value="' + escapeHtml(item.description || '') + '" onchange="updateEquipmentInline(' + item.id + ',{description:this.value})">' +
                    '</div>' +
                    '<div class="equip-detail-field equip-detail-field-full">' +
                        '<label class="equip-upload-label"><i class="fas fa-camera"></i> ' + (item.image ? t('changeImage') : t('chooseImage')) + '<input type="file" accept="image/*" style="display:none" onchange="uploadEquipmentImg(' + item.id + ',this.files[0])"></label>' +
                    '</div>' +
                '</div>' +
            '</div>';

        // Click anywhere on card (except inputs/buttons) opens details modal (covenant modal)
        card.addEventListener('click', function(ev) {
            if (ev.target.closest('button,label,input,select,a')) return;
            openCovenantModal({ id: item.id, name: item.name || '', entity_type: 'equipment' });
        });

        grid.appendChild(card);
    });
}

function toggleEquipDetails(id) {
    var el = document.getElementById('equipDetails-' + id);
    if (!el) return;
    el.classList.toggle('open');
}

async function renderHistoryTab() {
    var dept = currentDeptData;
    var timeline = document.getElementById('deptHistoryTimeline');
    var history = dept.history || [];

    // Populate employee dropdown
    var empSelect = document.getElementById('historyEmpSelect');
    empSelect.innerHTML = '<option value="">' + t('responsibleEmployee') + '</option>';
    try {
        var allEmps = await API.getEmployees();
        allEmps.forEach(function(e) {
            empSelect.innerHTML += '<option value="' + e.id + '">' + escapeHtml(e.name) + '</option>';
        });
    } catch (e) { /* ignore */ }

    timeline.innerHTML = '';
    if (history.length === 0) {
        timeline.innerHTML = '<div class="empty-state" style="padding:14px"><p>' + t('noItems') + '</p></div>';
    } else {
        history.forEach(function(h) {
            var entry = document.createElement('div');
            entry.className = 'history-entry status-' + h.status;
            entry.innerHTML = '<div class="history-entry-actions">' +
                '<button class="btn-icon" onclick="toggleHistoryStatus(' + h.id + ',\'' + h.status + '\')" title="Toggle status"><i class="fas fa-sync-alt" style="font-size:11px"></i></button>' +
                '<button class="btn-icon" onclick="deleteHistory(' + h.id + ')" title="' + t('delete') + '"><i class="fas fa-trash-alt" style="font-size:11px;color:var(--danger)"></i></button>' +
                '</div>' +
                '<div style="display:flex;align-items:center;gap:10px">' +
                (h.employee_photo ? '<img src="' + escapeHtml(h.employee_photo) + '" style="width:32px;height:32px;border-radius:8px;object-fit:cover">' : '') +
                '<div>' +
                '<div class="history-entry-name" onclick="currentEmpId=' + (h.employee_id || 0) + ';navigateTo(\'emp-detail\')" style="cursor:pointer">' + escapeHtml(h.employee_name || t('unknown')) + '</div>' +
                '<div class="history-entry-title">' + escapeHtml(h.job_title || '') + '</div>' +
                '</div></div>' +
                '<div class="history-entry-dates">' +
                '<i class="fas fa-calendar" style="font-size:11px"></i> ' + (h.start_date || '') + (h.end_date ? ' &rarr; ' + h.end_date : ' &rarr; present') +
                ' <span class="history-status-badge ' + h.status + '">' + h.status + '</span>' +
                '</div>';
            timeline.appendChild(entry);
        });
    }
}

async function renderItemsTab() {
    var dept = currentDeptData;
    var items = dept.items || [];
    var container = document.getElementById('deptItemsContainer');
    container.innerHTML = '';

    if (items.length === 0) {
        container.innerHTML = '<div class="empty-state" style="grid-column:1/-1"><i class="fas fa-tools"></i><p>' + t('noItems') + '</p></div>';
        return;
    }

    items.forEach(function(item, idx) {
        var active = getActiveCustody(item);
        var isOut = !!active;
        var statusLabel = isOut ? t('outOfDeptCustody') : (item.covenant_status || t('active'));
        var statusCls = isOut ? 'out-custody' : 'active';

        var card = document.createElement('div');
        card.className = 'dept-item-card-v2' + (isOut ? ' dept-item-out-custody' : '');
        card.style.animationDelay = (idx * 0.05) + 's';
        card.style.cursor = 'pointer';
        card.onclick = function(ev) {
            if (ev.target.closest('button,label,input,select,a')) return;
            openCovenantModal({ id: item.id, name: item.name || '' });
        };
        var custodianName = isOut ? (active.to_employee_name || item.employee_name || '') : '';
        var custodyDates = isOut ? ((active.start_date || active.transfer_date || '') + (active.end_date ? ' → ' + active.end_date : '')) : '';
        card.innerHTML =
            (isOut ? '<div class="out-custody-banner"><i class="fas fa-user-clock"></i> ' + t('outOfDeptCustody') + '</div>' : '') +
            '<div class="dept-item-v2-visual"' + (item.image ? ' onclick="event.stopPropagation();openImageViewer(\'' + escapeHtml(item.image) + '\')" style="cursor:pointer"' : '') + '>' +
                (item.image ? '<img src="' + escapeHtml(item.image) + '" onerror="this.parentElement.innerHTML=\'<i class=\\\'fas fa-cube\\\'></i>\'">' : '<i class="fas fa-cube"></i>') +
                '<div class="dept-item-v2-qty"><span>x' + Number(item.qty) + '</span></div>' +
            '</div>' +
            '<div class="dept-item-v2-body">' +
                '<div class="dept-item-v2-name">' + escapeHtml(item.name) + '</div>' +
                (item.description ? '<div class="dept-item-v2-desc">' + escapeHtml(item.description) + '</div>' : '') +
                '<div class="dept-item-v2-meta">' +
                    (custodianName ? '<span class="dept-item-v2-tag tag-custodian" onclick="event.stopPropagation();if(' + (active.to_employee_id || 0) + '){currentEmpId=' + (active.to_employee_id || 0) + ';navigateTo(\'emp-detail\')}" style="cursor:pointer"><i class="fas fa-user"></i> ' + escapeHtml(custodianName) + '</span>' :
                     (item.employee_name ? '<span class="dept-item-v2-tag" onclick="event.stopPropagation();if(' + (item.employee_id || 0) + '){currentEmpId=' + (item.employee_id || 0) + ';navigateTo(\'emp-detail\')}" style="cursor:pointer"><i class="fas fa-user"></i> ' + escapeHtml(item.employee_name) + '</span>' : '')) +
                    (custodyDates ? '<span class="dept-item-v2-tag tag-period"><i class="fas fa-calendar-alt"></i> ' + escapeHtml(custodyDates) + '</span>' :
                     (item.receipt_date ? '<span class="dept-item-v2-tag"><i class="fas fa-calendar-alt"></i> ' + escapeHtml(item.receipt_date) + '</span>' : '')) +
                    (item.purpose ? '<span class="dept-item-v2-tag"><i class="fas fa-bullseye"></i> ' + escapeHtml(item.purpose) + '</span>' : '') +
                    '<span class="dept-item-v2-tag status-tag ' + statusCls + '">' + escapeHtml(statusLabel) + '</span>' +
                '</div>' +
            '</div>' +
            '<div class="dept-item-v2-actions">' +
                '<button class="btn-icon btn-transfer-custody" onclick="event.stopPropagation();openCovenantModal({id:' + item.id + ',name:\'' + escapeHtml(item.name || '').replace(/'/g, "\\'") + '\'})" title="' + t('transferCustody') + '"><i class="fas fa-exchange-alt"></i></button>' +
                (isOut ? '<button class="btn-icon btn-return-custody" onclick="event.stopPropagation();returnCustody(' + item.id + ')" title="' + t('markReturned') + '"><i class="fas fa-undo"></i></button>' : '') +
                '<button class="btn-icon delete" onclick="event.stopPropagation();deleteDeptItem(' + item.id + ')"><i class="fas fa-trash-alt"></i></button>' +
            '</div>';
        container.appendChild(card);
    });
}

async function addEquipment() {
    var name = document.getElementById('newEquipName').value.trim();
    if (!name) return;
    try {
        var newItem = await API.addDeptEquipment(currentDeptId, {
            name: name,
            qty: parseInt(document.getElementById('newEquipQty').value) || 1,
            description: document.getElementById('newEquipDesc').value.trim(),
            purpose: document.getElementById('newEquipPurpose').value.trim()
        });
        var fileInput = document.getElementById('newEquipFile');
        if (fileInput.files[0]) {
            var updated = await API.uploadDeptEquipmentImage(newItem.id, fileInput.files[0]);
            if (updated) Object.assign(newItem, updated);
        }
        newItem.covenant_history = [];
        if (currentDeptData) currentDeptData.equipment = (currentDeptData.equipment || []).concat([newItem]);
        await renderEquipmentTab();
        showToast(t('added'));
        document.getElementById('newEquipName').value = '';
        document.getElementById('newEquipQty').value = '1';
        document.getElementById('newEquipDesc').value = '';
        document.getElementById('newEquipPurpose').value = '';
        fileInput.value = '';
    } catch (e) { showToast(e.message, 'error'); }
}

async function updateEquipmentInline(id, data) {
    if (currentDeptData && Array.isArray(currentDeptData.equipment)) {
        var it = currentDeptData.equipment.find(function(x){ return x.id === id; });
        if (it) Object.assign(it, data);
    }
    try { await API.updateDeptEquipment(id, data); }
    catch (e) { showToast(e.message, 'error'); currentDeptData = await API.getDepartment(currentDeptId); await renderEquipmentTab(); }
}

async function deleteEquipment(id) {
    var prev = currentDeptData && currentDeptData.equipment ? currentDeptData.equipment.slice() : null;
    if (currentDeptData && Array.isArray(currentDeptData.equipment)) {
        currentDeptData.equipment = currentDeptData.equipment.filter(function(x){ return x.id !== id; });
        if (currentPage === 'dept-detail') await renderEquipmentTab();
    }
    try {
        await API.deleteDeptEquipment(id);
        if (currentEmpId && currentPage === 'emp-detail') {
            currentEmpData = await API.getEmployee(currentEmpId);
            await renderEmpItems();
        }
        showToast(t('itemRemoved'));
    } catch (e) {
        showToast(e.message, 'error');
        if (prev && currentDeptData) { currentDeptData.equipment = prev; await renderEquipmentTab(); }
    }
}

async function uploadEquipmentImg(id, file) {
    if (!file) return;
    try {
        await API.uploadDeptEquipmentImage(id, file);
        if (currentDeptId) {
            currentDeptData = await API.getDepartment(currentDeptId);
            await renderEquipmentTab();
        }
        showToast(t('imageUploaded'));
    } catch (e) { showToast(e.message, 'error'); }
}

async function updateDeptItemInline(id, data) {
    // Optimistic: mutate local state first, fire API in background
    if (currentDeptData && Array.isArray(currentDeptData.items)) {
        var it = currentDeptData.items.find(function(x){ return x.id === id; });
        if (it) Object.assign(it, data);
    }
    try { await API.updateDeptItem(id, data); }
    catch (e) { showToast(e.message, 'error'); currentDeptData = await API.getDepartment(currentDeptId); await renderEquipmentTab(); await renderItemsTab(); }
}

async function addDeptItem() {
    var name = document.getElementById('newDeptItemName').value.trim();
    if (!name) return;
    try {
        var newItem = await API.addDeptItem(currentDeptId, {
            name: name,
            description: document.getElementById('newDeptItemDesc').value.trim(),
            qty: parseInt(document.getElementById('newDeptItemQty').value) || 1
        });
        var fileInput = document.getElementById('newDeptItemFile');
        if (fileInput.files[0]) {
            var updated = await API.uploadDeptItemImage(newItem.id, fileInput.files[0]);
            if (updated) Object.assign(newItem, updated);
        }
        newItem.covenant_history = [];
        if (currentDeptData) currentDeptData.items = (currentDeptData.items || []).concat([newItem]);
        await renderItemsTab();
        showToast(t('added'));
        document.getElementById('newDeptItemName').value = '';
        document.getElementById('newDeptItemDesc').value = '';
        document.getElementById('newDeptItemQty').value = '1';
        fileInput.value = '';
    } catch (e) { showToast(e.message, 'error'); }
}

async function deleteDeptItem(id) {
    var prev = currentDeptData && currentDeptData.items ? currentDeptData.items.slice() : null;
    if (currentDeptData && Array.isArray(currentDeptData.items)) {
        currentDeptData.items = currentDeptData.items.filter(function(x){ return x.id !== id; });
        if (currentPage === 'dept-detail') await renderItemsTab();
    }
    try {
        await API.deleteDeptItem(id);
        if (currentEmpId && currentPage === 'emp-detail') {
            currentEmpData = await API.getEmployee(currentEmpId);
            await renderEmpItems();
        }
        showToast(t('itemRemoved'));
    } catch (e) {
        showToast(e.message, 'error');
        if (prev && currentDeptData) { currentDeptData.items = prev; await renderItemsTab(); }
    }
}

async function uploadDeptItemImg(id, file) {
    if (!file) return;
    try {
        await API.uploadDeptItemImage(id, file);
        if (currentDeptId) {
            currentDeptData = await API.getDepartment(currentDeptId);
            await renderEquipmentTab();
            await renderItemsTab();
        }
        showToast(t('imageUploaded'));
    } catch (e) { showToast(e.message, 'error'); }
}

async function addHistory() {
    var empId = document.getElementById('historyEmpSelect').value;
    var start = document.getElementById('historyStartDate').value;
    if (!empId || !start) { showToast('Select employee and start date', 'error'); return; }
    try {
        await API.addDeptHistory(currentDeptId, {
            employee_id: parseInt(empId),
            start_date: start,
            end_date: document.getElementById('historyEndDate').value || '',
            status: document.getElementById('historyStatus').value,
            notes: document.getElementById('historyNotes').value.trim()
        });
        currentDeptData = await API.getDepartment(currentDeptId);
        await renderHistoryTab();
        showToast(t('added'));
        document.getElementById('historyStartDate').value = '';
        document.getElementById('historyEndDate').value = '';
        document.getElementById('historyNotes').value = '';
    } catch (e) { showToast(e.message, 'error'); }
}

async function toggleHistoryStatus(id, current) {
    var next = current === 'active' ? 'paused' : current === 'paused' ? 'ended' : 'active';
    try {
        await API.updateDeptHistory(id, { status: next });
        currentDeptData = await API.getDepartment(currentDeptId);
        await renderHistoryTab();
    } catch (e) { showToast(e.message, 'error'); }
}

async function deleteHistory(id) {
    try {
        await API.deleteDeptHistory(id);
        currentDeptData = await API.getDepartment(currentDeptId);
        await renderHistoryTab();
        showToast(t('itemRemoved'));
    } catch (e) { showToast(e.message, 'error'); }
}

async function updateDeptHistory(id, data) {
    try {
        await API.updateDeptHistory(id, data);
        currentDeptData = await API.getDepartment(currentDeptId);
        await renderHistoryTab();
    } catch (e) { showToast(e.message, 'error'); }
}

// ============ Covenant History Modal ============
function setTransferMode(mode) {
    currentTransferMode = mode === 'department' ? 'department' : 'employee';
    document.querySelectorAll('.transfer-mode-btn').forEach(function(b){
        b.classList.toggle('active', b.dataset.mode === currentTransferMode);
    });
    var empF = document.getElementById('covenantEmployeeField');
    var depF = document.getElementById('covenantDepartmentField');
    if (empF) empF.style.display = currentTransferMode === 'employee' ? '' : 'none';
    if (depF) depF.style.display = currentTransferMode === 'department' ? '' : 'none';
}

async function openCovenantModal(item) {
    currentCovenantItemId = item.id;
    currentCovenantEntity = item.entity_type === 'equipment' ? 'equipment' : 'item';
    setTransferMode('employee');
    document.getElementById('covenantItemName').textContent = ' - ' + (item.name || '');

    var timeline = document.getElementById('covenantTimeline');
    var currentPanel = document.getElementById('covenantCurrentPanel');
    timeline.innerHTML = '<div class="loading"><i class="fas fa-spinner fa-spin"></i></div>';
    if (currentPanel) currentPanel.style.display = 'none';
    document.getElementById('covenantModal').classList.add('active');

    // Populate employee dropdown
    var transferSelect = document.getElementById('covenantTransferTo');
    transferSelect.innerHTML = '<option value="">' + t('selectEmployee') + '</option>';
    try {
        var allEmps = await API.getEmployees();
        allEmps.forEach(function(e) {
            transferSelect.innerHTML += '<option value="' + e.id + '">' + escapeHtml(e.name) + '</option>';
        });
    } catch (e) { /* ignore */ }

    // Populate department dropdown (exclude current department for items, or just exclude no dept)
    var deptSelect = document.getElementById('covenantTransferToDept');
    if (deptSelect) {
        deptSelect.innerHTML = '<option value="">' + t('selectDepartment') + '</option>';
        try {
            var allDepts = await API.getDepartments();
            allDepts.forEach(function(d) {
                if (d.id === currentDeptId) return;
                deptSelect.innerHTML += '<option value="' + d.id + '">' + escapeHtml(d.name) + '</option>';
            });
        } catch (e) { /* ignore */ }
    }

    // Load covenant history (entity-aware)
    try {
        var history = currentCovenantEntity === 'equipment'
            ? await API.getEquipmentCovenant(item.id)
            : await API.getCovenantHistory(item.id);
        timeline.innerHTML = '';
        var active = null;
        if (history && history.length) {
            for (var i = 0; i < history.length; i++) {
                if (history[i].status === 'active') { active = history[i]; break; }
            }
        }
        if (active && currentPanel) {
            currentPanel.style.display = 'block';
            var heldByLabel, heldByValue;
            if (active.to_department_id) {
                heldByLabel = t('targetDepartment');
                heldByValue = active.to_department_name || '';
            } else {
                heldByLabel = t('currentlyWith');
                heldByValue = active.to_employee_name || '';
            }
            currentPanel.innerHTML =
                '<div class="cur-cust-header"><i class="fas ' + (active.to_department_id ? 'fa-building' : 'fa-user-clock') + '"></i> ' + t('outOfDeptCustody') + '</div>' +
                '<div class="cur-cust-row"><span class="cur-cust-label">' + heldByLabel + ':</span> <strong>' + escapeHtml(heldByValue) + '</strong></div>' +
                '<div class="cur-cust-row"><span class="cur-cust-label">' + t('custodyPeriod') + ':</span> ' + escapeHtml(active.start_date || active.transfer_date || '') + (active.end_date ? ' → ' + escapeHtml(active.end_date) : '') + '</div>' +
                (active.condition ? '<div class="cur-cust-row"><span class="cur-cust-label">' + t('deviceCondition') + ':</span> ' + escapeHtml(active.condition === 'good' ? t('conditionGood') : t('conditionNotGood')) + (active.condition_notes ? ' — ' + escapeHtml(active.condition_notes) : '') + '</div>' : '') +
                (active.notes ? '<div class="cur-cust-row"><span class="cur-cust-label">' + t('additionalNotes') + ':</span> ' + escapeHtml(active.notes) + '</div>' : '') +
                '<div class="cur-cust-actions"><button class="btn-add btn-return-cust" onclick="returnCustody(' + item.id + ',\'' + currentCovenantEntity + '\')"><i class="fas fa-undo"></i> <span>' + t('markReturned') + '</span></button></div>';
        }
        if (!history || history.length === 0) {
            timeline.innerHTML = '<div class="empty-state" style="padding:14px"><p>' + t('noItems') + '</p></div>';
        } else {
            history.forEach(function(h) {
                var entry = document.createElement('div');
                entry.className = 'history-entry status-' + (h.status || 'active');
                var condText = '';
                if (h.condition) condText = ' • ' + (h.condition === 'good' ? t('conditionGood') : t('conditionNotGood'));
                var recipientName = h.to_department_id ? (h.to_department_name || '') : (h.to_employee_name || h.employee_name || t('unknown'));
                var recipientIcon = h.to_department_id ? 'fa-building' : 'fa-user';
                entry.innerHTML = '<div class="history-entry-actions">' +
                    '<button class="btn-icon" onclick="deleteCovenantEntry(' + h.id + ')"><i class="fas fa-trash-alt" style="font-size:11px;color:var(--danger)"></i></button>' +
                    '</div>' +
                    '<div style="display:flex;align-items:center;gap:10px">' +
                    (h.employee_photo ? '<img src="' + escapeHtml(h.employee_photo) + '" style="width:32px;height:32px;border-radius:8px;object-fit:cover">' : '<i class="fas ' + recipientIcon + '" style="font-size:18px;color:var(--text-muted);width:32px;text-align:center"></i>') +
                    '<div>' +
                    '<div class="history-entry-name">' + escapeHtml(recipientName) + '</div>' +
                    '<div class="history-entry-title">' + escapeHtml(h.job_title || '') + condText + '</div>' +
                    '</div></div>' +
                    '<div class="history-entry-dates">' +
                    '<i class="fas fa-calendar" style="font-size:11px"></i> ' + (h.start_date || h.transfer_date || '') + (h.end_date ? ' &rarr; ' + h.end_date : '') +
                    ' <span class="history-status-badge ' + (h.status || 'active') + '">' + (h.status || 'active') + '</span>' +
                    '</div>' +
                    (h.condition_notes ? '<div style="font-size:11px;color:var(--text-muted);margin-top:4px"><i class="fas fa-info-circle"></i> ' + escapeHtml(h.condition_notes) + '</div>' : '') +
                    (h.notes ? '<div style="font-size:11px;color:var(--text-muted);margin-top:4px">' + escapeHtml(h.notes) + '</div>' : '') +
                    (h.return_condition ? '<div class="cov-return-line"><i class="fas fa-undo"></i> ' + t('returnConditionLabel') + ': <strong>' + escapeHtml(h.return_condition === 'good' ? t('conditionGood') : t('conditionNotGood')) + '</strong></div>' : '') +
                    (h.return_notes ? '<div class="cov-return-line"><i class="fas fa-sticky-note"></i> ' + t('returnNotes') + ': ' + escapeHtml(h.return_notes) + '</div>' : '');
                timeline.appendChild(entry);
            });
        }
    } catch (e) {
        timeline.innerHTML = '<div class="empty-state"><p>' + t('failedLoad') + '</p></div>';
    }

    // Reset form defaults
    document.getElementById('covenantTransferDate').value = new Date().toISOString().split('T')[0];
    var endEl = document.getElementById('covenantTransferEndDate'); if (endEl) endEl.value = '';
    document.getElementById('covenantTransferNotes').value = '';
    var condNotesEl = document.getElementById('covenantConditionNotes'); if (condNotesEl) condNotesEl.value = '';
    var condNotesWrap = document.getElementById('covenantConditionNotesWrap'); if (condNotesWrap) condNotesWrap.style.display = 'none';
    var goodRadio = document.querySelector('input[name="covenantCondition"][value="good"]');
    if (goodRadio) goodRadio.checked = true;
}

async function transferCovenant() {
    var startDate = document.getElementById('covenantTransferDate').value;
    var endDateEl = document.getElementById('covenantTransferEndDate');
    var endDate = endDateEl ? endDateEl.value : '';
    if (!startDate) { showToast(t('startDate'), 'error'); return; }

    var payload = {
        transfer_date: startDate, start_date: startDate, end_date: endDate,
        status: 'active'
    };
    if (currentTransferMode === 'department') {
        var deptId = document.getElementById('covenantTransferToDept').value;
        if (!deptId) { showToast(t('selectDepartment'), 'error'); return; }
        payload.to_department_id = parseInt(deptId);
    } else {
        var empId = document.getElementById('covenantTransferTo').value;
        if (!empId) { showToast(t('selectEmployee'), 'error'); return; }
        payload.to_employee_id = parseInt(empId);
    }
    var conditionEl = document.querySelector('input[name="covenantCondition"]:checked');
    var condition = conditionEl ? conditionEl.value : 'good';
    var conditionNotesEl = document.getElementById('covenantConditionNotes');
    var conditionNotes = conditionNotesEl ? conditionNotesEl.value.trim() : '';
    if (condition === 'not_good' && !conditionNotes) {
        showToast(t('conditionNotes'), 'error');
        return;
    }
    payload.condition = condition;
    payload.condition_notes = conditionNotes;
    payload.notes = document.getElementById('covenantTransferNotes').value.trim();

    try {
        if (currentCovenantEntity === 'equipment') {
            await API.addEquipmentCovenant(currentCovenantItemId, payload);
        } else {
            await API.addCovenantHistory(currentCovenantItemId, payload);
        }
        var itemName = document.getElementById('covenantItemName').textContent.replace(' - ', '');
        await openCovenantModal({ id: currentCovenantItemId, name: itemName, entity_type: currentCovenantEntity });
        if (currentDeptId && currentPage === 'dept-detail') {
            currentDeptData = await API.getDepartment(currentDeptId);
            await renderEquipmentTab();
            await renderItemsTab();
            renderIncomingTab();
        }
        if (currentEmpId && currentPage === 'emp-detail') {
            currentEmpData = await API.getEmployee(currentEmpId);
            await renderEmpItems();
        }
        showToast(t('custodyTransferred'));
    } catch (e) { showToast(e.message, 'error'); }
}

async function returnCustody(itemId, entityType) {
    if (!confirm(t('returnConfirm'))) return;
    var ent = entityType === 'equipment' ? 'equipment' : 'item';
    try {
        if (ent === 'equipment') {
            await API.returnEquipmentCustody(itemId, { return_date: new Date().toISOString().split('T')[0] });
        } else {
            await API.returnCustody(itemId, { return_date: new Date().toISOString().split('T')[0] });
        }
        if (currentDeptId && currentPage === 'dept-detail') {
            currentDeptData = await API.getDepartment(currentDeptId);
            await renderEquipmentTab();
            await renderItemsTab();
            renderIncomingTab();
        }
        if (currentEmpId && currentPage === 'emp-detail') {
            currentEmpData = await API.getEmployee(currentEmpId);
            await renderEmpItems();
        }
        if (currentCovenantItemId === itemId) {
            var itemName = document.getElementById('covenantItemName').textContent.replace(' - ', '');
            await openCovenantModal({ id: itemId, name: itemName, entity_type: ent });
        }
        showToast(t('returnedSuccessfully'));
    } catch (e) { showToast(e.message, 'error'); }
}

async function addCovenant(itemId) {
    // alias
    await transferCovenant();
}

async function deleteCovenantEntry(id) {
    try {
        await API.deleteCovenantHistory(id);
        var itemName = document.getElementById('covenantItemName').textContent.replace(' - ', '');
        await openCovenantModal({ id: currentCovenantItemId, name: itemName });
        showToast(t('itemRemoved'));
    } catch (e) { showToast(e.message, 'error'); }
}

// ============ Employee Custody Details Modal ============
let currentEmpCustodyItemId = null;
let currentEmpCustodyEntity = 'item';

async function openEmpCustodyDetails(itemId, itemName, entityType) {
    currentEmpCustodyItemId = itemId;
    currentEmpCustodyEntity = entityType === 'equipment' ? 'equipment' : 'item';
    document.getElementById('empCustodyItemName').textContent = ' - ' + (itemName || '');
    document.getElementById('empCustodyConditionView').textContent = t('loading');
    document.getElementById('empCustodyPeriodView').textContent = t('loading');
    document.getElementById('empCustodyOriginalNotesRow').style.display = 'none';
    document.getElementById('empCustodyFromDeptRow').style.display = 'none';
    document.getElementById('empReturnNotes').value = '';
    var goodRadio = document.querySelector('input[name="empReturnCondition"][value="good"]');
    if (goodRadio) goodRadio.checked = true;
    document.getElementById('empCustodyDetailsModal').classList.add('active');

    try {
        var history = currentEmpCustodyEntity === 'equipment'
            ? await API.getEquipmentCovenant(itemId)
            : await API.getCovenantHistory(itemId);
        var active = null;
        if (history && history.length) {
            for (var i = 0; i < history.length; i++) {
                if (history[i].status === 'active') { active = history[i]; break; }
            }
        }
        if (!active) {
            document.getElementById('empCustodyConditionView').textContent = t('notRecorded');
            document.getElementById('empCustodyPeriodView').textContent = t('notRecorded');
            return;
        }
        var condText = active.condition
            ? (active.condition === 'good' ? t('conditionGood') : t('conditionNotGood'))
            : t('notRecorded');
        if (active.condition_notes) condText += ' — ' + active.condition_notes;
        document.getElementById('empCustodyConditionView').textContent = condText;

        var period = (active.start_date || active.transfer_date || t('notRecorded'));
        if (active.end_date) period += ' → ' + active.end_date;
        document.getElementById('empCustodyPeriodView').textContent = period;

        if (active.notes) {
            document.getElementById('empCustodyOriginalNotesRow').style.display = '';
            document.getElementById('empCustodyOriginalNotesView').textContent = active.notes;
        }

        // Show original department of the item
        try {
            var emp = currentEmpData;
            var matched = (emp && emp.items || []).find(function(x){ return x.id === itemId; });
            if (matched && matched.department_name) {
                document.getElementById('empCustodyFromDeptRow').style.display = '';
                document.getElementById('empCustodyFromDeptView').textContent = matched.department_name;
            }
        } catch(e) {}
    } catch (e) {
        document.getElementById('empCustodyConditionView').textContent = t('failedLoad');
        document.getElementById('empCustodyPeriodView').textContent = t('failedLoad');
    }
}

async function submitReturnCustody() {
    if (!currentEmpCustodyItemId) return;
    var conditionEl = document.querySelector('input[name="empReturnCondition"]:checked');
    var condition = conditionEl ? conditionEl.value : 'good';
    var notes = document.getElementById('empReturnNotes').value.trim();
    try {
        var payload = {
            return_date: new Date().toISOString().split('T')[0],
            return_condition: condition,
            return_notes: notes
        };
        if (currentEmpCustodyEntity === 'equipment') {
            await API.returnEquipmentCustody(currentEmpCustodyItemId, payload);
        } else {
            await API.returnCustody(currentEmpCustodyItemId, payload);
        }
        closeModal('empCustodyDetailsModal');
        currentEmpCustodyItemId = null;
        if (currentEmpId && currentPage === 'emp-detail') {
            currentEmpData = await API.getEmployee(currentEmpId);
            await renderEmpItems();
        }
        if (currentDeptId && currentPage === 'dept-detail') {
            currentDeptData = await API.getDepartment(currentDeptId);
            await renderEquipmentTab();
            await renderItemsTab();
        }
        showToast(t('returnedSuccessfully'));
    } catch (e) { showToast(e.message, 'error'); }
}

// ============ Employee Detail Page ============
async function renderEmpDetail() {
    if (!currentEmpId) return;

    try {
        currentEmpData = await API.getEmployee(currentEmpId);
        var emp = currentEmpData;

        // Header
        var header = document.getElementById('empDetailHeader');
        var avatarEl = header.querySelector('.emp-detail-avatar');
        if (avatarEl) {
            avatarEl.innerHTML = (emp.photo ? '<img src="' + escapeHtml(emp.photo) + '" onclick="openImageViewer(\'' + escapeHtml(emp.photo) + '\')" style="cursor:pointer">' : '<i class="fas fa-user" style="font-size:40px;color:var(--text-muted)"></i>') +
                '<label class="btn-icon emp-avatar-upload" style="cursor:pointer;position:absolute;bottom:0;right:0"><i class="fas fa-camera" style="font-size:12px"></i><input type="file" accept="image/*" style="display:none" onchange="uploadEmployeePhoto(' + emp.id + ',this.files[0])"></label>';
        }
        var nameEl = header.querySelector('.emp-detail-name');
        if (nameEl) nameEl.textContent = emp.name;
        var titleEl = header.querySelector('.emp-detail-title');
        if (titleEl) titleEl.textContent = emp.job_title || '';
        var deptLink = header.querySelector('.emp-detail-dept-link');
        if (deptLink) {
            if (emp.department_name) {
                deptLink.innerHTML = '<i class="fas fa-building"></i> ' + escapeHtml(emp.department_name);
                deptLink.onclick = function() { currentDeptId = emp.department_id; navigateTo('dept-detail'); };
                deptLink.style.cursor = 'pointer';
            } else {
                deptLink.innerHTML = '<i class="fas fa-building"></i> --';
                deptLink.onclick = null;
                deptLink.style.cursor = 'default';
            }
        }

        // Items - custody cards
        await renderEmpItems();
        renderEmpHistoryList();
        // Reset to current tab
        var tabHistory = document.getElementById('empTabHistory');
        var tabCurrent = document.getElementById('empTabCurrent');
        if (tabHistory && tabHistory.classList.contains('active')) {
            // keep history view
        } else {
            switchEmpTab('current');
        }

    } catch (e) { showToast(t('failedLoad'), 'error'); }
}

function switchEmpTab(tab) {
    var current = document.getElementById('empCurrentSection');
    var history = document.getElementById('empHistorySection');
    var btnCur = document.getElementById('empTabCurrent');
    var btnHis = document.getElementById('empTabHistory');
    if (!current || !history) return;
    if (tab === 'history') {
        current.style.display = 'none';
        history.style.display = '';
        history.classList.remove('emp-fade-in');
        void history.offsetWidth;
        history.classList.add('emp-fade-in');
        if (btnCur) btnCur.classList.remove('active');
        if (btnHis) btnHis.classList.add('active');
    } else {
        current.style.display = '';
        history.style.display = 'none';
        current.classList.remove('emp-fade-in');
        void current.offsetWidth;
        current.classList.add('emp-fade-in');
        if (btnCur) btnCur.classList.add('active');
        if (btnHis) btnHis.classList.remove('active');
    }
}

function renderEmpHistoryList() {
    var emp = currentEmpData || {};
    var list = (emp.custody_history || []).slice();
    var timeline = document.getElementById('empHistoryTimeline');
    var badge = document.getElementById('empHistoryBadge');
    if (!timeline) return;
    if (badge) {
        if (list.length > 0) { badge.style.display = ''; badge.textContent = list.length; }
        else badge.style.display = 'none';
    }

    var qEl = document.getElementById('empHistorySearch');
    var fEl = document.getElementById('empHistoryFilter');
    var q = qEl ? qEl.value.trim().toLowerCase() : '';
    var f = fEl ? fEl.value : 'all';

    var filtered = list.filter(function(h) {
        if (f !== 'all' && (h.status || '') !== f) return false;
        if (!q) return true;
        var hay = [
            h.item_name, h.item_department_name, h.start_date, h.end_date, h.transfer_date,
            h.notes, h.return_notes, h.condition_notes, h.from_employee_name
        ].filter(Boolean).join(' ').toLowerCase();
        return hay.indexOf(q) !== -1;
    });

    timeline.innerHTML = '';
    if (filtered.length === 0) {
        timeline.innerHTML = '<div class="empty-state" style="padding:30px"><i class="fas fa-scroll" style="font-size:32px;opacity:0.3"></i><p>' + t('noHistory') + '</p></div>';
        return;
    }

    filtered.forEach(function(h, idx) {
        var statusLabel = h.status === 'returned' ? t('returned')
                         : h.status === 'transferred' ? t('transferred')
                         : (h.status || '');
        var statusCls = h.status || 'ended';
        var period = (h.start_date || h.transfer_date || '') + (h.end_date ? ' → ' + h.end_date : '');
        var card = document.createElement('div');
        card.className = 'emp-history-card status-' + statusCls;
        card.style.animationDelay = (idx * 0.05) + 's';
        var origCondLabel = h.condition ? (h.condition === 'good' ? t('conditionGood') : t('conditionNotGood')) : '';
        var retCondLabel = h.return_condition ? (h.return_condition === 'good' ? t('conditionGood') : t('conditionNotGood')) : '';
        card.innerHTML =
            '<div class="emp-history-card-strip ' + statusCls + '"></div>' +
            '<div class="emp-history-card-head">' +
                '<div class="emp-history-card-icon"' + (h.item_image ? ' style="background-image:url(\'' + escapeHtml(h.item_image) + '\');background-size:cover;background-position:center"' : '') + '>' +
                    (h.item_image ? '' : '<i class="fas fa-box"></i>') +
                '</div>' +
                '<div class="emp-history-card-titles">' +
                    '<div class="emp-history-card-name">' + escapeHtml(h.item_name || '--') + '</div>' +
                    (h.item_department_name ? '<div class="emp-history-card-dept" onclick="if(' + (h.item_department_id || 0) + '){currentDeptId=' + (h.item_department_id || 0) + ';navigateTo(\'dept-detail\')}" style="cursor:pointer"><i class="fas fa-building"></i> ' + escapeHtml(h.item_department_name) + '</div>' : '') +
                '</div>' +
                '<span class="history-status-badge ' + statusCls + '">' + escapeHtml(statusLabel) + '</span>' +
            '</div>' +
            '<div class="emp-history-card-meta">' +
                '<div class="emp-history-meta-row"><i class="fas fa-calendar-alt"></i> <span class="emp-history-meta-label">' + t('custodyPeriod') + ':</span> ' + escapeHtml(period || t('notRecorded')) + '</div>' +
                (origCondLabel ? '<div class="emp-history-meta-row"><i class="fas fa-clipboard-check"></i> <span class="emp-history-meta-label">' + t('conditionOnReceipt') + ':</span> ' + escapeHtml(origCondLabel) + (h.condition_notes ? ' — ' + escapeHtml(h.condition_notes) : '') + '</div>' : '') +
                (retCondLabel ? '<div class="emp-history-meta-row emp-history-return-row"><i class="fas fa-undo"></i> <span class="emp-history-meta-label">' + t('returnConditionLabel') + ':</span> ' + escapeHtml(retCondLabel) + '</div>' : '') +
                (h.return_notes ? '<div class="emp-history-meta-row emp-history-return-row"><i class="fas fa-sticky-note"></i> <span class="emp-history-meta-label">' + t('returnNotes') + ':</span> ' + escapeHtml(h.return_notes) + '</div>' : '') +
                (h.notes ? '<div class="emp-history-meta-row"><i class="fas fa-comment"></i> <span class="emp-history-meta-label">' + t('originalNotes') + ':</span> ' + escapeHtml(h.notes) + '</div>' : '') +
            '</div>';
        timeline.appendChild(card);
    });
}

async function renderEmpItems() {
    var emp = currentEmpData;
    var empItems = emp.items || [];
    var grid = document.getElementById('empCustodyGrid');
    grid.innerHTML = '';

    if (empItems.length === 0) {
        grid.innerHTML = '<div class="empty-state" style="grid-column:1/-1"><i class="fas fa-hand-holding" style="font-size:32px;opacity:0.3"></i><p>' + t('noItems') + '</p></div>';
    } else {
        empItems.forEach(function(item, idx) {
            var statusLabel = item.covenant_status || item.status || t('active');
            var statusCls = 'active';
            if (statusLabel === 'returned') statusCls = 'returned';
            else if (statusLabel === 'transferred') statusCls = 'transferred';
            else if (statusLabel === 'ended') statusCls = 'ended';
            else if (statusLabel === 'paused') statusCls = 'paused';

            // Calculate duration
            var durationText = '';
            var durationDays = 0;
            if (item.receipt_date || item.start_date) {
                var start = new Date(item.receipt_date || item.start_date);
                var now = new Date();
                durationDays = Math.floor((now - start) / (1000 * 60 * 60 * 24));
                durationText = durationDays + ' ' + t('days');
            }

            // Duration color
            var durCls = durationDays > 90 ? 'dur-long' : durationDays > 30 ? 'dur-mid' : 'dur-short';

            var card = document.createElement('div');
            card.className = 'custody-card-v2';
            card.style.animationDelay = (idx * 0.06) + 's';
            card.style.cursor = 'pointer';
            (function(it){
                card.onclick = function(ev){
                    if (ev.target.closest('button,label,input,select,a')) return;
                    openEmpCustodyDetails(it.id, it.name || '', it.entity_type || 'item');
                };
            })(item);
            card.innerHTML =
                '<div class="custody-v2-status-strip ' + statusCls + '"></div>' +
                '<div class="custody-v2-top">' +
                    '<div class="custody-v2-img"' + (item.image ? ' onclick="openImageViewer(\'' + escapeHtml(item.image) + '\')" style="cursor:pointer"' : '') + '>' +
                        (item.image ? '<img src="' + escapeHtml(item.image) + '" onerror="this.parentElement.innerHTML=\'<i class=\\\'fas fa-box\\\'></i>\'">' : '<i class="fas fa-box"></i>') +
                        '<div class="custody-v2-qty-badge">x' + Number(item.qty) + '</div>' +
                    '</div>' +
                    '<div class="custody-v2-info">' +
                        '<div class="custody-v2-name">' + escapeHtml(item.name || '') + '</div>' +
                        '<div class="custody-v2-status"><span class="history-status-badge ' + statusCls + '">' + escapeHtml(statusLabel) + '</span></div>' +
                    '</div>' +
                    '<div class="custody-v2-tools">' +
                        '<label class="custody-v2-tool-btn" title="Upload"><i class="fas fa-camera"></i><input type="file" accept="image/*" style="display:none" onchange="uploadEmpItemImg(' + item.id + ',\'' + (item.entity_type || 'item') + '\',this.files[0])"></label>' +
                        '<button class="custody-v2-tool-btn custody-v2-tool-del" onclick="deleteEmpItem(' + item.id + ',\'' + (item.entity_type || 'item') + '\')"><i class="fas fa-trash-alt"></i></button>' +
                    '</div>' +
                '</div>' +
                (durationText ?
                '<div class="custody-v2-duration">' +
                    '<div class="custody-v2-dur-icon ' + durCls + '"><i class="fas fa-hourglass-half"></i></div>' +
                    '<div class="custody-v2-dur-text">' +
                        '<span class="custody-v2-dur-label">' + t('custodyDuration') + '</span>' +
                        '<span class="custody-v2-dur-value ' + durCls + '">' + durationText + '</span>' +
                    '</div>' +
                    '<div class="custody-v2-dur-bar"><div class="custody-v2-dur-fill ' + durCls + '" style="width:' + Math.min(100, (durationDays / 365) * 100) + '%"></div></div>' +
                '</div>' : '') ;
            grid.appendChild(card);
        });
    }
}

async function updateEmpItemInline(id, data) {
    try {
        await API.updateDeptItem(id, data);
        currentEmpData = await API.getEmployee(currentEmpId);
        await renderEmpItems();
    } catch (e) { showToast(e.message, 'error'); }
}

async function addEmpItem() {
    var name = document.getElementById('newEmpItemName').value.trim();
    if (!name) return;
    try {
        var newItem = await API.addEmployeeItem(currentEmpId, {
            name: name,
            description: document.getElementById('newEmpItemDesc').value.trim(),
            qty: parseInt(document.getElementById('newEmpItemQty').value) || 1,
            purpose: document.getElementById('newEmpItemPurpose').value.trim()
        });
        var fileInput = document.getElementById('newEmpItemFile');
        if (fileInput && fileInput.files[0] && newItem && newItem.id) {
            await API.uploadDeptItemImage(newItem.id, fileInput.files[0]);
        }
        currentEmpData = await API.getEmployee(currentEmpId);
        await renderEmpItems();
        showToast(t('added'));
        document.getElementById('newEmpItemName').value = '';
        document.getElementById('newEmpItemQty').value = '1';
        document.getElementById('newEmpItemDesc').value = '';
        document.getElementById('newEmpItemPurpose').value = '';
        if (fileInput) fileInput.value = '';
    } catch (e) { showToast(e.message, 'error'); }
}

async function deleteEmpItem(id, entityType) {
    try {
        if (entityType === 'equipment') await API.deleteDeptEquipment(id);
        else await API.deleteDeptItem(id);
        currentEmpData = await API.getEmployee(currentEmpId);
        await renderEmpItems();
        showToast(t('itemRemoved'));
    } catch (e) { showToast(e.message, 'error'); }
}

async function uploadEmpItemImg(id, entityType, file) {
    if (!file) return;
    try {
        if (entityType === 'equipment') await API.uploadDeptEquipmentImage(id, file);
        else await API.uploadDeptItemImage(id, file);
        currentEmpData = await API.getEmployee(currentEmpId);
        await renderEmpItems();
        showToast(t('imageUploaded'));
    } catch (e) { showToast(e.message, 'error'); }
}

async function uploadEmployeePhoto(id, file) {
    if (!file) return;
    try {
        await API.uploadEmployeePhoto(id, file);
        currentEmpData = await API.getEmployee(currentEmpId);
        await renderEmpDetail();
        showToast(t('imageUploaded'));
    } catch (e) { showToast(e.message, 'error'); }
}

async function renderEmpHistory() {
    // Employee history is rendered as part of renderEmpDetail
    // This can be extended if needed
}

// ============ Modal Overlay Clicks ============
document.querySelectorAll('.modal-overlay').forEach(function(overlay) {
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            overlay.classList.remove('active');
            if (overlay.id === 'lockerModal') { currentLockerId = null; currentLockerData = null; highlightItemId = null; renderGrid(); }
            if (overlay.id === 'areaItemsModal') { currentAreaId = null; }
            if (overlay.id === 'covenantModal') { currentCovenantItemId = null; }
        }
    });
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal-overlay.active').forEach(function(m) { m.classList.remove('active'); });
        closeImageViewer();
        if (currentLockerId) { currentLockerId = null; currentLockerData = null; highlightItemId = null; renderGrid(); }
        currentAreaId = null;
        currentCovenantItemId = null;
    }
});

// File input feedback
var newItemFile = document.getElementById('newItemFile');
if (newItemFile) {
    newItemFile.addEventListener('change', function() {
        if (this.files[0]) showToast('Image selected: ' + this.files[0].name, 'info');
    });
}

// ============ Auth ============
window.CURRENT_USER = null;

function renderUserBadge() {
    var u = window.CURRENT_USER;
    if (!u) return;
    var nameEl = document.getElementById('userNameLabel');
    var roleEl = document.getElementById('userRoleLabel');
    if (nameEl) nameEl.textContent = u.username || '';
    if (roleEl) roleEl.textContent = u.role || '';
    var badge = document.getElementById('userBadge');
    if (badge) badge.style.display = '';
    var btn = document.getElementById('logoutBtn');
    if (btn) btn.style.display = '';
}

async function logoutUser() {
    try { await API.logout(); } catch (e) {}
    try { localStorage.removeItem('navState'); } catch (e) {}
    location.href = '/login';
}

function applyRoleClass() {
    var u = window.CURRENT_USER;
    if (!u) return;
    document.body.classList.remove('role-manager', 'role-admin', 'role-employee');
    document.body.classList.add('role-' + u.role);
}

function updateAddBtnVisibility() {
    var addBtn = document.getElementById('addBtn');
    if (!addBtn) return;
    var page = currentPage;
    var hiddenOnThisPage = (page === 'home' || page === 'dept-detail' || page === 'emp-detail' || page === 'users');
    var role = (window.CURRENT_USER && window.CURRENT_USER.role) || null;
    var roleAllowed = {
        manager:  ['lockers', 'warehouse', 'departments', 'employees'],
        admin:    ['departments', 'employees'],
        employee: []
    };
    var allowed = (role && roleAllowed[role]) || [];
    addBtn.style.display = (hiddenOnThisPage || allowed.indexOf(page) === -1) ? 'none' : '';
}

(async function bootAuth() {
    try {
        var res = await API.me();
        window.CURRENT_USER = res.user || res;
        applyRoleClass();
        renderUserBadge();
        updateAddBtnVisibility();
    } catch (e) {
        if (location.pathname !== '/login' && !location.pathname.endsWith('/login.html')) {
            location.href = '/login';
        }
    }
})();

// ============ Users Management (Manager only) ============
var _usersCache = [];

async function renderUsers() {
    try {
        var rows = await API.getUsers();
        _usersCache = rows;
        var tbody = document.getElementById('usersTableBody');
        if (!tbody) return;
        // Translated role label map (shown in the table chip).
        var roleLbl = { manager: t('manager'), admin: t('roleAdmin').split(' — ')[0], employee: t('roleEmployee').split(' — ')[0] };
        if (!rows.length) {
            tbody.innerHTML = '<tr><td colspan="6" style="text-align:center; padding:40px; color:rgba(255,255,255,0.4);">' + t('noUsers') + '</td></tr>';
            return;
        }
        tbody.innerHTML = rows.map(function(u) {
            var statusCls = Number(u.active) ? 'active' : 'inactive';
            var statusLbl = Number(u.active) ? t('active') : t('inactive');
            var empName = u.employee_name ? escapeHtml(u.employee_name) : '<span style="color:rgba(255,255,255,0.3);">' + t('emptyDash') + '</span>';
            var deptName = u.department_name ? escapeHtml(u.department_name) : '<span style="color:rgba(255,255,255,0.3);">' + t('emptyDash') + '</span>';
            var isSelf = window.CURRENT_USER && Number(window.CURRENT_USER.id) === Number(u.id);
            return '<tr>'
                + '<td><strong>' + escapeHtml(u.username) + '</strong>' + (isSelf ? ' <span style="color:rgba(255,255,255,0.4); font-size:12px;">' + t('you') + '</span>' : '') + '</td>'
                + '<td><span class="role-chip ' + u.role + '">' + (roleLbl[u.role] || u.role) + '</span></td>'
                + '<td><span class="status-chip ' + statusCls + '">' + statusLbl + '</span></td>'
                + '<td>' + empName + '</td>'
                + '<td>' + deptName + '</td>'
                + '<td><div class="users-row-actions">'
                +   '<button title="' + t('editBtn') + '" aria-label="' + t('editBtn') + '" onclick="openUserModal(' + u.id + ')"><i class="fas fa-pen"></i></button>'
                +   '<button title="' + t('resetPassword') + '" aria-label="' + t('resetPassword') + '" onclick="openResetPasswordModal(' + u.id + ', \'' + escapeHtml(u.username).replace(/'/g, "\\'") + '\')"><i class="fas fa-key"></i></button>'
                +   (isSelf ? '' : '<button class="danger" title="' + t('deleteBtn') + '" aria-label="' + t('deleteBtn') + '" onclick="deleteUser(' + u.id + ', \'' + escapeHtml(u.username).replace(/'/g, "\\'") + '\')"><i class="fas fa-trash"></i></button>')
                + '</div></td>'
                + '</tr>';
        }).join('');
    } catch (err) {
        showToast(err.message || t('failedLoadUsers'), 'error');
    }
}

async function openUserModal(userId) {
    var modal = document.getElementById('userModal');
    document.getElementById('userModalId').value = userId || '';
    document.getElementById('userModalTitle').textContent = userId ? t('editUser') : t('addUser');
    document.getElementById('userModalUsername').value = '';
    document.getElementById('userModalPassword').value = '';
    document.getElementById('userModalRole').value = 'employee';
    document.getElementById('userModalActive').checked = true;

    var pwWrap = document.getElementById('userModalPasswordWrap');
    pwWrap.style.display = userId ? 'none' : '';

    try {
        var [emps, depts] = await Promise.all([API.getEmployees(), API.getDepartments()]);
        var empSel = document.getElementById('userModalEmployee');
        empSel.innerHTML = '<option value="">' + t('none') + '</option>' +
            emps.map(function(e){ return '<option value="'+e.id+'">'+escapeHtml(e.name)+(e.department_name?' ('+escapeHtml(e.department_name)+')':'')+'</option>'; }).join('');
        var deptSel = document.getElementById('userModalDepartment');
        deptSel.innerHTML = '<option value="">' + t('none') + '</option>' +
            depts.map(function(d){ return '<option value="'+d.id+'">'+escapeHtml(d.name)+'</option>'; }).join('');

        if (userId) {
            var u = _usersCache.find(function(x){ return Number(x.id) === Number(userId); });
            if (u) {
                document.getElementById('userModalUsername').value = u.username || '';
                document.getElementById('userModalRole').value = u.role || 'employee';
                document.getElementById('userModalActive').checked = !!Number(u.active);
                if (u.employee_id) empSel.value = String(u.employee_id);
                if (u.department_id) deptSel.value = String(u.department_id);
            }
        }
    } catch (e) {
        showToast(t('failedLoadFormData') + ': ' + e.message, 'error');
    }

    modal.classList.add('active');
}

function onUserRoleChange() { /* reserved for future role-specific field toggles */ }

async function saveUser() {
    var id = document.getElementById('userModalId').value;
    var username = document.getElementById('userModalUsername').value.trim();
    var password = document.getElementById('userModalPassword').value;
    var role = document.getElementById('userModalRole').value;
    var employee_id = document.getElementById('userModalEmployee').value || null;
    var department_id = document.getElementById('userModalDepartment').value || null;
    var active = document.getElementById('userModalActive').checked;

    if (!username) return showToast(t('usernameRequired'), 'error');
    if (!id && (!password || password.length < 6)) return showToast(t('passwordMin6'), 'error');

    try {
        if (id) {
            await API.updateUser(id, { username, role, active, employee_id, department_id });
            showToast(t('userUpdated'), 'success');
        } else {
            await API.createUser({ username, password, role, employee_id, department_id });
            showToast(t('userCreated'), 'success');
        }
        closeModal('userModal');
        renderUsers();
    } catch (err) {
        showToast(err.message || t('saveFailed'), 'error');
    }
}

function openResetPasswordModal(userId, username) {
    document.getElementById('resetPwUserId').value = userId;
    document.getElementById('resetPwUsername').textContent = username;
    document.getElementById('resetPwValue').value = '';
    document.getElementById('resetPwModal').classList.add('active');
}

async function confirmResetPassword() {
    var id = document.getElementById('resetPwUserId').value;
    var pw = document.getElementById('resetPwValue').value;
    if (!pw || pw.length < 6) return showToast(t('passwordMin6'), 'error');
    try {
        await API.resetUserPassword(id, pw);
        closeModal('resetPwModal');
        showToast(t('passwordReset'), 'success');
    } catch (err) {
        showToast(err.message || t('resetFailed'), 'error');
    }
}

async function deleteUser(id, username) {
    if (!confirm(t('deleteUserConfirm').replace('{name}', username))) return;
    try {
        await API.deleteUser(id);
        showToast(t('userDeleted'), 'success');
        renderUsers();
    } catch (err) {
        showToast(err.message || t('saveFailed'), 'error');
    }
}

// ============ Init ============
applyTheme();
applyLanguage();

(function restoreNavState() {
    var raw;
    try { raw = localStorage.getItem('navState'); } catch (e) {}
    if (!raw) { loadHomeCounts(); return; }
    var state;
    try { state = JSON.parse(raw); } catch (e) { loadHomeCounts(); return; }
    if (!state || !state.page || state.page === 'home') { loadHomeCounts(); return; }

    var validPages = ['home','lockers','warehouse','departments','employees','dept-detail','emp-detail','users'];
    if (validPages.indexOf(state.page) === -1) { loadHomeCounts(); return; }

    if (state.page === 'dept-detail') {
        if (!state.deptId) { loadHomeCounts(); return; }
        currentDeptId = state.deptId;
    }
    if (state.page === 'emp-detail') {
        if (!state.empId) { loadHomeCounts(); return; }
        currentEmpId = state.empId;
    }
    if (state.page === 'warehouse' && state.zoneId) currentZoneId = state.zoneId;
    if (state.page === 'departments' && state.deptTab) currentDeptTab = state.deptTab;

    navigateTo(state.page);
    if (state.page === 'departments' && state.deptTab) switchDeptTab(state.deptTab);
})();

// ============ Print Helper ============
function printTable(opts) {
    var title = opts.title || t('report');
    var subtitle = opts.subtitle || '';
    var columns = opts.columns || [];
    var rows = opts.rows || [];
    var orientation = opts.orientation || 'portrait';
    if (!rows.length) { showToast(t('noData'), 'warning'); return; }

    var now = new Date();
    var stamp = now.toLocaleString();

    var esc = function(s) {
        if (s === null || s === undefined) return '';
        var d = document.createElement('div'); d.textContent = String(s); return d.innerHTML;
    };

    var thead = '<tr>' + columns.map(function(c){ return '<th>' + esc(c.label) + '</th>'; }).join('') + '</tr>';
    var tbody = rows.map(function(r){
        return '<tr>' + columns.map(function(c){
            var v = typeof c.value === 'function' ? c.value(r) : r[c.key];
            return '<td>' + esc(v == null ? '' : v) + '</td>';
        }).join('') + '</tr>';
    }).join('');

    var html =
'<!DOCTYPE html><html lang="' + (currentLang || 'en') + '" dir="' + (currentLang === 'ar' ? 'rtl' : 'ltr') + '">' +
'<head><meta charset="utf-8"><title>' + esc(title) + '</title>' +
'<style>' +
'  @page { size: ' + orientation + '; margin: 14mm 12mm 18mm; }' +
'  * { box-sizing: border-box; }' +
'  body { font-family: "Helvetica Neue", Arial, sans-serif; color: #000; background: #fff; margin: 0; font-size: 11pt; }' +
'  .print-header { display: flex; justify-content: space-between; align-items: flex-end; border-bottom: 2px solid #000; padding-bottom: 8px; margin-bottom: 14px; }' +
'  .print-header h1 { margin: 0 0 2px; font-size: 16pt; letter-spacing: .2px; }' +
'  .print-header .sub { font-size: 10pt; color: #333; }' +
'  .print-header .meta { font-size: 9pt; color: #444; text-align: right; }' +
'  [dir="rtl"] .print-header .meta { text-align: left; }' +
'  table { width: 100%; border-collapse: collapse; margin-bottom: 10px; }' +
'  thead { display: table-header-group; }' +
'  tr { page-break-inside: avoid; }' +
'  th, td { border: 1px solid #444; padding: 5px 7px; text-align: left; vertical-align: top; font-size: 10pt; }' +
'  [dir="rtl"] th, [dir="rtl"] td { text-align: right; }' +
'  th { background: #eaeaea; font-weight: 700; text-transform: uppercase; font-size: 9pt; letter-spacing: .4px; }' +
'  tbody tr:nth-child(even) td { background: #f6f6f6; }' +
'  .print-footer { position: fixed; bottom: 6mm; left: 12mm; right: 12mm; font-size: 9pt; color: #555; display: flex; justify-content: space-between; border-top: 1px solid #888; padding-top: 4px; }' +
'  .print-count { margin-top: 10px; font-size: 9pt; color: #333; }' +
'  @media print { .no-print { display: none !important; } }' +
'  .no-print { position: fixed; top: 10px; right: 10px; display: flex; gap: 8px; z-index: 100; }' +
'  [dir="rtl"] .no-print { right: auto; left: 10px; }' +
'  .no-print button { padding: 8px 16px; border: 1px solid #333; background: #fff; color: #000; font-size: 10pt; font-weight: 600; border-radius: 6px; cursor: pointer; }' +
'  .no-print button.primary { background: #000; color: #fff; }' +
'  .no-print select { padding: 8px 10px; border: 1px solid #333; border-radius: 6px; font-size: 10pt; }' +
'</style></head>' +
'<body>' +
'<div class="no-print">' +
'  <select id="orSel"><option value="portrait">Portrait</option><option value="landscape">Landscape</option></select>' +
'  <button onclick="window.print()" class="primary">🖨️ Print</button>' +
'  <button onclick="window.close()">Close</button>' +
'</div>' +
'<div class="print-header">' +
'  <div>' +
'    <h1>' + esc(title) + '</h1>' +
(subtitle ? '    <div class="sub">' + esc(subtitle) + '</div>' : '') +
'  </div>' +
'  <div class="meta">' + esc(t('generatedOn')) + ': ' + esc(stamp) + '</div>' +
'</div>' +
'<table><thead>' + thead + '</thead><tbody>' + tbody + '</tbody></table>' +
'<div class="print-count">' + rows.length + ' ' + esc(t('items')) + '</div>' +
'<div class="print-footer">' +
'  <span>' + esc(title) + '</span>' +
'  <span>' + esc(stamp) + '</span>' +
'</div>' +
'<script>' +
'  var selectedOr = "' + orientation + '";' +
'  var sel = document.getElementById("orSel"); if (sel) { sel.value = selectedOr; sel.addEventListener("change", function(){' +
'    var styles = document.querySelectorAll("style"); styles.forEach(function(st){ st.textContent = st.textContent.replace(/@page\\s*{[^}]*}/, "@page { size: " + sel.value + "; margin: 14mm 12mm 18mm; }"); });' +
'  }); }' +
'  window.addEventListener("load", function(){ setTimeout(function(){ window.print(); }, 300); });' +
'<\/script>' +
'</body></html>';

    var w = window.open('', '_blank');
    if (!w) { showToast(t('popupBlocked'), 'error'); return; }
    w.document.open();
    w.document.write(html);
    w.document.close();
}

function _statusLabel(qty, minStock) {
    var q = Number(qty || 0), m = Number(minStock || 0);
    if (q === 0) return t('outOfStock');
    if (q <= m) return t('lowStock');
    return t('inStock');
}

function _custodyStatusFor(item) {
    var active = getActiveCustody(item);
    if (!active) return t('inDept');
    if (active.to_department_id) return t('underTempCustody') + ' (' + (active.to_department_name || '') + ')';
    return t('outOfDeptCustody') + (active.to_employee_name ? ' (' + active.to_employee_name + ')' : '');
}

// ---- Lockers ----
function printLockerItems() {
    if (!currentLockerData) return;
    var items = currentLockerData.items || [];
    var title = t('allCabinetItems') + ' — ' + t('locker') + ' ' + (currentLockerData.name || currentLockerData.id || '');
    printTable({
        title: title,
        subtitle: t('locker') + ' #' + (currentLockerData.id || ''),
        columns: [
            { label: t('itemName'), value: function(r){ return r.name || ''; } },
            { label: t('description'), value: function(r){ return r.description || ''; } },
            { label: t('qty'), value: function(r){ return r.qty; } },
            { label: t('minStock'), value: function(r){ return r.min_stock; } },
            { label: t('status'), value: function(r){ return _statusLabel(r.qty, r.min_stock); } },
            { label: t('location'), value: function(){ return t('locker') + ' ' + (currentLockerData.id || ''); } }
        ],
        rows: items
    });
}

// ---- Whole Warehouse Zone (all areas + all items) ----
async function printZone(zoneId) {
    try {
        var zone = await API.getZone(zoneId);
        var areas = zone.areas || [];
        var items = zone.items || [];
        var areaById = {};
        areas.forEach(function(a){ areaById[a.id] = a; });

        var rows = items.slice().sort(function(a, b){
            var an = (areaById[a.area_id] && areaById[a.area_id].name) || '~';
            var bn = (areaById[b.area_id] && areaById[b.area_id].name) || '~';
            if (an !== bn) return an.localeCompare(bn);
            return (a.name || '').localeCompare(b.name || '');
        });

        if (!rows.length && !areas.length) { showToast(t('noData'), 'warning'); return; }

        // If there are no items, still print a page showing the area structure
        if (!rows.length) {
            rows = areas.map(function(a){
                return { area_id: a.id, name: '—', qty: 0, min_stock: 0, description: '' };
            });
        }

        var title = t('zone') + ' ' + t('report') + ' — ' + (zone.name || '');
        var subtitle = (zone.location ? t('location') + ': ' + zone.location + '  •  ' : '')
                     + t('areas') + ': ' + areas.length + '  •  '
                     + t('items') + ': ' + items.length + '  •  '
                     + t('totalStock') + ': ' + items.reduce(function(s,i){return s+Number(i.qty||0);},0);

        printTable({
            title: title,
            subtitle: subtitle,
            orientation: 'portrait',
            columns: [
                { label: t('area'), value: function(r){
                    var a = areaById[r.area_id];
                    return a ? a.name : '— ' + t('generalItems') + ' —';
                } },
                { label: t('itemName'), value: function(r){ return r.name || ''; } },
                { label: t('description'), value: function(r){ return r.description || ''; } },
                { label: t('qty'), value: function(r){ return r.qty; } },
                { label: t('minStock'), value: function(r){ return r.min_stock; } },
                { label: t('status'), value: function(r){ return _statusLabel(r.qty, r.min_stock); } }
            ],
            rows: rows
        });
    } catch (e) { showToast(e.message || t('failedLoad'), 'error'); }
}

// ---- Warehouse area items ----
function printAreaItems() {
    if (!currentAreaId || !currentZoneData) return;
    var area = (currentZoneData.areas || []).find(function(a){ return a.id === currentAreaId; }) || {};
    var items = (currentZoneData.items || []).filter(function(it){ return it.area_id === currentAreaId; });
    printTable({
        title: (area.name || t('areaItemsTitle')) + ' — ' + (currentZoneData.name || ''),
        subtitle: t('zone') + ': ' + (currentZoneData.name || '') + (area.name ? '  •  ' + t('area') + ': ' + area.name : ''),
        columns: [
            { label: t('itemName'), value: function(r){ return r.name || ''; } },
            { label: t('description'), value: function(r){ return r.description || ''; } },
            { label: t('qty'), value: function(r){ return r.qty; } },
            { label: t('minStock'), value: function(r){ return r.min_stock; } },
            { label: t('status'), value: function(r){ return _statusLabel(r.qty, r.min_stock); } },
            { label: t('location'), value: function(){ return (currentZoneData.name || '') + ' / ' + (area.name || ''); } }
        ],
        rows: items
    });
}

// ---- Department Equipment (respects current filter/search) ----
function printEquipment() {
    var dept = currentDeptData || {};
    var items = (dept.equipment || []).slice();
    var qEl = document.getElementById('equipSearch');
    var fEl = document.getElementById('equipFilter');
    var q = qEl ? qEl.value.trim().toLowerCase() : '';
    var f = fEl ? fEl.value : 'all';
    var filtered = items.filter(function(it) {
        var active = getActiveCustody(it);
        var isOut = !!active;
        if (f === 'in' && isOut) return false;
        if (f === 'out' && !isOut) return false;
        if (!q) return true;
        var hay = [it.name, it.description, it.purpose, it.receipt_date, it.employee_name, active && active.to_employee_name, active && active.to_department_name].filter(Boolean).join(' ').toLowerCase();
        return hay.indexOf(q) !== -1;
    });
    var subtitle = (dept.name || '') + '  •  ' + (q || f !== 'all' ? t('filteredResults') : t('allResults'));
    printTable({
        title: (dept.name || '') + ' — ' + t('equipment') + ' ' + t('report'),
        subtitle: subtitle,
        orientation: 'landscape',
        columns: [
            { label: t('itemName'), value: function(r){ return r.name || ''; } },
            { label: t('category'), value: function(){ return t('equipment'); } },
            { label: t('qty'), value: function(r){ return r.qty; } },
            { label: t('receiptDate'), value: function(r){ return r.receipt_date || ''; } },
            { label: t('purpose'), value: function(r){ return r.purpose || ''; } },
            { label: t('description'), value: function(r){ return r.description || ''; } },
            { label: t('status'), value: function(r){ var a=getActiveCustody(r); return a ? t('outOfDeptCustody') : t('inDept'); } },
            { label: t('currentEmployee'), value: function(r){ var a=getActiveCustody(r); return a ? (a.to_department_id ? '— ' + t('department') + ': ' + (a.to_department_name||'') : (a.to_employee_name||'')) : (r.employee_name || ''); } },
            { label: t('custodyPeriod'), value: function(r){ var a=getActiveCustody(r); return a ? ((a.start_date||a.transfer_date||'') + (a.end_date ? ' → '+a.end_date : '')) : ''; } },
            { label: t('notes'), value: function(r){ var a=getActiveCustody(r); return a && a.notes ? a.notes : ''; } }
        ],
        rows: filtered
    });
}

// ---- Department Items ----
function printDeptItems() {
    var dept = currentDeptData || {};
    var items = dept.items || [];
    printTable({
        title: (dept.name || '') + ' — ' + t('items') + ' ' + t('report'),
        subtitle: dept.name || '',
        orientation: 'landscape',
        columns: [
            { label: t('itemName'), value: function(r){ return r.name || ''; } },
            { label: t('category'), value: function(){ return t('items'); } },
            { label: t('qty'), value: function(r){ return r.qty; } },
            { label: t('receiptDate'), value: function(r){ return r.receipt_date || ''; } },
            { label: t('purpose'), value: function(r){ return r.purpose || ''; } },
            { label: t('description'), value: function(r){ return r.description || ''; } },
            { label: t('status'), value: function(r){ var a=getActiveCustody(r); return a ? t('outOfDeptCustody') : t('inDept'); } },
            { label: t('currentEmployee'), value: function(r){ var a=getActiveCustody(r); return a ? (a.to_department_id ? (t('department')+': '+(a.to_department_name||'')) : (a.to_employee_name||'')) : (r.employee_name || ''); } },
            { label: t('custodyPeriod'), value: function(r){ var a=getActiveCustody(r); return a ? ((a.start_date||a.transfer_date||'') + (a.end_date ? ' → '+a.end_date : '')) : ''; } },
            { label: t('notes'), value: function(r){ var a=getActiveCustody(r); return a && a.notes ? a.notes : ''; } }
        ],
        rows: items
    });
}

// ---- Incoming custody (target department) ----
function printIncoming() {
    var dept = currentDeptData || {};
    var all = (dept.incoming_items || []).map(function(x){ return Object.assign({}, x, { entity_type:'item' }); })
        .concat((dept.incoming_equipment || []).map(function(x){ return Object.assign({}, x, { entity_type:'equipment' }); }));
    printTable({
        title: (dept.name || '') + ' — ' + t('incomingCustodyTitle'),
        subtitle: dept.name || '',
        orientation: 'landscape',
        columns: [
            { label: t('itemName'), value: function(r){ return r.name || ''; } },
            { label: t('category'), value: function(r){ return r.entity_type === 'equipment' ? t('equipment') : t('items'); } },
            { label: t('qty'), value: function(r){ return r.qty; } },
            { label: t('sourceDepartment'), value: function(r){ return r.source_dept_name || ''; } },
            { label: t('custodyPeriod'), value: function(r){ return (r.start_date || r.transfer_date || '') + (r.end_date ? ' → ' + r.end_date : ''); } },
            { label: t('conditionOnReceipt'), value: function(r){ return r.condition === 'good' ? t('conditionGood') : r.condition === 'not_good' ? t('conditionNotGood') : ''; } },
            { label: t('notes'), value: function(r){ return r.notes || ''; } }
        ],
        rows: all
    });
}

// ---- Employee: current custody ----
function printEmpCurrent() {
    var emp = currentEmpData || {};
    var items = emp.items || [];
    printTable({
        title: (emp.name || '') + ' — ' + t('currentCustody'),
        subtitle: (emp.name || '') + (emp.department_name ? '  •  ' + emp.department_name : ''),
        orientation: 'landscape',
        columns: [
            { label: t('itemName'), value: function(r){ return r.name || ''; } },
            { label: t('category'), value: function(r){ return r.entity_type === 'equipment' ? t('equipment') : t('items'); } },
            { label: t('qty'), value: function(r){ return r.qty; } },
            { label: t('sourceDepartment'), value: function(r){ return r.department_name || ''; } },
            { label: t('receiptDate'), value: function(r){ return r.receipt_date || ''; } },
            { label: t('purpose'), value: function(r){ return r.purpose || ''; } },
            { label: t('description'), value: function(r){ return r.description || ''; } },
            { label: t('custodyPeriod'), value: function(r){
                var a = getActiveCustody(r);
                if (a) return (a.start_date||a.transfer_date||'') + (a.end_date ? ' → '+a.end_date : '');
                return r.receipt_date || '';
            } },
            { label: t('conditionOnReceipt'), value: function(r){
                var a = getActiveCustody(r);
                if (a && a.condition) return a.condition === 'good' ? t('conditionGood') : t('conditionNotGood');
                return '';
            } }
        ],
        rows: items
    });
}

// ---- Employee: custody history (respects filter/search) ----
function printEmpHistory() {
    var emp = currentEmpData || {};
    var list = (emp.custody_history || []).slice();
    var qEl = document.getElementById('empHistorySearch');
    var fEl = document.getElementById('empHistoryFilter');
    var q = qEl ? qEl.value.trim().toLowerCase() : '';
    var f = fEl ? fEl.value : 'all';
    var filtered = list.filter(function(h) {
        if (f !== 'all' && (h.status || '') !== f) return false;
        if (!q) return true;
        var hay = [h.item_name, h.item_department_name, h.start_date, h.end_date, h.transfer_date, h.notes, h.return_notes, h.condition_notes].filter(Boolean).join(' ').toLowerCase();
        return hay.indexOf(q) !== -1;
    });
    printTable({
        title: (emp.name || '') + ' — ' + t('custodyHistory'),
        subtitle: (emp.name || '') + '  •  ' + (q || f !== 'all' ? t('filteredResults') : t('allResults')),
        orientation: 'landscape',
        columns: [
            { label: t('itemName'), value: function(r){ return r.item_name || ''; } },
            { label: t('sourceDepartment'), value: function(r){ return r.item_department_name || ''; } },
            { label: t('custodyPeriod'), value: function(r){ return (r.start_date || r.transfer_date || '') + (r.end_date ? ' → ' + r.end_date : ''); } },
            { label: t('conditionOnReceipt'), value: function(r){ return r.condition === 'good' ? t('conditionGood') : r.condition === 'not_good' ? t('conditionNotGood') : ''; } },
            { label: t('returnConditionLabel'), value: function(r){ return r.return_condition === 'good' ? t('conditionGood') : r.return_condition === 'not_good' ? t('conditionNotGood') : ''; } },
            { label: t('returnNotes'), value: function(r){ return r.return_notes || ''; } },
            { label: t('originalNotes'), value: function(r){ return r.notes || ''; } },
            { label: t('status'), value: function(r){
                if (r.status === 'returned') return t('returned');
                if (r.status === 'transferred') return t('transferred');
                return r.status || '';
            } }
        ],
        rows: filtered
    });
}
