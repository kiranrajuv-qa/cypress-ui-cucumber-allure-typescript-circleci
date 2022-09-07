/// <reference types="Cypress" />

import { When } from '@badeball/cypress-cucumber-preprocessor';
import summary from '../../pageObjects/partnerOffers/Summary.po';

let a;

When('Check the Cisco Contracts is present in CUSTOMERS', () => {
	summary.Cisco_Contracts.should('have.text', 'Cisco+ Contracts');
	summary.Cisco_Contracts.click();
});

When(/^In Cisco\+ Contracts Check any end customer in Table$/, () => {
	a = summary.Cisco_Contracts_End_Customer_Table.get;
	summary.Cisco_Contracts_End_Customer_Table.click();
});

When(
	'After Clicking End customer in table Summary window should be present',
	() => {
		//summary.Cisco_Contracts.should('have.text','Summary');
		summary.Cisco_Contracts_Summary_Page.should('be.visible');
	},
);

When(
	'In Summary Page Validate the  Back to Cisco+ Contracts should be present',
	() => {
		summary.Back_to_Cisco_Contracts.should('be.visible');
	},
);

When('In Summary page validate the customer Label', () => {
	summary.Summary_Acme_Canada.should('be.visible');
});

When('In Summary page validate the customer Cloud Label', () => {
	summary.Summary_Hybrid_Cloud.should('be.visible');
});

When('In Summary Page details flex should be present', () => {
	summary.Summary_details_flex.should('be.visible');
	const b = summary.Summary_details_flex_Total_Contractvalues.get;
	if (a === b) {
		console.log(
			'Cisco_Contracts_End_Customer_Table And Table Value is Match',
		);
	}
	summary.Summary_details_flex_Total_Contractvalues.should('be.visible');
});

When('Summary Page Subscriptions Label should be present', () => {
	summary.Summary_Subscriptions.should('be.visible');
});

When('In Summary page validate the Subscription block', () => {
	summary.Summary_Subscriptions_Block.should('be.visible');
});

When('In Subscription block validate the Subscription ID Label', () => {
	summary.Summary_Subscriptions_ID_Label.should('be.visible');
});

When('In Subscription block validate the Active button', () => {
	summary.Summary_Subscriptions_Active_button.should('be.visible');
});

When('In Subscription block validate the SubscriptionId', () => {
	summary.Summary_Subscriptions_SubscriptionId.should('be.visible');
});

When('In Subscription block validate the Start Date', () => {
	summary.Summary_Subscriptions_Start_Date.should('be.visible');
});

When('In Subscription block validate the End Date', () => {
	summary.Summary_Subscriptions_END_Date.should('be.visible');
});

When('In Subscription block validate the INITIAL TERM', () => {
	summary.Summary_Subscriptions_INITIAL_TERM.should('be.visible');
});

When('In Subscription  block validate the LOCATION', () => {
	summary.Summary_Subscriptions_LOCATION.should('be.visible');
});

When('In Subscription  block validate the SITE ID', () => {
	summary.Summary_Subscriptions_SITE_ID.should('be.visible');
});

When('In Subscription block validate the Last Charged Label', () => {
	summary.Summary_Subscriptions_Last_Charged_Label.should('be.visible');
});

When('In Subscription block validate the Last Charged count number', () => {
	summary.Summary_Subscriptions_Last_Charged_count_number.should(
		'be.visible',
	);
});

When('In Last Charged validate the Billing Model', () => {
	summary.Summary_Subscriptions_Last_Charged_Billing_Modelr.should(
		'be.visible',
	);
});

When('In Last Charged validate the Consumption Model', () => {
	summary.Summary_Subscriptions_Last_Charged_Consumption_Model.should(
		'be.visible',
	);
});

When('In Last Charged validate the Web Order ID', () => {
	summary.Summary_Subscriptions_Last_Charged_Web_Order_ID.should(
		'be.visible',
	);
});

When('In Last Charged validate the PO Number', () => {
	summary.Summary_Subscriptions_Last_Charged_PO_Number.should('be.visible');
});

When('In Subscription block validate the View Deployments label', () => {
	summary.Summary_Subscriptions_View_Deployments_label_Block.should(
		'be.visible',
	);
});

When('In View Deployments Table validate the Deployments Label', () => {
	summary.Summary_Subscriptions_View_DeploymentsLabel_table.should(
		'be.visible',
	);
});

When('In View Deployments Table validate the Service Category', () => {
	summary.Summary_Subscriptions_View_Service_Category.should('be.visible');
});

When('In View Deployments Table validate the Service Name', () => {
	summary.Summary_Subscriptions_View_Service_Name.should('be.visible');
});

When('In View Deployments Table validate the Capacity Type', () => {
	summary.Summary_Subscriptions_View_Capacity_Type.should('be.visible');
});

When('In View Deployments Table validate the Reserve Cap', () => {
	summary.Summary_Subscriptions_View_Reserve_Cap.should('be.visible');
});

When('In View Deployments Table validate the On-demand Cap', () => {
	summary.Summary_Subscriptions_View_On_demand_Cap.should('be.visible');
});

When('In View Deployments Table validate the Last Reported Usage', () => {
	summary.Summary_Subscriptions_View_Last_Reported_Usage.should('be.visible');
});

When('In View Deployments Table validate the Last End Date', () => {
	summary.Summary_Subscriptions_View_Last_End_Date.should('be.visible');
});

When('In View Deployments Table validate the Showing Deployment Items', () => {
	summary.Summary_Subscriptions_Table_Showing_Deployment_Items.should(
		'be.visible',
	);
});

When('In View Deployments Table validate the Show More label', () => {
	summary.Summary_Subscriptions_Table_Show_More_label.should('be.visible');
});

When('In View Deployments Table validate the Show Less label', () => {
	summary.Summary_Subscriptions_Table_Show_Less_label.should('be.visible');
});

When('In View Deployments Table validate the Show All label', () => {
	summary.Summary_Subscriptions_Table_Show_All_label.should('be.visible');
});

When(
	'In Subscription block validate the Active button and validate the Expired page',
	() => {
		summary.Summary_Expired_button.should('be.visible');
	},
);

When(
	'In Subscription block validate the Expired button and validate the Expired page',
	() => {
		summary.Summary_Expired_button.should('be.visible');
	},
);

When('In Subscription block validate the Export All button', () => {
	summary.Summary_Export_All.should('be.visible');
	summary.Summary_Export_All.click();
});

When('In Subscription  block validate the Export XSL button', () => {
	summary.Summary_Export_XSL_Button.should('be.visible');
});

When('In Subscription  block validate the Export CSV button', () => {
	summary.Summary_Export_CSV_Button.should('be.visible');
});
