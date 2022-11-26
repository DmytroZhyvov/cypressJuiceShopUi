import ContactFormPage from '../support/pages/ContactFormPage';
import WelcomePage from "../support/pages/WelcomePage";
import {faker} from "@faker-js/faker";

const user = {
  name: faker.name.firstName('female'),
  comment: faker.random.words(7)
}

describe('User can', () => {
  it('be registered', () => {
    ContactFormPage.visit();
    WelcomePage.clickDismissButton();
    WelcomePage.getCookieConfirmButton();
    ContactFormPage.fillContactForm(user.comment);
    cy.get('.mat-simple-snack-bar-content').should('contain.text', 'Thank you for your feedback.');

  })
})