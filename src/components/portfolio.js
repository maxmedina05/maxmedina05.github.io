import React, { Component } from 'react';

export default class Portfolio extends Component {
	render() {
		return (
			<section id="portfolio">
				<div className="container">
					<h1>Portfolio</h1>
					<div className="card-deck">
						<div className="card">
							<img
								className="card-img-top"
								alt="Card image cap"
								src="http://via.placeholder.com/277x200"
							/>
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">
									This is a longer card with supporting text below as a natural
									lead-in to additional content. This content is a little bit
									longer.
								</p>
								<p className="card-text">
									<small className="text-muted">Last updated 3 mins ago</small>
								</p>
							</div>
						</div>
						<div className="card">
							<img
								className="card-img-top"
								alt="Card image cap"
								src="http://via.placeholder.com/277x200"
							/>
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">
									This is a longer card with supporting text below as a natural
									lead-in to additional content. This content is a little bit
									longer.
								</p>
								<p className="card-text">
									<small className="text-muted">Last updated 3 mins ago</small>
								</p>
							</div>
						</div>
						<div className="card">
							<img
								className="card-img-top"
								alt="Card image cap"
								src="http://via.placeholder.com/277x200"
							/>
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">
									This is a longer card with supporting text below as a natural
									lead-in to additional content. This content is a little bit
									longer.
								</p>
								<p className="card-text">
									<small className="text-muted">Last updated 3 mins ago</small>
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
