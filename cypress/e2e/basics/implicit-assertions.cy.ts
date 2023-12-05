describe("Implicit Assertions", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("kitchen")}`);
    cy.get(".home-list").find("a").contains("Assertions").click();
  });

  it(".should()", () => {
    cy.get(".assertion-table")
      .find("tbody tr:last")
      .should("have.class", "success")
      .find("td")
      .first()
      // checking the text of the element in various ways
      .should("have.text", "Column content")
      .should("contain", "Column content")
      .should("have.html", "Column content")
      // chai-jquery uses "is()" to check if element matches selector
      .should("match", "td")
      // to match text content against a regular expression
      // first need to invoke jQuery method text()
      // and then match using regular expression
      .invoke("text")
      .should("match", /column content/i);

    // a better way to check element's text content against a regular expression
    // is to use "cy.contains"
    cy.get(".assertion-table")
      .find("tbody tr:last")
      // finds first  element with text content matching regular expression
      .contains("td", /column content/i)
      .should("be.visible");
  });

  it(".and()", () => {
    cy.get(".assertions-link")
      .should("have.class", "active")
      .and("have.attr", "href")
      .and("include", "cypress.io");
  });
});
