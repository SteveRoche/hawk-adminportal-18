import React, { Component } from "react";
import { connect } from "react-redux";

import Question from "Components/Question";
import HintView from "Components/HintView";
import { addQuestion, editQuestion, deleteQuestion, listQuestion } from "ActionCreators/question";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
			level: parseInt(this.getLevel.value, 10),
			question: this.getQuestion.value,
			answer: this.getAnswer.value,
		};

		this.props.addQuestion(data);
		this.getLevel.value = "";
		this.getQuestion.value = "";
		this.getAnswer.value = "";
		this.getQuestion.focus();
	};

	render() {
		return (
			<div className="QuestionView View">
				<h1>Questions</h1>
				<form>
					<input className="input-question-level" type="text" ref={input => (this.getLevel = input)} placeholder="Lvl" /> 
					<input className="input-question" type="text" ref={input => (this.getQuestion = input)} placeholder="Question" />
					<input className="input-answer" type="text" ref={input => (this.getAnswer = input)} placeholder="Answer" />
					<button onClick={this.handleSubmit}><FontAwesomeIcon icon="plus"/></button>
				</form>
				<ol>
					{this.props.questions.map((question, i) => (
						<div key={i}>
							<Question questionData={question} editCallback={this.editQuestionCallback} deleteCallback={this.deleteQuestionCallback} />
							<HintView level={question.level}/>
						</div>
					))}
				</ol>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		loggedIn: state.loggedIn,
		questions: state.questions,
		hints: state.hints
	};
};

const mapDispatchToProps = {
	addQuestion,
	editQuestion,
	listQuestion,
	deleteQuestion,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(QuestionView);
