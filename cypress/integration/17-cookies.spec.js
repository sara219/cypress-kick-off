/// <reference types="cypress" />

it('Get Cookies', () => {
  cy.visit('cypress/index.html')
  cy.getCookie('course').should('have.property', 'value', 'cypress')
})

it('Set Cookies', () => {
  cy.visit('cypress/index.html')
  cy.setCookie('fakeCookie', 'Sa214')
})

it.only('Get All Cookies', () => {
  cy.visit('cypress/index.html')
  cy.getCookies().should('have.length', 2)
})
