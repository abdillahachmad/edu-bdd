import searchPage from './searchPage'
const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor')

Given('I am on Zero Bank homepage', () => {
	searchPage.visit()
})

When('I click on search box', () => {
	searchPage.clickSearchBox()
})

When('I enter {string} in search box', (searchText) => {
	searchPage.enterSearchText(searchText)
})

When('I press Enter key', () => {
	searchPage.pressEnter()
})

// When('I press Enter key without entering text', () => {
// 	cy.get('#searchTerm').type('{enter}')
// })

Then('I should see search results', () => {
	searchPage.verifySearchResultsVisible()
})

Then('Search results should contain {string} related content', (searchText) => {
	searchPage.verifySearchContent(searchText)
})

Then('I should see results summary text', () => {
	// Verifikasi bahwa ada teks rangkuman hasil pencarian
	searchPage.verifyResultsSummaryTextExists()
	// cy.get('.top_offset').should('exist')
	// cy.get('.top_offset').should('be.visible')
})

Then('I should see {string} message', (message) => {
	searchPage.verifyMessage(message)
})
