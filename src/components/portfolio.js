import React, { Component } from 'react';

export default class Portfolio extends Component {
	renderProjects() {
		const projects = [
			{
				title: 'Pizza Orderning App - El Pequeño Cesar',
				description:
					'This is an web app for ordering pizza.Powered with nodejs as backend and handlebars for its UI',
				imageUrl: 'http://via.placeholder.com/277x200',
				url: 'https://github.com/maxmedina05/pizza-app'
			},
			{
				title: 'Project 2',
				description:
					'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
				imageUrl: 'http://via.placeholder.com/277x200',
				url: 'https://github.com/maxmedina05/'
			},
			{
				title: 'Project 3',
				description:
					'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
				imageUrl: 'http://via.placeholder.com/277x200',
				url: 'https://github.com/maxmedina05/'
			}
		];

		return projects.map(p => (
			<div className="card" key={p.title}>
				<img className="card-img-top" alt="Card image cap" src={p.imageUrl} />
				<div className="card-body">
					<h5 className="card-title">
						{p.title}{' '}
						<a className="badge badge-danger project-url-link" href={p.url}>
							View
						</a>
					</h5>
					<p className="card-text">{p.description}</p>
				</div>
			</div>
		));
	}

	render() {
		return (
			<section id="portfolio" className="portfolio">
				<div className="container">
					<h1 className="text-center text-uppercase text-secondary mb-0">
						Portfolio
					</h1>
					<hr className="star-dark mb-5" />
					<div className="card-deck">{this.renderProjects()}</div>
				</div>
			</section>
		);
	}
}
