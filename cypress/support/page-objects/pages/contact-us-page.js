/**
 * Page resource class to contain page selects for the contact us page
 */

 const Contact = require("../../../../contact.json");

 class ContactUsPage{
    findContactElement(value) {
        return cy.get('div.clearfix').find(`${value}`);
    }
    
    contactForm(){
        return cy.get('div.clearfix');
    }

    sendContactForm(contactObj) {
        if(!contactObj)
            contactObj = Contact.default;

        this.findContactElement('input#email').type(contactObj.email);
        this.findContactElement('select#id_contact').select(`${contactObj.subjectHeading}`);
        this.findContactElement('input#id_order').type(contactObj.orderReference);
        this.findContactElement('textarea#message').type(contactObj.message);
        this.findContactElement('input#fileUpload').attachFile('testImage.PNG');
        cy.get('button#submitMessage').click();
    }


 }

 module.exports = new ContactUsPage();