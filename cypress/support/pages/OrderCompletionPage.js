import BasePage from './BasePage';

class OrderCompletionPage extends BasePage{
    getOrderConfirmationToast() {
        return cy.get('h1.confirmation');
    }


}

export default new OrderCompletionPage();