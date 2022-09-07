@pls_expired @platform @sanity @1.5release

Feature: Admin Settings Customers section - Access Request-Pending

  Scenario: Validate the section Headers in the Customer 360 of a customer whose request is in Pending State
  Given User navigates to the Admin settings Customers section 
  When User clicks on a Customer whose Request is in Pending State
  Then Validate whether the Section Headers are displayed in bold or not 

 Scenario: Validate whether the tabs AccessSummary and Request History are displayed 
  When In Customer 360, Validate whether the tabs Access Summary and Request History are displayed  

  Scenario: Validate whether the User Access description displayed is as expected 
  When In Customer 360, Validate the description in User Access section 

  Scenario: Validate the contnet displayed within What data will be shared with me? section in customer 360 of a Customer whose Request is in Pending State
  When User expands the accordion by clicking on it 
  Then Validate the content displayed within What data will be shared with me? Section 

 Scenario: Validate the Access status displayed for the partner Users in customer 360 of a Customer whose Request is in Pending State
  When In Customer 360, Validate the Access status displayed for the Users in the Partner Users table, where Org access is Pending

  Scenario: Validate the contents displayed in the request History tab 
  When User Clicks on the Request History tab
  Then Validate the Contents displayed in the Request History tab 
