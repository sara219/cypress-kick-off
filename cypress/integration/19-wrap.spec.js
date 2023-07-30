/// <reference types="cypress" />

it('Wrap Command', () => {
  const student = {
    fName: 'Sara',
    family: 'AbuAwwad',
    isQA: true,
    isWatching: function () {
      console.log('He is Watching')
    },
  }
  cy.visit('cypress/index.html')
  cy.wrap(student).should('have.property', 'fName', 'Sara')
})
