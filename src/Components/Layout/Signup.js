import React, { Component } from 'react'

class Signup extends Component {

    constructor(props){
        super(props);
        
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }
    

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        data.name = data.get('fName')+" "+data.get('lName');
        console.log(data.name);
        fetch('https://6vkudxd0g7.execute-api.us-east-1.amazonaws.com/dev/users', {
          method: 'POST',
          body: data
        });
      }

    
    
	render() {
    	return (
				<section className="main-container-login">
                    <form className="form" style={{ height: 500 }} onSubmit={this.handleSubmit}>
                    <div className="logo-div">
							<a href="#" className="link"><span className="logo">Photogram</span></a>
						</div>
                    <div className="login-facebook-container">
                            <button className="button button-primary button-large">
                                <span></span>
                                <span>Regístrate con Facebook</span>
                            </button>
                        </div>                     
                        <div className="line-or-login">
                            <div className="login-inline left-right-lines"></div>
                            <div className="login-inline login-or-text">Ó</div>
                            <div className="login-inline left-right-lines"></div>
                        </div>
                        <div>
							<input type="text" className="input-login" placeholder="Correo electrónico" id="email" name="email" title="Email" />
						</div>
						<div>
							<input type="text" className="input-login" placeholder="Nombre" id="fName" name="fName" title="FName" />
						</div>
                        <div>
							<input type="text" className="input-login" placeholder="Apellido" id="lName" name="lName" title="LName" />
						</div>
						<div>
							<input type="text" className="input-login" placeholder="Nombre de usuario" id="username" name="username" title="Username" />
						</div>
						<div>
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