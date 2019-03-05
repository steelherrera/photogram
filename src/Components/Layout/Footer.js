import React, { Component } from 'react'
class Footer extends Component {
    
	render() {
    	return (	
			<footer>
				<div className="container">													
					<ul className="nav-bar">
						<li className="nav-item"><a className="nav-link" href="#">INFORMACIÓN</a></li>
						<li className="nav-item"><a className="nav-link" href="#">AYUDA</a></li>
						<li className="nav-item"><a className="nav-link" href="#">IDIOMA</a></li>
                        <li className="copyrigth">&copy; 2019 PHOTOGRAM</li>
					</ul>
				</div>
			</footer>
    	)
	}
}
export default Footer