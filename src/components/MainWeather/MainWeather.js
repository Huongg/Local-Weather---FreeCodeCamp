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
			activeDate: "0",
			tempInfo:[]
			// cityName: "",
			// dailyTemp0: {},
			// dailyTemp1: {},
			// dailyTemp2: {},
			// dailyTemp3: {},
			// dailyTemp4: {},
			// dailyTemp5: {},
			// dailyTemp6: {},
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
		    	let apiResponse = data;
		    	let cityName = data.city.name;
		    	let tempInfo = data.list;
		    	this.setState({
		    		cityName: cityName,
		    		tempInfo: tempInfo
		    	})
		    	
		    	// let dailyTemp0 = data.list[0];
		    	// let dailyTemp1 = data.list[1];
		    	// let dailyTemp2 = data.list[2];
		    	// let dailyTemp3 = data.list[3];
		    	// let dailyTemp4 = data.list[4];
		    	// let dailyTemp5 = data.list[5];
		    	// let dailyTemp6 = data.list[6];
		    	// this.setState({ 
		    	// 	cityName: cityName,
		    	// 	dailyTemp0: dailyTemp0,
		    	// 	dailyTemp1: dailyTemp1,
		    	// 	dailyTemp2: dailyTemp2,
		    	// 	dailyTemp3: dailyTemp3,
		    	// 	dailyTemp4: dailyTemp4,
		    	// 	dailyTemp5: dailyTemp5,
		    	// 	dailyTemp6: dailyTemp6,
		    	// });
		    });
	}

	// TODO:
	// Store apiResponse to the state

	handleClick = (date) => {
		console.log(date);
		this.setState({
			activeDate: date
		})

	}

	render() {
		// console.log(this.state);
		return(
			<div>
				<p>{this.state.chosenSpeed}</p>
				<Dates handleClick={this.handleClick}
						activeDate={this.state.activeDate}/>
				<CurrentTemp cityName={this.state.cityName}
							 tempInfo={this.state.tempInfo}
							 activeDate={this.state.activeDate}>
				</CurrentTemp>
				<SimilarTemps />
			</div>
		)
	}

}


// module.exports=MainWeather

export default MainWeather;


