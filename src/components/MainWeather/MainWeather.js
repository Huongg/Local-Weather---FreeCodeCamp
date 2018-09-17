import React, { Component } from 'react';
import Dates from './Dates.js';
import CurrentTemp from './CurrentTemp.js';
import SimilarTemps from './SimilarTemps.js';

import {getCurrentWeather} from '../../utils/getCurrentWeather';
import AppStore from '../../libs/AppStore.js';

class MainWeather extends Component {
	constructor(props) {
		super(props);
		this.state = {
			chosenUnit:undefined
		}
	}
	
	componentDidMount() {
	    AppStore.addChangeListener('STORE_CHOOSE_TEMP_UNIT', this.onChange);
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
	}

	render() {
		let currentWeather = getCurrentWeather(this.state.chosenUnit);
		return(
			<div>
				<Dates />
				<CurrentTemp />
				<SimilarTemps />
			</div>
		)
	}

}

export default MainWeather;