import BasePage from './BasePage';

class SelectAddressPage extends BasePage{
    visit(){
        cy.log('***Open select address page***');
        cy.visit('/#/address/select');
    }

    getAddressRadioButton(){
        return cy.get('label.mat-radio-label');
    }

    selectAddress(){
        this.getAddressRadioButton().click();
    }

    getContinueButton(){
        return cy.get('[aria-label="Proceed to payment selection"]');
    }

    clickContinueButton(){
        this.getContinueButton().click();
    }


}

export default new SelectAddressPage();