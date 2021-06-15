import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import LoginImg from '../../images/login.png';
import {NotificationContainer, NotificationManager} from 'react-notifications'

const url = "https://6vkudxd0g7.execute-api.us-east-1.amazonaws.com/dev/users/login";
const timeout = 10000;

const buildRequest = (params) => {
    return {
        method: 'POST',
        body: JSON.stringify(params),
        timeout: timeout,
        mode: 'cors',
        headers: new Headers({
            "Content-Type": "application/json",
            "Accept": "application/json"
        })
    };
}

class Signin extends Component {

    constructor(props){
        super(props);
		this.state = {
			isLoggedIn: true
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	componentDidMount(){
		if(localStorage.getItem("user") !== null){
			this.props.history.push("/");
		}
	}
    

    handleSubmit(event) {
        event.preventDefault();
        const form = new FormData(event.target);
        const data = {          
            "username": form.get("username"),
            "pass": form.get("password"),
            
        };
        const request = buildRequest(data);
        fetch(url, request).then( res => res.json()).catch((err) => {
            console.log(err);
		}).then( (res) => {
			console.log(res);
			if(res.code === 200){
				localStorage.setItem("user", JSON.stringify(res.message.user));
				localStorage.setItem("token", res.message.token);
				this.props.history.push("/");
			}else if(res.code === 404){
				NotificationManager.error('Usuario no encontrado.');
			}else if(res.code === 500){
				NotificationManager.error('Hay un error en sus datos.');
			}
		 });
      }
    
	render() {
    	return (
				<section className="main-container-login">
					<img className="login-img" src={LoginImg} />
					<div className="outer-container">
						<form className="form" onSubmit={this.handleSubmit}>
							<div className="logo-div">
								<a href="#" className="link"><span className="logo">Photogram</span></a>
							</div>
							<NotificationContainer />
							<div>
								<input type="text" className="input-login" placeholder="Teléfono, usuario, o email" id="username" name="username" title="Username" />
							</div>
							<div>
								<input type="password" className="input-login" placeholder="Contraseña" id="password" name="password" title="Password" />
							</div>
							<div>
								<button className="button button-primary button-large">Entrar</button>
							</div>
							<a className="forgot-pass-link" href="#">¿Olvidaste tu contraseña?</a>
						</form>
						<div className="register">
							<span>¿No tienes una cuenta? <Link to={{pathname: "/signup", "query": {}}} className="register-link">Regístrate.</Link></span>
						</div>
					</div>
				</section>
    	)
	}
}

export default Signin