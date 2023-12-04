describe("Navigating browser history", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("kitchen")}`);
    cy.get(".home-list").find("a").contains("Navigation").click();
  });

  it(".go()", () => {
    // To go back or forward in the browser's history
    cy.location("pathname").should("include", "navigation");

    cy.go("back");
    cy.location("pathname").should("not.include", "navigation");

    cy.go("forward");
    cy.location("pathname").should("include", "navigation");

    // clicking back
    cy.go(-1);
    cy.location("pathname").should("not.include", "navigation");

    // clicking forward
    cy.go(1);
    cy.location("pathname").should("include", "navigation");
  });

  it(".reload()", () => {
    // reload the webpage
    cy.reload()

    // reload the page without using the cache
    cy.reload(true)
  });
});
