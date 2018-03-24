import React, { Component } from 'react';

export default class Contact extends Component {
	render() {
		return (
			<section id="contact">
				<div className="container">
					<h1>Contact Me</h1>

					<form>
						<div className="form-group">
							<label htmlFor="name">Name</label>
							<input
								type="text"
								className="form-control"
								id="name"
								placeholder="John Doe"
							/>
						</div>
						<div className="form-group">
							<label htmlFor="email">Email Address</label>
							<input
								type="text"
								className="form-control"
								id="email"
								placeholder="user@example.com"
							/>
						</div>
						<div className="form-group">
							<label htmlFor="phone">Phone Number</label>
							<input
								type="text"
								className="form-control"
								id="phone"
								placeholder="+1 (809) 555-5555"
							/>
						</div>
						<div className="form-group">
							<label htmlFor="message">Message</label>
							<textarea className="form-control" id="message" rows="3" />
						</div>
					</form>
				</div>
			</section>
		);
	}
}
