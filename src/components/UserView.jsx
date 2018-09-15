import React, { Component } from "react";
import { connect } from "react-redux";
import { listUser, editUser, deleteUser, banUser, unbanUser } from "ActionCreators/user";

import User from "Components/User";

class UserView extends Component {
	constructor(props) {
		super(props);
		this.editUserCallback = this.editUserCallback.bind(this);
		this.deleteUserCallback = this.deleteUserCallback.bind(this);
		this.banToggleCallback = this.banToggleCallback.bind(this);
	}

	componentDidMount() {
		this.props.listUser();
	}

	editUserCallback(user) {
		this.props.editUser(user);
	}

	deleteUserCallback(userID) {
		this.props.deleteUser(userID);
	}

	banToggleCallback(userID, banned) {
		if (banned) this.props.banUser(userID);
		else this.props.unbanUser(userID);
	}

	render() {
		return (
			<div className="QuestionView">
				<h1>Users</h1>
				<table>
					<thead>
						<tr>
							<td>UserID</td>
							<td>Username</td>
							<td>Email</td>
							<td>Phone Number</td>
							<td>College</td>
							<td>Access</td>
						</tr>
					</thead>
					<tbody>
						{this.props.users.map((user, i) => (
							<User key={i} userData={user} editCallback={this.editUserCallback} banToggleCallback={this.banToggleCallback} deleteCallback={this.deleteUserCallback} />
						))}
					</tbody>
				</table>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		loggedIn: state.loggedIn,
		users: state.users
	};
};

const mapDispatchToProps = {
	listUser,
	editUser,
	deleteUser,
	unbanUser,
	banUser
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UserView);
