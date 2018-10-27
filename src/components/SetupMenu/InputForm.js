import React, { Component } from 'react';
import AppActions from '../../actions/AppActions';
import AppStore from '../../store/AppStore.js';
import { Button } from 'react-bootstrap';

class InputForm extends Component {

	handleChange = (event) => {
		this.props.handleChange(event);
	}

	handleKeyPress = (event) => {
		if (event.charCode == 13) {
			console.log('Pressed enter');
			this.props.handleKeyPress(event);

		}
	}

	handleClick = (event) => {
		this.props.handleClick(event);
	}

	render() {
		return (
			<div className="input-categories">
				<input type="text" className="btn-location"
					placeholder="Search..."
					onChange={this.handleChange}
					onKeyPress={this.props.handleKeyPress} />
				<button className="btn-location"
					onClick={this.handleClick}>Use my location</button>
			</div>
		)
	}
}

export default InputForm;