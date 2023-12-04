describe("Querying DOM elements", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("kitchen")}`);
    cy.get(".home-list").find("a").contains("Querying").click();
  });

  it(".get()", () => {
    cy.get("#query-btn").should("contain", "Button"); // id
    cy.get(".query-btn").should("contain", "Button"); // class
    cy.get(".query-btn.btn").should("contain", "Button"); // multiple classes
    cy.get('[data-test-id="test-example"]').should("have.class", "example"); // attribute + value
  });

  it(".contains()", () => {
    // to find elements by their content using cy.contains()
    cy.get(".query-list").contains("bananas").should("have.class", "third");
    cy.get(".query-list").contains(/^b\w+/).should("have.class", "third"); // use regex
    cy.get("#querying")
      .contains("ul", "oranges") // pass a selector
      .should("have.class", "query-list");
  });

  it(".within()", () => {
    // to find elements within a specific DOM element .within()
    cy.get(".query-form").within(() => {
      cy.get("input:first").should("have.attr", "placeholder", "Email");
      cy.get("input:last").should("have.attr", "placeholder", "Password");
    });
  });
});
