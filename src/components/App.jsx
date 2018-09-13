import React, { Component } from "react";
import { Route, Switch, NavLink } from "react-router-dom";

import NavBar from "Components/NavBar";
import Register from "Components/Register";
import QuestionView from "Components/QuestionView";
import UserView from "Components/UserView";
import Login from "Components/Login";
import Home from "Components/Home";

export default class App extends Component {
	render() {
		return (
			<div className="App">
				<NavBar>
					<NavLink to="/register">Register</NavLink>
					<NavLink to="/login">Login</NavLink>
					<NavLink to="/users">Users</NavLink>
					<NavLink to="/questions">Questions</NavLink>
				</NavBar>
				<Switch>
					<Route path="/register" component={Register} />
					<Route path="/login" component={Login} />
					<Route path="/users" component={UserView} />
					<Route path="/home" component={Home} />
					<Route path="/questions" component={QuestionView} />
				</Switch>
			</div>
		);
	}
}
