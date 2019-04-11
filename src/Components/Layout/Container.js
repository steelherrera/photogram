import React, { Component } from 'react'
import Center from './Center'
import { Redirect } from 'react-router'

class Container extends Component {
	
	constructor(props){
		super(props);
	}

	render() {
		console.log(localStorage.getItem("user"));
		if(localStorage.getItem("user") === null){
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