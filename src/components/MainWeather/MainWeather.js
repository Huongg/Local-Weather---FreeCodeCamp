import React, { Component } from 'react';
import Dates from './Dates.js';
import CurrentTemp from './CurrentTemp.js';
import SimilarTemps from './SimilarTemps.js';
import AppStore from '../../store/AppStore.js';
import { Grid, Col, Row } from 'react-bootstrap';


class MainWeather extends Component {
	constructor(props) {
		super(props);
		this.state = {
			chosenUnit: AppStore.getChosenUnit(),
			data: {},
			activeDate: 0,

		}
	}


	componentDidMount() {
		AppStore.addChangeListener('STORE_WEATHER_LOADED', this.onStoreChange);
	}

	// Callbacks
	onStoreChange = () => {
		this.fetchingAPI();
	}


	// Logic
	fetchingAPI() {
		this.setState({
			data: AppStore.getData()
		})
	}


	handleClick = (date) => {
		console.log(date);
		this.setState({
			activeDate: date
		})

	}

	render() {
		console.log(this.state);
		return (
			<div>
				<Grid>
					<Row>
						<Col xs={12} md={12}>
								<Dates handleClick={this.handleClick}
										 activeDate={this.state.activeDate} />
						</Col>
						<Col xs={12} md={12}>
								<CurrentTemp chosenUnit={this.state.chosenUnit}
												data={this.state.data}
												activeDate={this.state.activeDate}>
								</CurrentTemp>
						</Col>
						<Col xs={12} md={12}>
							<SimilarTemps />
						</Col>
					</Row>
				</Grid>
			</div>
		)
	}

}


// module.exports=MainWeather

export default MainWeather;


