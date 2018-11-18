import React, { Component } from 'react';
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';
const date_helpers = require('../../utils/date_helpers.js');

class Dates extends Component {
	render() {
		let { handleClick, activeDate } = this.props;
		let weekDaysIndex = date_helpers.getCurrentWeekDays(date_helpers.DaysEnum, date_helpers.getCurrentDate());
		let buttons = weekDaysIndex.map((day, index) => {
			if (index == activeDate) {
				return (
					<Button onClick={() => this.props.handleClick(index)} className="active">{date_helpers.DaysEnum[day]}</Button>
				)
			} else {
				return (
					<Button onClick={() => this.props.handleClick(index)}>{date_helpers.DaysEnum[day]}</Button>
				)
			}
		})
		return (	
				<ButtonGroup>
					{buttons}
				</ButtonGroup>
		)
	}
}

export default Dates;