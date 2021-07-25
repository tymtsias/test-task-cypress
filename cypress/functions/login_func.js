import Login from "../pages/login";

const login = new Login()
let enviromentElents = Cypress.env();
const helpMessage = "No account found with that username."

export function openLoginPage(){
    cy.visit(enviromentElents.url)
    cy.url().should('include', 'pecodesoftware')
    login.companyLogo().should('exist').and('be.visible')
}

export function successfullCredentials(){
    login.usernameCredentials().should('be.enabled').and('be.visible').clear().type(enviromentElents.user.email)
    login.passwordCredentials().should('be.enabled').and('be.visible').clear().type(enviromentElents.user.password)
    login.loginButton().should('exist').click()
    login.helpMessage().should('be.visible').and('have.text', helpMessage)
}