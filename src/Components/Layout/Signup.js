import React, { Component } from 'react'
import LoginImg from '../../images/login.png';

const url = "https://6vkudxd0g7.execute-api.us-east-1.amazonaws.com/dev/users";
const timeout = 10000;

const buildRequest = (params) => {
    return {
        method: 'POST',
        body: JSON.stringify(params),
        timeout: timeout,
        headers: { "Content-Type": "application/json" }
    };
}

class Signup extends Component {

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    

    handleSubmit(event) {
        event.preventDefault();
        const form = new FormData(event.target);
        const data = {
            "fName": form.get("fName"),
            "lName": form.get("lName"),
            "name": form.get("fName") + form.get("lName"),
            "username": form.get("username"),
            "pass": form.get("pass")
        };
        console.log(data);
        const request = buildRequest(data);
        fetch(url, request).then( res => res.json())
        .then( (res) => { console.log(res); });
      }

    
    
	render() {
    	return (
				<section className="main-container-register">
                    <img className="login-img" src={LoginImg} />
                    <form className="register-form" onSubmit={this.handleSubmit}>
                        <div className="logo-div">
							<a href="#" className="link"><span className="logo">Photogram</span></a>
						</div>
                        <div className="input-div">
							<input type="text" className="input-login" placeholder="Correo electrónico" id="email" name="email" title="Email" />
						</div>
						<div className="input-div">
							<input type="text" className="input-login" placeholder="Nombre" id="fName" name="fName" title="FName" />
						</div>
                        <div className="input-div">
							<input type="text" className="input-login" placeholder="Apellido" id="lName" name="lName" title="LName" />
						</div>
						<div className="input-div">
							<input type="text" className="input-login" placeholder="Nombre de usuario" id="username" name="username" title="Username" />
						</div>
						<div className="input-div">
							<input type="password" className="input-login" placeholder="Contraseña" id="pass" name="pass" title="Pass" />
						</div>
						<div>
							<button className="button button-primary button-large">Resgístrate</button>
						</div>
					</form>
				</section>
    	)
	}
}

export default Signup