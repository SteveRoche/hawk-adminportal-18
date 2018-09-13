import React, { Component } from 'react';

class User extends Component {
	constructor(props) {
		super(props);
		this.triggerEditCallback = this.triggerEditCallback.bind(this);
	}

	triggerEditCallback(e) {
		e.preventDefault();
		this.props.editCallback(this.props.userData.userID);
	}

	render() {
		return (
			<tr onClick={this.triggerEditCallback}>
				<td>{this.props.userData.userID}</td>
				<td>{this.props.userData.username}</td>
				<td>{this.props.userData.email}</td>
				<td>{this.props.userData.tel}</td>
				<td>{this.props.userData.access}</td>
				<td>{this.props.userData.college}</td>
			</tr>
		);
	}
}

export default User;