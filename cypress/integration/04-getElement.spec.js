/// <reference types="cypress" />

// We use the (get) command to find element(s)
// ! use (only) command after it (it.only) to execute a specific test case

// we can find element by tag name
it('Find Element by tag name', () => {
  cy.visit('cypress/index.html')
  // we put the tag name (html tag) inside the get command
  // The get command will return all the elements that matches the tag name
  cy.get('h2')
})

// ?============================================

// we can find element by ID
it('Find Element by ID', () => {
  cy.visit('cypress/index.html')

  // we put the ID inside the get command using #
  // return the first match
  cy.get('#courses')
})

// ?============================================

// we can find element by ClassName
it('Find Element by class name', () => {
  cy.visit('cypress/index.html')

  // we put the class name inside the get command using .
  // return all the elements that matches the class name
  cy.get('.button-container')
  // to specify the return element
  cy.get('.list1.web')
})

// ?============================================

// we can find element by Attribute
it('Find Element by Attribute', () => {
  cy.visit('cypress/index.html')
  // to find any element using any attribute we use []
  cy.get('[value="Developer"]')
  cy.get('[type="button"]')
})

// ?============================================

// we can get the first element from a list

it('find the first element from a list of elements', () => {
  cy.visit('cypress/index.html')
  // to find the first element from a list of elements we use the (first()) command
  cy.get('h2').first()
})

// ?============================================

// we can get the last element from a list

it('find the last element from a list of elements', () => {
  cy.visit('cypress/index.html')
  // to find the last element from a list of elements we use the (last()) command
  cy.get('button').last()
})

// ?============================================

//  get an element from a list (not the last or the first ) => using index with eq command.

it('find the an element from a list of elements by index', () => {
  cy.visit('cypress/index.html')
  // to find the  element from a list of elements by index we use eq(index)
  // elements are saved in an array , Zero index
  cy.get('h2').eq(1)
})

// ?============================================

// filter a list of element to get an element that pass a condition

it('find the an element from a list of elements using filter', () => {
  cy.visit('cypress/index.html')
  // to filter some elements from a list of elements we use the filter command
  // we use css selectors inside the filter command
  cy.get('li').filter('.mobile')
})

// ?============================================

//  children command

it('find the elements using the children command', () => {
  cy.visit('cypress/index.html')
  // to find elements using the parent we use the children command
  // we can use the children command without any arguments and in that case it will return all the children
  cy.get('.course-list').children()

  // We can add some css selectors to filter our some of the children
  cy.get('.course-list').children('.web')
  cy.get('.course-list').children().first()
  cy.get('.course-list').children().last()
  cy.get('.course-list').children().eq(3)
})

// ?============================================

it('find the elements using the children command', () => {
  cy.visit('cypress/index.html')
  // we can find elements based on the parent using the find command .find(css selector)
  cy.get('.course-list').find('.mobile')
})

// ?============================================

it('find the elements using parent command', () => {
  cy.visit('cypress/index.html')
  // Parent command will return the direct parent of the element
  cy.get('#draggable-3').parent()
})

// ?============================================

it('find the elements using the parents command', () => {
  cy.visit('cypress/index.html')
  // Parents command will return the all  parents of the element in an array
  cy.get('.list1.web').parents()
})

// ?============================================

it('find the elements using the siblings command', () => {
  cy.visit('cypress/index.html')
  // to find elements using the sibling we use the siblings command
  // siblings command will return the all  siblings of the element in an array
  cy.get('.list1.web').siblings('.mobile')
})

// ?============================================


it.only('find the elements by text', () => {
  cy.visit('cypress/index.html');
  // To find any element using text we can use the contains Command .contains(text)
  cy.contains('Cypress');
  cy.get('li').contains('css')
});
