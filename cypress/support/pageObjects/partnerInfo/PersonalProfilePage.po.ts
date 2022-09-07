class PersonalProfilePage {
	get partnerInfoUserProfile() {
		return cy.get("[data-auto-id='HeaderUserProfileButton']");
	}

	get partnerInfoManageProfile() {
		return cy.get('a').contains('Manage Profile');
	}

	get partnerInfoManageProfile1() {
		return cy.get('a').contains('Manage Profile');
	}

	get PersonalInformation() {
		return cy.get('span').contains('Personal Information');
	}

	get FirstNameLabel() {
		return cy.get('div').contains('First Name');
	}

	get LastNameLabel() {
		return cy.get('div').contains('Last Name');
	}

	get JobTitleLabel() {
		return cy.get('div').contains('Job Title');
	}

	get EmailLabel() {
		return cy.get('div').contains('Email');
	}

	get PhoneLabel() {
		return cy.get('div').contains('Phone');
	}

	get LocationLabel() {
		return cy.get('div').contains('Location');
	}

	get PersonalInformationStaticText() {
		return cy.get('div').contains('Changes to your profile information will be processed within 2 hours.');
	}

	get ManageProfileButton() {
		return cy.get('button').contains('Manage Profile');
	}

}
export default new PersonalProfilePage();
