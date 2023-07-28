it('select command', () => {
  cy.visit('cypress/index.html')
  // We can select any option from a dropdown using the select command
  cy.get('#courses').select('cypress')
  cy.get('#courses').select(2)


  // We can select an option by text, index and by value
})
