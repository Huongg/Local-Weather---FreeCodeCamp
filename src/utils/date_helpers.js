const DaysEnum = Object.freeze({
	0: "Sun",
	1: "Mon",
	2: "Tue",
	3: "Wed",
	4: "Thu",
	5: "Fri",
	6: "Sat"
})

function getCurrentDate() {
	let d = new Date();

	
	let todayKey= d.getDay();
	return todayKey;
}

// function getCurrentWeekDays(DaysEnum, currentDate) {
// 	const weekDays = [];
// 	let keys = Object.keys(DaysEnum);


// 	for(let i = currentDate; i<keys.length; i++) {
// 		weekDays.push(i);
// 	}

// 	let j = currentDate;
// 	if(weekDays.length < keys.length) {
// 		while(j>0) {
// 			weekDays.push(currentDate-j);
// 			j--;
// 		}
// 	}
// 	return weekDays;

// }

function getCurrentWeekDays(DaysEnum, currentDate) {
	let keys = Object.keys(DaysEnum);

	let beforeToday = keys.slice(0, currentDate);
	let fromToday = keys.slice(currentDate);

	return fromToday.concat(beforeToday).map(k => parseInt(k) )
}	

module.exports = {
	DaysEnum : DaysEnum,
	getCurrentDate : getCurrentDate,
	getCurrentWeekDays : getCurrentWeekDays,
}

