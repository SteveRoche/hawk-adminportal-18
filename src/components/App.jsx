import React, { Component } from 'react';
import { Route, Switch, Link, NavLink } from 'react-router-dom';

import NavBar from 'Components/NavBar';

export default class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<React.Fragment>
				<NavBar>
					<NavLink to="/">Home</NavLink>
					<NavLink to="/users">Users</NavLink>
				</NavBar>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/users" component={Users} />
				</Switch>
			</React.Fragment>
		);
	}
}

const Home = () => <h1>Home</h1>;
const Users = () => <h1>Users</h1>;