class WelcomePage {
    getDismissButton(){
        return cy.get('.mat-focus-indicator.close-dialog');
    }

    clickDismissButton(){
        cy.log('***Click Dismiss button***');
        this.getDismissButton().click();
    }
}

export default new WelcomePage();