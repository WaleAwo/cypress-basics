Cypress.session.clearAllSavedSessions()

describe("Preserved Login", () => {
  beforeEach(() => {
    cy.session('mySession', ()=>{
      cy.visit(`${Cypress.env("demoQA")}login`)
      cy.get('#userName').type('jdoe')
      cy.get('#password').type('Test1234!')
      cy.get('#login').click()
      cy.url().should('contain', 'profile')
    })
    
});

  it("verify if session was saved", () => {
    cy.visit(`${Cypress.env("demoQA")}login`)
  });

  it("verify if session was saved", () => {
    cy.visit(`${Cypress.env("demoQA")}login`)
  });
});
