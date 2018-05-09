import { EventEmitter } from 'events';

import dispatcher from '../utils/dispatcher.js';

class GradeStore extends EventEmitter {
	constructor() {
		super();
		this.grade = [
			{
				grade: '1',
				lowMark: '70',
				highMark: '100',
				color: 'blue',
			},
			{
				grade: '2.1',
				lowMark: '60',
				highMark: '69',
				color: 'green',
			},
			{
				grade: '2.2',
				lowMark: '50',
				highMark: '59',
				color: 'yellow',
			},
			{
				grade: '3',
				lowMark: '40',
				highMark: '49',
				color: 'purple',
			},
			{
				grade: 'Fail',
				lowMark: '0',
				highMark: '39',
				color: 'red',
			},
		];
	}

	getAll() {
		return this.grade;
	}

	handleActions(action) {
		switch (action.type) {
		case '': {
			this.createToDo(action.text);
			break;
		} default: {
			break;
		}
		}
	}
}

const gradeStore = new GradeStore();

dispatcher.register(gradeStore.handleActions.bind(gradeStore));

export default gradeStore;
