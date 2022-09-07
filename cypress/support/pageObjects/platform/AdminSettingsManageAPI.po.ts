class AdminSettingsManageAPI {

    get APIVerticalTab() {
        return cy.get('span').contains('APIs')
    }

    get ManageAPIsHeader() {
        return cy.get('span').contains('MANAGE APIs')
    }

    get ManageAPIsSectionDescription() {
        return cy.get('span').contains("APIs allow you to programmatically request your PX Cloud data for use in other applications. To learn more, consult the API documentation.")
    }

    get ManageAPIsSectionAPILink() {
        return cy.get("[class='markup-label']")
    }

    
    get DocumentationLinkNewTab() {
        return cy.get("[class='devnet-doc-breadcrumb-title']")
    }

    get ManageAPIsAccessSectionHeader() {
        return cy.get("b").contains("Access Keys")
    }
    
    get ManageAPIsAccessSectionDescription() {
        return cy.get("div").contains("Access keys are used to sign REST or HTTP requests to your PX Cloud outbound APIs. You can have a maximum of two access keys (active or inactive) at a time.")
    }

    get ManageAPIsAccessSectionDescription2() {
        return cy.get("span").contains("For your protection, store your access keys securely and never share them. Cisco recommends that you rotate your access keys every 90 days.")
    }


	get APITableColumnName1() {
		return cy.get('th').contains('Client ID');
	}

    
	get APITableColumnName2() {
		return cy.get('th').contains('Created');
	}

        
	get APITableColumnName3() {
		return cy.get('th').contains('Created By');
	}

    get APITableColumnName4() {
		return cy.get('th').contains('Last Used');
	}

    get APITableColumnName5() {
		return cy.get('th').contains('Status');
	}

  
    get ManageAPINoofRows() {
		return cy.get("[class='cxui-table cdk-table cxui-table--wrapped ng-star-inserted'] tbody tr")
     }


    get FirstRowDeleteButton() {
        return cy.get("[class='cxui-table cdk-table cxui-table--wrapped ng-star-inserted'] tbody> tr:nth-child(1)").find("[class='delete-row ng-star-inserted']>span")
     }


    get FirstRowDeactivateButton() {
        return cy.get("[class='cxui-table cdk-table cxui-table--wrapped ng-star-inserted'] tbody> tr:nth-child(1)").find("[data-auto-id='inactive']")

    }

    
    get FirstRowReactivateButton() {
        return cy.get("[class='cxui-table cdk-table cxui-table--wrapped ng-star-inserted'] tbody> tr:nth-child(1)").find("[data-auto-id='inactive']")

    }

    
    get FirstRowClientIDDeactivated() {
        return cy.get("[class='cxui-table cdk-table cxui-table--wrapped ng-star-inserted'] tr:nth-child(1) td:nth-child(1)").find("[class='client-disabled ng-star-inserted']")

    }
    
    get FirstRowClientIDActivated() {
        return cy.get("[class='cxui-table cdk-table cxui-table--wrapped ng-star-inserted'] tr:nth-child(1) td:nth-child(1)").find("[class='ng-star-inserted']")

    }

    get FirstRowClientIDDeletebutton() {
        return cy.get("[class='cxui-table cdk-table cxui-table--wrapped ng-star-inserted'] tr:nth-child(1)").find("[class='delete-row ng-star-inserted'] > span")

    }

    // Delete Access Key pop up 

    get DeleteKeyPopupHeader() {
        return cy.get('span').contains('Delete access key');

    }

    get DeletekayPopupDesription1() {
        return cy.get('span').contains('Confirmation is required to delete access key ID');

    }

    get DeletekayPopupDesription2() {
        return cy.get('b').contains('Warning');

    }

    get DeletekayPopupDesription3() {
        return cy.get('div').contains(' any requests signed with this access key will fail. Deleted keys cannot be recovered. ');

    }

    get DeletePopupCancelButton() {
        return cy.get("[data-auto-id='cancelModal']")

    }

    get DeletePopupConfrimButton() {
        return cy.get("[data-auto-id='delete-submit']")

    }

    get NoAccessKeysintheSystem() {
        return cy.get('span').contains('No access keys are in the system');

    }

  
    // Create Access Key 

    get ManageAPICreateAccessKeyButton() {
		return cy.get("[class='cxui-btn cxui-btn--default cxui-btn--secondary']")
	}

    get CreateAccessKeyHeader() {
		return cy.get('span').contains('Create Access Key');
	}

    get CreateAccessKeyDescription1() {
		return cy.get('div').contains('Your access key has successfully been created.')
	}

    get CreateAccessKeyDescription2() {
		return cy.get('span').contains('This is the only time the client secret can be viewed or downloaded.')
	}

    get CreateAccessKeyColumnHeader1() {
		return cy.get('th').contains('Client ID');
	}

    get CreateAccessKeyColumnHeader2() {
		return cy.get('th').contains('Client Secret');
	}

    get CreateAccessKeyClientID() {
		return cy.get("[data-auto-id='accesskey']");
	}

    get CreateAccessKeySecret() {
		return cy.get("[data-auto-id='secret']");
	}

    get CreateAccessKeyShowbutton() {
        return cy.get("[class='show-secret ng-star-inserted']")
	}

    get CreateAccessKeyCopytoClipboard() {
        return cy.get("[data-balloon='Copy to clipboard']")
	}

    get CreateAccessKeyDownloadCSVFile() {
        return cy.get("[data-auto-id='csv-download']")
	}

    get CreateAccessKeyCloseButton() {
        return cy.get("[data-auto-id='generate-access'] >span")
	}

    get CreateAccessKeyMaximumLimitReached() {
        return cy.get('span').contains('Maximum limit reached')
	}

    // Grace Banner 

    get GraceBannerHeader() {
        return cy.get('span').contains('Your PLS Access is Ending Soon')
	}


    get GraceBannerDescription1() {
        return cy.get('span').contains(' Your Partner Lifecycle Services status is lost and access to PLS benefits ends on ')
	}

    
    get GraceBannerDescription2() {
        return cy.get('span').contains('All API access keys will be deactivated and apps using them will no longer work. Continue using APIs by becoming a PLS partner. ')
	}

    
    get GraceBannerLearnMoreLink() {
        return cy.get("[class='half-margin-left load-more-link cxui-btn cxui-btn--secondary']")
	}



    }


export default new AdminSettingsManageAPI();
