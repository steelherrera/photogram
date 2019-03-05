import React, { Component } from 'react'

import {Link} from 'react-router-dom'

function search(){
		
}

class Header extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isWriting: true
		};
		this.handleChange = this.handleChange.bind(this);
		this.updateWriting = this.updateWriting.bind(this);
	}

	updateWriting(event){
		console.log(event);
		this.setState({isWriting: true});
	}

	handleChange(event) {
	}

	render() {
    	return (
			<header className="header">
				<div className="container">
					<div className="logo-div">
						<a href="#" className="link"><span className="icon-pictures icon-font"></span><span className="logo">Photogram</span></a>
					</div>
					<div className="search-div">
						<input className="input input-search" type="text" name="search-user" placeholder="Buscar"/>
						<span className="icon-search input-icon"></span>
					</div>
					<div className="nav-icons">
						<nav className="nav">
							<ul className="nav-list">
								<li className="nav-icon"><a href="#"><span className="icon-notifications_active"></span></a></li>
								<li className="nav-icon"><a href="#"><span className="icon-user-o"></span></a></li>
								<li className="nav-icon"><a href="#"><span className="icon-exit_to_app"></span></a></li>
							</ul>
						</nav>
					</div>
				</div>
			</header>
    	)
	}
}
export default Header
/*{this.state.isWriting === false &&
						<div className="container-search-div">
							<form className="search-form">
								<div className="search-input">
									<input className="input" type="text" name="search-user" placeholder="Buscar"/>
									<div className="text-div input-div" onClick={this.updateWriting}><div className="input-div2"><span className="icon-search input-icon"></span><span className="input-text-span">Buscar</span></div></div>
								</div>
							</form>
						</div>	
					}
					{this.state.isWriting === true &&
							
					}*/