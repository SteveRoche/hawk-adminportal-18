import { ADD_HINT, LIST_HINT, EDIT_HINT, DELETE_HINT, ACTIVATE_HINT, DEACTIVATE_HINT } from "ActionTypes";
import axios from "Axios";

export const addHint = hint => {
	return dispatch => {
		dispatch({ type: ADD_HINT, hint });
		axios.post("/api/overwatch/addHint", hint).catch(err => console.log("Error on /api/addHint", err));
	};
};

export const listHint = level => {
	return dispatch => {
		axios
			.get("/api/overwatch/listHints", {
				params: { level: level },
				withCredentials: true
			})
			.then(response => {
				dispatch({ type: LIST_HINT, hints: response.data.data });
			})
			.catch(err => console.log("Error on /api/overwatch/listHints", err));
	};
};

export const editHint = hint => {
	return dispatch => {
		dispatch({ type: EDIT_HINT });
		axios
			.post("/api/overwatch/editHint", hint)
			.then(response => console.log(response))
			.catch(err => console.log("Error on /api/overwatch/editHint", err));
	};
};

export const deleteHint = hintID => {
	return dispatch => {
		dispatch({ type: DELETE_HINT, hintID });
		axios
			.put(`/api/overwatch/deleteHint?id=${hintID}`, {
				withCredentials: true
			})
			.catch(err => console.log("Error on /api/overwatch/deleteHint", err));
	};
};

export const activateHint = hintID => {
	return dispatch => {
		dispatch({ type: ACTIVATE_HINT, hintID });
		axios
			.put(`/api/overwatch/activateHint?id=${hintID}`, {
				withCredentials: true
			})
			.catch(err => console.log("Error on /api/overwatch/activateHint", err));
	};
};

export const deactivateHint = hintID => {
	return dispatch => {
		dispatch({ type: DEACTIVATE_HINT, hintID });
		axios
			.put(`/api/overwatch/deactivateHint?id=${hintID}`, {
				withCredentials: true
			})
			.catch(err => console.log("Error on /api/overwatch/deactivateHint", err));
	};
};
