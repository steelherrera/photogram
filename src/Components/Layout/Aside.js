import React, { Component } from 'react'

class Aside extends Component {
    
	render() {
    	return (
			
			<aside className="aside">
				<section className="section">
					<h2 className="title">Latest tweets</h2>							
						<ul className="list">
							<li className="item-list"><a href="#">lorem ipsum dior amet ...</a></li>
							<li className="item-list"><a href="#">lorem ipsum dior amet ...</a></li>
							<li className="item-list"><a href="#">lorem ipsum dior amet ...</a></li>
							<li className="item-list"><a href="#">lorem ipsum dior amet ...</a></li>
							<li className="item-list"><a href="#">lorem ipsum dior amet ...</a></li>
						</ul>	
				</section>
				<section className="section">
					<h2 className="title">Who to follow</h2>							
						<ul className="list">
							<li className="item-list item-list-who">
								<a href="#"><img src={userIcon} className="image" />Name <span className="username">@username</span></a>
								<button className="button button-secondary">Follow</button>								
							</li>
							
						</ul>	
				</section>
				<section className="section">
					<h2 className="title">Trends</h2>							
						<ul className="list">
							<li className="item-list"><a href="#">#lorem ipsum</a><small className="small">1000 tweets</small></li>
							<li className="item-list"><a href="#">#lorem ipsum</a><small className="small">1000 tweets</small></li>
							<li className="item-list"><a href="#">#lorem ipsum</a><small className="small">1000 tweets</small></li>
							<li className="item-list"><a href="#">#lorem ipsum</a><small className="small">1000 tweets</small></li>
							<li className="item-list"><a href="#">#lorem ipsum</a><small className="small">1000 tweets</small></li>
						</ul>	
				</section>
			</aside>
    	)
	}
}
export default Aside