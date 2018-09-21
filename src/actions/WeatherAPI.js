import AppDispatcher from '../dispatcher/AppDispatcher';

class API {

	fetchAPI() {
		const URLPrefix = "http://api.openweathermap.org/data/2.5/forecast?";
		const APIKey = "26b3fd73e61dc700f749547b3833c188";
		let coordinats = "lat=35&lon=139";
		let chosenUnit = "metric";
		let data = {};

		let url = `${URLPrefix}${coordinats}&units=${chosenUnit}&APPID=${APIKey}`;
		fetch (url)
		    .then(results => {
		        return results.json();
		    }).then(data => {
		    	data = data;
		    	// let name = data.city.name;
		    	// let dt_txt = data.list[0].dt_txt;
		    	// let currentDate = new Date(dt_txt).getDate();
		    	AppDispatcher.dispatch({
		    		actionType: 'WEATHER_LOADED', 
		    		value: data
		    	})
		    });
	}
	
}

// export default fetchAPI;
// module.exports = {fetchAPI : fetchAPI};
export default new API();


