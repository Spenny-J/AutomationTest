/**
 * Component resource class containg selectors for the Header Menu bar
 */

 class DefaultHeaderMenuBar{
     contactUsBtn(){
        return cy.get('div.nav').find('div#contact-link');
     }

     signInBtn(){
        return cy.get('div.nav').find('a.login');
     }

     signOutBtn(){
        return cy.get('div.nav').find('a.logout');
     }
     
     userBtn(){
        return cy.get('div.nav').find('a.account');
     }

     homePageBtn(){
        return cy.get('img.logo.img');
     }
 }

 
 module.exports = new DefaultHeaderMenuBar;