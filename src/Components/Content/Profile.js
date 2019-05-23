import React, { Component } from 'react';
import Modal from '../Modal/Modal';
import Backdrop from '../Backdrop/Backdrop';
import FileBase64 from 'react-filebase64';
import {NotificationManager} from 'react-notifications'
import {Link} from 'react-router-dom';
let file;
let data;
const url = "https://6vkudxd0g7.execute-api.us-east-1.amazonaws.com/dev/users/post";
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
class Profile extends Component {
    
    componentWillMount(){
        this.setState(JSON.parse(localStorage.getItem("user")));
    }
    constructor(props){
        super(props);
        
        this.state = {
            adding: false,
            files: [],
            value: ''
        };
        this.addModalHandler = this.addModalHandler.bind(this);
        this.cancelHandler = this.cancelHandler.bind(this);
        this.addHandler = this.addHandler.bind(this);
        this.getFiles = this.getFiles.bind(this);
        this.handleChange = this.handleChange.bind(this);
	}
    addModalHandler (event) {
        this.setState({adding: true});
    }    
    cancelHandler (event) {
        this.setState({adding: false});
    }  
    addHandler (event) {
        event.preventDefault();
        this.setState({value: event.target.value.toUpperCase()});
        const form = new FormData(event.target);
        const data = {
            "userPic": this.state.files,
            "description": this.state.value
        };
        console.log(data.userPic)
        
        if(data.selectedFile === null){
            NotificationManager.error('Seleccione un archivo.');
        }else{
            const request = buildRequest(data);
            
            fetch(url, request).then( res => res.json()).catch((err) => {
                console.log(err);
            }).then( (res) => {
                if(res.code === 200){
                    this.props.history.push("/user/WaldronL");
                }else if(res.code === 500){
                    NotificationManager.error('Hay un error en sus datos.');
                }
            });
        }
    } 
    
    getFiles(files){
        this.setState({ files: files })
    }
    handleChange(event) {
        this.setState({value: event.target.value});
      }
	render() {
    	return (
            <React.Fragment>
		
            <section className="profile">	
                <div className="container">
                {this.state.adding && <Backdrop />}
                {this.state.adding && (
                <Modal 
                title="Agregar Publicación" 
                canCancel 
                canAdd
                onCancel = {this.cancelHandler}
                onAdd = {this.addHandler}
                >   <form onSubmit={this.addHandler}>
                        <div>
                        <FileBase64
                            onDone={ this.getFiles.bind(this) } 
                        />
                        </div>
                        <div>
                            <input type = "text" placeholder = "Agrega una descripción" id="description" name="description" value={this.state.value} onChange={this.handleChange}/>
                        </div>
                    </form>
                </Modal>)}
                    <header className ="profile-header">
                        
                        <div className ="profile-pic">
                            <a className="icon-container" href="#">
                                {
                                    (this.state.profilePicUrl === null) ?
                                        <img className="profile-usericon" src="http://www.sbcs.edu.tt/wp-content/uploads/2016/04/profile-default.png"/>
                                    :
                                        <img className="profile-usericon" src={this.state.profilePicUrl}/>
                                }
                                
                            </a>
                        </div>
                        <section className ="profile-section">
                            <div className ="name-container">
                                <h2 className ="profile-name">{this.state.username}</h2>
                                <button className ="profile-button">Seguir</button>
                            </div>
                            <ul className="profile-numbers">
                                <a href="#"><li className="profile-number-item">3 publicaciones</li></a>
                                <a href="#"><li className="profile-number-item">2 seguidores</li></a>
                                <a href="#"><li className="profile-number-item">2 seguidos</li></a>
                            </ul>
                            
                            <div className="description-container">
                                <h2 className = "description">{this.state.name}</h2>
                                <h2 className="description">
                                {
                                    (this.state.profileDescription === null || this.state.profileDescription === "") ?
                                    "Añadir descripción"
                                    :
                                    this.state.profileDescription
                                }
                                </h2>
                            </div>
                        </section>
                    </header>
                    
                    <div className="publication-row-container">
                        <div className="publication-bar">
                            <a className="publication-item" href="#">
                                    <div className="publication-tag-image"></div>
                                    <li className="publication-tag-name">PUBLICACIONES</li>
                            </a>
                            <a className="publication-item" href="#">
                            <span className="tagged-tag">
                                    <div className="tagged-tag-image"></div>
                                    <li className="tagged-tag-name">ETIQUETADAS</li>
                                </span>
                            </a>
                        </div>
                        <div className="publication-container">
                            <div className="publication-row">
                                <div className="publication-item">
                                    <a className="publication-item-container" href="#"><button className= "publication-image" onClick={this.addModalHandler}>Agregar publicacion</button></a>
                                </div>
                                <div className="publication-item">
                                    <a className="publication-item-container" href="#"><img className= "publication-image" src="https://instagram.fbaq2-1.fna.fbcdn.net/vp/5fb60cf2ba940e7f1ec673a12a93b44a/5D15EFFA/t51.2885-15/sh0.08/e35/s750x750/29091061_164764814336315_7610440933342969856_n.jpg?_nc_ht=instagram.fbaq2-1.fna.fbcdn.net"></img></a>
                                </div>
                                <div className="publication-item">
                                    <a className="publication-item-container" href="#"><img className= "publication-image" src="http://1.bp.blogspot.com/_3hAvzT1NqE8/TAiOU98H5DI/AAAAAAAAAHI/k-58wzxEovc/s1600/car-wallpaper-4.jpg"></img></a>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
			</section>
            </React.Fragment>
        )

	}
}
export default Profile