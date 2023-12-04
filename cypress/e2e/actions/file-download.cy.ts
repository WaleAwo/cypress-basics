describe("File downloading", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("theInternet")}download`);
  });

  // file will be downloaded to the 'downloads' folder
  it("verify downloading a file", () => {
    cy.contains("Image.png").click();
    cy.verifyDownload("Image.png"); // 3rd-party plugin
  });
});
