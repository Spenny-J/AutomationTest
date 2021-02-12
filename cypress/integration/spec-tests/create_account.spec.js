const DefaultHeaderMenuBar = require("../../support/page-objects/components/default-header-bar");
const AuthenticationPage = require("../../support/page-objects/pages/authentication-page");
const CreateAccountPage = require("../../support/page-objects/pages/create-account-page");
const People = require("../../../people.json");

describe('Get to Account Creation', ()=>{
    it('Proceeds to the account creation page', ()=>{
        cy.visit('http://automationpractice.com/');

        DefaultHeaderMenuBar.signInBtn().click();

        // Assert we arrive at the Authentication page.
        cy.url()
            .should('include', '/index.php?controller=authentication&back=my-account');

        People.default.email = People.default.email.replace("[REPLACE]", Date.now());
        AuthenticationPage.createAccountEmail().type(People.default.email);
        AuthenticationPage.createAccountBtn().click();
    });

    it('Create an account', ()=>{
        cy.url()
        .should('include', '/index.php?controller=authentication&back=my-account#account-creation');

        CreateAccountPage.ensurePageLoaded();
        CreateAccountPage.registerAccount();
    });
});