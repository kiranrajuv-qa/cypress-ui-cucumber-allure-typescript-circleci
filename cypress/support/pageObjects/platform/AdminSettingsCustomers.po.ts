class AdminSettingsCustomers {
	get CustomersVerticalTab() {
		return cy.get('span').contains('Customers');
	}

	get CustomersHeader() {
		return cy.get('.sub-text').contains('Customers');
	}

	get PaginationButton() {
		return cy.get('.cxui-paginator__button');
	}

	get PaginationNextButton() {
		return cy.get("[aria-label='Next Page']");
	}

	get FirstCustomerName() {
		return cy.get('tbody >tr:nth-child(1)  td:nth-child(1)');
	}

	get NoofPages() {
		return cy.get('.cxui-paginator__page-button');
	}

	get RequestAccessButton() {
		return cy.get("[data-auto-id='request-access']");
	}

	//Request Access pop Up Locaters

	get RequestAccessPopUpHeader() {
		return cy.get('span').contains('Request Access to CX Cloud');
	}

	get RequestAccessPopUpMessage() {
		return cy
			.get('p')
			.contains(
				' Please confirm that you want to ask the customer for view-only access to their CX Cloud data, via APIs or in PX Cloud. This will give you insight into their progress with Cisco, so you can provide them with relevant assistance. ',
			);
	}

	get RequestAccessPopUpInputFieldHeader() {
		return cy
			.get('label')
			.contains(' Add a note to the CX Cloud Admins (optional)');
	}

	get RequestAccessPopUpInputField() {
		return cy.get('#notes');
	}

	get RequestAccessPopUpCancelbutton() {
		return cy.get('#dissociateCustomeCancel');
	}

	get RequestAccessPopUpConfirmbutton() {
		return cy.get('#dissociateCustomeSubmit');
	}

	get AdminSettingsCloseButton() {
		return cy.get("[data-auto-id='xbutton']");
	}

	//Ready to Request Customer 360

	get Customer360Name() {
		return cy.get('.title-text >span');
	}

	get Customer360CXCloudAccessHeader() {
		return cy.get('div').contains(' CX CLOUD ACCESS ');
	}

	get Customer360UserAccessHeader() {
		return cy.get('div').contains('USER ACCESS');
	}

	get Customer360UserAccessDescription() {
		return cy
			.get('div')
			.contains(
				'These users can view customer information in PX Cloud. Access to CX Cloud analytics data requires customer approval.',
			);
	}

	get Customer360whatdatasectionHeader() {
		return cy
			.get('cxui-expansion-panel-title')
			.contains('What data will be shared with me?');
	}

	get Customer360whatdataAccordionExpand_Collapse() {
		return cy.get('.cxui-accordion__icon >span');
	}

	get Customer360whatdatasectionDescription1() {
		return cy
			.get('p')
			.contains(
				' You’ll have view-only access to your customer’s CX Cloud data via APIs or in PX Cloud. This gives you insights into your customer’s progress with Cisco, so you can better tailor your offers to their needs and offer them relevant assistance. Data that will be shared includes systems information such as telemetry data, support data, install base information, entitlement information, customer feedback, and security threat data. Partner names, serial numbers, and contract IDs will not be shared. ',
			);
	}

	get Customer360whatdatasectionDescription2() {
		return cy
			.get('p')
			.contains(
				' For some Success Tracks, partner access may be limited to APIs only, or access may not yet be available. ',
			);
	}

	get Customer360whatdatasectionDescription3() {
		return cy
			.get('p')
			.contains(
				' For more information on how we use and share data, please visit Cisco’s Security and Trust Center . ',
			);
	}

	get Customer360CiscoSecurityandTrustCenterLink() {
		return cy.get("[rel='noopener']");
	}

	get Customer360PartnerUsersAccessStatus() {
		return cy.get("[role='row'] td:nth-child(4)>span");
	}

	//Customer Access state - Pending
	get CustomerwithPendingAccessstate() {
		return cy.get(
			"[role='row'] td:nth-child(5)> [class='ng-star-inserted']:nth-child(1)",
		);
	}

	get PendingAccessStateText() {
		return cy.get('span').contains('Access requested');
	}

	get Customer360AccessSummaryTab() {
		return cy.get('span').contains('ACCESS SUMMARY');
	}

	get Customer360RequestHistoryTab() {
		return cy.get('span').contains('REQUEST HISTORY');
	}

	get Customer360RequestHistoryDescription() {
		return cy
			.get('span')
			.contains(
				'This includes all access requests, status updates, and actions by admins or the system.',
			);
	}

	get Customer360HistoryBegins() {
		return cy.get('span').contains('History begins ');
	}

	get Customer360HistoryLatestEvent() {
		return cy.get('.timeline__list >div:nth-child(1) .case-note-title');
	}

	get Customer360CloseButton() {
		return cy.get("[data-auto-id='CloseDetails'] >span");
	}

	//Customer Access state - Denied

	get Customer360PartnerUsersDenied1() {
		return cy.get("[role='row'] td:nth-child(4) >div span:nth-child(2)");
	}

	get Customer360PartnerUsersDenied2() {
		return cy.get("[role='row'] td:nth-child(4) >div span:nth-child(3)");
	}

	get CustomerwithDeniedAccessstate() {
		return cy.get(
			"[role='row'] td:nth-child(5)> [data-auto-id='statusIcon']+span",
		);
	}

	get DeniedAccessStateText() {
		return cy.get('span').contains('Access denied');
	}

	// Customer Access State - Removed

	get Customer360PartnerUsersRemoved1() {
		return cy.get("[role='row'] td:nth-child(4) >div span:nth-child(2)");
	}

	get Customer360PartnerUsersRemoved2() {
		return cy.get("[role='row'] td:nth-child(4) >div span:nth-child(3)");
	}

	get CustomerwithRemovedAccessstate() {
		return cy.get(
			"[role='row'] td:nth-child(5)> [data-auto-id='statusIcon']+span",
		);
	}

	get RemovedAccessStateText() {
		return cy.get('span').contains('Access removed');
	}

	// Customer Access State - Approved

	get Customer360PartnerUsersApproved() {
		return cy.get("[role='row'] td:nth-child(4) > span:nth-child(1)");
	}

	get CustomerwithApprovedAccessstate() {
		return cy.get("[role='row'] td:nth-child(2)>span");
	}

	get SuccessTracksAccessStatus() {
		return cy.get('.row .success-track-card div:nth-child(2)>span');
	}
}

export default new AdminSettingsCustomers();
