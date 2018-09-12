import React, { Component } from "react";
import { connect } from "react-redux";

import Question from "Components/Question";
import { addQuestion } from "ActionCreators/question";

class QuestionView extends Component {
	componentDidMount() {
		//TODO: Dispatch fetch questions
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
					{this.props.questions.map((data, i) => (
						<Question key={i} question={data.question} answer={data.answer} />
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
	addQuestion
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(QuestionView);
