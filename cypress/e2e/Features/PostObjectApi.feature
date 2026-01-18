Feature: Post Object

    Scenario: Add new object to the database

        Given   I have the Api Endpoint "https://api.restful-api.dev/objects"
        When    I send a POST request to the API endpoint
        Then    The response status code should be 200