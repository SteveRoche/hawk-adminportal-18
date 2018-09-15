import { combineReducers } from "redux";
import { ADD_QUESTION, LIST_QUESTION, DELETE_QUESTION, LIST_USER, DELETE_USER, LOGIN } from "ActionTypes";
import _ from "lodash";

const loginReducer = (loggedIn = false, action) => {
	switch (action.type) {
		case LOGIN:
			return true;
		default:
			return loggedIn;
	}
};

const userReducer = (users = [], action) => {
	switch (action.type) {
		case LIST_USER:
			return _.map(_.groupBy(_.concat(users, action.users), "userID"), userVersions => _.last(userVersions));
		case DELETE_USER:
			return _.filter(users, user => user.userID != action.userID);
		default:
			return users;
	}
};

const questionReducer = (questions = [], action) => {
	console.log(questions);
	switch (action.type) {
		case ADD_QUESTION:
			return [...questions, action.question];
		case LIST_QUESTION:
			return _.map(_.groupBy(_.concat(questions, action.questions), "quesID"), questionVersions => _.last(questionVersions));
		case DELETE_QUESTION:
			return _.filter(questions, question => question.quesID != action.quesID);
		default:
			return questions;
	}
};

export default combineReducers({ questions: questionReducer, users: userReducer, loggedIn: loginReducer });
