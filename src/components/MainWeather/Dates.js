import React, { Component } from 'react';
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';

class Dates extends Component {
	render() {
		return(
			<ButtonToolbar>
		        <ButtonGroup>
		          <Button>Mon</Button>
		          <Button>Tue</Button>
		          <Button>Wed</Button>
		          <Button>Thu</Button>
		          <Button>Fri</Button>
		          <Button>Sat</Button>
		          <Button>Sun</Button>
		        </ButtonGroup>
		    </ButtonToolbar>
		)
	}

}

export default Dates;