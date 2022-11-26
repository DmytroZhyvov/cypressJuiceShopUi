class WelcomePage {
    getDismissButton(){
        return cy.get('.mat-focus-indicator.close-dialog');
    }

    clickDismissButton(){
        cy.log('***Click Dismiss button***');
        this.getDismissButton().click();
    }

    getCookieConfirmButton() {
        return cy.get('[aria-label="dismiss cookie message"]');
    }

    clickCookieConfirmButton(){
        this.getCookieConfirmButton().click();
    }
}

export default new WelcomePage();