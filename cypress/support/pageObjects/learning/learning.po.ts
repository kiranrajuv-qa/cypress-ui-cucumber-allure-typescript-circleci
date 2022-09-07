export class Learning_PO {
	getMerakiNetworkFilter() {
		return cy.get('.faq_item').eq(1).find('.check').last();
	}
	getWebFilter() {
		return cy.get('.faq_item').last().find('.check').last();
	}
	Close360() {
		return cy.get('.icon-close').click();
	}
	getCards() {
		return cy.get('.new-sessions-cards');
	}
	getFirstCard() {
		return cy.get('.cxui-card').eq(0);
	}
	get360Pannel() {
		return cy.get('#main-details-panel');
	}
	getTitleonPannell() {
		return cy.get('.title-label');
	}
	getVideoTitle() {
		return cy.get('.video-text-title');
	}
}

export const Learning = new Learning_PO();
