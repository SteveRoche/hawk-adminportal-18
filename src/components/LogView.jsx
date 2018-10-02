import React, { Component } from "react";
import { connect } from "react-redux";
import { listQuestionLogs, listUserLogs, clearLogs } from "ActionCreators/logs";
import { LIST_QUESTION_LOGS, LIST_USER_LOGS } from "ActionTypes";

class LogView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			page: 1
		};
	}
	componentDidMount() {
		if (this.props.type == LIST_USER_LOGS) {
			this.props.listUserLogs(this.props.id, this.state.page);
		} else if (this.props.type == LIST_QUESTION_LOGS) {
			this.props.listQuestionLogs(this.props.id, this.state.page);
		}
	}

	handleChangePage = e => {
		e.preventDefault();
		this.setState(
			{
				page: e.target.value
			},
			() => {
				this.props.clearLogs();
				if (this.props.type == LIST_USER_LOGS) {
					this.props.listUserLogs(this.props.id, this.state.page);
				} else if (this.props.type == LIST_QUESTION_LOGS) {
					this.props.listQuestionLogs(this.props.id, this.state.page);
				}
			}
		);
	};

	render() {
		console.log(this.props);
		return (
			<div className="LogView View">
				<h1>
					{this.props.title} for {this.props.id}
				</h1>
				<table>
					<thead>
						<tr>
							<td>Log ID</td>
							<td>User ID</td>
							<td>Question ID</td>
							<td>Answer</td>
							<td>Answer Status</td>
						</tr>
					</thead>
					<tbody>
						{this.props.logs.filter(log => (this.props.type == LIST_USER_LOGS ? log.userID == this.props.id : log.quesID == this.props.id)).map((log, i) => (
							<tr key={i}>
								<td>{log.logID}</td>
								<td>{log.userID}</td>
								<td>{log.quesID}</td>
								<td>{log.useranswer}</td>
								<td>{log.answerstatus}</td>
							</tr>
						))}
					</tbody>
				</table>
				<input className="input-page" type="number" placeholder="Page" onChange={this.handleChangePage} defaultValue={1} />
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
	listUserLogs,
	clearLogs
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LogView);
