import { LoginPage } from "./login-page";

describe("Login", () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  it("verify successful login", () => {
    LoginPage.submitLogin("jdoe", "Test1234!");

    cy.url().should("contain", "profile");
    cy.get("div[class='main-header']").should("have.text", "Profile");
    cy.get("#userName-value").should("have.text", "jdoe");
  });

  it("verify unsuccessful login", () => {
    LoginPage.submitLogin("jdoe", "Test1234!!");

    cy.url().should("not.contain", "profile");
    LoginPage.getLoginErrorMessage().should(
      "have.text",
      "Invalid username or password!"
    );
  });
});
