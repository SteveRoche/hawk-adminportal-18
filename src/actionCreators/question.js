import { ADD_QUESTION, EDIT_QUESTION, LIST_QUESTION, DELETE_QUESTION, CLEAR_QUESTION } from "ActionTypes";
import axios from "Axios";

export const addQuestion = question => {
	return dispatch => {
		dispatch({ type: ADD_QUESTION, question });
		axios
			.post("/api/addQuestion", question)
			.catch(err => console.log("Error on /api/addQuestion", err));
	};
};

export const editQuestion = question => {
	return dispatch => {
		dispatch({ type: EDIT_QUESTION, question });
		axios.post("/api/editQuestion", question)
		.catch(err => console.log("Error on /api/editQuestion", err));
	};
};

export const listQuestion = page => {
	return dispatch => {
		axios
			.get("/api/listQuestions", {
				params: { page: page },
				withCredentials: true
			})
			.then(response => {
				dispatch({ type: LIST_QUESTION, questions: response.data.data });
			})
			.catch(err => console.log("Error on /api/listQuestions", err));
	};
};

export const deleteQuestion = quesID => {
	return dispatch => {
		dispatch({type: DELETE_QUESTION, quesID});
		axios.put(`/api/deleteQuestion?id=${quesID}`, {
			withCredentials: true
		})
		.then(response => console.log(response))
		.catch(err => console.log("Error on /api/deleteQuestion", err));
	}
}

export const clearQuestion = () => {
	return dispatch => dispatch({ type: CLEAR_QUESTION });
}