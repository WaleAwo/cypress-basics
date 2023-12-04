describe("Broken images", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("theInternet")}broken_images`);
  });


  it("verify a bad image", () => {
    cy.get('div > img[src="asdf.jpg"]')
      .should("have.length.gt", 0)
      .each((img) => {
        cy.wrap(img).invoke("prop", "naturalWidth").should("equal", 0);
      });
  });
});
