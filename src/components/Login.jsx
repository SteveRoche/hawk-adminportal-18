import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "ActionCreators/auth";
import axios from "Axios";

class Login extends Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		//TODO: Add frontend validation
		e.preventDefault();
		const user = {
			username: this.getUsername.value,
			password: this.getPassword.value
		};

		axios
			.post("/api/login", user)
			.then(response => {
				if (response.data.success) {
					this.props.login();
				} else {
					this.getUsername.value = "";
					this.getPassword.value = "";
				}
			})
			.catch(err => console.log("/api/login Error", err));
	}

	render() {
		return (
			<div className="Login">
				<h1>Login</h1>
				<form onSubmit={this.handleSubmit}>
					<input type="text" ref={input => (this.getUsername = input)} placeholder="Username" />
					<input type="password" ref={input => (this.getPassword = input)} placeholder="Password" />
					<button>Login</button>
				</form>
				{this.props.loggedIn ? <Redirect to="/questions" /> : null}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		loggedIn: state.loggedIn
	};
};

const mapDispatchToProps = {
	login
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Login);
