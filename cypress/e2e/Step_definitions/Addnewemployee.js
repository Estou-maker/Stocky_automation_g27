import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import EmployeeElements from '../Page_objects/AddnewemployeeObjects'
import dashboardelements from '../Page_objects/DashboardObjects';

Given(`I navigate to Add employee page`, () => {
    cy.get(dashboardelements.Btn_menu_employee).should('be.visible').click()
    cy.get(EmployeeElements.addnewEmployeebtn).should('be.visible').click()
    cy.get(EmployeeElements.create_employee_form).should('be.visible').screenshot()
    // [Given] Sets up the initial state of the system.
});

Then(`I should be able to add a new employee with valid details`, () => {

    const prenom =  `user_${Math.random().toString(36).replace(/[^a-z]+/g, '').substring(0, 7)}`
    const nom =  `user_${Math.random().toString(36).replace(/[^a-z]+/g, '').substring(0, 5)}`
    const email = `user_${Math.random().toString(36).substring(0, 5)}@test.com`
    const username = `user_${Math.random().toString(36).substring(0, 5)}Autouser`
    const countrycode = "216"
    const phonenumber = Math.floor(10000000 + Math.random() * 90000000).toString()


    cy.get(EmployeeElements.prenom_input).type(prenom)
    cy.get(EmployeeElements.nom_input).type(nom)
    cy.get(EmployeeElements.email_input).type(email)
    cy.get(EmployeeElements.username_input).type(username)
    cy.get(EmployeeElements.country_code_input).type(countrycode)
    cy.get(EmployeeElements.phone_number_input).type(phonenumber)

    // [Then] Describes the expected outcome or result of the scenario.
});