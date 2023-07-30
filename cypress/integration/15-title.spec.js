/// <reference types="cypress" />

it('Get URL', () => {
  cy.visit('cypress/index.html')
  cy.title().should('eql', 'Cypress Kick Off')
})
