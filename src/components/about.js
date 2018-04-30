import React, { Component } from 'react';
import CVdownload from '../CV_Max_Medina.pdf';

export default class About extends Component {
	render() {
		return (
			<section id="about" className="about">
				<div className="container">
					<h1 className="text-center text-uppercase text-secondary mb-0">
						About Me
					</h1>
					<hr className="star-dark mb-5" />
					<div className="row align-items-center">
						<div className="offset-lg-2 col-lg-8">
							<p className="lead text-justify">
								Max Medina is a passionate Software Developer with 4 years of
								professional experiences working with software companies of
								different areas. Specializes in using Java, JavaScript, and C#.
								Has strong knowledge of the core concepts of Software design &
								development including Architecture, Best Practices, Agile
								Methodologies and others. Has been doing full stack development
								using JavaScript and has deep knowledge of Java and C# acquired
								during work experiences and professional studies. Finally, Max
								is reliable, honest, organized, committed, with good human
								relationships skills and he is always focused on his goals not
								only completing them effectively but also with the best quality
								for the end users.
							</p>
						</div>
					</div>
					<div className="text-center mt-4">
						<a
							className="btn btn-xl btn-outline-dark"
							href={CVdownload}
							download
						>
							<i className="fa fa-download mr-2" />
							Download CV
						</a>
					</div>
				</div>
			</section>
		);
	}
}
