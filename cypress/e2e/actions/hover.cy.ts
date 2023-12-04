describe("Hover", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}menu`);
  });

  it("verify hovering over menu items", () => {
    cy.get('a').contains('Main Item 2').realHover()
    cy.get('a').contains('SUB SUB LIST').realHover()
  });
});

describe("hover text", () => {
  it("hover over element", () => {
    cy.visit("mouseover");
    cy.get(".text-primary").realHover(); // use 3rd-party plugin
  });
});