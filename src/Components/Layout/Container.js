import React, { Component } from 'react'
import Center from './Center'
import { Redirect } from 'react-router'

class Container extends Component {
	
	constructor(props){
		super(props);
	}

	render() {
		if(this.props.location.query === undefined){
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