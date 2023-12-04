describe("Querying DOM elements", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("kitchen")}`);
    cy.get(".home-list").find("a").contains("Actions").click();
  });

  it(".type()", () => {
    cy.get(".action-email")
      .type("fake@email.com")
      .should("have.value", "fake@email.com");
  });

  it(".click()", () => {
    // clicking in the center of the element is the default
    cy.get("#action-canvas").click();

    cy.get("#action-canvas").click("topLeft");
    cy.get("#action-canvas").click("top");
    cy.get("#action-canvas").click("topRight");
    cy.get("#action-canvas").click("left");
    cy.get("#action-canvas").click("right");
    cy.get("#action-canvas").click("bottomLeft");
    cy.get("#action-canvas").click("bottom");
    cy.get("#action-canvas").click("bottomRight");
  });

  it(".dblclick()", () => {
    cy.get(".action-div").dblclick().should("not.be.visible");
    cy.get(".action-input-hidden").should("be.visible");
  });

  it(".rightclick()", () => {
    cy.get(".rightclick-action-div").rightclick().should("not.be.visible");
    cy.get(".rightclick-action-input-hidden").should("be.visible");
  });

  it(".check()", () => {
    // .check() accepts a value argument
    cy.get('.action-radios [type="radio"]')
      .check("radio1")
      .should("be.checked");

    // .check() accepts an array of values
    cy.get('.action-multiple-checkboxes [type="checkbox"]')
      .check(["checkbox1", "checkbox2"])
      .should("be.checked");
  });

  it(".uncheck()", () => {
    // .uncheck() accepts a value argument
    cy.get('.action-check [type="checkbox"]')
      .check("checkbox1")
      .uncheck("checkbox1")
      .should("not.be.checked");

    // .uncheck() accepts an array of values
    cy.get('.action-check [type="checkbox"]')
      .check(["checkbox1", "checkbox3"])
      .uncheck(["checkbox1", "checkbox3"])
      .should("not.be.checked");
  });

  it(".select()", () => {
    // Select option(s) with matching text content
    cy.get(".action-select").select("apples");

    // when getting multiple values, invoke "val" method first
    cy.get(".action-select-multiple")
      .select(["apples", "oranges", "bananas"])
      .invoke("val")
      .should("deep.equal", ["fr-apples", "fr-oranges", "fr-bananas"]);
  });

  it(".scrollIntoView()", () => {
    cy.get("#scroll-horizontal button").scrollIntoView().should("be.visible");
  });

  it(".scrollTo()", () => {
    // To scroll the window or a scrollable element to a specific position
    cy.get("#scrollable-horizontal").scrollTo("right");
  });

  it(".trigger()", () => {
    // To trigger an event on a DOM element
    cy.get(".trigger-input-range")
      .invoke("val", 25)
      .trigger("change")
      .get("input[type=range]")
      .siblings("p")
      .should("have.text", "25");
  });
});
