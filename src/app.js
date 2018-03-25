import React, { Component } from 'react';
import Topbar from './components/topbar';
import Header from './components/header';
import Portfolio from './components/portfolio';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';

class App extends Component {
	render() {
		return (
			<div id="page-top">
				<Topbar />
				<Header />
				<Portfolio />
				<About />
				<Contact />
				<Footer />

				<div className="copyright py-4 text-center text-white">
					<div className="container">
						<small>Copyright &copy; Your Website 2018</small>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
