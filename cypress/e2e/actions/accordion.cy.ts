describe("Accordion", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("webDriverUniversity")}Accordion`);
  });

  it("verify the accordion visibility", () => {
    cy.get("#manual-testing-accordion").click();
    cy.get("#manual-testing-accordion").should("have.class", "active");
    cy.get("#cucumber-accordion").should("not.have.class", "active");
  });
});
