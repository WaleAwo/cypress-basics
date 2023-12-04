describe("Drag and Drop", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}droppable`)
});

  it("verify drag and drop", () => {
   cy.get('#draggable').drag('#droppable', {force: true}) // force command optional
  });
});
