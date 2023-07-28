/// <reference types="cypress" />

// We use the (get) command to find element(s)

// we can find element by tag name
it('Find Element by tag name', () => {
  cy.visit('cypress/index.html')

  // we put the tag name (html tag) inside the get command
  // The get command will return all the elements that matches the tag name
  cy.get('h2')
})

// ?============================================

// we can find element by ID
it('Find Element by ID', () => {
  cy.visit('cypress/index.html')

  // we put the ID inside the get command using #
  // return the first match
  cy.get('#courses')
})

// ?============================================

// we can find element by ClassName
it('Find Element by class name', () => {
  cy.visit('cypress/index.html')

  // we put the class name inside the get command using .
  // return all the elements that matches the class name
  cy.get('.button-container')
  // to specify the return element
  cy.get('.list1.web')
})

// ?============================================

// we can find element by Attribute
it.only('Find Element by Attribute', () => {
  cy.visit('cypress/index.html')
  // to find any element using any attribute we use []
  cy.get('[value="Developer"]')
  cy.get('[type="button"]')
})
