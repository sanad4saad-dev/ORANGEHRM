
before(() => {
  cy.clearCookies();
  cy.clearLocalStorage();
});

it.only('visitlogin' , function() { 

//**********************************************#1 visit login page*****************************************************
cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
cy.wait(3000)
//username
cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin' , {delay:100})
cy.wait(3000)
//password
cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
cy.wait(3000)
//login button
cy.get('.oxd-button').click()   //login button
cy.wait(6000)


 





})
