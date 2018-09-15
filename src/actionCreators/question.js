import { ADD_QUESTION, EDIT_QUESTION, LIST_QUESTION } from "ActionTypes";
import axios from "Axios";

export const listQuestion = () => {
	return dispatch => {
		axios
			.get("/api/listQuestions", {
				params: { page: 1 },
				withCredentials: true
			})
			.then(response => {
				dispatch({ type: LIST_QUESTION, questions: response.data });
			})
			.catch(err => console.log(err));
	};
};

export const editQuestion = question => {
	return dispatch => {
		dispatch({ type: EDIT_QUESTION, question });
		axios.post("/api/editQuestion", question)
		.catch(err => console.log(err));
	};
};

export const addQuestion = question => {
	return dispatch => {
		dispatch({ type: ADD_QUESTION, question });
		axios
			.post("/api/addQuestion", question)
			.catch(err => console.log(err));
	};
};
