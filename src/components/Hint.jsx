import React, { Component } from "react";
import _ from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Hint extends Component {
	constructor(props) {
		super(props);
		this.toggleEditing = this.toggleEditing.bind(this);
		this.triggerEditCallback = this.triggerEditCallback.bind(this);
		this.triggerDeleteCallback = this.triggerDeleteCallback.bind(this);
		this.triggerActiveToggleCallback = this.triggerActiveToggleCallback.bind(this);
		this.state = {
			isEditing: false,
			hint: this.props.hintData.hint,
			active: this.props.hintData.active
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
				hint: this.getHint.value
			},
			() => {
				this.props.editCallback(_.omit(_.assign(this.state, { hintID: this.props.hintData.hintID }), "isEditing"));
			}
		);
	}

	triggerDeleteCallback(e) {
		e.preventDefault();
		this.props.deleteCallback(this.props.hintData.hintID);
	}

	triggerActiveToggleCallback(e) {
		e.preventDefault();
		this.setState(
			{
				active: !this.state.active
			},
			() => this.props.activeToggleCallback(this.props.hintData.hintID, this.state.active)
		);
	}

	render() {
		return this.state.isEditing ? (
			<span>
				<input type="text" ref={input => (this.getHint = input)} defaultValue={this.state.hint} />
				<button onClick={this.toggleEditing}>
					<FontAwesomeIcon icon="check" />
				</button>
			</span>
		) : (
			<span>
				<span>{this.state.hint}</span>
				<button onClick={this.toggleEditing}>
					<FontAwesomeIcon icon="pencil-alt" />
				</button>
				<button onClick={this.triggerDeleteCallback}>
					<FontAwesomeIcon icon="trash-alt" />
				</button>
				<button onClick={this.triggerActiveToggleCallback}>{this.state.active ? "Deactivate" : "Activate"}</button>
			</span>
		);
	}
}

export default Hint;
