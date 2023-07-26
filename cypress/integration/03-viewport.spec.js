it('should be able to open the website in different views(screen)', () => {
  // use cy.viewport to set the width and height of the the test runner
  // its usefully for testing out application for different view port or different screen size
  cy.visit('cypress/index.html')
})

// test present dimension 'pre-defined viewport' :: https://docs.cypress.io/api/commands/viewport#__docusaurus_skipToContent_fallback
it('Should be able to render on iphone, samsung and macbook ', () => {
  cy.viewport('iphone-6', 'landscape')
  cy.viewport('macbook-15')
  cy.viewport('samsung-s10')
})
