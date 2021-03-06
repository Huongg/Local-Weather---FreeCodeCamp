import React, { Component } from 'react';
import ButtonsUnit from './ButtonsUnit.js';
import InputForm from './InputForm.js';
import AppActions from '../../actions/AppActions';
import AppStore from '../../store/AppStore';

class SetupMenu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			clicked: false,
			chosenCity: ""
		}
	}


	handleChange = (e) => {
		let value = e.target.value;
		console.log(value);
		this.setState({
			chosenCity: value
		})

	}

	handleClick = (event) => {
		this.setState({
			clicked: true
		})
		AppActions.getCurrentLocation();
	}

	handleButtonUnitClick = (e) => {
		let chosenUnit = e.target.id;

		switch (chosenUnit) {
			case "degreeC":
				AppActions.chooseTempUnit("metric");
				break;
			case "degreeF":
				AppActions.chooseTempUnit("imperial");
				break;
			case "ok":
				AppActions.clickOk(chosenUnit);
				AppActions.chosenCity(this.state.chosenCity);
				break;
		}
	}

	render() {
		console.log(this.state);
		return (
			<div className="setupMenu-container">
				<div class="h1-wrapper">
					<h1 data-heading="Hello sunshine!">Hello sunshine!</h1>
				</div>
				<p>
					This is a simple weather application that shows you the current local weather and
					where it likely to be similar temperature.
				</p>
				<InputForm
					handleChange={this.handleChange}
					handleKeyPress={this.handleKeyPress}
					handleClick={this.handleClick}
				/>
				<ButtonsUnit
					handleButtonUnitClick={this.handleButtonUnitClick}
				/>
			</div>


		)
	}

}

export default SetupMenu;