import React, { Component } from 'react'
import logo from './logo.png';
class Center extends Component {
    constructor(){
		super()
		this.state = {
			auth: false
		}
	}
	render() {
    	return (
				<section className="main-container">					
					<img className="img" src={logo} />
					<form className="form">
						<div className="logo-div">
							<a href="#" className="link"><span className="logo">Photogram</span></a>
						</div>
						<div>
							<input type="text" className="input-login" placeholder="Phone number, username, or email" id="username" name="username" title="Username" />
						</div>
						<div>
							<input type="password" className="input-login" placeholder="Password" id="password" name="password" title="Password" />
						</div>
						<div>
							<button className="button button-primary button-large">Log In</button>
						</div>					
					</form>

					
				</section>	
    	)
	}
}
export default Center