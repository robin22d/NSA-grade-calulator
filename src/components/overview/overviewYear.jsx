import React from 'react';

export default class OverviewYear extends React.Component {
	render() {
		const {year, mark, grade} = this.props;
		return (
			<div>
				<div>
					Year: {year}
				</div>
				<div>
					Mark: {mark}
				</div>
				<div>
					Grade: {grade}
				</div>
			</div>
		);
	}
}
