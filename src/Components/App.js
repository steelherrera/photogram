import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Header from './Layout/Header'
import Container from './Layout/Container'
import Footer from './Layout/Footer'
import Profile from './Content/Profile'
import Signin from './Layout/Signin';
import Signup from './Layout/Signup';

class App extends Component {
	
	constructor(props){
		super(props);
		this.state = {
			isLoggedIn: false
		};
		console.log(props);
	}

	render() {
    	return (
			<Router>
				<main>
					<Header />
					<Route exact path="/" component={Container} /> 
					<Route path="/signin" component={Signin}></Route>
					<Route path="/signup" component={Signup}></Route>
					<Route path="/user/:userId" component={Profile}></Route>
					<Footer />
				</main>
			</Router>
    	)
	}
}
export default App

/*<Route path="/signup" component={Signup}></Route>*/