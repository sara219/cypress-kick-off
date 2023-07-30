/// <reference types="cypress" />

it('Async Behavior', () => {
  let msg = 'Hello'

  cy.visit('cypress/index.html')
  cy.get('#welcome')
    .invoke('text')
    .then((returnText) => {
      msg = returnText
      expect(msg).to.eql('Welcome to Cypress Tutorials') // pass
    })
  cy.log(msg) //Hello
  // expect(msg).to.eql('Welcome to Cypress Tutorials') // fail
})
