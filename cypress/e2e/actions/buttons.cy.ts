describe('Buttons', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("qaPractice")}double-click`)
    });
    
    it('verify double-clicking', () => {
        cy.get('#double-click-btn').dblclick()
        cy.get('#double-click-result').should('be.visible')
    });

});

describe('Buttons', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}buttons`)
    });
    
    it('verify right-clicking', () => {
        cy.get('#rightClickBtn').rightclick()
        cy.get('#rightClickMessage').should('be.visible')
    });
});