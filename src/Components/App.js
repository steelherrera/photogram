import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Header from './Layout/Header'
import Container from './Layout/Container'
import Footer from './Layout/Footer'
import Profile from './Content/Profile'

class App extends Component {
	
	constructor(props){
		super(props);
		this.state = {
			isLoggedIn: false
		};
	}

	render() {
    	return (
			<Router>
				<main>
					<Header />
					<Route exact path="/" render={() => <Container isLoggedIn={this.state.isLoggedIn} />} /> 
					<Route path="/user/:userId" component={Profile}></Route>
					<Footer />
				</main>
			</Router>
    	)
	}
}
export default App

/*<Route path="/signup" component={Signup}></Route>*/