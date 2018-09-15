import { ADD_QUESTION, LIST_QUESTION } from "ActionTypes";
import axios from "Axios";

export const listQuestion = () => {
	return dispatch => {
		axios
			.get("/api/listQuestions", {
				params: {page: 1},
				withCredentials: true
			})
			.then(response => {
				console.log(response);
				dispatch({ type: LIST_QUESTION, questions: response.data });
			})
			.catch(err => console.log(err));
	};
};

export const addQuestion = question => {
	return dispatch => {
		dispatch({ type: ADD_QUESTION, question });
		axios
			.post("/api/addQuestion", question)
			.then(response => console.log(response))
			.catch(err => console.log(err));
	};
};
