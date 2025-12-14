import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import loginElements from '../Page_objects/LoginObjects';


Given(`I am on the login page`, () => {

    cy.visit(loginElements.LoginURL)
    cy.get(loginElements.TitleCNX).should('be.visible').should('contain',   ' Welcome Back ')
    // [Given] Sets up the initial state of the system.
});

When(`I enter valid credentials`, () => {
    cy.log('Entering Valid Credentials..')
    cy.get(loginElements.EmailInput).invoke('attr', 'type', 'email').should('be.visible').type(Cypress.env('USER_EMAIL'), { log: false})
    cy.get(loginElements.PasswordInput).invoke('attr', 'type', 'password').should('be.visible').type(Cypress.env('USER_PASSWORD'), { log: false})    
    cy.get(loginElements.submitBtn).should('be.visible').should('not.be.disabled').click()
    // [When] Describes the action or event that triggers the scenario.
});

Then(`I should be redirected to the dashboard`, () => {
    cy.get(loginElements.DashboardContainer).should('be.visible').should('contain', 'Client Dashboard')
    cy.screenshot()
    // [Then] Describes the expected outcome or result of the scenario.
});

When('I enter {string} in the email field', (user) => {
    if (user) {
        cy.get(loginElements.EmailInput).type(user)
        cy.get('body').click()
    } else {
        cy.get(loginElements.EmailInput).clear()
    }
    // [Then] Describes the expected outcome or result of the scenario.
});


And('I enter {string} in the password field', (password) => {
    if (password) {
        cy.get(loginElements.PasswordInput).type(password)
    } else {
        cy.get(loginElements.PasswordInput).clear()
    }
    // [Then] Describes the expected outcome or result of the scenario.
});

And(`I click on the submit button`, () => {
    cy.get(loginElements.submitBtn).should('be.visible').click()
    // [Then] Describes the expected outcome or result of the scenario.
});

Then(`I should see the message {string}`, (message) => {
    cy.get(loginElements.ErrorMessage).should('be.visible').and('contain', message)
    // [Then] Describes the expected outcome or result of the scenario.
});