import { combineReducers } from "redux";
import { ADD_QUESTION, LIST_USER, LOGIN } from "ActionTypes";
import _ from 'lodash';

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
			return _.map(_.groupBy(_.concat(users, action.users), 'userID'), (userVersions => _.last(userVersions)))
		default:
			return users;
	}
};

const questionReducer = (questions = [], action) => {
	switch (action.type) {
		case ADD_QUESTION:
			return [...questions, action.question]
		default:
			return questions;
	}
};

export default combineReducers({ questions: questionReducer, users: userReducer, loggedIn: loginReducer });
