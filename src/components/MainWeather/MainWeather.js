import React, { Component } from 'react';
import Dates from './Dates.js';
import CurrentTemp from './CurrentTemp.js';
import SimilarTemps from './SimilarTemps.js';

// import {getCurrentWeather} from '../../utils/getCurrentWeather';
import AppStore from '../../libs/AppStore.js';

class MainWeather extends Component {
	constructor(props) {
		super(props);
		this.state = {
			chosenUnit:undefined, 
			currentLocation:undefined,
			apiResponse: {}
		}
		this.URLPrefix = "api.openweathermap.org/data/2.5/weather?";
		this.APIKey = "26b3fd73e61dc700f749547b3833c188";
		this.link = "http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&units=metric&APPID=26b3fd73e61dc700f749547b3833c188";
	}
	
	
	// Callbacks
	onChange = () => {
		this.updateChosenUnit();
  	}


  	// Logic
	updateChosenUnit() {
		this.setState ({
			chosenUnit: AppStore.getChosenUnit()
		})
	};

	fetchWeatherAPI() {
		// fetch (`${this.URLPrefix}lat=35&lon=139${this.APIKey}`)
		fetch (`${this.link}`)
		    .then(results => {
		        return results.json();
		    }).then(data => {
		    	let apiResponse = data
		    	// console.log(apiResponse);
		    	this.setState({ 
		    		apiResponse: apiResponse
		    	});
		    });

	}


	componentDidMount() {
	    AppStore.addChangeListener('STORE_CHOOSE_TEMP_UNIT', this.onChange);
	    this.fetchWeatherAPI();
	}

	render() {
		return(
			<div>
				<Dates />
				<CurrentTemp apiResponse = {this.state.apiResponse}/>
				<SimilarTemps />
			</div>
		)
	}

}

export default MainWeather;