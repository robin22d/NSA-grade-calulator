import { EventEmitter } from 'events';

import dispatcher from '../utils/dispatcher.js';

import Year2Store from './year2Store.js';
import Year3Store from './year3Store.js';

import uuidv1 from 'uuid/v1';
import Calculator from '../utils/calculator.js';

class YearsStore extends EventEmitter {
	constructor() {
		super();
		this.years = [
			{
				id: '1',
				year: '2',
				mark: '',
				grade: '',
				weighting: '40',
				uncompletedModules: [],
			},
			{
				id: '2',
				year: '3',
				mark: '',
				grade: '',
				weighting: '60',
				uncompletedModules: [],
			},
		];
	}

	getAll() {
		return this.years;
	}

	getYear2Grade() {
		const Year2Module = Year2Store.getAll();
		// console.log('Year 2 Store: ', Year2Module);

		let year2TempMark = 0;

		for (let i = 0; i < Year2Module.length; i++) {
			console.log('year1: ', year2TempMark + Year2Module[i].percentage);
			if (Year2Module[i].percentage !== 'NA') {
				year2TempMark += Year2Module[i].percentage;
			}
			console.log('year2: ', year2TempMark);
		}

		const year2Mark = Calculator.percentageCalculate(120, year2TempMark);
		const year2Grade = Calculator.checkGrade(year2Mark);
		this.years[0].grade = year2Grade;
		this.years[0].mark = year2Mark;

		for (let i = 0; i < Year2Module.length; i++) {
			this.years[0].uncompletedModules.push({
				moduleId: uuidv1(),
				moduleName: Year2Module[i].title,
				moduleWeighting: Year2Module[i].credits,
				uncompletedAssignments: [],
			});
			console.log('this year: ', this.years[0].uncompletedModules);
			for (let x = 0; x < Year2Module[i].content.length; x++) {
				console.log('module: ', Year2Module[i].content[x].grade);
				if (Year2Module[i].content[x].grade === 'NA') {
					console.log('module: ', Year2Module[i], ' assignemnt: ', Year2Module[i].content[x]);
					this.years[0].uncompletedModules[i].uncompletedAssignments.push({
						assignmentId: uuidv1(),
						assignmentName: Year2Module[i].content[x].assessment,
						assignmentWeighting: Year2Module[i].content[x].weighting,
					});
				} else {
					this.years[0].uncompletedModules.splice(1, i);
				}
			}
		}

		// console.log('Year 2 Sort1: ', this.years);

		this.emit('change');
	}

	getYear3Grade() {
		const Year3Module = Year3Store.getAll();
		console.log('Year 3 Store: ', Year3Module);

		let year3TempMark = 0;

		for (let i = 0; i < Year3Module.length; i++) {
			console.log('year1: ', year3TempMark + Year3Module[i].percentage);
			if (Year3Module[i].percentage !== 'NA') {
				year3TempMark += Year3Module[i].percentage;
			}
			console.log('year2: ', year3TempMark);
		}

		const year3Mark = Calculator.percentageCalculate(120, year3TempMark);
		const year3Grade = Calculator.checkGrade(year3Mark);
		this.years[1].grade = year3Grade;
		this.years[1].mark = year3Mark;

		for (let i = 0; i < Year3Module.length; i++) {
			this.years[1].uncompletedModules.push({
				moduleId: uuidv1(),
				moduleName: Year3Module[i].title,
				moduleWeighting: Year3Module[i].credits,
				uncompletedAssignments: [],
			});
			for (let x = 0; x < Year3Module[i].content.length; x++) {
				// console.log('module: ', Year3Module[i].content[x].grade);
				if (Year3Module[i].content[x].grade === 'NA') {
					// console.log('module: ', Year3Module[i], ' assignemnt: ', Year3Module[i].content[x]);
					this.years[1].uncompletedModules[i].uncompletedAssignments.push({
						assignmentId: uuidv1(),
						assignmentName: Year3Module[i].content[x].assessment,
						assignmentWeighting: Year3Module[i].content[x].weighting,
					});
				} else {
					this.years[1].uncompletedModules.splice(1, i);
				}
			}
		}

		console.log('Year 3 Sort1: ', this.years);

		this.emit('change');
	}


	handleActions(action) {
		switch (action.type) {
		case 'BOB': {
			this.bob(
				action.bob
			);
			break;
		} default: {
			break;
		}
		}
	}
}

const yearsStore = new YearsStore();

dispatcher.register(yearsStore.handleActions.bind(yearsStore));

export default yearsStore;
