import React, { Component } from "react";
import { connect } from "react-redux";
import { listUser, editUser, deleteUser, banUser, unbanUser, clearUser } from "ActionCreators/user";

import User from "Components/User";

class UserView extends Component {
	constructor(props) {
		super(props);
		this.editUserCallback = this.editUserCallback.bind(this);
		this.deleteUserCallback = this.deleteUserCallback.bind(this);
		this.banToggleCallback = this.banToggleCallback.bind(this);
		this.state = {
			page: 1
		};
	}

	componentDidMount() {
		this.props.listUser(this.state.page);
	}

	editUserCallback(user) {
		this.props.editUser(user);
	}

	handleChangePage = e => {
		e.preventDefault();
		this.setState({
			page: e.target.value
		}, () => {
			this.props.clearUser();
			this.props.listUser(this.state.page);
		});
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
			<div className="UserView View">
				<h1>Users</h1>
				<input className="input-page" type="number" placeholder="Page" onChange={this.handleChangePage} defaultValue={1}/>
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
	banUser,
	clearUser
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UserView);
