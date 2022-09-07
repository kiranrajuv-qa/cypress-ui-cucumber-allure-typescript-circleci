class PartnerInfoPLSTodaysViewPage {
	get partnerInfoBecomePLSPartner() {
		return cy.get('span').contains('Become a PLS Partner');
	}

	get partnerInfoStaticTextNonPLS() {
		return cy.get('li').contains('Access CX Cloud');
	}

	get partnerInfoLearnMoreLink() {
		return cy.get('a').contains('Learn More');
	}
}

export default new PartnerInfoPLSTodaysViewPage();
