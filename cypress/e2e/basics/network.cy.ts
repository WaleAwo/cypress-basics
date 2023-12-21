describe("Network requests", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("kitchen")}`);
    cy.get(".home-list").find("a").contains("Network Requests").click();
  });

  it(".request() simple request", () => {
    // To make an XHR request (GET)
    cy.request("https://jsonplaceholder.cypress.io/comments").should(
      (response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.length(500);
        expect(response).to.have.property("headers");
        expect(response).to.have.property("duration");
      }
    );
  });

  it(".request() pass response data", () => {
    // get the userId of the first user
    cy.request("https://jsonplaceholder.cypress.io/users?_limit=1")
      .its("body.0") // yields the first element of the returned list
      .then((user) => {
        expect(user).property("id").to.be.a("number");
        // make a new post on behalf of the user
        cy.request("POST", "https://jsonplaceholder.cypress.io/posts", {
          userId: user.id,
          title: "Create post",
          body: "This is a test.",
        });
      })
      .then((response) => {
        expect(response).property("status").to.equal(201);
        expect(response).property("body").to.contain({
          title: "Create post",
        });
      });
  });

  it(".request() using alias", () => {
    cy.request("https://jsonplaceholder.cypress.io/users?_limit=1")
      .its("body.0") // yields the first element of the returned list
      .as("user") // saves the object in the test context
      .then(function () {
        cy.request("POST", "https://jsonplaceholder.cypress.io/posts", {
          userId: this.user.id,
          title: "Create post",
          body: "This is a test.",
        })
          .its("body")
          .as("post"); // save the new post from the response
      })
      .then(function () {
        expect(this.post, "post has the right user id")
          .property("userId")
          .to.equal(this.user.id);
      });
  });

  it(".intercept()", () => {
    let message = "whoa, this comment does not exist";

    // This intercepts any GET request to URLs matching the pattern "**/comments/*" and aliases it as "getComment".
    cy.intercept("GET", "**/comments/*").as("getComment");
    cy.get(".network-btn").click();
    cy.wait("@getComment") // waits for the intercepted request to complete
      .its("response.statusCode")
      .should("be.oneOf", [200, 304]);

    // This intercepts any POST request to URLs matching the pattern "**/comments" and aliases it as "postComment".
    cy.intercept("POST", "**/comments").as("postComment");
    cy.get(".network-post").click();
    cy.wait("@postComment").should(({ request, response }) => {
      expect(request.body).to.include("email");
      expect(request.headers).to.have.property("content-type");
      expect(response && response.body).to.have.property(
        "name",
        "Using POST in cy.intercept()"
      );
    });

    // This intercepts any PUT request to URLs matching the pattern "**/comments/*" and aliases it as "putComment."
    // The response to the PUT request is stubbed with a status code of 404, a custom body, headers, and a delay of 500ms
    cy.intercept(
      {
        method: "PUT",
        url: "**/comments/*",
      },
      {
        statusCode: 404,
        body: { error: message },
        headers: { "access-control-allow-origin": "*" },
        delayMs: 500,
      }
    ).as("putComment");

    cy.get(".network-put").click();
    cy.wait("@putComment");
    cy.get(".network-put-comment").should("contain", message);
  });
});
