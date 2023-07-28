/// <reference types="cypress" />

// We use the (get) command to find element(s)

// we can find element by tag name
it('Find Element by tag name', () => {
  cy.visit('cypress/index.html')

  // we put the tag name (html tag) inside the get command
  // The get command will return all the elements that matches the tag name
  cy.get('h2')
})

// ==============

// we can find element by ID
it.only('Find Element by ID', () => {
  cy.visit('cypress/index.html')

  // we put the ID inside the get command using #
  cy.get('#courses')
})
