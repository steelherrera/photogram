import React, { Component } from 'react'

class Center extends Component{
    constructor(props){
        super(props);
        this.state = {
            auth: false
        };
    }

    render() {
        return (
            <section className="center">
                <div>
                    <div className="main-container">
                        <article className="post">
                            <header className="post-header">
                                <div className="header-inline icon">
                                <a className="icon-container" href="#">
                                <img className="header-usericon" src="https://instagram.fbaq2-1.fna.fbcdn.net/vp/18832080f54a7107cd0425aa6c3717c6/5D084C2C/t51.2885-19/s150x150/29403479_1687267934684705_3301383352883347456_n.jpg?_nc_ht=instagram.fbaq2-1.fna.fbcdn.net"></img></a></div>
                                <div className="header-inline text"><a className="" href="#">steelherrera</a></div>
                            </header>
                            <div className="image-container">
                                <img src="https://instagram.fbaq2-1.fna.fbcdn.net/vp/5fb60cf2ba940e7f1ec673a12a93b44a/5D15EFFA/t51.2885-15/sh0.08/e35/s750x750/29091061_164764814336315_7610440933342969856_n.jpg?_nc_ht=instagram.fbaq2-1.fna.fbcdn.net" className="post-image"></img>
                            </div>
                            <div className="post-footer">
                            
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        )
    }
}

export default Center