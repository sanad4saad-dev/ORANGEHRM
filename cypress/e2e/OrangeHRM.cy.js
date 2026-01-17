beforeEach(() => {
  cy.clearCookies();
  cy.clearLocalStorage();
});

it.only('waterfall OrangeHRM' , function() { 

//**********************************************#1 visit login page*****************************************************
cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
cy.wait(6000)
//username
cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
cy.wait(3000)
//password
cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
cy.wait(3000)
//login button
cy.get('.oxd-button').click()
cy.wait(6000)
// //***********************************************#2 add employee********************************************************
// //click admin tab
// cy.get(':nth-child(1) > .oxd-main-menu-item').click()
// cy.wait(40)
// //click add button
// cy.get('.orangehrm-header-container > .oxd-button').click()
// cy.wait(50)
// //select user role
// cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()
// cy.wait(60)
// //selecting option from dropdown
// cy.get('.oxd-select-dropdown > :nth-child(2) > span').click()
// cy.wait(60)
// //enter employee name
// cy.get('.oxd-autocomplete-text-input > input').type('r')
// cy.wait(4000)
// //selecting employee from dropdown
// cy.get('.oxd-autocomplete-dropdown > :nth-child(2) > span').click()
// cy.wait(4000)
// //select status
// cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()
// cy.wait(60)
// //selecting option from dropdown
// cy.get('.oxd-select-dropdown > :nth-child(2) > span').click()
// cy.wait(60)
// //set username
// cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Sanad1234')
// cy.wait(3000)
// //set password
// cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('Sanad@1234')
// cy.wait(6000)
// //confirm password
// cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Sanad@1234')
// cy.wait(6000)
// //click save button
// cy.get('.oxd-button--secondary').click()
// cy.wait(6000)

 //**************************************************#3 delete employee********************************************************* 
//  cy.get(':nth-child(1) > .oxd-main-menu-item').click()
//  cy.wait(6000)
//  //search employee
//  cy.get(':nth-child(2) > .oxd-input').type('Sanad1234')
//  cy.wait(6000)
//     //click search button
//     cy.get('.oxd-form-actions > .oxd-button--secondary').click()
//     cy.wait(6000)
//     //selecting checkbox
//     cy.get('.oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click()
//     cy.wait(6000)
//     //click delete button
//     cy.get('.oxd-button--label-danger').click()
//     cy.wait(6000)
//     //confirm delete
// cy.get('.orangehrm-modal-footer > .oxd-button--label-danger').click()
//     cy.wait(6000)


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

//*****************************************************#4 add job title *********************************************************
//  //click admin tab
//  cy.get(':nth-child(1) > .oxd-main-menu-item').click()
//     cy.wait(3000)
//     //click job dropdown
//     cy.get('.oxd-topbar-body-nav > ul > :nth-child(2)').click()
//     cy.wait(2000)
//     //click job titles
//     cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-link').click()
//     cy.wait(3000)
//     //click add button
//     cy.get('.oxd-button').click()
//     cy.wait(3000)
//     //click job title field
//     cy.get(':nth-child(2) > .oxd-input').click()
//     cy.wait(2000)
//     //enter job title
//     cy.get(':nth-child(2) > .oxd-input').type('Quality Analyst')
//     cy.wait(3000)
//     //insert job specification
//     cy.get('.oxd-file-button').click()
//     cy.wait(2000)
//     cy.get('[type="file"]').selectFile('cypress/fixtures/s.pdf', {force: true})
//     cy.wait(6000)
//     //click save button
//     cy.get('.oxd-button--secondary').click()
//     cy.wait(6000)

//************************************************#5 delete job by assertion*************************************************************
   //click admin tab
cy.get(':nth-child(1) > .oxd-main-menu-item').click()
cy.wait(3000)
//click job dropdown
cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item').click()
cy.wait(2000)
//click job titles
cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-link').click()
cy.wait(3000)
// find row in a list that contains job title
 cy.contains('Quality Analyst').parents('[role="row"]').find('button').eq(0).click();
 // confirm delete 
cy.get('.oxd-button--label-danger').should('be.visible').click()
.wait(3000);
})