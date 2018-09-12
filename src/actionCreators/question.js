import { ADD_QUESTION } from "ActionTypes";

export const addQuestion = question => {
	return dispatch => {
		dispatch({ type: ADD_QUESTION, question });
	};
};
