describe("Implicit Assertions", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("kitchen")}`);
    cy.get(".home-list").find("a").contains("Assertions").click();
  });

  it(".expect()", () => {
    // To make a BDD assertion about a specified subject
    expect(true).to.be.true;
    const o = { foo: "bar" };
    expect(o).to.equal(o);
    expect(o).to.deep.equal({ foo: "bar" });

    // matching text using regular expression
    expect("FooBar").to.match(/bar$/i);
  });

  it(".assert()", () => {
    // To make a TDD assertion about a specified subject
    const person = {
      name: "Joe",
      age: 20,
    };
    assert.isObject(person, "value is object");
  });
});
