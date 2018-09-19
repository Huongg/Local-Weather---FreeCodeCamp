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
		const { apiResponse } = this.props;
		const { chosenUnit } = this.props;

 		let name, dailyForecast, temp, iconCode, iconSrc, description = "N/A";
		if(apiResponse.hasOwnProperty("list")){
			name = apiResponse.city.name;

			dailyForecast = apiResponse.list;

			temp = dailyForecast[0].main.temp;
			iconCode = dailyForecast[0].weather[0].icon;
			iconSrc = `http://openweathermap.org/img/w/${iconCode}.png` 
			description = dailyForecast[0].weather[0].description;
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