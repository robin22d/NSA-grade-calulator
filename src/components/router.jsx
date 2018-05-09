// Importing modules
import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

// Importing components
import Home from './home/home.jsx';
import Year2 from './year/year2.jsx';
import Year3 from './year/year3.jsx';
import Overview from './overview/overview.jsx';

export default class Routes extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<Route exact path="/" component={Home} />
					<Route path="/year2" component={Year2} />
					<Route path="/year3" component={Year3} />
					<Route path="/overview" component={Overview} />
				</div>
			</Router>
		);
	}
}
