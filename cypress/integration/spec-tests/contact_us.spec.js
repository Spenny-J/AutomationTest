const DefaultHeaderMenuBar = require("../../support/page-objects/components/default-header-bar");
const ContactUsPage = require("../../support/page-objects/pages/contact-us-page");
const Contact = require("../../../contact.json");

describe('Get to Contact Us Page', ()=>{
    it('Proceeds to the Contact Us Page via the nav bar', ()=>{
        cy.visit('http://automationpractice.com/')
        
        DefaultHeaderMenuBar.contactUsBtn().click();
        
        cy.url()
            .should('include', '/index.php?controller=contact')
    });

    it('Submit a contact form', ()=>{
        Contact.default.email = Contact.default.email.replace("[REPLACE]", Date.now());
        ContactUsPage.sendContactForm();

        // Assert that the success message is visible
        // I noticed that this fails on the first submission each time. 
        // This assertion will catch this issue.
        cy.get('p.alert.alert-success').should('be.visible');
    });
});