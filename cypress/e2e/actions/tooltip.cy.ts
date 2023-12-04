describe("Tooltips", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}tool-tips`)
});

  it("verify tooltips", () => {
    cy.get("#toolTipButton").realHover();
    cy.get(".tooltip-inner").should('have.text', 'You hovered over the Button');
  });
});
