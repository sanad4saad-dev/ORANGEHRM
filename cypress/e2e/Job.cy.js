describe('Job Tests', function() {

    // 1. تسجيل الدخول التلقائي قبل الاختبار
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type('admin123')
        cy.get('.oxd-button').click()
        
        // التأكد من الوصول للوحة التحكم
        cy.url().should('include', 'dashboard')
    });

    it('AddJob', function() { 

        //*****************************************************#4 add job title *********************************************************
        // admin tab
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        cy.wait(2000)
        
        // job -> job titles
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(2)').click()
        cy.contains('Job Titles').click()
        cy.wait(2500) 
        
        // add button
        cy.get('.oxd-button').click()
        cy.wait(2000)
        
        // job title
        cy.get(':nth-child(2) > .oxd-input').type('Quality Analyst', { delay: 300 })
        cy.wait(1000)
        
        // upload file
        cy.get('[type="file"]').selectFile('cypress/fixtures/s.pdf', {force: true})
        cy.wait(2500) 
        
        // save
        cy.get('.oxd-button--secondary').click()
        
        // التحقق
        cy.get('.oxd-toast', { timeout: 10000 }).should('be.visible')
        cy.wait(2500)

        //************************************************#5 delete job by assertion*************************************************************
        
        // العودة (يمكن البقاء في نفس الصفحة ولكن للتأكيد)
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(2)').click()
        cy.contains('Job Titles').click()
        cy.wait(2500)

        // الحذف
        cy.contains('Quality Analyst').parents('[role="row"]').find('button').eq(0).click();
        cy.wait(1500) // نرى نافذة التأكيد
        
        // تأكيد
        cy.get('.oxd-button--label-danger').should('be.visible').click()
        
        // نجاح
        cy.get('.oxd-toast', { timeout: 10000 }).should('be.visible')
        cy.wait(2000)
    });

    // 2. تسجيل الخروج في النهاية
    after(() => {
        // شرط التأكد من وجود القائمة قبل الضغط
        cy.get('.oxd-userdropdown-tab').click()
        cy.get('.oxd-dropdown-menu').should('be.visible')
        cy.contains('Logout').click()
    });

});