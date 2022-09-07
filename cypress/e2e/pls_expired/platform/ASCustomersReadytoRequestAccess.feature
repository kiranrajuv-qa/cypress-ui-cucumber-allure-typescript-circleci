@pls_expired @platform @sanity @1.5release

Feature: Admin Settings Customers section - Ready to Request Access

  Scenario: Validate the contents in the Request Access to CX Cloud Pop up 
    Given User navigates to the Admin settings Customers section 
    When User clicks on the Request Access button 
    Then Validate the contents in the Request Access to CX Cloud Pop up

  Scenario: Validate the section Headers in the Customer 360 of a customer who is in ready to Request Access State
  When User clicks on a Customer who is in Ready to Request Access State
  Then Validate whether the Section Headers are displayed in bold or not

  Scenario: Validate whether the User Access description displayed is as expected 
  When In Customer 360, Validate the description in User Access section 

  Scenario: Validate the contnet displayed within What data will be shared with me? section in customer 360 of a Customer who is in ready to Request Access State
  When User expands the accordion by clicking on it 
  Then Validate the content displayed within What data will be shared with me? Section 


 Scenario: Validate the Access status displayed for the partner Users in customer 360 of a Customer who is in ready to Request Access State
  When In Customer 360, Validate the Access status displayed for the Users in the Partner Users table