const AuthenticationPage = require("../../support/page-objects/pages/authentication-page");
const ShoppingCartPage = require("../../support/page-objects/pages/shopping-cart-page");

describe('Load us into the main page', ()=>{
    it('Proceeds to the Contact Us Page via the nav bar', ()=>{
        cy.visit('http://automationpractice.com/');
    });

    it('Proceed to clothing item page', ()=>{
        cy.get('ul#homefeatured').children().first().wait(5000).find('a.button.lnk_view').click();

        //Assert we arive at the product page
        cy.url()
            .should('include', 'id_product');
    });

    it('Add item to cart', ()=>{
        /**
         * I could not get this to work past this point.
         * Once we loaded the item purchase page and selected the Add To cart button.
         * 
         * The page would not submit the item to the cart, and load the cart/checkout page.
         * Under this circumstance I would be happy to reach out to a developer for assistance.
         * 
         * Clicking the Add To Cart button worked when navigating back to the product page
         * then reselecting the Add To Cart button. This would fail my test and be logged as a bug.
         * 
         * Without developer assistance I tried: Clicking the object, 
         * triggering the select event,
         * invoking the select event,
         * calling hoverover then clicking,
         * click and hold for a short amount of time,
         * and Looking for the HTTP request.
         */

        // Select the Add to Cart button.
        cy.get('p#add_to_cart').find('button.exclusive').should('be.visible').wait(500).trigger('mouseover').click();

        // Assert we made it to our cart.
        cy.url()
            .should('include', '/index.php?controller=order&ipa=1');
    });

    it('Proceed to Sign In', ()=>{
        /**
         * Do to the designed failure of not loading the cart,
         * I decided to instead type out the rest of hoow I would automate this secion.
         * 
         * At this point in our test run we expect to be at the first 
         * checkout page giving a summary of the items we plan to buy.
         * 
         * Here we would select the Proceed to Checkout button.
         * Then sign in using the page selectors from the authentication-page.js file.
         * After we would feed the second users body data in the people.json
         * to the username/password fields. Then Confirm we log in, by asserting we can log out.
         */
    });

    it('Validate address', ()=>{
        /**
         * As I didn't store my address for this specific user
         * I'm going to just assert one exists.
         * 
         * Then move onto the payment section of the test.
         * I will also assert that we make it to the shipping page.
         */
    });

    it('Confirm shipping', ()=>{
        /**
         * We will want to select to agree to the terms of service box.
         * This is the only tick box included here.
         * 
         * Then move onto the payment page. Where we assert we make it there.
         */
    });

    it('Make Payment', ()=>{
        /**
         * Based on the current Date.Now I will decide to pay by bank wire or by check.
         * if(Date.Now % 2 === 0){
         *  Pay by bank wire.
         * } else {
         *  Pay by Check.
         * }
         * 
         * Then select the confirm order button for either option.
         * Next I would assert that the text is present for "Your order on My Store is complete."
         * To confirm that we have indeed succesfully completed our order.
         */
    });
});