import React, { Component } from 'react';
import { Jumbotron, Grid, Row, Col, Image } from 'react-bootstrap';

class SimilarTemps extends Component {
	render() {
		return (
			<div className="similartemps-container">
				<p>Likely to be...</p>
				<Grid>
					<Row>
						<Col md={4}>
							<Image src="https://images.pexels.com/photos/58597/pexels-photo-58597.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" thumbnail />
							<p>Vietnam</p>
						</Col>
						<Col md={4}>
							<Image src="https://images.pexels.com/photos/460376/pexels-photo-460376.jpeg?cs=srgb&dl=ancient-architecture-asia-460376.jpg&fm=jpg" thumbnail />
							<p>Thailand</p>
						</Col>
						<Col md={4}>
							<Image src="https://images.pexels.com/photos/672143/pexels-photo-672143.jpeg?cs=srgb&dl=architecture-building-city-672143.jpg&fm=jpg" thumbnail />
							<p>Paris</p>
						</Col>
					</Row>
				</Grid>

			</div>
		)
	}

}

export default SimilarTemps;