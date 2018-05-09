// Importing modules
import React from 'react';
import { Link } from 'react-router-dom';
import lodash from 'lodash';

// Importing css
import './year.css';

// Importing components
import Year3Store from '../../stores/year3Store.js';
import Module from '../containers/modules/modules.jsx';
import PercentageCalculator from '../percentageCalculator/percentageCalculator.jsx';

export default class Year3 extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			year3Modules: Year3Store.getAll(),
			showPopup: false,
		};
	}

	// On mount updating the state
	componentWillMount() {
		Year3Store.on('change', this.getYear3);
	}

	componentDidMount() {
		window.scrollTo(0, 0);
	}

	// Removing all listeners for old components
	componentWillUnmount() {
		Year3Store.removeListener('change', this.getYear3);
	}

	// Updating the state
	getYear3 = () => {
		this.setState({
			year3Modules: Year3Store.getAll(),
		});
	}

	// Mapping the state to Module
	renderModule() {
		const props = lodash.omit(this.props.year3Modules, 'modules');
		return lodash.map(this.state.year3Modules, (modules, i) => <Module key={i} {...modules} {...props}/>);
	}

	render() {
		return (
			<div>
				<div className="YearGrid">
					<h1 className="title">
						Year3
					</h1>
					<div className="modules">
						{this.renderModule()}
					</div>
					<div className="navWrapper">
						<Link className="button back" to="/year2">Back</Link>
						<Link className="button next" to="/overview">Next</Link>
					</div>
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
