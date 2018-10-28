import React, { Component } from 'react';
import { Jumbotron, Grid, Row, Col } from 'react-bootstrap';
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';
import AppActions from '../../actions/AppActions';
const date_time_format = require('../../utils/date_time_format.js');

// import {WeatherAPI} from '../../actions/WeatherAPI';
// const WeatherAPI = require('../../actions/WeatherAPI');



class CurrentTemp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeDate: this.props.activeDate
		}
	}

	componentDidMount() {
		AppActions.fetchAPI();
	}

	/*
		**trigger the component to re-render when receives a new prop updated from above
	*/
	componentWillReceiveProps(nextProps) {
		this.setState({
			activeDate: nextProps.activeDate
		});
	}

	render() {
		const { chosenUnit, data } = this.props;

		let name, min_temp, max_temp = "loading...";
		let min_iconCode, min_iconSrc, min_desc, max_iconCode, max_iconSrc, max_desc = "N/A";
		let temp_info = "N/A";



		console.log(this.props);


		if (data.hasOwnProperty("message")) { //this means the city is not found
			return (
				<div className="temp-container">
					<Jumbotron>
						<p>Sorry we can't find the city name that you entered</p>
					</Jumbotron>
				</div>
			)
		} else {
			if (this.state.activeDate < 6) {
				if (data.hasOwnProperty("city")) {
					name = data.city.name;
					min_temp = Math.round(data.list[this.state.activeDate].min);
					max_temp = Math.round(data.list[this.state.activeDate].max);

					min_iconCode = data.list[this.state.activeDate].icon[0];
					min_iconSrc = `http://openweathermap.org/img/w/${min_iconCode}.png`;
					min_desc = data.list[this.state.activeDate].desc[0];

					max_iconCode = data.list[this.state.activeDate].icon[1];
					max_iconSrc = `http://openweathermap.org/img/w/${max_iconCode}.png`;
					max_desc = data.list[this.state.activeDate].desc[1];
				}
				return (
					<div className="temp-container">
						<Jumbotron>
							<h1 className="country">{name}</h1>
							<Grid>
								<Row>
									<Col md={6}>
										<img className="icon" src={min_iconSrc} />
										<p className="description">{min_desc}</p>
									</Col>
									<Col md={6} className="current-temp-results">
										<p className="max-temp">{max_temp}
											{chosenUnit == "metric"
												? <span>&deg;C</span>
												: <span>&deg;F</span>
											}
										</p>
										<p className="min-temp">{min_temp}
											{chosenUnit == "metric"
												? <span>&deg;C</span>
												: <span>&deg;F</span>
											}
										</p>
									</Col>
								</Row>
							</Grid>
						</Jumbotron>
					</div>
				)
			} else {
				if (data.hasOwnProperty("city")) {
					name = data.city.name;
				}
				return (
					<div className="temp-container">
						<Jumbotron>
							<h1 className="country">{name}</h1>
							<p>.....</p>
							<p>Sorry We don't have the data for this date yet</p>
						</Jumbotron>
					</div>
				)
			}
		}



	}

}

export default CurrentTemp;



// class TempInfo extends Component {
// 	render() {
// 		return(
// 			<Col md={6}>
// 				<img src={min_iconSrc}/>
// 	      		<p className="description">{min_desc}</p>
// 			</Col>
// 		)
// 	}
// }




