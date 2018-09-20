import { LIST_QUESTION_LOGS, LIST_USER_LOGS, CLEAR_LOGS } from "ActionTypes";
import axios from "Axios";

export const listQuestionLogs = (level, page) => {
	return dispatch => {
		axios
			.get("/api/questionLogs", {
				params: {
					id: level,
					page: page
				},
				withCredentials: true
			})
			.then(response => {
				dispatch({ type: LIST_QUESTION_LOGS, logs: response.data.data });
			})
			.catch(err => console.log("Error on /api/questionLogs", err));
	};
};

export const listUserLogs = (userID, page) => {
	return dispatch => {
		axios
			.get("/api/userLogs", {
				params: {
					id: userID,
					page: page
				},
				withCredentials: true
			})
			.then(response => {
				console.log(response);
				dispatch({ type: LIST_USER_LOGS, logs: response.data.data });
			})
			.catch(err => console.log("Error on /userLogs", err));
	};
};

export const clearLogs = () => {
	return dispatch => dispatch({ type: CLEAR_LOGS });
};
