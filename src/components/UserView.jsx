import React, { Component } from "react";
import { connect } from "react-redux";
import { listUser, editUser } from "ActionCreators/user";

import User from "Components/User";

class UserView extends Component {
	constructor(props) {
		super(props);
		this.editUserCallback = this.editUserCallback.bind(this);
	}

	componentDidMount() {
		this.props.listUser();
	}

	editUserCallback(user) {
		console.log(user);
		this.props.editUser(user);
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
							<User key={i} userData={user} editCallback={this.editUserCallback} />
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
	editUser
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UserView);
