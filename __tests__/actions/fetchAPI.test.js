import AppActions from '../../src/actions/AppActions';
import weather_data from '../mocks/weather_data.json';
import API_weather_helpers from '../../src/utils/API_weather_helpers';


const EXPECTED_JSON  = {
		"city": {
			"id": 1851632,
			"name": "Shuzenji",
			"coord": {
				"lat": 34.9667,
				"lon": 138.9333
			}
		},
		"list": [
			{	
				"date": "2018-09-23",
				"min": 22.92,
				"max": 23.23,
				"desc": ["light rain"],
				"icon": ["10d"]
			},
			{
				"date": "2018-09-24",
				"min": 22.82,
				"max": 23.85,
				"desc": ["light rain"],
				"icon": ["10d"]
			},
			{
				"date": "2018-09-25",
				"min": 21.49,
				"max": 23.85,
				"desc": ["moderate rain", "overcast clouds"],
				"icon": ["10n", "04d"]
			},
			{
				"date": "2018-09-26",
				"min": 18.85,
				"max": 21.8,
				"desc": ["moderate rain", "overcast clouds"],
				"icon": ["10d", "04n"]
			},
			{
				"date": "2018-09-27",
				"min": 18.79,
				"max": 20.02,
				"desc": ["moderate rain", "clear sky"],
				"icon": ["10d", "01n"]
			},
			{
				"date": "2018-09-28",
				"min": 20.08,
				"max": 21.63,
				"desc": ["clear sky", "few clouds"],
				"icon": ["01d", "02n"]
			}
		]
	}

test("Should return correctly formatted URL for metric API URL", () => {
	let expectedRes = "http://api.openweathermap.org/data/2.5/forecast?lat=35&lon=139&units=metric&APPID=26b3fd73e61dc700f749547b3833c188";
    let actualRes = AppActions.generateURL("http://api.openweathermap.org/data/2.5/forecast?", 
        "lat=35&lon=139", "metric", "26b3fd73e61dc700f749547b3833c188");
	expect(actualRes).toBe(expectedRes);
})

// test("Shoul return the right formatted JSON file.list", () => {
// 	let actualRes = API_weather_helpers.parseWeatherData(weather_data);
// 	expect(actualRes).toEqual(EXPECTED_JSON.list);
// })

test("Shoul return the right formatted JSON file", () => {
	let actualRes = API_weather_helpers.parseWeatherData(weather_data);
	expect(actualRes).toEqual(EXPECTED_JSON);
})
