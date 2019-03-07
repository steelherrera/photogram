import React, { Component } from 'react'
import Center from './Center'
import { Redirect } from 'react-router'

class Container extends Component {
	
	constructor(props){
		super(props);
		console.log(props, 'Propsitos');
		console.log(this.state, "State Container");
	}

	render() {
		console.log(this.props, "State Container Render");
		console.log(this.props.location.query);
		if(this.props.location.query === undefined){
			console.log("Jiji");
			return (<Redirect to="/signin" />);
		}
    	return (
			<section className="main container">
				<Center />
				
			</section>
    	);
	}
}
export default Container