describe('Date picker', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}date-picker`)
    });
   
    it('verifying a date picker', () => {
        cy.get('#datePickerMonthYearInput').click()
        cy.get('select.react-datepicker__month-select').select(0) // select month from list
        cy.get('select.react-datepicker__year-select').select('2021') // select year from list
        cy.findByText('16').click() // 3rd-party plugin
        cy.get('#datePickerMonthYearInput').should('have.value', '01/16/2021')
    });
});