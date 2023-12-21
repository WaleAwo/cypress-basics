describe("Aliasing", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("kitchen")}`);
    cy.get(".home-list").find("a").contains("Aliasing").click();
  });

  it(".as()", () => {
    cy.get(".as-table")
      .find("tbody>tr")
      .first()
      .find("td")
      .first()
      .find("button")
      .as("firstBtn"); // set alias

    // To reference the alias, use @ in front of its name
    cy.get("@firstBtn").click();

    cy.get("@firstBtn")
      .should("have.class", "btn-success")
      .and("contain", "Changed");

    // Alias the route to wait for its response
    cy.intercept("GET", "**/comments/*").as("getComment");
    cy.get(".network-btn").click();
    cy.wait("@getComment").its("response.statusCode").should("eq", 200);
  });
});
