import React, { Component } from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';

class ButtonsUnit extends Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}

	handleClick(e) {

	}

	render() {
		return(
			<div>
			  <ButtonToolbar>
			    <Button bsStyle="primary" bsSize="large">
			      *F
			    </Button>

			    <Button bsStyle="primary" bsSize="large">
			      *C
			    </Button>
			  </ButtonToolbar>

			  <ButtonToolbar>
			    <Button bsStyle="primary" bsSize="large">
			      OK
			    </Button>
			  </ButtonToolbar>


			</div>
		)
	}
}

export default ButtonsUnit;