import React, { Component } from 'react'
import {Link} from 'react-router-dom';
const url = 'https://6vkudxd0g7.execute-api.us-east-1.amazonaws.com/dev/users/post';

const timeout = 10000;

const buildRequest = () => {
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

const data = [{
    "user": "millerb",
    "picUrl": "https://i.avoz.es/default/2019/02/26/00121551208683005769902/Foto/HF27C11F1_201630.jpg",
    "description": "Hola"
}, {
    "user": "waldronl",
    "picUrl": "http://as01.epimg.net/tikitakas/imagenes/2018/11/01/portada/1541090901_594075_1541091249_noticia_normal.jpg",
    "description": "Como"
}, {
    "user": "steelherrera",
    "picUrl": "http://scd.es.rfi.fr/sites/espanol.filesrfi/imagecache/rfi_large_600_338/sites/images.rfi.fr/files/aefimagesnew/aef_image/agujero_negro.png",
    "description": "Estas"
}]

class Center extends Component{
    constructor(props){
        super(props);
        this.state = {
            auth: false,
            data: []
        };
        
    }
    
    componentDidMount() {
        const request = buildRequest();
        fetch(url, request)
          .then(response => response.json())
          .then(data => this.setState({ data: data }));
          //console.log(this.state.data)
    }

    createPost ()  {
        let post = []
        for (let j = 0; j < data.length; j++) {
          console.log(data[j].picUrl)
          post.push(
            <article className="post">
            <header className="post-header">
                <div className="header-inline icon">
                <a className="icon-container" href="#">
                <img className="header-usericon" src="https://instagram.fbaq2-1.fna.fbcdn.net/vp/18832080f54a7107cd0425aa6c3717c6/5D084C2C/t51.2885-19/s150x150/29403479_1687267934684705_3301383352883347456_n.jpg?_nc_ht=instagram.fbaq2-1.fna.fbcdn.net"></img></a></div>
                <div className="header-inline text"><Link to={"/user/" + data[j].user}><a className="" href="#">{data[j].user}</a></Link></div>
            </header>
            <div className="image-container">
                
                <img src={data[j].picUrl} className="post-image"></img>
            </div>
            <div className="post-footer">
                <h1>{data[j].description} </h1>
            </div>
        </article>
          )}
       
      return post
    }

    render() {
        return (
            <section className="center">
                <div>
                    <div className="main-container">
                        {this.createPost()}
                    </div>
                </div>
            </section>
        )
    }
}

export default Center