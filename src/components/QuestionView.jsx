import React, { Component } from "react";
import { connect } from "react-redux";

import Question from "Components/Question";
import HintView from "Components/HintView";
import { addQuestion, editQuestion, deleteQuestion, listQuestion, clearQuestion } from "ActionCreators/question";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class QuestionView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			page: 1
		};
	}

	componentDidMount() {
		this.props.listQuestion(this.state.page);
	}

	editQuestionCallback = question => {
		this.props.editQuestion(question);
	};

	deleteQuestionCallback = quesID => {
		console.log("Question ID in callback: ", quesID);
		this.props.deleteQuestion(quesID);
	};

	handleSubmit = e => {
		e.preventDefault();
		const data = {
			level: parseInt(this.getLevel.value, 10),
			question: this.getQuestion.value,
			answer: this.getAnswer.value,
			addinfo: this.getAddInfo.value
		};
		2;
		this.props.addQuestion(data);
		this.getLevel.value = "";
		this.getQuestion.value = "";
		this.getAnswer.value = "";
		this.getAddInfo.value = "";
		this.getQuestion.focus();
	};

	handleChangePage = e => {
		e.preventDefault();
		this.setState(
			{
				page: e.target.value
			},
			() => {
				this.props.clearQuestion();
				this.props.listQuestion(this.state.page);
			}
		);
	};

	render() {
		return (
			<div className="QuestionView View">
				<h1>Questions</h1>
				<form>
					<input className="input-question-level" type="text" ref={input => (this.getLevel = input)} placeholder="Lvl" />
					<br />
					<input className="input-question" type="text" ref={input => (this.getQuestion = input)} placeholder="Question" />
					<br />
					<input className="input-answer" type="text" ref={input => (this.getAnswer = input)} placeholder="Answer" />
					<br />
					<input className="input-addinfo" type="text" ref={input => (this.getAddInfo = input)} placeholder="Add Info" />
					<button onClick={this.handleSubmit}>
						<FontAwesomeIcon icon="plus" />
					</button>
					<br />
					{this.props.result}
				</form>
				<div>
					{this.props.questions.map((question, i) => (
						<div key={i} className="QuestionWrapper">
							<Question questionData={question} editCallback={this.editQuestionCallback} deleteCallback={this.deleteQuestionCallback} />
							<br />
							<h4>Hints:</h4>
							<HintView level={question.level} />
						</div>
					))}
				</div>
				<input className="input-page" type="number" placeholder="Page" onChange={this.handleChangePage} defaultValue={1} />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		loggedIn: state.loggedIn,
		questions: state.questions,
		hints: state.hints,
		result: state.result
	};
};

const mapDispatchToProps = {
	addQuestion,
	editQuestion,
	listQuestion,
	deleteQuestion,
	clearQuestion
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(QuestionView);
