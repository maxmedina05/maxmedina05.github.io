import React, { Component } from 'react';

export default class Header extends Component {
	render() {
		return (
			<header id="header" className="header bg-primary text-white text-center">
				<div className="container">
					<img
						className="img-fluid mb-5 d-block mx-auto profile-image"
						src="/img/profile.jpg"
						alt=""
					/>
					<h1 className="text-uppercase mb-0">Max Medina</h1>
					<hr className="star-light" />
					<h2 className="font-weight-light mb-0">
						Computer Engineer - Web Developer - Polygot
					</h2>
				</div>
			</header>
		);
	}
}
