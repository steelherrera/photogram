import React, { Component } from 'react'

import {Link} from 'react-router-dom'
class Header extends Component {
    
	render() {
    	return (
				<header className="header">
                <a href="#" className="logo-link"><span className= "logo">Photogram</span></a>
				</header>
    	)
	}
}
export default Header