import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

let createPostId= null;



Given(`I send a POST request to create a new object`, () => {

    // [Given] Sets up the initial state of the system.
    cy.request({
        method: "POST",
        url: "https://api.restful-api.dev/objects",
        body: {
            name: "Auto Test Posttodelete",
            data: {
                year: 2026,
                price: 2026.26,
                "CPU model": "Automation Posttodelete",
                "Hard disk size": "5 TB SSD",
                colour: "Black Phantom"
            }
        },
        headers: {
            'Content-type': 'application/json'
        }
    }).then((response)=> {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('id');
        createPostId = response.body.id
        cy.log('Created ID: ' + createPostId);
    })
});

When(`I delete the object using ID from the POST Response`, () => {

    // [When] Describes the action or event that triggers the scenario.
    expect(createPostId).to.not.be.null;

    cy.request({
        method: 'DELETE',
        url: `https://api.restful-api.dev/objects/${createPostId}`,

    }).then((response)=> {
        expect(response.status).to.eq(200)
        expect(response.body.message).to.include(`Object with id = ${createPostId} has been deleted.`)
    })
});

Then(`I should recieve a succes message confriming the deletion`, () => {
    cy.log('Deletion request completed')
    // [Then] Describes the expected outcome or result of the scenario.
});