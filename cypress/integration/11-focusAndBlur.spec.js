it('Focus command', () => {
  cy.visit('cypress/index.html')
  cy.get('.focus').focus()
})

it('Blur command', () => {
  cy.visit('cypress/index.html')
  cy.get('.focus').focus()
  cy.get('.focus').blur()
})
