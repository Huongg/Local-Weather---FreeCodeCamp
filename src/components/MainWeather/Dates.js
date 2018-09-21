import React, { Component } from 'react';
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';
const date_helpers = require('../../utils/date_helpers.js');

class Dates extends Component {
	render() {
		let { handleClick } = this.props;
		let { activeDate } = this.props;
		let weekDaysIndex = date_helpers.getCurrentWeekDays(date_helpers.DaysEnum, date_helpers.getCurrentDate());
		// activeDate = date_helpers.getCurrentDate();
		// console.log(activeDate);
		let buttons = weekDaysIndex.map(day => {
											if(day == activeDate) {
												return(
												   <Button onClick={()=>this.props.handleClick(day)} className="active">{date_helpers.DaysEnum[day]}</Button>
												)
											} else {
												return(
												   <Button onClick={()=>this.props.handleClick(day)}>{date_helpers.DaysEnum[day]}</Button>
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