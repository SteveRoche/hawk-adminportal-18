import { ADD_QUESTION, EDIT_QUESTION, LIST_QUESTION, DELETE_QUESTION, CLEAR_QUESTION, ADD_QUESTION_STATUS } from "ActionTypes";
import axios from "Axios";

export const addQuestion = question => {
	return dispatch => {
		dispatch({ type: ADD_QUESTION, question });
		axios
			.post("/api/overwatch/addQuestion", question)
			.then(response => {
				const status = response.data.success;
				dispatch({ type: ADD_QUESTION_STATUS, status });
				if (!status) {
					const quesID = question.level;
					dispatch({ type: DELETE_QUESTION, quesID });
				}
			})
			.catch(err => {
				dispatch({ type: ADD_QUESTION_STATUS, status: false });
				if (!status) {
					const quesID = question.level;
					dispatch({ type: DELETE_QUESTION, quesID });
				}
				console.log("Error on /api/overwatch/addQuestion", err);
			});
	};
};

export const editQuestion = question => {
	return dispatch => {
		dispatch({ type: EDIT_QUESTION, question });
		axios.post("/api/overwatch/editQuestion", question).catch(err => console.log("Error on /api/overwatch/editQuestion", err));
	};
};

export const listQuestion = page => {
	return dispatch => {
		axios
			.get("/api/overwatch/listQuestions", {
				params: { page: page },
				withCredentials: true
			})
			.then(response => {
				dispatch({ type: LIST_QUESTION, questions: response.data.data });
			})
			.catch(err => console.log("Error on /api/overwatch/listQuestions", err));
	};
};

export const deleteQuestion = quesID => {
	return dispatch => {
		dispatch({ type: DELETE_QUESTION, quesID });
		axios
			.put(`/api/overwatch/deleteQuestion?level=${quesID}`, {
				withCredentials: true
			})
			.then(response => console.log(response))
			.catch(err => console.log("Error on /api/overwatch/deleteQuestion", err));
	};
};

export const clearQuestion = () => {
	return dispatch => dispatch({ type: CLEAR_QUESTION });
};
