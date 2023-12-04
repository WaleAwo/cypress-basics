describe("Auto Complete", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("webDriverUniversity")}Autocomplete-TextField/autocomplete-textfield.html`);
  });

  it("verify auto-complete suggestions", () => {
    cy.get("#myInput").type("B");
    cy.get("#myInputautocomplete-list").children().first().click(); // find the first element in the list
    cy.get('#myInput').invoke("val").should('to.be.equal', "Bruscetta")
  });
});
