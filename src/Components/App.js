import React, { Component } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import Header from './Layout/Header'
import Container from './Layout/Container'
import Footer from './Layout/Footer'
import Profile from './Content/Profile'

class App extends Component {
    
	render() {
    	return (
			<BrowserRouter>
				<main>
					<Header></Header>
					<Profile></Profile>
					<Footer></Footer>
				</main>
			</BrowserRouter>
    	)
	}
}
export default App