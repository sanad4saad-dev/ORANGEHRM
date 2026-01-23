it('AddInfo', function() {

    //**************************************** Ignore Site Errors ************************************** */
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    //**************************************** Navigation ************************************** */
    cy.contains('.oxd-main-menu-item', 'My Info').click()
    cy.wait(3000) 
    cy.contains('h6', 'Personal Details').should('be.visible')

    //**************************************** Personal Details ************************************** */

    // 1. الاسم الكامل
    cy.get('[name="firstName"]').clear().type('Sanad', { delay: 600 })
    cy.wait(1500)
    cy.get('[name="middleName"]').clear().type('Saad', { delay: 600 })
    cy.wait(1500)
    cy.get('[name="lastName"]').clear().type('Alghamdi', { delay: 600 })
    cy.wait(2000)

    // 2. الرقم الوظيفي
    cy.get('.oxd-input-group:has(label:contains("Employee Id")) input').clear().type('202311', { delay: 600 })
    cy.wait(1500)
    
    // 3. رقم آخر
    cy.get('.oxd-input-group:has(label:contains("Other Id")) input').clear().type('998877', { delay: 600 })
    cy.wait(1500)

    // 4. رخصة القيادة
    cy.get('.oxd-input-group:has(label:contains("Driver\'s License Number")) input').clear().type('SA-123456', { delay: 600 })
    cy.wait(1500)

    // 5. تاريخ انتهاء الرخصة
    cy.get('.oxd-input-group:has(label:contains("License Expiry Date")) input').clear().type('2030-05-20').type('{enter}')
    cy.wait(1500)

    // 6. الجنسية
    cy.get('.oxd-input-group:has(label:contains("Nationality")) .oxd-select-text').click({force: true})
    cy.wait(1000)
    cy.contains('.oxd-select-option', 'Saudi').click()
    cy.wait(1500)

    // 7. الحالة الاجتماعية
    cy.get('.oxd-input-group:has(label:contains("Marital Status")) .oxd-select-text').click({force: true})
    cy.wait(1000)
    cy.contains('.oxd-select-option', 'Single').click()
    cy.wait(1500)

    // 8. تاريخ الميلاد (التعديل هنا) ✅
    // أضفنا {force: true} لنتغلب على مشكلة الشريط العلوي في وضع HD
    cy.get('.oxd-input-group:has(label:contains("Date of Birth")) input').clear({force: true}).type('2000-01-01', {force: true}).type('{enter}', {force: true})
    cy.wait(1500)

    // 9. الجنس
    cy.contains('.oxd-radio-wrapper', 'Male').click({force: true})
    cy.wait(2000)
    
    // حفظ القسم الأول
    cy.get('.oxd-form-actions button[type="submit"]').eq(0).click({force: true})
    cy.get('.oxd-toast').should('be.visible')
    cy.wait(3000)

    //**************************************** Custom Fields ************************************** */
    
    cy.get('.oxd-input-group:has(label:contains("Blood Type")) .oxd-select-text').scrollIntoView()
    cy.wait(1500)

    cy.get('.oxd-input-group:has(label:contains("Blood Type")) .oxd-select-text').click({force: true})
    cy.wait(1000)
    cy.contains('.oxd-select-option', 'O+').click()
    cy.wait(1500)
    
    cy.get('.oxd-input-group:has(label:contains("Test_Field")) input').clear().type('Testing Form', { delay: 600 })
    cy.wait(1500)

    cy.get('.oxd-form-actions button[type="submit"]').eq(1).click()
    cy.get('.oxd-toast').should('be.visible')
    cy.wait(3000)

    //**************************************** Attachments ************************************** */
    
    cy.get('.employee-image').click()
    cy.wait(3000)

    cy.get('input[type="file"]').selectFile('cypress/fixtures/images.jpg', {force: true})
    cy.wait(2000)

    cy.get('button[type="submit"]').click()
    cy.wait(5000)

})