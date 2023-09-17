Feature: Demo feature

  @demo @smoke
  Scenario Outline: Run first demo feature
    Given Google page is open
    When Search with <SearchItem>
    Then Click on first the first search result
    Then URL should match <ExpectedURL>

    Examples:
      | TestID     | SearchItem | ExpectedURL           |
      | DEMO_TC001 | WDIO       | https://webdriver.io/ |