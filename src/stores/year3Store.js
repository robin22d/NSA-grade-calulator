import { EventEmitter } from 'events';

import lodash from 'lodash';
import dispatcher from '../utils/dispatcher.js';

class Year3Store extends EventEmitter {
	constructor() {
		super();
		this.year3 =
			[
				{
					id: '1',
					title: 'Commercial Frameworks',
					mark: '',
					grade: '',
					year: '3',
					credits: '20',
					percentage: '',
					content: [
						{
							id: '6',
							assessment: 'Frameworks Portfolio',
							weighting: '50',
							grade: 'NA',
							percentage: 'NA',
							mark: '',
						},
						{
							id: '7',
							assessment: 'Coding Exercise',
							weighting: '50',
							grade: 'NA',
							percentage: 'NA',
							mark: '',
						},
					],
				},
				{
					id: '2',
					title: 'Adopting Technology',
					mark: '',
					grade: '',
					year: '3',
					credits: '20',
					percentage: '',
					content: [
						{
							id: '8',
							assessment: 'Portfolio of Presentations',
							weighting: '30',
							grade: 'NA',
							percentage: 'NA',
							mark: '',
						},
						{
							id: '9',
							assessment: 'Presentation of Business Case',
							weighting: '20',
							grade: 'NA',
							percentage: 'NA',
							mark: '',
						},
						{
							id: '10',
							assessment: 'Business Case',
							weighting: '50',
							grade: 'NA',
							percentage: 'NA',
							mark: '',
						},
					],
				},
				{
					id: '3',
					title: 'Emerging Technologies',
					mark: '',
					grade: '',
					year: '3',
					credits: '20',
					percentage: '',
					content: [
						{
							id: '11',
							assessment: 'Emerging Technologies Exam',
							weighting: '50',
							grade: 'NA',
							percentage: 'NA',
							mark: '',
						},
						{
							id: '12',
							assessment: 'Emerging Technologies Portfolio',
							weighting: '50',
							grade: 'NA',
							percentage: 'NA',
							mark: '',
						},
					],
				},
				{
					id: '4',
					title: 'Managing Change',
					mark: '',
					grade: '',
					year: '3',
					credits: '20',
					percentage: '',
					content: [
						{
							id: '13',
							assessment: 'Managing Change Business Case',
							 weighting: '40',
							 grade: 'NA',
							 percentage: 'NA',
							 mark: '',
						},
						{
							id: '14',
							assessment: 'Managing Change Exam',
							weighting: '60',
							grade: 'NA',
							percentage: 'NA',
							mark: '',
						},
					],
				},
				{
					id: '5',
					title: 'Large Team Project',
					mark: '',
					grade: '',
					year: '3',
					credits: '40',
					percentage: '',
					content: [
						{
							id: '15',
							assessment: 'Dissertation',
							weighting: '60',
							grade: 'NA',
							percentage: 'NA',
							mark: '',
						},
						{
							id: '16',
							assessment: 'Large Team Project Portfolio',
							weighting: '40',
							grade: 'NA',
							percentage: 'NA',
							mark: '',
						},
					],
				},
			];
	}

	getAll() {
		return this.year3;
	}

	editAssignmentGrade(moduleId, assignmentId, grade, percentage, mark) {
		const foundModule = lodash.find(this.year3, i => i.id === moduleId);
		const foundAssignment = lodash.find(foundModule.content, i => i.id === assignmentId);

		foundAssignment.grade = grade;
		foundAssignment.percentage = percentage;
		foundAssignment.mark = mark;

		this.emit('change');
	}

	editModuleGrade(moduleId, mark, grade, percentage) {
		const foundModule = lodash.find(this.year3, i => i.id === moduleId);

		foundModule.mark = mark;
		foundModule.grade = grade;
		foundModule.percentage = percentage;

		this.emit('change');
	}

	handleActions(action) {
		switch (action.type) {
		case 'EDIT_YEAR3_ASSIGNMENT_GRADE': {
			this.editAssignmentGrade(
				action.moduleId,
				action.assignmentId,
				action.grade,
				action.percentage,
				action.mark
			);
			break;
		} case 'EDIT_YEAR3_MODULE_GRADE': {
			this.editModuleGrade(
				action.moduleId,
				action.mark,
				action.grade,
				action.percentage
			);
			break;
		} default: {
			break;
		}
		}
	}
}

const year3Store = new Year3Store();

dispatcher.register(year3Store.handleActions.bind(year3Store));

export default year3Store;
