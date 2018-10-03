import React, { Component } from 'react';
import AppActions from '../../actions/AppActions';
import AppStore from '../../store/AppStore.js';
import { Button } from 'react-bootstrap';

class InputForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasSubmitted: false,
			chosenCity: ""
		}
	}

	handleChange = (e) => {
		let value = e.target.value;
		this.setState ({
			chosenCity: value
		})
		
	}

	handleKeyPress = (event) => {
		
		if (event.charCode === 13) {
			console.log("enter")
			// event.preventDefault();
			this.setState({
				hasSubmitted:true
			})
			AppActions.chosenCity(this.state.chosenCity)
			
		}
		
	    
	}

	render() {
		console.log('state of InputForm is:');
		console.log(this.state);
		return(
           <div>
				<label>
				    Enter the city name
				</label>
			    <input type="text" className="form-control"
		           		placeholder="City Name"
	            		onChange = {this.handleChange} 
	            		onKeyPress = {this.handleKeyPress}/>			
			</div>	
		)
	}
}

export default InputForm;