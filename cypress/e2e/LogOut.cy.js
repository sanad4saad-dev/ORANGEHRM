before(() => {
  cy.clearCookies();
  cy.clearLocalStorage();
}); 
it.only('waterfall logout' , function() { 

//**********************************************logout*****************************************************
cy.get('.oxd-userdropdown-tab > .oxd-icon').click()
cy.wait(3000)
cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
cy.wait(6000)

})