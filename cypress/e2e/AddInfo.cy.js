it.only('waterfall addinfo' , function() { 
//****************************************Add Info************************************** */
//click My Info tab
cy.get(':nth-child(6) > .oxd-main-menu-item').click()
cy.wait(3000)
// first name button
cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').click()
cy.wait(3000)
cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').clear()
cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type('Sanad')
cy.wait(3000)
//middle name 
cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').click()
cy.wait(3000)
cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').clear()
cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type('Saad')
cy.wait(3000)
//last name
cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').click()
cy.wait(3000)
cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').clear()
cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type('Alghamdi')
cy.wait(3000)
//user id
cy.get(':nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').click()
cy.wait(3000)
cy.get(':nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear()
cy.get(':nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('123456789')
cy.wait(3000)
//other id
cy.get(':nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').click()
cy.wait(3000)
cy.get(':nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear()
cy.get(':nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('987654321')
cy.wait(3000)
//license number
cy.get(':nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').click()
cy.wait(3000)
cy.get(':nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear()
cy.get(':nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Cypress Test')
cy.wait(3000)

//license expiry date
cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').click()
cy.wait(3000)
cy.get(':nth-child(3) > .oxd-calendar-date').click()
cy.wait(3000)
//address
cy.get(':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').click()
cy.wait(3000)
//selecting option from dropdown
cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()
cy.wait(3000)
cy.get('.oxd-select-dropdown > :nth-child(2)').click()
cy.wait(3000)
//date of birth
cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-icon').click()
cy.wait(3000)
cy.get(':nth-child(7) > .oxd-calendar-date').click()
cy.wait(3000)

cy.get(':nth-child(1) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input').click()
cy.wait(3000)

cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click()
cy.wait(6000)

cy.get('.orangehrm-card-container > .oxd-form > .oxd-form-row > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()
cy.wait(3000)
cy.get('.oxd-select-dropdown > :nth-child(2)').click()
cy.wait(3000)

cy.get('.orangehrm-card-container > .oxd-form > .oxd-form-row > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').click()
cy.wait(3000)
cy.get('.orangehrm-card-container > .oxd-form > .oxd-form-row > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Cypress Address')
cy.wait(3000)

cy.get('.orangehrm-card-container > .oxd-form > .oxd-form-actions > .oxd-button').click()
cy.wait(6000)

cy.get('.employee-image').click()
cy.wait(3000)

cy.get('.oxd-file-div > .oxd-icon-button > .oxd-icon').click()
cy.wait(2000)
cy.get('[type="file"]').selectFile('C:/Users/sanad/Desktop/ORANGEHRM/cypress/fixtures/images.jpg', {force: true})
cy.wait(6000)
cy.get('.oxd-button').click()
cy.wait(6000)

})