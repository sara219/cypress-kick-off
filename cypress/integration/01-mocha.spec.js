/// <reference types="cypress" />
// | allows us to leverage VS Code Intellisense for the autocompletion

// describe -> suite our test cases | grouping
// contexts -> same as describe
context('login functionality', () => {
  // it will execute only one time before all the test cases.
  // if we have 3 test cases, the before hook will execute only one time
  before(() => {
    cy.log('i am inside the before hook')
  })

  // it will execute before all and every test case
  // if we have 3 test cases, the before each will execute 3 times
  beforeEach(() => {
    cy.log('i am inside the before each hook')
  })

  // it will execute only one time after all the test cases.
  // if we have 3 test cases, the after hook will execute only one time
  after(function () {
    cy.log('i am inside the after hook')
  })

  // it will execute after all and every test case
  // if we have 3 test cases, the after each will execute 3 times
  afterEach(() => {
    cy.log('i am inside the after each hook')
  })

  // ======================================

  // it -> describe a test case in mocha
  // it -> two arguments , the first argument in the name of the test case, the second argument is the steps
  it('should login with valid email and password', function () {
    cy.log('should login with valid email and password')
  })

  it('should not login if the user name is wrong', () => {
    cy.log(' i am inside test case 2')
  })

  it('should be able to reset the password', () => {
    cy.log(' i am inside test case 2')
  })
})

// ======================================

describe('order functionality', () => {
  it('should be able to order a new food', () => {
    cy.log(' i am inside test case 2')
  })
})
