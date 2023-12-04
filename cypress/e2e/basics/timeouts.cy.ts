describe("Retry-ability", () => {
  it("visit with a delay", () => {
    cy.visit("loaddelay"); // 60 seconds default wait time
  });

  it("get an element with a delay #1", () => {
    cy.visit("clientdelay");
    cy.get("#ajaxButton").click();
    cy.get(".bg-success", { timeout: 15000 }) // set timeout for element
      .should("be.visible")
      .and("have.text", "Data calculated on the client side.");
  });

  it("get an element with a delay #2", () => {
    cy.visit("progressbar");
    cy.get("#startButton").click();
    cy.get("#progressBar", { timeout: 30000 }).should("have.text", "100%");
  });
});
