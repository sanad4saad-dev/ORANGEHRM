before(() => {
  cy.clearCookies();
  cy.clearLocalStorage();
});

it.only('waterfall addjob' , function() { 

//*****************************************************#4 add job title *********************************************************
 //click admin tab
 cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.wait(3000)
    //click job dropdown
    cy.get('.oxd-topbar-body-nav > ul > :nth-child(2)').click()
    cy.wait(2000)
    //click job titles
    cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-link').click()
    cy.wait(3000)
    //click add button
    cy.get('.oxd-button').click()
    cy.wait(3000)
    //click job title field
    cy.get(':nth-child(2) > .oxd-input').click()
    cy.wait(2000)
    //enter job title
    cy.get(':nth-child(2) > .oxd-input').type('Quality Analyst')
    cy.wait(3000)
    //insert job specification
    cy.get('.oxd-file-button').click()
    cy.wait(2000)
    cy.get('[type="file"]').selectFile('cypress/fixtures/s.pdf', {force: true})
    cy.wait(6000)
    //click save button
    cy.get('.oxd-button--secondary').click()
    cy.wait(6000)

//************************************************#5 delete job by assertion*************************************************************
  //  click admin tab
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