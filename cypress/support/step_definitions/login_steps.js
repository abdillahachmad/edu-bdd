import loginPage from './login.page'
const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor')

Given('I open login page', () => {
	loginPage.visit()
})

When('I submit login', () => {
	loginPage.fillUsername('username')
	loginPage.fillPassword('password')
	loginPage.signIn()
	// cy.get('#user_login').type('username')
	// cy.get('#user_password').type('password')
	// cy.contains('Sign in').click()
})
Then('I should see homepage', () => {
	cy.get('#account_summary_tab > a').should('be.visible')
})
