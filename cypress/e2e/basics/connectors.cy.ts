describe("Connectors", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("kitchen")}`);
    cy.get(".home-list").find("a").contains("Connectors").click();
  });

  it(".each()", () => {
    // to iterate over the elements of a current subject
    cy.get(".connectors-each-ul>li").each(function ($el, index, $list) {
      console.log($el, index, $list);
    });
  });

  it(".its()", () => {
    // To get the properties on the current subject
    cy.get(".connectors-its-ul>li")
      // calls the 'length' property returning that value
      .its("length")
      .should("be.gt", 2);
  });

  it(".invoke()", () => {
    // To invoke a function on a current subject
    cy.get(".connectors-div")
      .should("be.hidden")
      // call the jquery method 'show' on the 'div.container'
      .invoke("show")
      .should("be.visible");
  });

  it(".then()", () => {
    // To invoke a callback function with the current subject,
    cy.get(".connectors-list>li").then(function ($lis) {
      expect($lis).to.have.length(3);
      expect($lis.eq(0)).to.contain("Walk the dog");
      expect($lis.eq(1)).to.contain("Feed the cat");
      expect($lis.eq(2)).to.contain("Write JavaScript");
    });
  });
});
