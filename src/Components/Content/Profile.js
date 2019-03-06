import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

class Profile extends Component {
    
	render() {
    	return (
			<section className="profile">					
				<div className="container">
                    <header className ="profile-header">
                        <div className ="profile-pic">
                        <a className="icon-container" href="#">
                                <img className="profile-usericon" src="https://instagram.fbaq2-1.fna.fbcdn.net/vp/18832080f54a7107cd0425aa6c3717c6/5D084C2C/t51.2885-19/s150x150/29403479_1687267934684705_3301383352883347456_n.jpg?_nc_ht=instagram.fbaq2-1.fna.fbcdn.net"></img></a>
                        </div>
                        <section className ="profile-section">
                            <div className ="name-container">
                                <h2 className ="profile-name">steelherrera</h2>
                                <button className ="profile-button">Seguir</button>
                            </div>
                            <ul className="profile-numbers">
                                <a href="#"><li className="profile-number-item">3 publicaciones</li></a>
                                <a href="#"><li className="profile-number-item">2 seguidores</li></a>
                                <a href="#"><li className="profile-number-item">2 seguidos</li></a>
                            </ul>
                            <div className="description-container">
                                <h2 className="description">descripción</h2>
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
                                    <a className="publication-item-container" href="#"><img className= "publication-image" src="https://instagram.fbaq2-1.fna.fbcdn.net/vp/5fb60cf2ba940e7f1ec673a12a93b44a/5D15EFFA/t51.2885-15/sh0.08/e35/s750x750/29091061_164764814336315_7610440933342969856_n.jpg?_nc_ht=instagram.fbaq2-1.fna.fbcdn.net"></img></a>
                                </div>
                                <div className="publication-item">
                                    <a className="publication-item-container" href="#"><img className= "publication-image" src="http://1.bp.blogspot.com/_3hAvzT1NqE8/TAiOU98H5DI/AAAAAAAAAHI/k-58wzxEovc/s1600/car-wallpaper-4.jpg"></img></a>
                                </div>
                                <div className="publication-item">
                                    <a className="publication-item-container" href="#"><img className= "publication-image" src="https://besthqwallpapers.com/Uploads/29-1-2017/12953/thumb2-aston-martin-vanquish-s-2017-convertible-blue-vanquish-sports-car.jpg"></img></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
			</section>
    	)
	}
}
export default Profile