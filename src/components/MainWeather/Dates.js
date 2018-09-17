import React, { Component } from 'react';
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';

class Dates extends Component {
	render() {
		return(
			<ButtonToolbar>
		        <ButtonGroup>
		          <Button>M</Button>
		          <Button>T</Button>
		          <Button>W</Button>
		          <Button>T</Button>
		          <Button>F</Button>
		          <Button>S</Button>
		          <Button>S</Button>
		        </ButtonGroup>
		    </ButtonToolbar>
		)
	}

}

export default Dates;