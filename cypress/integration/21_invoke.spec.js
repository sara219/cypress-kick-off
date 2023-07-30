/// <reference types="cypress" />

it('Wrap Command', () => {
  const student = {
    fName: 'Sara',
    family: 'Abu Awwad',
    isQA: true,
    isWatching: function () {
      return `Hello ${this.fName}`
    },
  }
  cy.visit('cypress/index.html')
  cy.wrap(student).invoke('isWatching').should('contain', 'Sara')
})
