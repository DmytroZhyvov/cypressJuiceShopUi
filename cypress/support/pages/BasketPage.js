import BasePage from './BasePage';

class BasketPage extends BasePage{
    visit(){
        cy.log('***Open basket page***');
        cy.visit('/#/basket');
    }

    getCheckoutButton(){
        return cy.get('#checkoutButton');
    }

    clickCheckoutButton(){
        this.getCheckoutButton().click();
    }

}

export default new BasketPage();