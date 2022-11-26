import LoginPage from '../support/pages/LoginPage';
import user from '../fixtures/user.json'
import MainPage from '../support/pages/MainPage';

describe('User can', () => {
  it('login with valid credentials', () => {
    LoginPage.visit();
    LoginPage.submitLoginForm(user.email, user.password);
    MainPage.clickAccountButton();
    MainPage.getMenuPanel().should("contain.text", user.email);
  })
})