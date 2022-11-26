export default class BasePage{
    getAccountButton(){
        return cy.get('#navbarAccount');
    }

    clickAccountButton(){
        this.getAccountButton().click();
    }

    getLoginButton(){
        return cy.get('#navbarLoginButton');
    }

    clickLoginButton(){
        this.getLoginButton().click();
    }

    getMenuPanel(){
        return cy.get('#mat-menu-panel-0');
    }

    getYourBasketButton(){
        return cy.get('[aria-label="Show the shopping cart"]');
    }

    clickYourBasketButton(){
        this.getYourBasketButton().click();
    }

    getSearchButton(){
        return cy.get("[data-mat-icon-type='font']:contains(' search ')");
    }

    clickSearchButton(){
        this.getSearchButton().click();
    }

    getSearchInput(){
        return cy.get('.mat-form-field.mat-search_field');
    }
}