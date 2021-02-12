const AuthenticationPage = require("../../support/page-objects/pages/authentication-page");
const ShoppingCartPage = require("../../support/page-objects/pages/shopping-cart-page");

describe('Load us into the main page', ()=>{
    it('Proceeds to the Contact Us Page via the nav bar', ()=>{
        cy.visit('http://automationpractice.com/');
    });

    it('Proceed to clothing item page', ()=>{
        cy.get('ul#homefeatured').children().first().find('a.button.lnk_view').click();
    });

    it('Add item to cart', ()=>{
        //cy.intercept('GET', /index.php?controller=cart&add=1&id_product=1&token=.*/).as('addToCart');
        //cy.wait(2000);
        //cy.get('ul#homefeatured').children().first().trigger('mouseover').find('a.button.ajax_add_to_cart_button').click();
        //cy.get('p#add_to_cart').find('button.exclusive').url()).as('addToCart');
        //cy.get('p#add_to_cart').find('button.exclusive').invoke('mousedown');
        //cy.get('p#add_to_cart').find('button.exclusive').focus().invoke('mouseover').wait(1000).click();
        cy.get('p#add_to_cart').find('button.exclusive').parent()
          .trigger('mouseover').click();
    });
});