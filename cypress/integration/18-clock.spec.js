/// <reference types="cypress" />

it('Clock Command', () => {
  // we change the time before visiting the website
  let nowTime = new Date('2019 02 01')
  cy.clock(nowTime)
  cy.visit('cypress/index.html')
})
