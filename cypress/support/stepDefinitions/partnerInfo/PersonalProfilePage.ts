/// <reference types="Cypress" />

import { And, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import PersonalProfilePage from '../../pageObjects/partnerInfo/PersonalProfilePage.po';

When(`Navigate to the User Profile`, () => {
	PersonalProfilePage.partnerInfoUserProfile.click();
});

And(`Click on User Profile Icon`, () => {
	PersonalProfilePage.partnerInfoManageProfile.click();
});

Then(`Verify to Manage Profile Tab is Shown`, () => {
	PersonalProfilePage.partnerInfoManageProfile.contains('Manage Profile');
});

When(`Click on the Manage Profile Tab`, () => {
	PersonalProfilePage.partnerInfoManageProfile.click();
});

Then(`Verify Personal Profile tab is show`, () => {
	PersonalProfilePage.PersonalInformation.contains('Personal Information');
});

And(`Click on the Personal Profile Tab`, () => {
	PersonalProfilePage.PersonalInformation.click;
});

Then(`Verify the Personal Information screen`, () => {
	PersonalProfilePage.FirstNameLabel.contains('First Name');
});

Then(
	`Verify First Name Label is Shown in the Persanol Information Page`,
	() => {
		PersonalProfilePage.FirstNameLabel.contains('Last Name');
	},
);

Then(`Verify Last Name Label is Shown in the Persanol Information Page`, () => {
	PersonalProfilePage.LastNameLabel.contains('Last Name');
});

Then(`Verify Job Title Label is Shown in the Persanol Information Page`, () => {
	PersonalProfilePage.JobTitleLabel.contains('Job Title');
});

Then(`Verify Email Label is Shown in the Persanol Information Page`, () => {
	PersonalProfilePage.EmailLabel.contains('Email');
});

Then(`Verify Phone  Label is Shown in the Persanol Information Page`, () => {
	PersonalProfilePage.PhoneLabel.contains('Phone');
});

Then(`Verify Location Label is Shown in the Persanol Information Page`, () => {
	PersonalProfilePage.LocationLabel.contains('Location');
});

Then(`Verify Location Label is Shown in the Persanol Information Page`, () => {
	PersonalProfilePage.FirstNameLabel.contains('First Name');
});

Then(`Verify Static Text is Shown in the Persanol Information Page`, () => {
	PersonalProfilePage.PersonalInformationStaticText.contains(
		'Changes to your profile information will be processed within 2 hours.',
	);
});

Then(
	`Verify Manage Profile Button is Shown in the Persanol Information Page`,
	() => {
		PersonalProfilePage.ManageProfileButton.contains('Manage Profile');
	},
);
