import { combineReducers } from "redux";
import { ADD_QUESTION, LIST_USER, LOGIN } from "ActionTypes";

const rootReducer = (state = {}, action) => {
	switch (action.type) {
		case ADD_QUESTION:
			return {
				...state,
				questions: [...state.questions, action.question]
			};
		case LIST_USER:
			return {
				...state,
				users: [...new Set([...state.users, ...action.users])]
			};
		case LOGIN:
			return {
				...state,
				loggedIn: true
			};
		default:
			return state;
	}
};

export default rootReducer;
