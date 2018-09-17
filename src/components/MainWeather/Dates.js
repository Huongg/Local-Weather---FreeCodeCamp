import React, { Component } from 'react';
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';
const date_helpers = require('../../utils/date_helpers.js');

class Dates extends Component {
	render() {
		let weekDaysIndex = date_helpers.getCurrentWeekDays(date_helpers.DaysEnum, date_helpers.getCurrentDate());
		let buttons = weekDaysIndex.map(day => {
											if(day == date_helpers.getCurrentDate()) {
												return(
												   <Button className="active">{date_helpers.DaysEnum[day]}</Button>
												)
											} else {
												return(
												   <Button>{date_helpers.DaysEnum[day]}</Button>
												)
											}
											 		
										})
		return(
			<ButtonToolbar>
		        <ButtonGroup>
		        	{buttons}
		        </ButtonGroup>
		    </ButtonToolbar>
		)
	}

}

export default Dates;