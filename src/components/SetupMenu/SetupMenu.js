import React, { Component } from 'react';
import ButtonsUnit from './ButtonsUnit.js';
import InputForm from './InputForm.js';
import AppActions from '../../actions/AppActions';
import AppStore from '../../store/AppStore';

class SetupMenu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			coords: AppStore.getCurrentLocation()
		}
	}



	render() {
		console.log(this.state);
		return(
			<div className="setupMenu-container">
				<h1>Hello, sunshine!</h1>
			  	<p>
				    This is a simple weather application that shows you the current local weather and
				    where it likely to be similar temperature. 
				    <br/>
				    You're able to search for more different locations if you'd love to. 
				</p>
				<p>
				   Unit setup only takes you a few seconds
				</p>
				<InputForm />
				<ButtonsUnit />
			
			</div>
			

		)
	}

}

export default SetupMenu;