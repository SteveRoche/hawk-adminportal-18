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
				{this.props.users.map((user, i) => (
					<User key={i} username={user.username} hash={user.password} access={user.access} tel={user.tel}/>
				))}
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

const User = ({ id, username, hash, access, email, tel, college, level, banned }) => {
	return (
		<React.Fragment>
		<span>
			{id} {username} {hash} {access} {email} {tel} {college} {level} {banned}
		</span>
		<br/>
		</React.Fragment>
	);
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UserView);
