import WelcomePage from '../support/pages/WelcomePage';
import MainPage from '../support/pages/MainPage';
import LoginPage from '../support/pages/LoginPage';
import RegistrationPage from '../support/pages/RegistrationPage';

describe('User can', () => {
  it('be registered', () => {
    //Open Registration page from the main page - for learning purpose only!

    // cy.visit('/');
    // WelcomePage.clickDismissButton();
    // MainPage.clickAccountButton();
    // MainPage.clickLoginButton();
    // LoginPage.clickNotCustomerButton();

    const [email, password] = RegistrationPage.registerNewUser();
    LoginPage.login(email, password);
    MainPage.clickAccountButton();
    MainPage.getMenuPanel().should("contain.text", email);

  })
})