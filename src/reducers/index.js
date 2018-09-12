import { combineReducers } from "redux";
import { ADD_QUESTION } from "ActionTypes";

const rootReducer = (state = { questions: [] }, action) => {
	console.log(action);
	switch (action.type) {
		case ADD_QUESTION:
			return {
				...state,
				questions: [...state.questions, action.question]
			};
		default:
			return state;
	}
};

export default rootReducer;
