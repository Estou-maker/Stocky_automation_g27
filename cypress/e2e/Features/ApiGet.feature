Feature: Test Api GET

    To test the api Endpoints


Scenario: Send Get Request to the API
    Given  I have the Api Endpoint "https://api.restful-api.dev/objects"
    When  I send a GET request to the Api endpoint
    Then The response status code should be 200