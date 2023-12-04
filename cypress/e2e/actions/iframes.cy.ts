describe("IFrames", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("theInternet")}iframe`);
  });

  it("typing in an iframe", () => {
    cy.get("#mce_0_ifr").then(($iframe) => {
      const $body = $iframe.contents().find("body");
      cy.wrap($body).find("p").type("{selectAll}{del}Hello World");
    });
    
    cy.get("#mce_0_ifr").then(($iframe) => {
      const $body = $iframe.contents().find("body");
      cy.wrap($body).find("p").should("have.text", "Hello World");
    });
  });
});
