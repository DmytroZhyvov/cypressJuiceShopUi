import BasePage from './BasePage';

class PaymentOptionsPage extends BasePage{
    visit(){
        cy.log('***Open delivery method page***');
        cy.visit('/#/delivery-method');
    }

    getPaymentRadioButton() {
        return cy.get('label.mat-radio-label');
    }

    clickPaymentRadioButton() {
        this.getPaymentRadioButton().click();
    }

    getContinueButton(){
        return cy.get('[aria-label="Proceed to review"]');
    }

    clickContinueButton(){
        this.getContinueButton().click();
    }

}

export default new PaymentOptionsPage();