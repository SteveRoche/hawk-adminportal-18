import React, { Component } from "react";

const Question = ({ question, answer }) => {
	return (
		<li>
			<span>
				Question: {question} Answer: {answer}
			</span>{" "}
			<button>Edit</button>
		</li>
	);
};

export default Question;
