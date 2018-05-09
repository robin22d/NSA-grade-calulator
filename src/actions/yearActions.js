import dispatcher from '../utils/dispatcher.js';

export function editYear2AssignmentGrade(moduleId, assignmentId, grade, percentage, mark) {
	dispatcher.dispatch({
		type: 'EDIT_YEAR2_ASSIGNMENT_GRADE',
		moduleId,
		assignmentId,
		grade,
		percentage,
		mark,
	});
}

export function editYear2ModuleGrade(moduleId, mark, grade, percentage) {
	dispatcher.dispatch({
		type: 'EDIT_YEAR2_MODULE_GRADE',
		moduleId,
		mark,
		grade,
		percentage,
	});
}

export function editYear3AssignmentGrade(moduleId, assignmentId, grade, percentage, mark) {
	dispatcher.dispatch({
		type: 'EDIT_YEAR3_ASSIGNMENT_GRADE',
		moduleId,
		assignmentId,
		grade,
		percentage,
		mark,
	});
}

export function editYear3ModuleGrade(moduleId, mark, grade, percentage) {
	dispatcher.dispatch({
		type: 'EDIT_YEAR3_MODULE_GRADE',
		moduleId,
		mark,
		grade,
		percentage,
	});
}
