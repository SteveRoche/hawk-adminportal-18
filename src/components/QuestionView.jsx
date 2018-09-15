import React, { Component } from "react";
import { connect } from "react-redux";

import Question from "Components/Question";
import { addQuestion, editQuestion, deleteQuestion, listQuestion } from "ActionCreators/question";

class QuestionView extends Component {
	constructor(props) {
		super(props);
		this.editQuestionCallback = this.editQuestionCallback.bind(this);
		this.deleteQuestionCallback = this.deleteQuestionCallback.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		this.props.listQuestion();
	}

	editQuestionCallback(question) {
		this.props.editQuestion(question);
	}

	deleteQuestionCallback(quesID) {
		this.props.deleteQuestion(quesID);
	}

	handleSubmit = e => {
		e.preventDefault();
		const data = {
			question: this.getQuestion.value,
			answer: this.getAnswer.value
		};

		this.props.addQuestion(data);
		this.getQuestion.value = "";
		this.getAnswer.value = "";
		this.getQuestion.focus();
	};

	render() {
		return (
			<div className="QuestionView">
				<h1>Questions</h1>
				<form>
					<input type="text" ref={input => (this.getQuestion = input)} placeholder="Question" />
					<input type="text" ref={input => (this.getAnswer = input)} placeholder="Answer" />
					<button onClick={this.handleSubmit}>Add</button>
				</form>
				<ol>
					{this.props.questions.map((question, i) => (
						<Question key={i} questionData={question} editCallback={this.editQuestionCallback} deleteCallback={this.deleteQuestionCallback} />
					))}
				</ol>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		loggedIn: state.loggedIn,
		questions: state.questions
	};
};

const mapDispatchToProps = {
	addQuestion,
	editQuestion,
	listQuestion,
	deleteQuestion
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(QuestionView);
