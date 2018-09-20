import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addHint, editHint, deleteHint, listHint, activateHint, deactivateHint } from "ActionCreators/hint";

import Hint from "Components/Hint";

class HintView extends Component {
	constructor(props) {
		super(props);
		this.editHintCallback = this.editHintCallback.bind(this);
		this.deleteHintCallback = this.deleteHintCallback.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.activeToggleCallback = this.activeToggleCallback.bind(this);
	}

	componentDidMount() {
		this.props.listHint(this.props.level);
	}

	editHintCallback(hint) {
		this.props.editHint(hint);
	}

	deleteHintCallback(hintID) {
		this.props.deleteHint(hintID);
	}

	handleSubmit(e) {
		e.preventDefault();
		const data = {
			hint: this.getHint.value,
			level: this.props.level,
			active: 0
		};

		this.props.addHint(data);
		this.getHint.value = "";
		this.getHint.focus();
	}

	activeToggleCallback(hintID, active) {
		if (active) this.props.activateHint(hintID);
		else this.props.deactivateHint(hintID);
	}

	render() {
		return (
			<div className="HintView">
				{this.props.hints.map((hint, i) => (
					<div key={i}>
						<Hint hintData={hint} editCallback={this.editHintCallback} deleteCallback={this.deleteHintCallback} activeToggleCallback={this.activeToggleCallback} />
						<br />
					</div>
				))}
				<br />
				<input className="input-hint" type="text" ref={input => (this.getHint = input)} placeholder="Hint" />
				<button onClick={this.handleSubmit}>
					<FontAwesomeIcon icon="plus" />
				</button>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		hints: state.hints.filter(hint => hint.level == ownProps.level)
	};
};

const mapDispatchToProps = {
	addHint,
	editHint,
	deleteHint,
	listHint,
	activateHint,
	deactivateHint
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HintView);
