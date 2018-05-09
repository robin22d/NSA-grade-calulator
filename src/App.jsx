import React, { Component } from 'react';
import logo from './logo.jpg';
import './App.css';

import Router from './components/router.jsx';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">NSA Grade Calculator</h1>
				</header>
				<div id="wrapper">
					<Router/>
				</div>
			</div>
		);
	}
}

export default App;
