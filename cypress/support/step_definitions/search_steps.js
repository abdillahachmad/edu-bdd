const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor')

Given('I am on Zero Bank homepage', () => {
	cy.visit('http://zero.webappsecurity.com/index.html')
})

When('I click on search box', () => {
	cy.get('#searchTerm').click()
})

When('I enter {string} in search box', (searchText) => {
	cy.get('#searchTerm').type(searchText)
})

When('I press Enter key', () => {
	cy.get('#searchTerm').type('{enter}')
})

// When('I press Enter key without entering text', () => {
// 	cy.get('#searchTerm').type('{enter}')
// })

Then('I should see search results', () => {
	cy.get('h2').contains('Search Results:').should('be.visible')
})

Then('Search results should contain {string} related content', (searchText) => {
	cy.get('div.top_offset').should('contain', searchText)
})

Then('I should see results summary text', () => {
	// Verifikasi bahwa ada teks rangkuman hasil pencarian
	cy.get('.top_offset').should('exist')
	cy.get('.top_offset').should('be.visible')
})

Then('I should see {string} message', (message) => {
	cy.get('.top_offset').should('contain', message)
})
