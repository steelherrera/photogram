import React, { Component } from 'react';
import Modal from '../Modal/Modal';
import Backdrop from '../Backdrop/Backdrop';
import FileBase64 from 'react-filebase64';
import { NotificationManager } from 'react-notifications'
import { Link } from 'react-router-dom';
let add = false;
let data;
const url = "https://6vkudxd0g7.execute-api.us-east-1.amazonaws.com/dev/users/post";
const timeout = 10000;

const datos = [{
    "userId": "millerb",
    "name": "Miller Bonilla",
    "posts": [{ "picUrl": "https://i.avoz.es/default/2019/02/26/00121551208683005769902/Foto/HF27C11F1_201630.jpg" }, { "picUrl": "http://as01.epimg.net/tikitakas/imagenes/2018/11/01/portada/1541090901_594075_1541091249_noticia_normal.jpg" }, { "picUrl": "http://scd.es.rfi.fr/sites/espanol.filesrfi/imagecache/rfi_large_600_338/sites/images.rfi.fr/files/aefimagesnew/aef_image/agujero_negro.png" }, { "picUrl": "https://instagram.fbaq2-1.fna.fbcdn.net/vp/5fb60cf2ba940e7f1ec673a12a93b44a/5D15EFFA/t51.2885-15/sh0.08/e35/s750x750/29091061_164764814336315_7610440933342969856_n.jpg?_nc_ht=instagram.fbaq2-1.fna.fbcdn.net" }],
    "description": "Hola"
}, {
    "userId": "waldronl",
    "name": "Luis Garcia",
    "picUrl": "http://as01.epimg.net/tikitakas/imagenes/2018/11/01/portada/1541090901_594075_1541091249_noticia_normal.jpg",
    "description": "Como"
}, {
    "userId": "steelh",
    "name": "Steel Herrera",
    "picUrl": "http://scd.es.rfi.fr/sites/espanol.filesrfi/imagecache/rfi_large_600_338/sites/images.rfi.fr/files/aefimagesnew/aef_image/agujero_negro.png",
    "description": "Estas"
}]

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
const buildRequestGet = () => {
    return {
        method: 'GET',
        timeout: timeout,
        mode: 'cors',
        headers: new Headers({
            "Content-Type": "application/json",
            "Accept": "application/json"
        })
    };
};
class Profile extends Component {
    componentDidMount(userId) {
        const request = buildRequestGet();
        fetch("https://6vkudxd0g7.execute-api.us-east-1.amazonaws.com/dev/users/" + datos[0].userId, request)
            .then(response => response.json())
            .then(data => this.setState({ data: data }));
        //console.log(this.state.data)
    }
    componentWillMount() {
        this.setState(JSON.parse(localStorage.getItem("user")));
    }
    constructor(props) {
        super(props);

        this.state = {
            adding: false,
            files: [],
            value: '',
            data
        };
        this.addModalHandler = this.addModalHandler.bind(this);
        this.cancelHandler = this.cancelHandler.bind(this);
        this.addHandler = this.addHandler.bind(this);
        this.getFiles = this.getFiles.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    addModalHandler(event) {
        this.setState({ adding: true });
    }
    cancelHandler(event) {
        this.setState({ adding: false });
    }
    addHandler(event) {
        event.preventDefault();
        this.setState({ value: event.target.value.toUpperCase() });
        const form = new FormData(event.target);
        const data = {
            "userPic": this.state.files,
            "description": this.state.value
        };
        console.log(data.userPic)

        if (data.selectedFile === null) {
            NotificationManager.error('Seleccione un archivo.');
        } else {
            const request = buildRequest(data);

            fetch(url, request).then(res => res.json()).catch((err) => {
                console.log(err);
            }).then((res) => {
                if (res.code === 200) {
                    this.props.history.push("/user/WaldronL");
                } else if (res.code === 500) {
                    NotificationManager.error('Hay un error en sus datos.');
                }
            });
        }
    }

    getFiles(files) {
        this.setState({ files: files })
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }


    createRowPosts() {
        let rowPosts = []
        for (let j = 0; j < 3; j++) {
            if (j == 0 && add == false) {
                add = true
                rowPosts.push(
                    <div className="publication-item">
                        <a className="publication-item-container" href="#"><button className="publication-image" onClick={this.addModalHandler}>Agregar publicacion</button></a>
                    </div>
                )
            } else {
                rowPosts.push(
                    <div className="publication-item">
                        <a className="publication-item-container" href="#"><img className="publication-image" src={datos[0].posts[j].picUrl}></img></a>
                    </div>
                )
            }
        }

        return rowPosts
    }

    createPosts() {
        let posts = []
        console.log(Math.ceil(datos[0].posts.length / 3))
        for (let j = 0; j < Math.ceil(datos[0].posts.length / 3); j++) {
            posts.push(
                <div className="publication-container">
                    <div className="publication-row">
                        {this.createRowPosts()}
                    </div>
                </div>
            )
        }
        return posts
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
                                onCancel={this.cancelHandler}
                                onAdd={this.addHandler}
                            >   <form onSubmit={this.addHandler}>
                                    <div>
                                        <FileBase64
                                            onDone={this.getFiles.bind(this)}
                                        />
                                    </div>
                                    <div>
                                        <input type="text" placeholder="Agrega una descripción" id="description" name="description" value={this.state.value} onChange={this.handleChange} />
                                    </div>
                                </form>
                            </Modal>)}
                        <header className="profile-header">

                            <div className="profile-pic">
                                <a className="icon-container" href="#">
                                    {
                                        (this.state.profilePicUrl === null) ?
                                            <img className="profile-usericon" src="http://www.sbcs.edu.tt/wp-content/uploads/2016/04/profile-default.png" />
                                            :
                                            <img className="profile-usericon" src={this.state.profilePicUrl} />
                                    }

                                </a>
                            </div>
                            <section className="profile-section">
                                <div className="name-container">
                                    <h2 className="profile-name">{datos[0].userId}</h2>
                                    <button className="profile-button">Seguir</button>
                                </div>
                                <ul className="profile-numbers">
                                    <a href="#"><li className="profile-number-item">3 publicaciones</li></a>
                                    <a href="#"><li className="profile-number-item">2 seguidores</li></a>
                                    <a href="#"><li className="profile-number-item">2 seguidos</li></a>
                                </ul>

                                <div className="description-container">
                                    <h2 className="description">{datos[0].name}</h2>
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
                            {this.createPosts()}
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )

    }
}
export default Profile