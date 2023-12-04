describe("JS Alerts", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("theInternet")}javascript_alerts`);
  });

  it("verify js alert text", () => {
    cy.contains("Click for JS Alert").click();

    cy.on("window:alert", (message) => {
      expect(message).to.be.equal("I am a JS Alert");
    });

    cy.on("window:confirm", () => true); // click 'OK'

    cy.get("#result").should("have.text", "You successfully clicked an alert");
  });

  it("verify js confirm button", () => {
    cy.contains("Click for JS Confirm").click();
    
    cy.on("window:confirm", (message) => {
      expect(message).to.be.equal("I am a JS Confirm");
    });

    cy.on("window:confirm", () => true); // click 'OK'

    cy.get("#result").should("have.text", "You clicked: Ok");
  });

  it("verify js cancel button", () => {
    cy.contains("Click for JS Confirm").click();

    cy.on("window:confirm", (message) => {
      expect(message).to.be.equal("I am a JS Confirm");
    });

    cy.on("window:confirm", () => false); // click 'Cancel'

    cy.get("#result").should("have.text", "You clicked: Cancel");
  });

  it("verify js prompt", () => {
    cy.window().then((window) => {
      cy.stub(window, "prompt").returns("Hello World"); // enter text in js prompt
      cy.contains("Click for JS Prompt").click();
    });

    cy.get("#result").should("have.text", "You entered: Hello World");
  });
});
