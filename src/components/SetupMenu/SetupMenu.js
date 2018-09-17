import React, { Component } from 'react';
import ButtonsUnit from './ButtonsUnit.js';
import TestComponent from './TestComponent.js';

class SetupMenu extends Component {

	render() {
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
				<ButtonsUnit />
				<TestComponent></TestComponent>
			</div>
			

		)
	}

}

export default SetupMenu;