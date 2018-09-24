function parseWeatherData(weather_data) {
	let datesToData = {};


	weather_data.list.forEach(item => {
		let date = item.dt_txt.slice(0, 10);
		

		// if (datesToData.hasOwnProperty(date)){
		// 	datesToData[date].push(item);
	
		// } else{
		// 	datesToData[date] =[item];
		// }

	
		// way 2
		if (!datesToData.hasOwnProperty(date)){
			datesToData[date] = [];
		} 		

		let keyItems = {
			min : item.main.temp_min,
			max : item.main.temp_max,
			icon : item.weather[0].icon,
			desc : item.weather[0].description,
		}

		datesToData[date].push(keyItems);


		// return new Date(item.dt_txt).getDate();
	});


	let keys = Object.keys(datesToData);

	let results = {};
	// datesToData = datesToData.map(item => item);
	keys.forEach(key => {
		let datePoints = datesToData[key]; //list of time periods within a given date

		let min = Number.MAX_SAFE_INTEGER;
		let max = Number.MIN_SAFE_INTEGER;
		let min_desc, max_desc;
		let min_icon, max_icon;

		datePoints.forEach(p => {
			let old_min = min;
			let old_max = max;
			min = Math.min(p.min, min);
			max = Math.max(p.max, max);

			if(old_min !== min) {
				min_desc = p.desc;
				min_icon = p.icon;
			}
			if(old_max !== max) {
				max_desc = p.desc;
				max_icon = p.icon;
			}

		})

		//Set value at DatesToData to new value or something

		let keyItems = {
			min : min,
			max : max,
			desc : (min_desc !== max_desc)? [min_desc, max_desc] : [min_desc],
			icon : (min_desc !== max_desc)? [min_icon, max_icon] : [min_icon]
		}

		results[key] = keyItems;

	})



	return results;
}

module.exports.parseWeatherData = parseWeatherData;