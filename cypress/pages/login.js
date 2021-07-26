/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */
class Login {
  companyLogo() {
    return cy.get('#logomini');
  }

  usernameCredentials() {
    return cy.get('input[name="username"]');
  }

  passwordCredentials() {
    return cy.get('input[name="password"]');
  }

  loginButton() {
    return cy.get('.btn.btn-success');
  }

  helpMessage() {
    return cy.get('.help-block');
  }
}

export default Login;
