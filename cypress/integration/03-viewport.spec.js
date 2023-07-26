it('should be able to open the website in different views(screen)', () => {
  // use cy.viewport to set the width and height of the the test runner
  // its usefully for testing out application for different view port or different screen size
  cy.visit('cypress/index.html')
})
