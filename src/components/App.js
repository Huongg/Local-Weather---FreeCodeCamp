import React, { Component } from 'react';
import SetupMenu from './SetupMenu/SetupMenu';
import MainWeather from './MainWeather/MainWeather';
import AppStore from '../store/AppStore';
import AppActions from '../actions/AppActions';



class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			finishedSetUp: undefined,
			chosenUnit: undefined,
			chosenCity: undefined,
			coords: undefined
		}
	}

	componentDidMount() {
		AppStore.addChangeListener('STORE_CLICK_OK', this.onChangeClickOk);
		AppStore.addChangeListener('STORE_CHOOSE_TEMP_UNIT', this.onChangeChosenUnit);
		AppStore.addChangeListener('STORE_CHOSEN_CITY', this.onChangeChosenCity);
		AppStore.addChangeListener('STORE_CURRENT_LOCATION_LOADED', this.onChangeGetCurrentLocation);
	}

	// Callbacks
	onChangeClickOk = () => {
		this.setState({
			finishedSetUp: AppStore.getFinishedSetUp()
		})
	}

	onChangeChosenUnit = () => {
		this.setState({
			chosenUnit: AppStore.getChosenUnit()
		})
	}

	onChangeChosenCity = () => {
		this.setState({
			chosenCity: AppStore.getChosenCity()
		})
	}

	onChangeGetCurrentLocation = () => {
		this.setState({
			coords: AppStore.getCurrentLocationCoords()
		})
	}


	render() {
		console.log(this.state);
		return (
			<div>
				{this.state.finishedSetUp
					? <MainWeather />
					: <SetupMenu />
				}
			</div>
		)
	}
}

export default App;

