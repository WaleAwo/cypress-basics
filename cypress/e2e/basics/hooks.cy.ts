describe("Hooks", () => {
  before(() => {
    cy.log("run before all tests");
  });

  after(() => {
    cy.log("run after all tests");
  });

  beforeEach(() => {
    cy.log("run before each test");
  });

  afterEach(() => {
    cy.log("run after each test");
  });

  it("testcase #1", () => {
    cy.log("Executing test one...");
  });

});
