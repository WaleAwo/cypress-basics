let externalVariable: string = "test";

describe("Variables and Aliases", () => {
  beforeEach(() => {
    cy.visit("dynamicid");
  });

  it("Find by text", () => {
    cy.contains("Button with Dynamic ID")
      .invoke("text") // get the button text
      .then((text) => {
        externalVariable = text; // assign text to variable
        cy.wrap(externalVariable).as("textFromContains"); // using an alias to refer to the store variable
      });
    cy.get("@textFromContains").then((text) => {
      cy.log("outside contains method: " + text);
    });
  });

  // functions using an alisa can't be a call back function
  it("Sharing context by Alias", function () {
    let sharedVariable = this.textFromContains;
    cy.log(sharedVariable);
  });
});

