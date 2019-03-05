import React, { Component } from 'react'

class Footer extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isWriting: true
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
	}

	render() {
    	return (
			<footer></footer>
    	)
	}
}
export default Footer