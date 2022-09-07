@pls_grace @platform @sanity @1.4release

Feature: Admin Settings About Roles section

  Scenario: Validate the Description and Column Headers
    Given User cliks on the Manage Profile Link
    When User clicks on the Help Icon
    Then Verify whether the application navigates to About Roles section


  Scenario: Validate the Executive role 
    Given User expands the Executive role
    When The description and feature details are displayed for Executive Role
    Then Verify whether the permissions are as desired for Executive Role


  Scenario: Validate the Customer Success Practice Lead role 
    Given User expands the CSPL role
    When The description and feature details are displayed for CSPL Role
    Then Verify whether the permissions are as desired for CSPL Role


  Scenario: Validate the Customer Success Manager role 
    Given User expands the CSM role
    When The description and feature details are displayed for CSM Role
    Then Verify whether the permissions are as desired for CSM Role


  Scenario: Validate the Customer Success Specialist role 
    Given User expands the CSS role
    When The description and feature details are displayed for CSS Role
    Then Verify whether the permissions are as desired for CSS Role


    Scenario: Validate the Renewals Manager role 
    Given User expands the RM role
    When The description and feature details are displayed for RM Role
    Then Verify whether the permissions are as desired for RM Role


    Scenario: Validate the Administrator role 
    Given User expands the Admin role
    When The description and feature details are displayed for Admin Role
    Then Verify whether the permissions are as desired for Admin Role


    Scenario: Validate the Partner Account Manager/Virtual Partner Account Manager role 
    Given User expands the PAM_VAPM role
    When The description and feature details are displayed for PAM_VAPM Role
    Then Verify whether the permissions are as desired for PAM_VAPM Role 

            
    Scenario: Validate the Partner Business Development Specialist role 
    Given User expands the PBDS role
    When The description and feature details are displayed for PBDS Role
    Then Verify whether the permissions are as desired for PBDS Role


    Scenario: Validate the Partner Operations Manager role 
    Given User expands the POM role
    When The description and feature details are displayed for POM Role
    Then Verify whether the permissions are as desired for POM Role