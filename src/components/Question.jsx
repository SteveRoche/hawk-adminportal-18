import React, { Component } from "react";
import _ from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Question extends Component {
	constructor(props) {
		super(props);
		this.triggerEditCallback = this.triggerEditCallback.bind(this);
		this.toggleEditing = this.toggleEditing.bind(this);
		this.triggerDeleteCallback = this.triggerDeleteCallback.bind(this);
		this.triggerAddHintCallback = this.triggerAddHintCallback.bind(this);
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
				this.props.editCallback(_.omit(_.assign(this.state, { quesID: this.props.questionData.quesID }), "isEditing"));
			}
		);
	}

	triggerDeleteCallback(e) {
		e.preventDefault();
		this.props.deleteCallback(this.props.questionData.quesID);
	}

	triggerAddHintCallback(e) {
		e.preventDefault();
		// this.props.addHintCallback(this.props)
	}

	render() {
		return this.state.isEditing ? (
			<span>
				<input type="text" ref={input => (this.getQuestion = input)} defaultValue={this.state.question} />
				<input type="text" ref={input => (this.getAnswer = input)} defaultValue={this.state.answer} />{" "}
				<button onClick={this.toggleEditing}>
					<FontAwesomeIcon icon="check" />
				</button>
				<button onClick={this.triggerDeleteCallback}>
					<FontAwesomeIcon icon="trash-alt" />
				</button>
				<br />
			</span>
		) : (
			<span>
				{this.state.question} <br /> {this.state.answer}{" "}
				<button onClick={this.toggleEditing}>
					<FontAwesomeIcon icon="pencil-alt" />
				</button>
				<button onClick={this.triggerDeleteCallback}>
					<FontAwesomeIcon icon="trash-alt" />
				</button>
				<button onClick={this.triggerAddHintCallback}><FontAwesomeIcon icon="plus"/></button>
				<br />
			</span>
		);
	}
}

export default Question;
