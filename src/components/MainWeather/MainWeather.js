import React, { Component } from 'react';
import Dates from './Dates.js';
import CurrentTemp from './CurrentTemp.js';
import SimilarTemps from './SimilarTemps.js';

import AppStore from '../../store/AppStore.js';

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
			data: {},
			activeDate: "0"
		}
	}
	

	componentDidMount() {
	    AppStore.addChangeListener('STORE_WEATHER_LOADED', this.onStoreChange);
	}

	// Callbacks
	onStoreChange = () => {
		this.fetchingAPI();
  	}


  	// Logic
	fetchingAPI() {
		this.setState ({
			data: AppStore.getData() 
		})
	}
	

	handleClick = (date) => {
		console.log(date);
		this.setState({
			activeDate: date
		})

	}

	render() {
		console.log(this.state);
		return(
			<div>
				<Dates handleClick={this.handleClick}
						activeDate={this.state.activeDate}/>
				<CurrentTemp chosenUnit={this.state.chosenUnit}
							 data={this.state.data}>
				</CurrentTemp>
				<SimilarTemps />
			</div>
		)
	}

}


// module.exports=MainWeather

export default MainWeather;


