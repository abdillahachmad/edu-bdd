Feature: Search Functionality
  As a user
  I want to use search feature
  So that I can find specific transactions or content

  Scenario: Search for valid content
    Given I am on Zero Bank homepage
    When I click on search box
    And I enter "transfer" in search box
    And I press Enter key
    Then I should see search results
    And Search results should contain "transfer" related content
    And I should see results summary text

  Scenario: Search with no results
    Given I am on Zero Bank homepage
    When I click on search box
    And I enter "abcdefg" in search box
    And I press Enter key
    Then I should see "No results were found for the query" message

  # Scenario: Empty search
  #   Given I am on Zero Bank homepage
  #   When I click on search box
  #   And I press Enter key without entering text
  #   Then I should see "No results were found for the query" message