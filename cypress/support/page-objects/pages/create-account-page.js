/**
 * Page resource class to contain page selectors for the authentication page
 */

 const people = require("../../../../people.json");

 class CreateAccountPage{
        /**
         * Function which returns a element within the account creation form
         * @param {string} value 
         */
        findAccountCreationElement(value){
            return cy.get('#account-creation_form').find(`${value}`);
        }

        accountForm(){
            return cy.get('#account-creation_form');
        }

        registerAccount(personObj){
            if(!personObj)
                personObj = people.default;
            
            this.findAccountCreationElement('input#id_gender1').click();
            this.findAccountCreationElement('input#customer_firstname').type(personObj.firstName);
            this.findAccountCreationElement('input#customer_lastname').type(personObj.lastName);
            this.findAccountCreationElement('input#passwd').type(personObj.password);
            this.findAccountCreationElement('select#days').select(`${personObj.birthDay}`);
            this.findAccountCreationElement('select#months').select(`${personObj.birthMonth}`);
            this.findAccountCreationElement('select#years').select(`${personObj.birthYear}`);
            if(personObj.newsletter === true)
               this.findAccountCreationElement('input#newsletter').click();
            if(personObj.specialOffers === true)
                this.findAccountCreationElement('input#optin').click();
            this.findAccountCreationElement('input#address1').type(personObj.address);
            this.findAccountCreationElement('input#address2').type(personObj.addressUnit);
            this.findAccountCreationElement('input#city').type(personObj.city);
            this.findAccountCreationElement('select#id_country').select(`${personObj.country}`);
            this.findAccountCreationElement('select#id_state').select(`${personObj.state}`, {"force": true});
            this.findAccountCreationElement('input#postcode').type(personObj.zip);
            this.findAccountCreationElement('textarea#other').type(personObj.additionalInfo);
            this.findAccountCreationElement('input#phone').type(personObj.homePhone);
            this.findAccountCreationElement('input#phone_mobile').type(personObj.mobilePhone);
            this.findAccountCreationElement('input#alias').clear().type(personObj.addressAlias);
            return this.findAccountCreationElement('button#submitAccount').click();
        }
 } 

module.exports = new CreateAccountPage();