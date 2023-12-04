describe("API Testing Basics", () => {
  it("verify get request", () => {
    cy.request("GET", "https://jsonplaceholder.typicode.com/posts/1").then(
      (response) => {
        cy.log("response", response);
      }
    );
  });

  it("verify post request", () => {
    cy.request("POST", "https://jsonplaceholder.typicode.com/posts", {
      title: "test",
      body: "this is a test body",
      userid: 1,
    }).then((response) => {
      cy.log("response", response);
    });
  });

  it("verify put request", () => {
    cy.request("PUT", "https://jsonplaceholder.typicode.com/posts/1", {
      title: "test 2",
    }).then((response) => {
      cy.log("response", response);
    });
  });

  it("verify delete request", () => {
    cy.request("DELETE", "https://jsonplaceholder.typicode.com/posts/1").then(
      (response) => {
        cy.log("response", response);
      }
    );
  });
});
