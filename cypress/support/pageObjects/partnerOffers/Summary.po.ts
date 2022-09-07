class PartnerOffersPage {



	get Cisco_Contracts() {
		return cy.get('.cxui-tabs > :nth-child(3)');
	}

	get Cisco_Contracts_End_Customer_Table() {
		return cy.get(
			':nth-child(1) > .cdk-column-totalContractValue > .ng-star-inserted',
		);
	}

	get Cisco_Contracts_Summary_Page() {
		return cy.get('.opened > .cxui-sidenav__link > span.ng-star-inserted');
	}

	get Back_to_Cisco_Contracts() {
		return cy.get('.details');
	}

	get Summary_Acme_Canada() {
		return cy.get('.part1');
	}

	get Summary_Hybrid_Cloud() {
		return cy.get('.part2');
	}

	get Summary_details_flex() {
		return cy.get('.details');
	}

	get Summary_details_flex_Total_Contractvalues() {
		return cy.get(':nth-child(3) > .header_value');
	}

	get Summary_Subscriptions() {
		return cy.get('.subscription-title');
	}

	get Summary_Subscriptions_Block() {
		return cy.get(':nth-child(1) > .subscription_container');
	}

	get Summary_Subscriptions_ID_Label() {
		return cy.get(
			':nth-child(1) > .subscription_container > .subscription_details > .subscription_details_left > .content_title',
		);
	}
	get Summary_Subscriptions_Active_button() {
		return cy.get(
			':nth-child(1) > .subscription_container > .subscription_details > .subscription_details_left > .content_title_status_row > .subscription-status-label',
		);
	}

	get Summary_Subscriptions_SubscriptionId() {
		return cy.get(
			':nth-child(1) > .subscription_container > .subscription_details > .subscription_details_left > .content_title_status_row > .content_main_title',
		);
	}
	get Summary_Subscriptions_Start_Date() {
		return cy.get(
			':nth-child(1) > .subscription_container > .subscription_details > .subscription_details_left > .subscription_details_sub_container > :nth-child(1) > .content_header',
		);
	}

	get Summary_Subscriptions_END_Date() {
		return cy.get(
			':nth-child(1) > .subscription_container > .subscription_details > .subscription_details_left > .subscription_details_sub_container > :nth-child(2) > .content_header',
		);
	}

	get Summary_Subscriptions_INITIAL_TERM() {
		return cy.get(
			':nth-child(1) > .subscription_container > .subscription_details > .subscription_details_left > .subscription_details_sub_container > :nth-child(3) > .content_header',
		);
	}

	get Summary_Subscriptions_LOCATION() {
		return cy.get(
			':nth-child(1) > .subscription_container > .subscription_details > .subscription_details_left > .subscription_details_sub_container > :nth-child(4) > .content_header',
		);
	}

	get Summary_Subscriptions_SITE_ID() {
		return cy.get(
			':nth-child(1) > .subscription_container > .subscription_details > .subscription_details_left > .subscription_details_sub_container > :nth-child(5) > .content_header',
		);
	}

	get Summary_Subscriptions_Last_Charged_Label() {
		return cy.get(
			':nth-child(1) > .subscription_container > .subscription_details > .subscription_details_right > .content_title',
		);
	}

	get Summary_Subscriptions_Last_Charged_count_number() {
		return cy.get(
			':nth-child(1) > .subscription_container > .subscription_details > .subscription_details_right > .content_title',
		);
	}

	get Summary_Subscriptions_Last_Charged_Billing_Modelr() {
		return cy.get(
			':nth-child(1) > .subscription_container > .subscription_details > .subscription_details_right > .subscription_details_sub_container > :nth-child(1) > .content_header',
		);
	}

	get Summary_Subscriptions_Last_Charged_Consumption_Model() {
		return cy.get(
			':nth-child(1) > .subscription_container > .subscription_details > .subscription_details_right > .subscription_details_sub_container > :nth-child(2) > .content_header',
		);
	}

	get Summary_Subscriptions_Last_Charged_Web_Order_ID() {
		return cy.get(
			':nth-child(1) > .subscription_container > .subscription_details > .subscription_details_right > .subscription_details_sub_container > :nth-child(3) > .content_header',
		);
	}

	get Summary_Subscriptions_Last_Charged_PO_Number() {
		return cy.get(
			':nth-child(1) > .subscription_container > .subscription_details > .subscription_details_right > .subscription_details_sub_container > :nth-child(4) > .content_header',
		);
	}

	get Summary_Subscriptions_View_Deployments_label_Block() {
		return cy.get(
			'.deployment_header',
		);
	}

	get Summary_Subscriptions_View_DeploymentsLabel_table() {
		return cy.get(
			'.cdk-header-row > .cdk-column-subscriptionGroupId',
		);
	}
	get Summary_Subscriptions_View_Service_Category() {
		return cy.get(
			'.cdk-header-row > .cdk-column-technology',
		);
	}

	get Summary_Subscriptions_View_Service_Name() {
		return cy.get(
			'.cdk-header-row > .cdk-column-workloadType',
		);
	}

	get Summary_Subscriptions_View_Capacity_Type() {
		return cy.get(
			'.cdk-header-row > .cdk-column-resourceType',
		);
	}

	get Summary_Subscriptions_View_Reserve_Cap() {
		return cy.get(
			'.cdk-header-row > .cdk-column-reserveCapacity',
		);
	}

	get Summary_Subscriptions_View_On_demand_Cap() {
		return cy.get(
			'.cdk-header-row > .cdk-column-onDemandCapacity',
		);
	}

	get Summary_Subscriptions_View_Last_Reported_Usage() {
		return cy.get(
			'.cdk-header-row > .cdk-column-lastReportedUsage',
		);
	}
	get Summary_Subscriptions_View_Last_End_Date() {
		return cy.get(
			'.cdk-header-row > .cdk-column-deploymentEndDate',
		);
	}

	get Summary_Subscriptions_Table_Showing_Deployment_Items() {
		return cy.get('.footer_paging_text');
	}

	get Summary_Subscriptions_Table_Show_More_label() {
		return cy.get('.footer_paging > :nth-child(2)');
	}
	get Summary_Subscriptions_Table_Show_Less_label() {
		return cy.get('.footer_paging > :nth-child(4)');
	}

	get Summary_Subscriptions_Table_Show_All_label() {
		return cy.get('.footer_paging > :nth-child(6)');
	}


	get Summary_Actibe_Button() {
		return cy.get('.cxui-btn-group > .selected');
		            
	}


get Summary_Expired_button() {
	return cy.get('.cxui-btn-group > :nth-child(2)');
}

get Summary_Export_All() {
	return cy.get('#cxui-menu-trigger-1');
}

get Summary_Export_XSL_Button() {
	return cy.get('cxui-datalist > :nth-child(1)');
}

get Summary_Export_CSV_Button() {
	return cy.get('cxui-datalist > :nth-child(2)');
}


}

export default new PartnerOffersPage();
