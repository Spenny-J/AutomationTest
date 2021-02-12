const AuthenticationPage = require("../../support/page-objects/pages/authentication-page");
const ShoppingCartPage = require("../../support/page-objects/pages/shopping-cart-page");

describe('Load us into the main page', ()=>{
    it('Proceeds to the Contact Us Page via the nav bar', ()=>{
        cy.visit('http://automationpractice.com/')
        
        cy.url()
            .should('include', '/index.php?')
    });

    it('Add shirt to cart', ()=>{

    });
});