/**
 * Page resource for the shopping cart process of checking out
 */

class ShoppingCartPage{
    proceedToCheckoutBtn(){
        return cy.get('a[href="http://automationpractice.com/index.php?controller=order&step=1"]');
    }
}
module.export = new ShoppingCartPage();