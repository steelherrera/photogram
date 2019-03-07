import React, { Component } from 'react'
import LoginImg from '../../images/login.png';

class Signin extends Component {

    constructor(props){
        super(props);
        console.log(this.state, 'State signin component');
		this.state = {
			isLoggedIn: true
        };
    }
    
	render() {
    	return (
				<section className="main-container-login">
					<img className="login-img" src={LoginImg} />
					<div className="form">
						<div className="logo-div">
							<a href="#" className="link"><span className="logo">Photogram</span></a>
						</div>
						<div>
							<input type="text" className="input-login" placeholder="Teléfono, usuario, o email" id="username" name="username" title="Username" />
						</div>
						<div>
							<input type="password" className="input-login" placeholder="Contraseña" id="password" name="password" title="Password" />
						</div>
						<div>
							<button className="button button-primary button-large">Entrar</button>
						</div>
                        <div className="line-or-login">
                            <div className="login-inline left-right-lines"></div>
                            <div className="login-inline login-or-text">Ó</div>
                            <div className="login-inline left-right-lines"></div>
                        </div>
                        <div className="login-facebook-container">
                            <button className="login-facebook-button">
                                <span></span>
                                <span>Entrar con Facebook</span>
                            </button>
                        </div>
                        <a className="forgot-pass-link" href="#">¿Olvidaste tu contraseña?</a>
					</div>
				</section>
    	)
	}
}

export default Signin