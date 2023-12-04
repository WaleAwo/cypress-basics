describe("Location", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("kitchen")}`);
    cy.get(".home-list").find("a").contains("Location").click();
  });

  it(".url()", () => {
    cy.url().should("eq", "https://example.cypress.io/commands/location");
  });
});
