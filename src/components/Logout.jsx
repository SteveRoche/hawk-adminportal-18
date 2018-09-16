import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "ActionCreators/auth"

class Logout extends Component {	
	componentWillMount() {
		this.props.logout();
	}

	render() {
		return <Redirect to="/login"/>;
	}
}

const mapDispatchToProps = {
	logout
};

export default connect(null,mapDispatchToProps)(Logout);