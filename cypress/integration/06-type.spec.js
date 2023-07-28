it('Type Command', () => {
  cy.visit('cypress/index.html')

  // We can type on any input using the type command
  //   cy.get('#inputEmail').type('sara@gmail.com{enter}')

  // We can type on a hidden element using force option
  // We can delay the type command per seconds, this delay will happen between every character in the string
  cy.get('#coverdInput').type('Hello', {
    force: true,
    delay: 3000,
  })
})
