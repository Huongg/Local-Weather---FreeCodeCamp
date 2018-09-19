import React, { Component } from 'react';
import Dates from './Dates.js';
import CurrentTemp from './CurrentTemp.js';
import SimilarTemps from './SimilarTemps.js';

import AppStore from '../../libs/AppStore.js';

// class MainWeather{
// 	generateURL(urlPrefix, chosenUnit, apiKey){
// 		return `${urlPrefix}lat=35&lon=139&units=${chosenUnitt}&APPID=${apiKey}`;
// 	}
// }



class MainWeather extends Component {
	constructor(props) {
		super(props);
		this.state = {
			chosenUnit: AppStore.getChosenUnit(),
			// chosenSpeed:  AppStore.getSpeedUnit(),
			apiResponse: {}
		}

		this.URLPrefix = "http://api.openweathermap.org/data/2.5/forecast?";
		this.APIKey = "26b3fd73e61dc700f749547b3833c188";
		this.link = "http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&units=metric&APPID=26b3fd73e61dc700f749547b3833c188";

	}
	

	componentDidMount() {
	    this.fetchWeatherAPI();
	}
	
	generateURL(urlPrefix, chosenUnit, apiKey){
		return `${urlPrefix}lat=35&lon=139&units=${chosenUnit}&cnt=7&APPID=${apiKey}`;
	}

	fetchWeatherAPI() {
		let url = this.generateURL(this.URLPrefix, this.state.chosenUnit, this.APIKey);
		console.log(url);
		fetch (url)
		    .then(results => {
		        return results.json();
		    }).then(data => {
		    	let apiResponse = data
		    	console.log(apiResponse);
		    	this.setState({ 
		    		apiResponse: apiResponse
		    	});
		    });
	}


	render() {
		return(
			<div>
				<p>{this.state.chosenSpeed}</p>
				<Dates />
				<CurrentTemp apiResponse={this.state.apiResponse}
							 chosenUnit={this.state.chosenUnit}>
				</CurrentTemp>
				<SimilarTemps />
			</div>
		)
	}

}


// module.exports=MainWeather

export default MainWeather;


