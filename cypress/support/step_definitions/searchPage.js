const URL = 'http://zero.webappsecurity.com/index.html'
const SEARCH_BOX = '#searchTerm'
const PARAGRAF = 'h2'
const SELECTOR_ONE = 'div.top_offset'
const SELECTOR_TWO = '.top_offset'

class searchPage {
	static visit() {
		cy.visit(URL)
	}
	static clickSearchBox() {
		cy.get(SEARCH_BOX).click()
	}
	static enterSearchText(searchText) {
		cy.get(SEARCH_BOX).type(searchText)
	}
	static pressEnter() {
		cy.get(SEARCH_BOX).type('{enter}')
	}
	static verifySearchResultsVisible() {
		cy.get(PARAGRAF).contains('Search Results:').should('be.visible')
	}
	static verifySearchContent(searchText) {
		cy.get(SELECTOR_ONE).should('contain', searchText)
	}
	static verifyResultsSummaryTextExists() {
		cy.get(SELECTOR_TWO).should('exist')
		cy.get(SELECTOR_TWO).should('be.visible')
	}
	static verifyMessage(message) {
		cy.get(SELECTOR_TWO).should('contain', message)
	}
}
export default searchPage
