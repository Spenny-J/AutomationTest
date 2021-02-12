///<reference types="Cypress" />

describe('My first test', ()=>{
    it('Visits the log in page', ()=>{
        //Arrange - Setup the initial state
        cy.visit('http://automationpractice.com/')
        //Act - take an action
        cy.contains('Sign in').click()
        //Assert - make an assertion
        cy.url()
            .should('include', '/index.php?controller=authentication&back=my-account')
    })
})