class PartnerInfoCompanyQualificationPage {
	get partnerInfoUserProfile() {
		return cy.get("[data-auto-id='HeaderUserProfileButton']");
	}

	get partnerInfoManageProfile() {
		return cy.get('a').contains('Manage Profile');
	}

	get partnerInfoCompanyQualification() {
		return cy.get('span').contains('Company Qualifications');
	}

	get partnerInfoProgramsLabel() {
		return cy.get('div').contains('Programs');
	}

	get partnerInfoPLSValue() {
		return cy.get('div').contains('Partner Lifecycle Services');
	}
}

export default new PartnerInfoCompanyQualificationPage();
