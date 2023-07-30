/// <reference types="cypress" />

// Should Assertions

it('Should Be Visible', () => {
  cy.visit('cypress/index.html')
  cy.get('#courses').should('be.visible')
  // cy.get('#courses').should('not.be.visible')
})
