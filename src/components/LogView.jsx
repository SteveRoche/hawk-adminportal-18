import React, { Component } from "react";
import { connect } from "react-redux";
import { listQuestionLogs, listUserLogs } from "ActionCreators/logs";

class LogView extends Component {

	componentDidMount() {
		if (this.props.stateKey === "userlogs") {
			this.props.listUserLogs(1, 1);
		} else {
			this.props.listQuestionLogs(1, 1);
		}
	}

	render() {
		return (
			<div className="LogView View">
				<h1>{this.props.title} for {this.props.id}</h1>
				{this.props.logs.filter(log => log.userID == this.props.id).map((log, i) => (
						<div key={i}>
							<span>{log.logID} {log.useranswer}</span>
						</div>
					))}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		logs: state.logs
	};
};

const mapDispatchToProps = {
	listQuestionLogs,
	listUserLogs
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LogView);
