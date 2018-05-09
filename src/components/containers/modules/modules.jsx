import React from 'react';
import lodash from 'lodash';

import './modules.css';

import * as YearActions from '../../../actions/yearActions';

import Assignments from '../assignments/assignments.jsx';
import Calculator from '../../../utils/calculator.js';

export default class Module extends React.Component {
	renderAssignments() {
		const props = lodash.omit(this.props.content, 'content');
		return lodash.map(this.props.content, (content, i) => <Assignments key={i} {...content} {...props} updateGrade={this.updateGrade.bind(this)}/>);
	}

	render() {
		const {title, mark, grade} = this.props;
		return (
			<div className="moduleGrid">
				<div className=" moduleTitle">{title}</div>

				<div className="assessmentTitle">Assessment</div>
				<div className="weightingTitle">Weighting</div>
				<div className="markTitle">Mark</div>
				<div className="gradeTitle">Grade</div>

				<div className="assignments">
					{this.renderAssignments()}
				</div>

				<div className="moduleMark">Module Mark:</div>
				<div className="overallMark" > {mark} % </div>
				<div className="moduleGrade">Module Grade:</div>
				<div className="overallGrade"> {grade} </div>

			</div>
		);
	}

	updateGrade(assessmentId, grade, percentage, mark) {
		if (this.props.year === '2') {
			YearActions.editYear2AssignmentGrade(this.props.id, assessmentId, grade, percentage, mark);

			const moduleMark = Calculator.calculateModuleGrade(this.props, this.props.content);
			const moduleGrade = Calculator.checkGrade(moduleMark);
			const modulePercentage = Calculator.calculateModulePercentage(moduleMark, this.props.credits);

			YearActions.editYear2ModuleGrade(this.props.id, moduleMark, moduleGrade, modulePercentage);
		} else {
			YearActions.editYear3AssignmentGrade(this.props.id, assessmentId, grade, percentage, mark);

			const moduleMark = Calculator.calculateModuleGrade(this.props, this.props.content);
			const moduleGrade = Calculator.checkGrade(moduleMark);
			const modulePercentage = Calculator.calculateModulePercentage(moduleMark, this.props.credits);

			YearActions.editYear3ModuleGrade(this.props.id, moduleMark, moduleGrade, modulePercentage);
		}
	}
}
