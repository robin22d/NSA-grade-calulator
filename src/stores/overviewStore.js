import { EventEmitter } from 'events';

import dispatcher from '../utils/dispatcher.js';

class OverviewStore extends EventEmitter {
	constructor() {
		super();
		this.overview = [
		];
	}

	getAll() {
		return this.years;
	}

	handleActions(action) {
		switch (action.type) {
		case 'bob': {
			this.editYearGrade(
				action.mark,
				action.grade,
			);
			break;
		} default: {
			break;
		}
		}
	}
}

const overviewStore = new OverviewStore();

dispatcher.register(overviewStore.handleActions.bind(overviewStore));

export default overviewStore;
