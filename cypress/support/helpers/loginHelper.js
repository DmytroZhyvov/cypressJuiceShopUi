import LoginPage from '../pages/LoginPage';
import user from '../../fixtures/user.json';

export function login() {
    LoginPage.visit();
    LoginPage.submitLoginForm(user.email, user.password);
}