const months = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec',
];

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const date = new Date();
const monthIndex = date.getMonth();
const currentMonth = months[monthIndex];
const previousMonth = monthIndex == 0 ? 'Dec' : months[monthIndex - 1];
const currentYear = date.getFullYear();
const previousYear = monthIndex == 0 ? currentYear - 1 : currentYear;

export function getCurrentYear(): number {
	return currentYear;
}

export function getPreviousYear(): number {
	return previousYear;
}

export function getCurrentMonth(): string {
	return currentMonth;
}

export function getPreviousMonth(): string {
	return previousMonth;
}

export function initCap(text: string): string {
	return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

export function getText(selector: string): string {
	let text = '';
	cy.getByDataAutoId(selector)
		.invoke('text')
		.then((txt: string) => {
			text = txt;
		});
	return text;
}

export function getNumber(selector: string): number {
	let count = 0;
	cy.getByDataAutoId(selector)
		.invoke('text')
		.then((customerCount: string) => {
			count = parseInt(customerCount);
		});
	return count;
}

export function getFormattedDate(contentDate: string): string {
	// Input - 2022-01-27T15:00:00Z
	// Output - Thu Jan 27, 2022 8:30 PM
	const date = new Date(contentDate);
	const year = date.getFullYear();
	const month = months[date.getMonth()];
	const dt = date.getDate();
	const week = days[date.getDay()];
	let hours =
		date.getHours() > 12
			? date.getHours() - 12
			: date.getHours() == 12
			? '12'
			: date.getHours();
	if (hours == 0) {
		hours = '12';
	}
	let minutes = date.getMinutes() + '';
	if (minutes == '0') {
		minutes = '00';
	}
	const amorpm = date.getHours() > 12 ? 'PM' : 'AM';
	return (
		week +
		' ' +
		month +
		' ' +
		dt +
		', ' +
		year +
		' ' +
		hours +
		':' +
		minutes +
		' ' +
		amorpm
	);
}

export function getFormattedDateForNote(): string {
	// Input - 2022-01-27T15:00:00Z
	// Output - Jan 27, 2022
	const date = new Date();
	const year = date.getFullYear();
	const month = months[date.getMonth()];
	const dt = date.getDate();
	return month + ' ' + dt + ', ' + year;
}

export function validateFutureDate(sessionDate: string | number | Date) {
	return new Date(sessionDate) > new Date();
}

export function validatePastDate(sessionDate: string | number | Date) {
	return new Date(sessionDate) < new Date();
}

export function getCurrentDateTime(): string {
	const today = new Date();
	const date =
		today.getFullYear() +
		'-' +
		(today.getMonth() + 1) +
		'-' +
		today.getDate();
	const time =
		today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
	const dateTime = date + ' ' + time;
	return dateTime;
}
