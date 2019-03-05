import React, { Component } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import Header from './Layout/Header'
import Footer from './Layout/Footer'

class App extends Component {
    
	render() {
    	return (
    	  <BrowserRouter>
					<main>
							<Header />
							<Footer />
					</main>
				</BrowserRouter>
    	)
	}
}
export default App