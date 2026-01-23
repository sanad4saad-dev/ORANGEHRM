describe('Employee Tests', function() {

    // هذه الخطوة ستعمل تلقائياً قبل بدء الاختبار في هذا الملف
    beforeEach(() => {
        // 1. تنظيف المتصفح
        cy.clearCookies();
        cy.clearLocalStorage();
        
        // 2. تسجيل الدخول (Login)
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type('admin123')
        cy.get('.oxd-button').click()
        
        // التأكد من الدخول
        cy.url().should('include', 'dashboard')
    });
it('Add delete emp', function() { 
    //***********************************************#2 add employee********************************************************
    
    // الذهاب لصفحة Admin
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.wait(2500) // (مشاهدة) ننتظر لنرى الصفحة فتحت

    // زر الإضافة
    cy.get('.orangehrm-header-container > .oxd-button').click()
    cy.wait(2500) // (مشاهدة) ننتظر لنرى نموذج الإضافة
    
    // user role
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
    cy.contains('.oxd-select-option', 'Admin').click()
    cy.wait(1000)

    // employee name
    cy.get('.oxd-autocomplete-text-input > input').type('r', { delay: 400 })
    cy.wait(2500) // ننتظر القائمة تظهر بوضوح
    cy.get('.oxd-autocomplete-dropdown > :nth-child(2) > span').click()

    // status
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
    cy.contains('.oxd-select-option', 'Enabled').click()
    cy.wait(1000)

    // username & password (كتابة بشرية واضحة)
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Sanad1234', { delay: 300 })
    cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('Sanad@1234', { delay: 300 })
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Sanad@1234', { delay: 300 })
    
    cy.wait(2000) // نظرة أخيرة قبل الحفظ

    // حفظ
    cy.get('.oxd-button--secondary').click()
    
    // (إصلاح الخطأ) ننتظر اختفاء علامة التحميل (Spinner) أولاً
    cy.get('.oxd-loading-spinner').should('not.exist') 
    // الآن نتأكد من رسالة النجاح ونعطيها وقتاً أطول (10 ثواني) للظهور
    cy.get('.oxd-toast', { timeout: 10000 }).should('be.visible') 
    cy.wait(2500) // (مشاهدة) نستمتع برسالة النجاح

    //**************************************************#3 delete employee*********************************************************
    
    // العودة لقائمة Admin
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.wait(2500)
    
    // البحث
    cy.get(':nth-child(2) > .oxd-input').type('Sanad1234', { delay: 300 })
    cy.wait(1000)
    cy.get('.oxd-form-actions > .oxd-button--secondary').click()
    
    cy.wait(2500) // ننتظر النتائج تظهر للمشاهد
    
    // الحذف
    cy.get('.oxd-table-card-cell-checkbox .oxd-icon').click()
    cy.wait(1000)
    cy.get('.oxd-button--label-danger').click()
    cy.wait(1000) // نرى نافذة التأكيد
    
    // تأكيد الحذف
    cy.get('.orangehrm-modal-footer > .oxd-button--label-danger').click()
    
    // التأكد من الحذف
    cy.get('.oxd-toast', { timeout: 10000 }).should('be.visible')
    cy.wait(2000)
});

after(() => {
        cy.get('.oxd-userdropdown-tab').click()
        cy.contains('Logout').click()
    });

//*****************************************************delete employee by assertion*************************************************
// cy.get(':nth-child(1) > .oxd-main-menu-item').click()
// cy.wait(6000)
// //cy.get('.oxd-table-body > :nth-child(1) > .oxd-table-row')
// // find row in a list that contains username
// cy.contains('.oxd-table-row', 'Sanad1234').within(() => { //within this row
// // click on delete button
// cy.get(':nth-child(6) > .oxd-table-cell-actions > :nth-child(1) > .oxd-icon').click() 
// //cy.get(':nth-child(1) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(1)')
//   })
//   // confirm delete
// cy.get('.oxd-button--label-danger').click() 
});