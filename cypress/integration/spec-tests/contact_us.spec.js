const DefaultHeaderMenuBar = require("../../support/page-objects/components/default-header-bar");

describe('Account Creation', ()=>{
    it('Proceeds through the account creation process', ()=>{
        //Arrange - Setup the initial state
        cy.visit('http://automationpractice.com/')
        //Act - take an action
        DefaultHeaderMenuBar.contactUsBtn().click();
        //cy.contains('Sign in').click()
        //Assert - make an assertion
        cy.url()
            .should('include', '/index.php?controller=contact')
    })
})