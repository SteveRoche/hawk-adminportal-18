import React, { Component } from 'react';
import { Route, Switch, Link, NavLink } from 'react-router-dom';
import { Button } from 'reactstrap';
export default class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<React.Fragment>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/users" component={Users} />
				</Switch>
				<Link to="/">Home</Link>
				<Link to="/users">Users</Link>
			</React.Fragment>
		);
	}
}

const Home = () => <h1>Home</h1>;
const Users = () => <h1>Users</h1>;