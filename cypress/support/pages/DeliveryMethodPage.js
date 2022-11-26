import BasePage from './BasePage';

class DeliveryMethodPage extends BasePage{
    visit(){
        cy.log('***Open delivery method page***');
        cy.visit('/#/delivery-method');
    }

    getFastDeliveryRadioButton() {
        return cy.get('.mat-radio-label').eq(1);
    }

    clickFatsDeliveryRadioButton() {
        this.getFastDeliveryRadioButton().click();
    }

    getContinueButton(){
        return cy.get('[aria-label="Proceed to delivery method selection"]');
    }

    clickContinueButton(){
        this.getContinueButton().click();
    }

}

export default new DeliveryMethodPage();