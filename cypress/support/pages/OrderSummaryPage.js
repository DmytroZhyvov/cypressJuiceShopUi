import BasePage from './BasePage';

class OrderSummaryPage extends BasePage{
    visit(){
        cy.log('***Open order summary page***');
        cy.visit('/#/order-summary');
    }

    getCheckoutButton() {
        return cy.get('button#checkoutButton');
    }

    clickCheckoutButton() {
        this.getCheckoutButton().click();
    }

}

export default new OrderSummaryPage();