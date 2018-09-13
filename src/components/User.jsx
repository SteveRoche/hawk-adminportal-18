import React, { Component } from "react";
import _ from 'lodash';

class User extends Component {
	constructor(props) {
		super(props);
		this.triggerEditCallback = this.triggerEditCallback.bind(this);
		this.toggleEditing = this.toggleEditing.bind(this);
		this.state = {
			isEditing: false,
			username: this.props.userData.username,
			email: this.props.userData.email,
			tel: this.props.userData.tel,
			access: this.props.userData.access,
			college: this.props.userData.college
		};
	}

	toggleEditing(e) {
		e.preventDefault();
		if (this.state.isEditing) {
			this.triggerEditCallback(e);
		}
		this.setState({ isEditing: !this.state.isEditing });
	}

	triggerEditCallback(e) {
		e.preventDefault();
		this.setState({
			username: this.getUsername.value,
			email: this.getEmail.value,
			tel: this.getTel.value,
			access: this.getAccess.value,
			college: this.getCollege.value
		}, () => {
			this.props.editCallback(_.omit(this.state, 'access', 'isEditing'));
		});
	}

	render() {
		return this.state.isEditing ? (
			<tr>
				<td>{this.props.userData.userID}</td>
				<td>
					<input type="text" ref={input => (this.getUsername = input)} defaultValue={this.state.username}/>
				</td>
				<td>
					<input type="text" ref={input => (this.getEmail = input)} defaultValue={this.state.email} />
				</td>
				<td>
					<input type="text" ref={input => (this.getTel = input)} defaultValue={this.state.tel} />
				</td>
				<td>
					<input type="text" ref={input => (this.getCollege = input)} defaultValue={this.state.college} />
				</td>
				<td>
					<input type="text" ref={input => (this.getAccess = input)} defaultValue={this.state.access} />
				</td>
				<td>
					<button onClick={this.toggleEditing}>{this.state.isEditing ? "Save" : "Edit"}</button>
				</td>
			</tr>
		) : (
			<tr>
				<td>{this.props.userData.userID}</td>
				<td>{this.state.username}</td>
				<td>{this.state.email}</td>
				<td>{this.state.tel}</td>
				<td>{this.state.college}</td>
				<td>{this.state.access}</td>
				<td>
					<button onClick={this.toggleEditing}>{this.state.isEditing ? "Save" : "Edit"}</button>
				</td>
			</tr>
		);
	}
}

export default User;
