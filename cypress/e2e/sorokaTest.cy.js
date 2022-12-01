import {faker} from "@faker-js/faker";

describe('User can', () => {
    it('purchase a product after registration', () => {
        let email = faker.internet.email();
        let password = faker.internet.password(8);
        let name = faker.name.firstName('female');
        let country = faker.address.country();
        let phone = faker.phone.number('1 00 ### ##');
        let zipCode = faker.address.zipCode('20### ##');
        let address = faker.address.secondaryAddress();
        let city = faker.address.city();
        let state = faker.address.state();
        let cardNumber = faker.random.numeric(16);

        cy.log('***Open login page***');
        cy.visit('/#/login');

        cy.log('***Close Welcome pop-up***');
        cy.get('.mat-focus-indicator.close-dialog').click();

        cy.log('***Close cookie banner***');
        cy.get('[aria-label="dismiss cookie message"]').click();

        cy.log('***Click not a customer button***');
        cy.get('#newCustomerLink').click();

        cy.log('***Fill in an email field***');
        cy.get('#emailControl').type(email);

        cy.log('***Fill in a password field***');
        cy.get('#passwordControl').type(password);

        cy.log('***Fill in a confirm password field***');
        cy.get('#repeatPasswordControl').type(password);

        cy.log('***Select security question***');
        cy.get(`[name='securityQuestion']`).click();
        cy.get('#mat-option-1').click();

        cy.log('***Fill in answer on security question***');
        cy.get('#securityAnswerControl').type(name);

        cy.log('***Click the register button***');
        cy.get('#registerButton').click();

        cy.log('***Fill in email of registered user***');
        cy.get(`[name='email']`).type(email);

        cy.log('***Fill in password of registered user***');
        cy.get(`[name='password']`).type(password);

        cy.log('***Click login button***');
        cy.get(`#loginButton`).click();

        cy.log('***Add the first product to a basket***');
        cy.get('[aria-label="Add to Basket"]').eq(0).click()

        cy.log('***Click your basket***');
        cy.wait(3000);
        cy.get('[aria-label="Show the shopping cart"]').click();

        cy.log('***Click checkout button***');
        cy.get('#checkoutButton').click();

        cy.log('***Click Add New Address***');
        cy.get(`[aria-label="Add a new address"]`).click();

        cy.log('***Fill in country***');
        cy.get(`#mat-input-9`).type(country);

        cy.log('***Fill in Name***');
        cy.get(`#mat-input-10`).type(name);

        cy.log('***Fill in mobile number***');
        cy.get(`#mat-input-11`).type(phone);

        cy.log('***Fill in ZIP Code***');
        cy.get(`#mat-input-12`).type(zipCode);

        cy.log('***Fill in Address***');
        cy.get(`#address`).type(address);

        cy.log('***Fill in City***');
        cy.get(`#mat-input-14`).type(city);

        cy.log('***Fill in State***');
        cy.get(`#mat-input-15`).type(state);

        cy.log('***Click Submit button***');
        cy.get(`#submitButton`).click();

        cy.log('***Select the address***');
        cy.get('label.mat-radio-label').click();

        cy.log('***Click Continue button***');
        cy.get('[aria-label="Proceed to payment selection"]').click();

        cy.log('***Select Delivery speed***');
        cy.get('.mat-radio-label').eq(1).click();

        cy.log('***Click Continue button***');
        cy.get('[aria-label="Proceed to delivery method selection"]').click();

        cy.log('***Click Add new card***');
        cy.get('#mat-expansion-panel-header-0').click();

        cy.log('***Add card name***');
        cy.get(`#mat-input-16`).type(name);

        cy.log('***Add card number***');
        cy.get(`#mat-input-17`).type(cardNumber);

        cy.log('***Select expiry month***');
        cy.get(`#mat-input-18`).select(1);

        cy.log('***Select expiry year***');
        cy.get(`#mat-input-19`).select(1);

        cy.log('***Click Submit button***');
        cy.get(`#submitButton`).click();

        cy.log('***Select payment options***');
        cy.get('label.mat-radio-label').click();

        cy.log('***Click Continue button***');
        cy.get('[aria-label="Proceed to review"]').click();

        cy.log('***Click Place your order button***');
        cy.get('button#checkoutButton').click();
    })
})