import React, { Component } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import Header from './Layout/Header'
import Form from './Layout/Form'
import Signin from './Layout/Signin';
import Container from './Layout/Container';


class App extends Component {
    
	render() {
    	return (	
    	  <BrowserRouter>
					<main>
							<Header />
							<Route exact path="/" component={Container}></Route>
					</main>
				</BrowserRouter>
    	)
	}
}
export default App