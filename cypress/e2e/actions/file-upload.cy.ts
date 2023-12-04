describe("File uploading", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("theInternet")}upload`);
  });

  it("verify uploading a file", () => {
    cy.get("#file-upload").attachFile("test.txt"); // 3rd-party plugin
    cy.get('#file-submit').click()
    cy.get('#uploaded-files').should('be.visible')
  });
});
