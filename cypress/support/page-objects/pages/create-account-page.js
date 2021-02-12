/**
 * Page resource class to contain page selectors for the authentication page
 */

 const people = require("../../../../people.json");

 class CreateAccountPage{
        registerAccount(personObj){
            if(!personObj)
                personObj = people.default;
            
            this.findAccountCreationElement('input#id_gender1').click();
            this.findAccountCreationElement('input#customer_firstname').type(personObj.firstName);
            this.findAccountCreationElement('input#customer_lastname').type(personObj.lastName);
            // Assert the email we sent in the previous test matches the one in the input field
            this.findAccountCreationElement('input#email').then(()=>{
                expect(`${this.findAccountCreationElement('input#email')
                .invoke('val')}`)
                .should((text) => cy.log(emailText))
                .to.equal(personObj.email);
            });
            this.findAccountCreationElement('input#isPasswd').type(personObj.password);
        }

        /**
         * Function which returns a element within the account creation form
         * @param {string} value 
         */
        findAccountCreationElement(value){
            return cy.get('#account-creation_form').find(`${value}`);
        }

        ensurePageLoaded(){
            return cy.get('#account-creation_form');
        }
 } 

module.exports = new CreateAccountPage();