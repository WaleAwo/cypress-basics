describe("Traversing DOM elements", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("kitchen")}`);
    cy.get(".home-list").find("a").contains("Traversal").click();
  });

  it(".children()", () => {
    // to get children of DOM elements, use the .children() command.
    cy.get(".traversal-breadcrumb")
      .children(".active")
      .should("contain", "Data");
  });

  it(".closest()", () => {
    // to get the closest ancestor DOM element, use the .closest() command.
    // looking up
    cy.get(".traversal-badge").closest("ul").should("have.class", "list-group");
  });

  it(".find()", () => {
    // to get descendant DOM elements of the selector, use the .find() command.
    // looking down
    cy.get(".traversal-pagination")
      .find("li")
      .find("a")
      .should("have.length", 7);
  });

  it(".eq()", () => {
    // to get a DOM element at a specific index, use the .eq() command.
    cy.get(".traversal-list>li").eq(1).should("contain", "siamese");
  });

  it(".filter()", () => {
    // to get DOM elements that match a specific selector, use the .filter() command.
    cy.get(".traversal-nav>li").filter(".active").should("contain", "About");
  });

  it(".first()", () => {
    // to get the first DOM element within elements, use the .first() command.
    cy.get(".traversal-table td").first().should("contain", "1");
  });

  it(".last()", () => {
    // to get the last DOM element within elements, use the .last() command.
    cy.get(".traversal-buttons .btn").last().should("contain", "Submit");
  });

  it(".next()", () => {
    // to get the next sibling DOM element within elements, use the .next() command.
    cy.get(".traversal-ul")
      .contains("apples")
      .next()
      .should("contain", "oranges");
  });

  it(".nextAll()", () => {
    // get all of the next sibling DOM elements within elements, use the .nextAll() command.
    cy.get(".traversal-next-all")
      .contains("oranges")
      .nextAll()
      .should("have.length", 3);
  });

  it(".nextUntil()", () => {
    // to get all of the next sibling DOM elements within elements until another element, use the .nextUntil() command.
    cy.get("#veggies").nextUntil("#nuts").should("have.length", 3);
  });

  it(".last()", () => {
    // to remove DOM element(s) from the set of elements, use the .not() command.
    cy.get(".traversal-disabled .btn")
      .not("[disabled]") // css attribute
      .should("not.contain", "Disabled");
  });

  it(".parent()", () => {
    // to get parent DOM element of elements, use the .parent() command.
    // find the closest parent tag
    cy.get(".traversal-mark").parent().should("contain", "Morbi leo risus");
  });

  it(".parents()", () => {
    // to get parents DOM element of elements, use the .parents() command.
    // finds all parent tags
    cy.get(".traversal-cite").parents().should("match", "blockquote");
  });

  it(".parentsUntil()", () => {
    // to get parents DOM element of elements until other element, use the .parentsUntil() command.
    cy.get(".clothes-nav")
      .find(".active")
      .parentsUntil(".clothes-nav")
      .should("have.length", 2);
  });

  it(".prevAll()", () => {
    // to get all previous sibling DOM elements within elements, use the .prevAll() command.
    cy.get(".fruits-list").find(".third").prevAll().should("have.length", 2);
  });

  it(".prevUntil()", () => {
    // to get all previous sibling DOM elements within elements until other element, use the .prevUntil() command.
    cy.get(".foods-list")
      .find("#nuts")
      .prevUntil("#veggies")
      .should("have.length", 3);
  });

  it(".siblings()", () => {
    // to get all sibling DOM elements of elements, use the .siblings() command.
    // traveling down
    cy.get(".traversal-pills .active").siblings().should("have.length", 2);
  });
});
