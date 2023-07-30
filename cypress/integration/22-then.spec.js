/// <reference types="cypress" />

it('then Command', () => {
    cy.visit('cypress/index.html')
    cy.get('#welcome').invoke('text').then((text) => {
        cy.log(text)
    })
  })
  