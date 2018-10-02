import React, { Component } from "react";
import { Route, Switch, NavLink } from "react-router-dom";

import NavBar from "Components/NavBar";
import QuestionView from "Components/QuestionView";

import { LIST_USER_LOGS, LIST_QUESTION_LOGS } from "ActionTypes";

import UserView from "Components/UserView";
// import Login from "Components/Login";
import Logout from "Components/Logout";
import LogView from "Components/LogView";

import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";

class App extends Component {
	render() {
		return (
			<div className="App">
				<NavBar>
					{this.props.loggedIn ? (
						<NavLink to="/users" className="NavLink" activeClassName="NavLink-active">
							Users
						</NavLink>
					) : null}
					{this.props.loggedIn ? (
						<NavLink to="/questions" className="NavLink" activeClassName="NavLink-active">
							Questions
						</NavLink>
					) : null}
					{this.props.loggedIn ? (
						<NavLink to="/logout" className="NavLink" activeClassName="NavLink-active">
							Logout
						</NavLink>
					) : null}
				</NavBar>
				<Switch>
					{/* <Route path="/login" component={Login} /> */}
					{this.props.loggedIn ? <Route path="/users" component={UserView} /> : <Redirect to="/" />}
					{this.props.loggedIn ? <Route path="/questions" component={QuestionView} /> : <Redirect to="/" />}
					{this.props.loggedIn ? <Route path="/userLog/:id" render={props => <LogView title="User Log" id={props.match.params.id} type={LIST_USER_LOGS} />} /> : <Redirect to="/" />}
					{this.props.loggedIn ? <Route path="/questionLog/:id" render={props => <LogView title="Question Log" id={props.match.params.id} type={LIST_QUESTION_LOGS} />} /> : <Redirect to="/" />}
					{this.props.loggedIn ? <Route path="/logout" component={Logout} /> : <Redirect to="/" />}
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
