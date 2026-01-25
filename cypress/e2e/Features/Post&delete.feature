Feature: Create and Delete an object via API

    Feature Description: This feature tests the creation and deletion of an object using API calls.

    Scenario: Create an object and then delete it using its ID
        Given I send a POST request to create a new object
        When I delete the object using ID from the POST Response
        Then I should recieve a succes message confriming the deletion