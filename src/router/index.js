import React from 'react';
import NavBar from '../components/NavBar';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import routes from './routes';
import Bookmark from '../pages/Bookmark';

const AppRouter = props => {
	return (
		<Router>
			<NavBar routes={routes} />
			<Bookmark />
			<Switch>
				{routes.map(({ Component, key, path }) => (
					<Route
						key={key}
						path={path}
						exact
						component={props => <Component page={key} {...props} />}
					></Route>
				))}
				<Route
					path={'/:id'}
					component={props => <Bookmark page={key} {...props} />}
				></Route>
			</Switch>
		</Router>
	);
};
export default AppRouter;
