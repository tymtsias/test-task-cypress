/* eslint-disable newline-per-chained-call */
/* eslint-disable no-undef */
import Login from '../pages/login';

const login = new Login();
const enviromentElents = Cypress.env();
const helpMessage = 'No account found with that username.';
const emptyUsername = 'Please enter username.';
const emptyPassword = 'Please enter your password.';

export function openLoginPage() {
  cy.visit(enviromentElents.url);
  cy.url().should('include', 'pecodesoftware');
  login.companyLogo().should('exist').and('be.visible');
}

export function successfullCredentials() {
  login.usernameCredentials().should('be.enabled').and('be.visible').clear().type(enviromentElents.user.email);
  login.passwordCredentials().should('be.enabled').and('be.visible').clear().type(enviromentElents.user.password);
  login.loginButton().should('exist').click();
  login.helpMessage().should('be.visible').and('have.text', helpMessage);
}

export function checkEmptyFields() {
  login.usernameCredentials().should('be.enabled').and('be.visible').clear();
  login.passwordCredentials().should('be.enabled').and('be.visible').clear();
  login.loginButton().should('exist').click();
  login.helpMessage().should('be.visible').and('have.text', emptyUsername + emptyPassword);
}

export function passwordFieldEmpty() {
  login.usernameCredentials().should('be.enabled').and('be.visible').clear().type(enviromentElents.user.email);
  login.loginButton().should('exist').click();
  login.helpMessage().should('be.visible').and('have.text', emptyPassword);
}

export function usernameFieldEmpty() {
  login.usernameCredentials().should('be.enabled').and('be.visible').clear();
  login.passwordCredentials().should('be.enabled').and('be.visible').clear().type(enviromentElents.user.password);
  login.loginButton().should('exist').click();
  login.helpMessage().should('be.visible').and('have.text', emptyUsername);
}
