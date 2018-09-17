import React, { Component } from "react";
import _ from "lodash";

class Hint extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isEditing: false,
			hint: "Fast storage"
		};
	}

	render() {
		return <span>{this.state.hint}</span>;
	}
}

export default Hint;