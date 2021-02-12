/**
 * Page resource class to contain page selectors for the authentication page
 */

 class AuthenticationPage{

    createAccountForm() {
        return cy.get('form#create-account_form.box');
    }

    createAccountEmail() {
        return this.createAccountForm().find('#email_create');
    }

    createAccountBtn(){
        return this.createAccountForm().find('#SubmitCreate');
    }

    signInForm(){
        return cy.get('form#login_form.box');
    }

    signInEmail(){
        return this.signInForm().find('#email');
    }

    signInPasswordEmail(){
        return this.signInForm().find('#passwd');
    }

    signInBtn(){
        return this.signInForm.find('#SubmitLogin');
    }
 }

 module.exports = new AuthenticationPage();