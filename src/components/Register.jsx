import React, { Component } from "react";

class Register extends Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = {
			username: this.getUsername.value,
			password: this.getPassword.value,
			email: this.getEmail.value,
			tel: this.getPhone.value,
			college: this.getCollege.value
		};

		fetch("/api/register", {
			method: "POST",
			mode: "cors",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(user)
		})
			.then(response => response.json())
			.then(json => console.log(json))
			.catch(err => console.log("/api/register Error", err));

		this.getUsername.value = "";
		this.getPassword.value = "";
		this.getEmail.value = "";
		this.getPhone.value = "";
		this.getCollege.value = "";
	}

	render() {
		return (
			<div className="Register View">
				<h1>Register</h1>
				<form onSubmit={this.handleSubmit}>
					<input type="text" ref={input => (this.getUsername = input)} placeholder="Username" />
					<input type="password" ref={input => (this.getPassword = input)} placeholder="Password" />
					<input type="text" ref={input => (this.getEmail = input)} placeholder="Email" />
					<input type="text" ref={input => (this.getPhone = input)} placeholder="Contact Number" />
					<input type="text" ref={input => (this.getCollege = input)} placeholder="College" />
					<button>Register</button>
				</form>
			</div>
		);
	}
}

export default Register;
