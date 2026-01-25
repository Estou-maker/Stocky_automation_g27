import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import dashboardelements from '../Page_objects/DashboardObjects';
import AddproductElements from '../Page_objects/AddproductObjects';

beforeEach(() => {
    cy.intercept('POST', 'https://stocky-backend-dev.uksouth.cloudapp.azure.com/api/v1/Product').as('AddnewProduct')
})

Given(`I navigate to Add Product page`, () => {
    cy.get(dashboardelements.Btn_menu_products_list).should('be.visible').click()
    cy.wait(3000)
    cy.get(AddproductElements.Btn_add_new_product).should('be.visible').click()
    // [Given] Sets up the initial state of the system.
});

Then(`I should be able to add a new product with valid details`, () => {
    const carBrands = ['Toyota', 'BMW', 'Mercedes', 'Audi', 'Ford', 'Chevrolet', 'Honda', 'Volkswagen', 'Nissan', 'Hyundai', 'Kia', 'Tesla', 'Porsche', 'Lamborghini', 'Ferrari', 'Rolls-Royce', 'Bentley', 'Jaguar'];
    const Titre = `Titre_${Math.random().toString(36).replace(/[^a-z]+/g, '').substring(0, 7)}`
    const description = `Description_${Math.random().toString(36).replace(/[^a-z]+/g, '').substring(0, 200)}`
    const Reference = `Ref_${Math.random().toString(36).replace(/[^a-z]+/g, '').substring(0, 4)}`
    const Marque = carBrands[Math.floor(Math.random() * carBrands.length)]
    const price = (Math.random() * 1000).toFixed(2);
    const TVA = (Math.random() * 100).toFixed(2) + '%'

    let unitTypeValue
    let categorytypevalue
    let currencyTypeValue


    cy.get(AddproductElements.Block_add_new_product).should('be.visible')
    cy.get(AddproductElements.Input_product_title).should('be.visible').type(Titre)
    cy.get(AddproductElements.Input_product_description).should('be.visible').type(description)
    cy.get(AddproductElements.Input_product_reference).should('be.visible').type(Reference)
    cy.get(AddproductElements.Input_product_marque).should('be.visible').type(Marque)
    cy.get(AddproductElements.Select_product_categorie_trigger).should('be.visible').click()
    cy.get(AddproductElements.Select_product_categorie_list).find('li').then(options => {
        const randomindex = Math.floor(Math.random() * options.length)
        categorytypevalue = options[randomindex].innerText
        cy.wrap(options[randomindex]).click()
    })
    cy.get(AddproductElements.Select_product_unit_trigger).should('be.visible').click()
    cy.get(AddproductElements.Select_product_unit_list).find('li').then(options => {
        const randomindex = Math.floor(Math.random() * options.length)
        unitTypeValue = options[randomindex].innerText
        cy.wrap(options[randomindex]).click()
    })

    cy.get(AddproductElements.Input_product_price).should('be.visible').clear().type(price)
    cy.get(AddproductElements.Select_product_currency_trigger).should('be.visible').click()
    cy.get(AddproductElements.Select_procuct_currency_list).find('li').then(options => {
        const randomindex = Math.floor(Math.random() * options.length)
        currencyTypeValue = options[randomindex].innerText
        cy.wrap(options[randomindex]).click()
    })

    cy.get(AddproductElements.Input_Product_TVA).clear().type(TVA)
    cy.get(AddproductElements.Btn_submit_product_add).should('be.visible').click()

    cy.wait('@AddnewProduct').then((interception)=> {
        expect(interception.response.statusCode).to.eq(201)
        expect(interception.response.body).to.have.property('title').and.to.eq(Titre)
    })

    // [Then] Describes the expected outcome or result of the scenario.
});