import React, { Component } from 'react';
import { Jumbotron} from 'react-bootstrap';
import ButtonsUnit from './ButtonsUnit.js';

class SetupMenu extends Component {

	render() {
		return(
			<Jumbotron className="SetupMenu-container">
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
			</Jumbotron>

		)
	}

}

export default SetupMenu;