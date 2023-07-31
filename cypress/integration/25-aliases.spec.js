/// <reference types="cypress" />

describe('Alias', () => {
  beforeEach(() => {
    cy.visit('cypress/index.html')
    // define the alias inside beforeEach to access it in different test cases
    cy.url().as('url')
  })

  it('Aliases in Cypress', () => {
    // //   store any value as alias using as
    // // we can access the alias just inside the test case
    // // cy.url().as('url')

    cy.get('@url').should('contain', 'index.html')
  })

  it('Aliases in Cypress 2', () => {
    cy.get('@url').should('contain', 'index.html')
  })
})
