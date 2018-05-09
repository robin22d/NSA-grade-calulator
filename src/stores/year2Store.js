import { EventEmitter } from 'events';

import lodash from 'lodash';
import dispatcher from '../utils/dispatcher.js';

class Year2Store extends EventEmitter {
	constructor() {
		super();
		this.year2 =
			[
				{
					id: '1',
					title: 'Database Systems',
					mark: '', // Mark is the mark that was gained in a persentage e.g. 50%
					grade: '', // Grade is the number that was gain e.g. '1', '2.1', '2.2'
					year: '2',
					credits: '20', // Weighting of the module is the number of credits its worth
					percentage: '',
					content: [
						{
							id: '7',
							assessment: 'Db Portfolio',
							weighting: '60',
							grade: 'NA',
							percentage: 'NA',
							mark: ''},
						{
							id: '8',
							assessment: 'Db Exam',
							weighting: '40',
							grade: 'NA',
							percentage: 'NA',
							mark: ''},
					],
				},
				{
					id: '2',
					title: 'DevOps',
					mark: '',
					grade: '',
					year: '2',
					credits: '20',
					percentage: '',
					content: [
						{
							id: '9',
							assessment: 'DevOps Portfolio',
							weighting: '40',
							grade: 'NA',
							percentage: 'NA',
							mark: '',
						},
						{
							id: '10',
							assessment: 'Portfolio on CI set up',
							weighting: '40',
							grade: 'NA',
							percentage: 'NA',
							mark: '',
						},
						{
							id: '11',
							assessment: 'Class Test',
							weighting: '20',
							grade: 'NA',
							percentage: 'NA',
							mark: '',
						},
					],
				},
				{
					id: '3',
					title: 'Commercial Applications with Java',
					mark: '',
					grade: '',
					year: '2',
					credits: '20',
					percentage: '',
					content: [
						{
							id: '12',
							assessment: 'Java Portfolio',
							weighting: '100',
							grade: 'NA',
							percentage: 'NA',
							mark: '',
						},
					],
				},
				{
					id: '4', title: 'Security',
					mark: '',
					grade: '',
					year: '2',
					credits: '20',
					percentage: '',
					content: [
						{
							id: '13',
							assessment: 'Penetration test report',
							weighting: '20',
							grade: 'NA',
							percentage: 'NA',
							mark: '',
						},
						{
							id: '14',
							assessment: 'Analysis and Risk Assessment',
							weighting: '20',
							grade: 'NA',
							percentage: 'NA',
							mark: '',
						},
						{
							id: '15',
							assessment: 'Security Portfolio',
							weighting: '60',
							grade: 'NA',
							percentage: 'NA',
							mark: '',
						},
					],
				},
				{
					id: '5', title: 'Performance and Scalability',
					mark: '',
					grade: '',
					year: '2',
					credits: '20',
					percentage: '',
					content: [
						{
							id: '16',
							assessment: ' Performance Portfolio',
							weighting: '60',
							grade: 'NA',
							percentage: 'NA',
							mark: '',
						},
						{
							id: '17',
							assessment: 'Performance Exam',
							weighting: '40',
							grade: 'NA',
							percentage: 'NA',
							mark: '',
						},
					],
				},
				{
					id: '6', title: 'Agile Project Management',
					mark: '',
					grade: '',
					year: '2',
					credits: '20',
					percentage: '',
					content: [
						{
							id: '18',
							assessment: 'Agile Portfolio',
							weighting: '80',
							grade: 'NA',
							percentage: 'NA',
							mark: '',
						},
						{
							id: '19',
							assessment: 'Reflective Essay',
							weighting: '20',
							grade: 'NA',
							percentage: 'NA',
							mark: '',
						},
					],
				},
			];
	}

	getAll() {
		return this.year2;
	}

	editAssignmentGrade(moduleId, assignmentId, grade, percentage, mark) {
		const foundModule = lodash.find(this.year2, i => i.id === moduleId);
		const foundAssignment = lodash.find(foundModule.content, i => i.id === assignmentId);

		foundAssignment.grade = grade;
		foundAssignment.percentage = percentage;
		foundAssignment.mark = mark;

		this.emit('change');
	}

	editModuleGrade(moduleId, mark, grade, percentage) {
		const foundModule = lodash.find(this.year2, i => i.id === moduleId);

		foundModule.mark = mark;
		foundModule.grade = grade;
		foundModule.percentage = percentage;

		this.emit('change');
	}

	handleActions(action) {
		switch (action.type) {
		case 'EDIT_YEAR2_ASSIGNMENT_GRADE': {
			this.editAssignmentGrade(
				action.moduleId,
				action.assignmentId,
				action.grade,
				action.percentage,
				action.mark
			);
			break;
		} case 'EDIT_YEAR2_MODULE_GRADE': {
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

const year2Store = new Year2Store();

dispatcher.register(year2Store.handleActions.bind(year2Store));

export default year2Store;
