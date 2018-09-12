import React, { Component } from "react";
import { LOGIN } from "ActionTypes";
import { connect } from "react-redux";
import { Redirect } from "react-router";

class Register extends Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state;
	}

	handleSubmit(e) {
		//TODO: Add frontend validation
		e.preventDefault();
		const user = {
			username: this.getUsername.value,
			password: this.getPassword.value
		};

		fetch("/api/login", {
			method: "POST",
			mode: "cors",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(user)
		})
			.then(response => response.json())
			.then(json => {
				if (json.success) {
					this.setState({ loggedIn: true });
				} else {
					this.getUsername.value = "";
					this.getPassword.value = "";
				}
			})
			.catch(err => console.log("/api/login Error", err));
	}

	render() {
		return (
			<div className="Register">
				<h1>Login</h1>
				<form onSubmit={this.handleSubmit}>
					<input type="text" ref={input => (this.getUsername = input)} placeholder="Username" />
					<input type="password" ref={input => (this.getPassword = input)} placeholder="Password" />
					<button>Login</button>
				</form>
				{this.state.loggedIn ? <Redirect to="/home" /> : null}
			</div>
		);
	}
}

export default connect()(Register);
