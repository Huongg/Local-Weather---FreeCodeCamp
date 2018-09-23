import React, { Component } from 'react';
import SetupMenu from './SetupMenu/SetupMenu.js';
import MainWeather from './MainWeather/MainWeather.js';
import AppStore from '../store/AppStore.js';


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			finishedSetUp:undefined
		}
	}
	
	componentDidMount() {
	    AppStore.addChangeListener('STORE_CLICK_OK', this.onChangeClickOk);
	    AppStore.addChangeListener('STORE_CHOOSE_TEMP_UNIT', this.onChangeChosenUnit);
	}

	// Callbacks
	onChangeClickOk = () => {
		this.setState ({
			finishedSetUp: AppStore.getFinishedSetUp()
		})
  	}

  	onChangeChosenUnit = () => {
		this.setState ({
			chosenUnit: AppStore.getChosenUnit()
		})
  	}


	render() {
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
