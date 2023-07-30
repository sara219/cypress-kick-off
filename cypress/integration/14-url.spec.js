/// <reference types="cypress" />

it('Get URL', () => {
    cy.visit('cypress/index.html')
    cy.url().should('contain', '/cypress/index.html')
});
