import React, { Component } from 'react';
import { Jumbotron, Grid, Row, Col } from 'react-bootstrap';

class CurrentTemp extends Component {
	render() {
		return(
			<div className="temp-container">
		      <Jumbotron>
		        <h1 className="temp">18</h1>
		        <p className="description">Partly Cloudy</p>
		        <Grid>
		        	<Row>
					    <Col md={6}>
					      <p>Humidity</p>
					    </Col>
					    <Col md={6}>
					      <p>Wind</p>
					    </Col>
					 </Row>

					 <Row>
					    <Col md={6}>
					      <p>Raining</p>
					    </Col>
					    <Col md={6}>
					      <p>Sunrise/Sunset</p>
					    </Col>
					 </Row>
				</Grid>
		      </Jumbotron>
		    </div>
		)
	}

}

export default CurrentTemp;