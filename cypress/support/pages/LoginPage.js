import BasePage from './BasePage';
import WelcomePage from './WelcomePage';

class LoginPage extends BasePage{
    visit(){
        cy.log('***Open login page***');
        cy.visit('/#/login');
    }

    getLoginInput(){
        return cy.get(`[name='email']`);
    }

    enterValueInEmailInput(email){
        cy.log(`Type email ${email} in email input`);
        this.getLoginInput().type(email);
    }

    getPasswordInput(){
        return cy.get(`[name='password']`);
    }

    enterValueInPasswordInput(password){
        cy.log(`Type password ${password} in password input`);
        this.getPasswordInput().type(password);
    }

    getLoginButton(){
        return cy.get(`#loginButton`);
    }

    clickLoginButton(){
        cy.log('Click Log in button');
        this.getLoginButton().click();
    }


    getNotCustomerButton(){
        return cy.get('#newCustomerLink');
    }

    clickNotCustomerButton(){
        cy.log('***Click Not yet a customer link***');
        this.getNotCustomerButton().click();
    }

    login(email, password) {
        this.enterValueInEmailInput(email);
        this.enterValueInPasswordInput(password);
        this.clickLoginButton();
    }

    submitLoginForm(email, password){
        WelcomePage.clickDismissButton();
        WelcomePage.clickCookieConfirmButton();
        this.enterValueInEmailInput(email);
        this.enterValueInPasswordInput(password);
        this.clickLoginButton();
    }


}

export default new LoginPage();