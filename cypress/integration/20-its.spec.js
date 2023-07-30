/// <reference types="cypress" />

it('Its Command', () => {
    const student = {
      fName: 'Sara',
      family: 'Abu Awwad',
      isQA: true,
      isWatching: function () {
        console.log('He is Watching')
      },
    }
    cy.visit('cypress/index.html')
    cy.wrap(student).its("fName").should('eql', 'Sara')
  })
  