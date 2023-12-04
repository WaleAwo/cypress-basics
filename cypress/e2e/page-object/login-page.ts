class Login {
  private username: string = "#userName";
  private password: string = "#password";
  private login: string = "#login";
  private loginErrorMessage: string = "#name";

  submitLogin(username: string, password: string): void {
    cy.get(this.username).type(username);
    cy.get(this.password).type(password);
    cy.get(this.login).click();
  }

  getLoginErrorMessage() {
    return cy.get(this.loginErrorMessage);
  }

  visit(): void {
    cy.visit(`${Cypress.env("demoQA")}login`);
  }
}

export const LoginPage = new Login();
