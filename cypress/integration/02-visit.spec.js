it('Should visit the website correctly', () => {
  // with visit command we can go to a website, or localhost or file using file path
  // cypress recommend to set a baseUrl is cypress.json
  // we can add second argument, this argument is object.
  cy.visit('/search', {
    qs: {
      q: 'cypress',
    },
  })
})
