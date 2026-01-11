import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given(`I have the Api Endpoint {string}`, (arg0) => {
    cy.log('Setting up the Api Endpoint...')
    // [Given] Sets up the initial state of the system.
});

When(`I send a GET request to the Api endpoint`, () => {
    cy.log('sending Get request to the Api endpoint...')
    cy.request({
        methode: 'GET',
        url: 'https://api.restful-api.dev/objects',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
        .then((response)=> {
            expect(response.status).to.eq(200)
            expect(response.body).to.not.be.empty
            expect(response.body).to.be.an('array')
        }) 


    // [When] Describes the action or event that triggers the scenario.
});

Then(`The response status code should be {int}`, (arg0) => {
    cy.log('test has passed')
    // [Then] Describes the expected outcome or result of the scenario.
});

