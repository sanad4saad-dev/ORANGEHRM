before(() => {
  cy.clearCookies();
  cy.clearLocalStorage();
});
it.only('Add delete emp' , function() { 
// //***********************************************#2 add employee********************************************************
//click admin tab
cy.get(':nth-child(1) > .oxd-main-menu-item').click()
cy.wait(4000)
//click add button
cy.get('.orangehrm-header-container > .oxd-button').click()
cy.wait(4000)
//select user role
cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()
cy.wait(3000)
//selecting option from dropdown
cy.get('.oxd-select-dropdown > :nth-child(2) > span').click()
cy.wait(3000)
//enter employee name
cy.get('.oxd-autocomplete-text-input > input').type('r')
cy.wait(4000)
//selecting employee from dropdown
cy.get('.oxd-autocomplete-dropdown > :nth-child(2) > span').click()
cy.wait(4000)
//select status
cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()
cy.wait(3000)
//selecting option from dropdown
cy.get('.oxd-select-dropdown > :nth-child(2) > span').click()
cy.wait(3000)
//set username
cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Sanad1234')
cy.wait(3000)
//set password
cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('Sanad@1234')
cy.wait(6000)
//confirm password
cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Sanad@1234')
cy.wait(6000)
//click save button
cy.get('.oxd-button--secondary').click()
cy.wait(6000)


//**************************************************#3 delete employee********************************************************* 
 cy.get(':nth-child(1) > .oxd-main-menu-item').click()
 cy.wait(6000)
 //search employee
 cy.get(':nth-child(2) > .oxd-input').type('Sanad1234')
 cy.wait(6000)
    //click search button
    cy.get('.oxd-form-actions > .oxd-button--secondary').click()
    cy.wait(6000)
    //selecting checkbox
    cy.get('.oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click()
    cy.wait(6000)
    //click delete button
    cy.get('.oxd-button--label-danger').click()
    cy.wait(6000)
    //confirm delete
cy.get('.orangehrm-modal-footer > .oxd-button--label-danger').click()
    cy.wait(6000)


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

})