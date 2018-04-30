import React, { Component } from 'react';

export default class Footer extends Component {
	render() {
		return (
			<footer className="footer text-center">
				<div className="container">
					<div className="row">
						<div className="col-md-6 mb-5 mb-lg-0">
							<h4 className="text-uppercase mb-4">Location</h4>
							<p className="lead mb-0">
								Santo Domingo
								<br />Dominican Republic
							</p>
						</div>
						<div className="col-md-6 mb-5 mb-lg-0">
							<h4 className="text-uppercase mb-4">Around the Web</h4>
							<ul className="list-inline mb-0">
								<li className="list-inline-item">
									<a
										className="btn btn-outline-light btn-social text-center rounded-circle"
										href="https://github.com/maxmedina05"
									>
										<i className="fa fa-fw fa-github" />
									</a>
								</li>
								<li className="list-inline-item">
									<a
										className="btn btn-outline-light btn-social text-center rounded-circle"
										href="https://twitter.com/maxmedina05"
									>
										<i className="fa fa-fw fa-twitter" />
									</a>
								</li>
								<li className="list-inline-item">
									<a
										className="btn btn-outline-light btn-social text-center rounded-circle"
										href="https://www.linkedin.com/in/max-medina-082590a0/"
									>
										<i className="fa fa-fw fa-linkedin" />
									</a>
								</li>
								<li className="list-inline-item">
									<a
										className="btn btn-outline-light btn-social text-center rounded-circle"
										href="#"
									>
										<i className="fa fa-fw fa-dribbble" />
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}
