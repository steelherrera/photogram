import React, { Component } from 'react'
import Center from './Center'
import { Redirect } from 'react-router'
import Aside from './Aside'

class Container extends Component {
	
	constructor(props){
		super(props);
	}

	render() {
		if(this.props.isLoggedIn === false){
			console.log("Jiji");
			return (<Redirect to="/user/chupala" />);
		}
    	return (
			<section className="main container">
				<Center />
				
			</section>
    	);
	}
}
export default Container