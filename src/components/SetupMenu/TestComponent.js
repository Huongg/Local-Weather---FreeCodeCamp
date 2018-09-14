import React, { Component } from 'react';
import AppStore from '../../libs/AppStore.js';

class Test extends Component {
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

		return(
			<p>{this.state.chosenUnit}</p>
		)
	}
}

export default Test;