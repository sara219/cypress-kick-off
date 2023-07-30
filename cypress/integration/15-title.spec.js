/// <reference types="cypress" />

it('Get Title', () => {
  cy.visit('cypress/index.html')
  cy.title().should('eql', 'Cypress Kick Off')
})
