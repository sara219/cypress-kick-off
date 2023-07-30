/// <reference types="cypress" />

// Should Assertions

it('Should Be Visible', () => {
  cy.visit('cypress/index.html')
  cy.get('#courses').should('be.visible')
  // cy.get('#courses').should('not.be.visible')
})

it('Should Have a Text', () => {
  cy.visit('cypress/index.html')
  cy.get('#welcome').should('have.text', 'Welcome to Cypress Tutorials')
})

it('Should Contain Text', () => {
  cy.visit('cypress/index.html')
  cy.get('#welcome').should('contain.text', 'Welcome')
})

it('Should have class', () => {
  cy.visit('cypress/index.html')
  cy.contains('wdio').should('have.class', 'web')
})
