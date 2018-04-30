import React, { Component } from 'react';

export default class Topbar extends Component {
	renderNavs() {
		const links = ['portfolio', 'about', 'contact'];
		return links.map(link => (
			<li className="nav-link text-uppercase" key={link}>
				<a className="nav-link" href={'#' + link}>
					{link}
				</a>
			</li>
		));
	}

	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark-primary fixed-top">
				<a className="navbar-brand" href="#">
					Max Medina
				</a>
				<button
					className="navbar-toggler ml-auto"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ml-auto">{this.renderNavs()}</ul>
				</div>
				<div />
			</nav>
		);
	}
}
