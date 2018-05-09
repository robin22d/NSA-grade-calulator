import React from 'react';
import lodash from 'lodash';
import { Link } from 'react-router-dom';

import './overview.css';

import YearsStore from '../../stores/yearsStore.js';
import OverviewYear from './overviewYear.jsx';

export default class Overview extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			overview: YearsStore.getAll(),
		};
		YearsStore.getYear2Grade();
		YearsStore.getYear3Grade();
	}

	componentWillMount() {
		YearsStore.on('change', this.getOverview);
	}

	componentWillUnmount() {
		YearsStore.removeListener('change', this.getOverview);
	}

	getOverview = () => {
		this.setState({
			overview: YearsStore.getAll(),
		});
	}

	renderYearOverview =() =>{
		const props = lodash.omit(this.props.overview, 'year');
		return lodash.map(this.state.overview, (year, i) => <OverviewYear key={i} {...year} {...props}/>);
	}

	render() {
		console.log('Overview: ', this.state.overview);
		return (
			<div>
				<h1>
					Overview
				</h1>
				{this.renderYearOverview()}
				<div className="overAllGrade">
					Over All Grade:
				</div>
				<div className="navWrapper">
					<Link className="button back" to="/year3">Back</Link>
					<Link className="button next" to="/">Home</Link>
				</div>
			</div>
		);
	}
}
