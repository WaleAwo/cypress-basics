describe("Files", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("kitchen")}`);
    cy.get(".home-list").find("a").contains("Files").click();
  });

  it(".fixtures()", () => {
    // when application makes an Ajax request matching "GET **/comments/*"
    // Cypress will intercept it and reply with the object in `example.json` fixture
    cy.intercept("GET", "**/comments/*", { fixture: "example.json" }).as(
      "getComment"
    );

    cy.get(".fixture-btn").click();
    cy.wait("@getComment")
      .its("response.body")
      .should("have.property", "name")
      .and("include", "Using fixtures to represent data");
  });
});
