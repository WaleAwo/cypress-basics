describe("Visit command", () => {
  beforeEach(() => {
    cy.visit("textinput");
  });

  it("visit another URL using the baseUrl config", () => {
    cy.visit("classattr");
  });

  // SUBJECT MANAGEMENT
  // store the yielded value from the cy.url() command
  // assert of the yielded value
  it("print url and assert", () => {
    cy.url().then((url) => {
      cy.log(`URL: ${url}`);
      expect(url).to.contains("/textinput");
    });
  });

  // BDD ASSERTIONS
  it("verifying using 'should'", () => {
    cy.title().should("eql", "Text Input");
  });

  it("verifying using 'expect'", () => {
    cy.title().then((title) => {
      expect(title).to.eql("Text Input");
    });
  });

  // TDD ASSERTIONS
  it("verifying using 'should' (TDD)", () => {
    cy.get("input#newButtonName").type("Test");
    cy.get("#updatingButton").click().should("have.text", "Test");
  });
});
