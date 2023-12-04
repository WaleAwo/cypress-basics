describe("Windows", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("kitchen")}`);
    cy.get(".home-list").find("a").contains("Window").click();
  });

  it(".window()", () => {
    // To get the global window object
    cy.window().should("have.property", "top");
  });

  it(".document()", () => {
    // To get the document object
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
  });

  it(".title()", () => {
    // To get the title
    cy.title().should("include", "Kitchen Sink");
  });
});
