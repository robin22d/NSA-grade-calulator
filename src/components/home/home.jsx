import React from 'react';

import './home.css';

import { Link } from 'react-router-dom';

export default class Home extends React.Component {
	render() {
		return (
			<div>
				<h1>
					Home
				</h1>
				<div className="navWrapper">
					<Link className="button next" to="/year2">Next</Link>
				</div>
			</div>
		);
	}
}
