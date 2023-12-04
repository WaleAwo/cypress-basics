describe("Hyper-links", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("webDriverUniversity"));
  });

  it("verify hyperlinks", () => {
    cy.contains("CONTACT US").should(
      "have.attr",
      "href",
      "Contact-Us/contactus.html"
    );
    cy.contains("CONTACT US").should("have.attr", "target", "_blank");
  });

  it("verify opening a hyperlink", () => {
    cy.contains("CONTACT US").invoke("removeAttr", "target").click();
    cy.url().then((url) => {
      expect(url).to.be.equal(
        "https://webdriveruniversity.com/Contact-Us/contactus.html"
      );
    });
  });
});

describe("Intercept API request", () => {
  beforeEach(() => {
    cy.visit("https://reqres.in/");

    // use intercept() to spy on API
    cy.intercept("https://reqres.in/api/users?page=2").as("getUserList");
  });

  it("verify intercepting an API request", () => {
    cy.get("[data-id='users']").click();

    cy.wait("@getUserList").then((request) => {
      // use wait() and store response in variable
      expect(request.response.statusCode).to.be.equal(200);
      expect(request.response.statusMessage).to.be.equal("OK");
    });
  });
});
