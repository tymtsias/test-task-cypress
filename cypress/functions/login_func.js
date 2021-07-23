import Login from "../pages/login";

const login = new Login()
let enviromentElents = Cypress.env();

export function openLoginPage(){
    cy.visit(enviromentElents.url)
    cy.url().should('include', 'pecodesoftware')
    login.companyLogo().should('exist').and('be.visible')
}