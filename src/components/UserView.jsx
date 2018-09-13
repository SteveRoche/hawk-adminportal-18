import React, { Component } from "react";
import { connect } from "react-redux";
import { listUser } from "ActionCreators/user";

class UserView extends Component {
	componentDidMount() {
		this.props.listUser();
	}

	render() {
		return (
			<div className="QuestionView">
				<h1>Users</h1>
				<table>
				<tbody>
					{this.props.users.map((user, i) => (
						<User key={i} userData={user}/>
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
	listUser
};

const User = ({ userData }) => {
	return (
		<tr>
			<td>{userData.userID}</td>
			<td>{userData.username}</td>
			<td>{userData.email}</td>
			<td>{userData.tel}</td>
			<td>{userData.access}</td>
			<td>{userData.college}</td>
		</tr>
	);
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UserView);
