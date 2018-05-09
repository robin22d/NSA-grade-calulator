import React from 'react';

import './percentageCalculator.css';

import Calculator from '../../utils/calculator.js';

export default class PercentageCalculator extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			total: 0,
		};
	}

	render() {
		return (
			<div>
				<div className="popup_background"/>
				<div className="popup_inner popup_grid">
					<div className="header">
						<h1> Percentage Calculate </h1>
					</div>
					<div className="gradeTitle">
						Grade:
					</div>
					<div className="gradeEnter">
						<input ref="grade" onChange={this.calculateAssignmentPercentage.bind(this)}/>
					</div>
					<div className="outOfTitle">
						Out Of:
					</div>
					<div className="outOfEnter">
						<input ref="total" onChange={this.calculateAssignmentPercentage.bind(this)}/>
					</div>
					<div className="total">
						= {this.state.total}%
					</div>
					<div className="close">
						<button className="button" onClick={this.props.closePopup}>Close</button>
					</div>
				</div>
			</div>
		);
	}

	calculateAssignmentPercentage = () => {
		const percentage = Calculator.percentageCalculate(this.refs.total.value, this.refs.grade.value);
		console.log(percentage);
		this.setState({
			total: percentage,
		});
		console.log(this.state.total);
	}
}
