import React, { Component } from 'react';
import { Jumbotron, Grid, Row, Col } from 'react-bootstrap';

class SimilarTemps extends Component {
	render() {
		return(
			<div className="similartemps-container">
		      	<p>Likely to be...</p>
		        <Grid>
		        	<Row>
					    <Col md={4}>
					      <p>Vietnam</p>
					    </Col>
					    <Col md={4}>
					      <p>Thailand</p>
					    </Col>
					    <Col md={4}>
					      <p>Paris</p>
					    </Col>
					 </Row>
				</Grid>

		    </div>
		)
	}

}

export default SimilarTemps;