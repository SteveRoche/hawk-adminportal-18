import React, { Component } from "react";
import { connect } from "react-redux";
import { listUser } from "ActionCreators/user";

import User from 'Components/User';

class UserView extends Component {
	constructor(props) {
		super(props);
		this.editUserCallback = this.editUserCallback.bind(this);
	}

	componentDidMount() {
		this.props.listUser();
	}

	editUserCallback(userID) {
		const user = this.props.users.find(user => user.userID == userID);
		console.log(userID);
	}

	render() {
		return (
			<div className="QuestionView">
				<h1>Users</h1>
				<table>
					<tbody>
						{this.props.users.map((user, i) => 
							<User key={i} userData={user} editCallback={this.editUserCallback} />
						)}
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

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UserView);
