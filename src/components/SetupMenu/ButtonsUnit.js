import React, { Component } from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import AppActions from '../../libs/AppActions';
import AppStore from '../../libs/AppStore.js';

class ButtonsUnit extends Component {
	constructor(props) {
		super(props);
		this.state = {
			chosenUnit: undefined,
			finishedSetUp: undefined
		}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
	
		let chosenUnit = e.target.id;
		if(chosenUnit === "degreeC" || chosenUnit === "degreeF") {
			AppActions.chooseTempUnit(chosenUnit);
			this.setState({
				chosenUnit: AppStore.getChosenUnit()
			})
		} else {
			AppActions.clickOk(chosenUnit);
			this.setState({
				finishedSetUp: AppStore.getFinishedSetUp()
			})
		}		
	}

	render() {
		return(
			<div>
			  <ButtonToolbar>
			    <Button id="degreeC" bsStyle="primary" bsSize="large" onClick={this.handleClick}>*C</Button>
			    <Button id="degreeF" bsStyle="primary" bsSize="large" onClick={this.handleClick}>*F</Button>
			  </ButtonToolbar>
			  <Button id="ok" bsStyle="primary" bsSize="small" onClick={this.handleClick}>OK</Button>
			</div>
		)
	}
}

export default ButtonsUnit;