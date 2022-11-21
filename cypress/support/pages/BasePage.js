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
}