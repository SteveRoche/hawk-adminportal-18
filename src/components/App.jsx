import React, { Component } from "react";
import { Route, Switch, NavLink } from "react-router-dom";

import NavBar from "Components/NavBar";
import Register from "Components/Register";
import QuestionView from "Components/QuestionView";
import UserView from "Components/UserView";
import Login from "Components/Login";
import Logout from "Components/Logout";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";

class App extends Component {
	render() {
		return (
			<div className="App">
				<NavBar>
					{!this.props.loggedIn ? <NavLink to="/register">Register</NavLink> : null}
					{!this.props.loggedIn ? <NavLink to="/login">Login</NavLink> : null}
					{this.props.loggedIn ? <NavLink to="/users">Users</NavLink> : null}
					{this.props.loggedIn ? <NavLink to="/questions">Questions</NavLink> : null}
					{this.props.loggedIn ? <NavLink to="/logout">Logout</NavLink> : null}
				</NavBar>
				<Switch>
					{!this.props.loggedIn ? <Route path="/register" component={Register} /> : null}
					<Route path="/login" component={Login} />
					{this.props.loggedIn ? <Route path="/users" component={UserView} /> : <Redirect to="/login" />}
					{this.props.loggedIn ? <Route path="/questions" component={QuestionView} /> : <Redirect to="/login" />}
					{this.props.loggedIn ? <Route path="/logout" component={Logout} /> : <Redirect to="/login" />}
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		loggedIn: state.loggedIn
	};
};

export default withRouter(connect(mapStateToProps)(App));
