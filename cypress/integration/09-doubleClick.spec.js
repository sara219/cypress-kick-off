it('double click command', () => {
    cy.visit('cypress/index.html');
    cy.get('[value="Click me"]').dblclick();
  });
  