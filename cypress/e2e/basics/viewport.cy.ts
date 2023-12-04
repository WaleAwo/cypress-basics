describe("Viewport", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("kitchen")}`);
    cy.get(".home-list").find("a").contains("Viewport").click();
  });

  it(".viewport()", () => {
    cy.get("#navbar").should("be.visible");
    cy.viewport(320, 480);

    // assertions for the smaller screen
    cy.get("#navbar").should("not.be.visible");
    cy.get(".navbar-toggle").should("be.visible").click();
    cy.get(".nav").find("a").should("be.visible");

    // cy.viewport() accepts a set of preset sizes
    // to easily set the screen to a device's width and height
    cy.viewport("macbook-15");
    cy.wait(200);
    cy.viewport("macbook-13");
    cy.wait(200);
    cy.viewport("macbook-11");
    cy.wait(200);
    cy.viewport("ipad-2");
    cy.wait(200);
    cy.viewport("ipad-mini");
    cy.wait(200);
    cy.viewport("iphone-6+");
    cy.wait(200);
    cy.viewport("iphone-6");
    cy.wait(200);
    cy.viewport("iphone-5");
    cy.wait(200);
    cy.viewport("iphone-4");
    cy.wait(200);
    cy.viewport("iphone-3");
    cy.wait(200);

    // cy.viewport() accepts an orientation for all presets
    // the default orientation is 'portrait'
    cy.viewport("ipad-2", "portrait");
    cy.wait(200);
    cy.viewport("iphone-4", "landscape");
    cy.wait(200);

    // The viewport will be reset back to the default dimensions
    // in between tests (the  default can be set in cypress.config.js)
  });
});
