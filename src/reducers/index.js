import { combineReducers } from "redux";
import {
	LOGIN,
	LOGOUT,
	LIST_USER,
	DELETE_USER,
	CLEAR_USER,
	SEARCH_USER,
	ADD_QUESTION,
	LIST_QUESTION,
	DELETE_QUESTION,
	CLEAR_QUESTION,
	ADD_QUESTION_STATUS,
	ADD_HINT,
	LIST_HINT,
	DELETE_HINT,
	LIST_USER_LOGS,
	LIST_QUESTION_LOGS,
	CLEAR_LOGS
} from "ActionTypes";
import _ from "lodash";

const loginReducer = (loggedIn = false, action) => {
	switch (action.type) {
		case LOGIN:
			return true;
		case LOGOUT:
			return false;
		default:
			return loggedIn;
	}
};

const userReducer = (users = [], action) => {
	switch (action.type) {
		case LIST_USER:
		case SEARCH_USER:
			return _.map(_.groupBy(_.concat(users, action.users), "userID"), userVersions => _.last(userVersions));
		case DELETE_USER:
			return _.filter(users, user => user.userID != action.userID);
		case CLEAR_USER:
		case LOGOUT:
			return [];
		default:
			return users;
	}
};

const questionReducer = (questions = [], action) => {
	console.log(action.type);
	switch (action.type) {
		case ADD_QUESTION:
			return [...questions, action.question];
		case LIST_QUESTION:
			return _.map(_.groupBy(_.concat(questions, action.questions), "level"), quesVersions => _.last(quesVersions));
		case DELETE_QUESTION:
			console.log(questions, action.quesID);
			return _.filter(questions, question => question.level != action.quesID);
		case CLEAR_QUESTION:
		case LOGOUT:
			return [];
		default:
			return questions;
	}
};

const hintReducer = (hints = [], action) => {
	switch (action.type) {
		case ADD_HINT:
			return [...hints, action.hint];
		case LIST_HINT:
			return _.map(_.groupBy(_.concat(hints, action.hints), "hintID"), hintVersions => _.last(hintVersions));
		case DELETE_HINT:
			return _.filter(hints, hint => hint.hintID != action.hintID);
		case LOGOUT:
			return [];
		default:
			return hints;
	}
};

const logReducer = (logs = [], action) => {
	switch (action.type) {
		case LIST_QUESTION_LOGS:
		case LIST_USER_LOGS:
			return _.map(_.groupBy(_.concat(logs, action.logs), "logID"), logVersions => _.last(logVersions));
		case LOGOUT:
		case CLEAR_LOGS:
			return [];
		default:
			return logs;
	}
};

const resultReducer = (result = "", action) => {
	switch (action.type) {
		case ADD_QUESTION_STATUS:
			return action.status ? "Question added successfully!" : "Failed to add question!";
		default:
			return result;
	}
};

export default combineReducers({
	loggedIn: loginReducer,
	users: userReducer,
	questions: questionReducer,
	hints: hintReducer,
	logs: logReducer,
	result: resultReducer
});
