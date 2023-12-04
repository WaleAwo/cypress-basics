describe('Checkboxes', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("theInternet")}checkboxes`)
        cy.get('form#checkboxes input').eq(1).click()
    });
    
    it('verify you can click a checkbox', () => {
        cy.get('form#checkboxes input').eq(0).click().should('be.checked')
    });
});