import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Header from './Layout/Header'
import Container from './Layout/Container'
import Footer from './Layout/Footer'
import Profile from './Content/Profile'
import Signin from './Layout/Signin';

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
					<Route exact path="/photogram-react/" component={Container} /> 
					<Route path="/photogram-react/signin" component={Signin}></Route>
					<Route path="/photogram-react/user/:userId" component={Profile}></Route>
					<Footer />
				</main>
			</Router>
    	)
	}
}
export default App

/*<Route path="/signup" component={Signup}></Route>*/