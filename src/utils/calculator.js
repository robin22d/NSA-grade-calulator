// import GradeStore from '../stores/gradeStore.js';

export default {

	calculateAssignmentPercentage: (total, number) => {
		const tempPercentage =  (number * total) / 100;
		const percentage =  Math.round(tempPercentage);
		return (percentage);
	},

	percentageCalculate: (total, number) => {
		const tempPercentage =  (number / total) * 100;
		const percentage =  Math.round(tempPercentage);
		return (percentage);
	},

	calculateModuleGrade: (currentModule, assignments) => {
		let moduleMark = 0;

		for (let i = 0; i < assignments.length; i++) {
			moduleMark += assignments[i].mark;
		}

		return (moduleMark);
	},

	checkGrade: (grade) => {
		// const grades = GradeStore.getAll();
		// console.log("grade store: ", grades);
		//   // Not sure why this does not work!
		// for(var i = 0; i < grades.length; i++){
		//     console.log("grade: ", grade, "low: ", grades[i].lowMark, "high: ", grades[i].highMark)
		//     if (grade >= grades[i].lowMark && grade <= grades[i].highMark){
		//         console.log("grade: ", grades[i].grade);
		//     }
		// }

		let returning = '';
		if (grade >= 70 && grade <= 100) {
			returning = '1';
			return (returning);
		} else if (grade >= 60 && grade <= 69) {
			returning = '2.1';
			return (returning);
		} else if (grade >= 50 && grade <= 59) {
			returning = '2.2';
			return (returning);
		} else if (grade >= 40 && grade <= 49) {
			returning = '3';
			return (returning);
		} else if (grade >= 0 && grade <= 39) {
			returning = 'fail';
			return (returning);
		}
		returning = 'NA';
		return (returning);
	},

	calculateModulePercentage: (mark, weighting) => {
		const tempPercentage =  (mark * weighting) / 100;
		const percentage =  Math.round(tempPercentage);
		console.log('Mark: ', mark, ' weighting: ', weighting, ' = ', percentage);
		return (percentage);
	},
};
