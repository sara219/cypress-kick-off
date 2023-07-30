/// <reference types="cypress" />

it('GO Command', () => {
    cy.visit('cypress/index.html')
    cy.get('.about').click()
    cy.go('back')
  })
  