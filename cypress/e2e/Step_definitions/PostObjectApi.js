import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'






When(`I send a POST request to the API endpoint`, () => {
    cy.log('Sending Post Request to the Api Endpoint...')
    cy.request('POST', 'https://api.restful-api.dev/objects', {
        "name": "TEST PRODUCT AUTOMATION",
    "data": {
      "year": 2026,
      "price": 1999.99,
      "CPU model": "Cypress Automation",
      "Hard disk size": "5 TB SSD"
   }

    }).then((response)=> {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('id')
        expect(response.body).to.have.property('name', "TEST PRODUCT AUTOMATION")
        cy.log('Response body:', JSON.stringify(response.body, null, 2))
        cy.log(`Created Object ID: ${response.body.id}`)
    })
    // [When] Describes the action or event that triggers the scenario.

});

Then(`The response status code should be {int}`, (arg0) => {
    // [Then] Describes the expected outcome or result of the scenario.
    expect(arg0).to.eq(200)
});