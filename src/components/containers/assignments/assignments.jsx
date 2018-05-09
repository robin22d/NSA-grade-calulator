import React from 'react';
import './assignments.css';

import Calculator from '../../../utils/calculator.js';

export default class Item extends React.Component {
	render() {
		const { assessment, weighting, percentage, grade } = this.props;
		return (
			<div className="assignmentGrid">
				<div className="assignment">
					{assessment}
				</div>

				<div className="assignment">
					{weighting}%
				</div>

				<div className="assignment">
					<input type="number" ref="grade" placeholder={percentage} onChange={this.setGrade.bind(this)}/> %
				</div>
				<div className="assignment"> {grade} </div>
			</div>
		);
	}

	setGrade() {
		const grade = Calculator.checkGrade(this.refs.grade.value);
		const mark = Calculator.calculateAssignmentPercentage(this.refs.grade.value, this.props.weighting);
		this.props.updateGrade(this.props.id, grade, this.refs.grade.value, mark);
	}
}
