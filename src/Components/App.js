import React, { Component } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import Header from './Layout/Header'

class App extends Component {
    
	render() {
    	return (
    	  <BrowserRouter>
					<main>
							<Header />
					</main>
				</BrowserRouter>
    	)
	}
}
export default App