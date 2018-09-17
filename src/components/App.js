import React, { Component } from 'react';
import SetupMenu from './SetupMenu/SetupMenu.js';
import MainWeather from './MainWeather/MainWeather.js';
import AppStore from '../libs/AppStore.js';


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			finishedSetUp:undefined
		}
	}
	
	componentDidMount() {
	    AppStore.addChangeListener('STORE_CLICK_OK', this.onChange);
	}

	// Callbacks
	onChange = () => {
		this.updateFinishedSetUp();
  	}


  	// Logic
	updateFinishedSetUp() {
		this.setState ({
			finishedSetUp: AppStore.getFinishedSetUp()
		})
	}
	render() {
	    return (
	    	<div>
				<MainWeather />
			</div>
	    )
	}
}

export default App;
