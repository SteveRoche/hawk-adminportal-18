import React, { Component } from "react";
import _ from "lodash";

class Question extends Component {
	constructor(props) {
		super(props);
		this.triggerEditCallback = this.triggerEditCallback.bind(this);
		this.toggleEditing = this.toggleEditing.bind(this);
		this.state = {
			isEditing: false,
			question: this.props.questionData.question,
			answer: this.props.questionData.answer
		};
	}

	toggleEditing(e) {
		e.preventDefault();
		if (this.state.isEditing) {
			this.triggerEditCallback(e);
		}
		this.setState({ isEditing: !this.state.isEditing });
	}

	triggerEditCallback(e) {
		e.preventDefault();
		this.setState(
			{
				question: this.getQuestion.value,
				answer: this.getAnswer.value
			},
			() => {
				this.props.editCallback(_.omit(_.assign(this.state, {quesID: this.props.questionData.quesID}), 'isEditing'))
			}
		);
	}

	render() {
		return this.state.isEditing ? (
			<span>
				<input type="text" ref={input => (this.getQuestion = input)} defaultValue={this.state.question} />
				<input type="text" ref={input => (this.getAnswer = input)} defaultValue={this.state.answer} />
				{" "}<button onClick={this.toggleEditing}>Save</button>
				<br/>
			</span>
		) : (
			<span>
				{this.state.question} {this.state.answer}
				{" "}<button onClick={this.toggleEditing}>Edit</button>
				<br/>
			</span>
		);
	}
}

export default Question;
