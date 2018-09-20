import React, { Component } from 'react';
import { Jumbotron, Grid, Row, Col } from 'react-bootstrap';
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';
const date_time_format = require('../../utils/date_time_format.js');


class CurrentTemp extends Component {
	constructor(props) {
		super(props);
		this.defaultHeight = 40;
		this.defaultWidth = 40;
	}


	render() {
		// const { apiResponse } = this.props;
		const {chosenUnit} = this.props;
		const {cityName}=this.props;
		const {tempInfo}= this.props;
		const{activeDate}=this.props;

		let tempData = {};
		let name, dailyForecast, temp, iconCode, iconSrc, description= "N/A";
		let date;

		// if(activeDate) {
			if(tempInfo && tempInfo.length > 0) {
				date= parseInt(activeDate);

				tempData = tempInfo[date];
				temp = Math.round(tempData.main.temp);
				iconCode = tempData.weather.icon;
				iconSrc = `http://openweathermap.org/img/w/${iconCode}.png` 
				description = tempData.weather.description;
			}
		
		// }

		console.log("date is:");
		console.log(date);

		console.log(`final data is:`);
		console.log(tempData);
 		

		if(cityName) {
			name = cityName;
		}


		return(
			<div className="temp-container">
		      <Jumbotron>
		      	<h1 className="country">{name}</h1>
		      	<img src={iconSrc}/>
		      	<p className="description">{description}</p>
		        <h1 className="temp">{temp}
		        	{chosenUnit=="metric" 
		        		? <span>&deg;C</span> 
		        		: <span>&deg;F</span> 
		        	}
		        </h1>
		      </Jumbotron>
		    </div>
		)
	}

}

export default CurrentTemp;