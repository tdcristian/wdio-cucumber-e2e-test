Feature: Web Inventory

  @demo @smoke
  Scenario Outline: Demo Web Inventory
    Given Login to inventory web app
    Then Inventory page should list <NumberOfProducts>
    Then Validate all products have valid price

    Examples:
      | TestID     | NumberOfProducts |
      | INVT_TC001 | 6                |