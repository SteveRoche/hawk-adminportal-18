import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addHint, editHint, deleteHint, listHint, activateHint, deactivateHint } from "ActionCreators/hint";

import Hint from "Components/Hint";

class HintView extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.listHint();
	}

	editHintCallback(hint) {
		this.props.editHint()
	}

	render() {
		return (
			<div className="HintView">
				<input className="input-hint" type="text" ref={input => (this.getHint = input)} placeholder="Hint" />
				<button onClick={this.props.addHint}>
					<FontAwesomeIcon icon="plus" />
				</button>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		hints: state.hints
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
	null,
	mapDispatchToProps
)(Hint);
