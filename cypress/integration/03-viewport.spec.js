// use cy.viewport to set the width and height of the the test runner
// its usefully for testing out application for different view port or different screen size

// test present dimension 'pre-defined viewport' :: https://docs.cypress.io/api/commands/viewport#__docusaurus_skipToContent_fallback

['iphone-6', 'macbook-15'].forEach((viewport) => {
  it('Should be able to open in different viewport', () => {
    cy.visit('cypress/index.html')
    cy.viewport(viewport)
  })
})
