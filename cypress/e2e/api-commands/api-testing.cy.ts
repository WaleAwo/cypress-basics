describe("API Testing", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}droppable`)
});

  it("store user id", () => {
    const userId: string = "20927243-a0e9-4de9-b980-55149120ce7f";
    cy.wrap(userId).as("userId"); // store user id as alias
  });

 
  it("get an authorization token from the API", () => {
    cy.request("POST", `${Cypress.env("demoQA")}Account/v1/GenerateToken`, {
      userName: "jdoe",
      password: "Test1234!",
    }).then((response) => {
      const token: string = response.body.token; // get token from api response
      cy.wrap(token).as("token"); // store token value as alias
    });
  });


  it("get user information from the API", function () {
    // use alias to get values from previous tests
    const userId: string = this.userId;
    const token: string = this.token;

    // build api
    const authorization: string = `Bearer ${token}`;
    const options = {
      method: "GET",
      url: `${Cypress.env("demoQA")}Account/v1/User/${userId}`,
      headers: {
        authorization,
      },
    };

    // assertions
    cy.request(options).should((response) => {
      expect(response.status).to.equal(200);
      expect(response.statusText).to.equal("OK");
      expect(response.body.username).to.equal("jdoe");
      expect(response.body.username).to.be.a("string");
    });
  });
});
