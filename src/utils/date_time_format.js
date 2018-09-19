let dateFormat = require('dateformat');

function timeStampToHour (timeStamp) {
	let date = new Date (timeStamp*1000);
	let formatedDate = dateFormat (date, "HH:MM");
	return formatedDate;
}

module.exports.timeStampToHour = timeStampToHour;

