// find the row using .contains()
// look for a cell that contains a search pattern (%) - store result in a variable
// verify that the cell matches the element
describe("get element from dynamic table", () => {
  beforeEach(() => {
    cy.visit("dynamictable");
  });

  it("get a value from a table", () => {
    cy.contains('div[role="row"]', "Chrome")
      .contains('span[role="cell"]', "%")
      .then(($cell) => {
        cy.get(".bg-warning").should("include.text", $cell.text());
      });
  });
});
