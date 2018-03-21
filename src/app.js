import React, { Component } from 'react';
import Topbar from './topbar';
import Header from './components/header';
import Portfolio from './components/portfolio';

class App extends Component {
	render() {
		return (
			<div>
				<Topbar />
				<Header />
				<Portfolio />
				<div className="container">Max's Portfolio</div>
			</div>
		);
	}
}

export default App;
