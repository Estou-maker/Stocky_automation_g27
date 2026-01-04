import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import dashboardelements from '../Page_objects/DashboardObjects';




Then(`Dashboard elements should load successfully`, () => {
    cy.log('verifying dashboard Elements...')
    cy.get(dashboardelements.DashboardBtn).should('have.class', 'active-route')
    cy.get(dashboardelements.Client_dashboard).should('be.visible')
    // cy.get(dashboardelements.Cards).eq(0).should('contain', 'Orders').screenshot()
    // cy.get(dashboardelements.Cards).eq(1).should('contain', 'Revenue').screenshot()
    // cy.get(dashboardelements.Cards).eq(2).should('contain', 'Customers').screenshot()
    // cy.get(dashboardelements.Cards).eq(3).should('contain', 'Comments').screenshot()
    // cy.get(dashboardelements.Cards).eq(4).should('contain', 'Recent Sales').screenshot()
    // cy.get(dashboardelements.Cards).eq(5).should('contain', 'Best Selling Products').screenshot()
    // cy.get(dashboardelements.Cards).eq(6).should('contain', 'Revenue Stream').screenshot()
    // cy.get(dashboardelements.Cards).eq(7).should('contain', 'Notifications').screenshot()
    cy.get(dashboardelements.Btn_menu_employee).should('be.visible').click()
    cy.get(dashboardelements.Btn_menu_employee).should('have.class', 'active-route').screenshot()
    cy.get(dashboardelements.DashboardBtn).should('not.have.class', 'active-route').screenshot()
    cy.get(dashboardelements.Btn_menu_providers).should('be.visible').click()
    cy.get(dashboardelements.Btn_menu_providers).should('have.class', 'active-route').screenshot()
    cy.get(dashboardelements.Btn_menu_products_list).should('be.visible').click()
    cy.get(dashboardelements.Btn_menu_products_list).should('have.class', 'active-route').screenshot()
    cy.get(dashboardelements.Btn_menu_categories_produits).should('be.visible').click()
    cy.get(dashboardelements.Btn_menu_categories_produits).should('have.class', 'active-route').screenshot()
    cy.get(dashboardelements.Btn_menu_unite_des_produits).should('be.visible').click()
    cy.get(dashboardelements.Btn_menu_unite_des_produits).should('have.class', 'active-route').screenshot()
    cy.get(dashboardelements.Btn_menu_expo).should('be.visible').click()
    cy.get(dashboardelements.Btn_menu_expo).should('have.class', 'active-route').screenshot()
    cy.get(dashboardelements.Btn_menu_ajustement_de_stock_expo).should('be.visible').click()
    cy.get(dashboardelements.Btn_menu_ajustement_de_stock_expo).should('have.class', 'active-route').screenshot()
    cy.get(dashboardelements.Btn_menu_livraison_salle_expo).should('be.visible').click()
    cy.get(dashboardelements.Btn_menu_livraison_salle_expo).should('have.class', 'active-route').screenshot()
    cy.get(dashboardelements.Btn_menu_liste_entrepots).should('be.visible').click()
    cy.get(dashboardelements.Btn_menu_liste_entrepots).should('have.class', 'active-route').screenshot()
    cy.get(dashboardelements.Btn_menu_ajustement_de_stock).should('be.visible').click()
    cy.get(dashboardelements.Btn_menu_ajustement_de_stock).should('have.class', 'active-route').screenshot()
    cy.get(dashboardelements.Btn_menu_livraison_enterpots).should('be.visible').click()
    cy.get(dashboardelements.Btn_menu_livraison_enterpots).should('have.class', 'active-route').screenshot()
    

});