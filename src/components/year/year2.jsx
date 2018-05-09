// Importing modules
import React from 'react';
import { Link } from 'react-router-dom';
import lodash from 'lodash';

// Importing css
import './year.css';

// Importing components
import Year2Store from '../../stores/year2Store.js';
import Module from '../containers/modules/modules.jsx';
import PercentageCalculator from '../percentageCalculator/percentageCalculator.jsx';

export default class Year2 extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			year2Modules: Year2Store.getAll(),
			showPopup: false,
		};
	}

	// On mount updating the state
	componentWillMount() {
		Year2Store.on('change', this.getYear2);
	}

	componentDidMount() {
		window.scrollTo(0, 0);
	}

	// Removing all listeners for old components
	componentWillUnmount() {
		Year2Store.removeListener('change', this.getYear2);
	}

	// Updating the state
	getYear2 = () => {
		this.setState({
			year2Modules: Year2Store.getAll(),
		});
	}

	// Mapping the state to Module
	renderModule() {
		const props = lodash.omit(this.props.year2Modules, 'modules');
		return lodash.map(this.state.year2Modules, (modules, i) => <Module key={i} {...modules} {...props}/>);
	}

	render() {
		return (
			<div className="YearGrid">
				<h1 className="title">
					Year2
				</h1>
				<div className="modules">
					{this.renderModule()}
				</div>
				<div className="navWrapper">
					<Link className="button back" to="/">Back</Link>
					<Link className="button next" to="/year3">Next</Link>
				</div>
				<button
					className="percentageCalculator button"
					onClick={this.togglePopup.bind(this)}
					alt="Percentage Calculator"
				>
					%
				</button>
				{this.state.showPopup ?
					<PercentageCalculator
						text="Close Me"
						closePopup={this.togglePopup.bind(this)}
					/>
					: null
				}
			</div>
		);
	}

	togglePopup() {
		this.setState({
		  showPopup: !this.state.showPopup,
		});
	}
}
