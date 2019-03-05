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
			</aside>
    	)
	}
}
export default Aside