import React, { Component } from 'react';

export default class Contact extends Component {
	render() {
		return (
			<section id="contact" className="contact">
				<div className="container">
					<h1 className="text-center text-uppercase text-secondary mb-0">
						Contact Me
					</h1>
					<hr className="star-dark mb-5" />
					<div className="paper-form row justify-content-center">
						<div className="col-md-4 col-sm-8">
							<div className="card shadow">
								<address className="card-address">
									<p className="text-center">
										<strong>Max Medina</strong>
									</p>
									<br />
									<span>
										<i className="fa fa-envelope" />
										<a href="mailto:maxmedina05@gmail.com">
											maxmedina05@gmail.com
										</a>
									</span>

									<br />
									<span>
										<i className="fa fa-linkedin" />
										<a href="https://www.linkedin.com/in/max-medina-082590a0/">
											Max Medina
										</a>
									</span>
								</address>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
