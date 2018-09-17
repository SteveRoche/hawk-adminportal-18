import { ADD_HINT, LIST_HINT, EDIT_HINT, DELETE_HINT, ACTIVATE_HINT, DEACTIVATE_HINT } from "ActionTypes";
import axios from "Axios";

export const addHint = hint => {
	return dispatch => {
		dispatch({ type: ADD_HINT, hint });
		axios.post("/api/addHint", hint).catch(err => console.log("Error on /api/addHint", err));
	};
};

//TODO: Backend route not implemented
export const listHint = () => {
	return dispatch => {
		axios.get("/api/listHints")
		.then(response => console.log(response))
		.catch(err => console.log("Error on /api/listHints", err));
	};
};

export const editHint = hint => {
	return dispatch({ type: EDIT_HINT });
	axios.post("/api/editHint", hint)
	.then(response => console.log(response))
	.catch(err => console.log("Error on /api/editHint", err));
}

export const deleteHint = hintID => {
	return dispatch => {
		dispatch({ type: DELETE_HINT, hintID });
		axios.post(`/api/deleteHint?id=${hintID}`, {
			withCerdentials: true
		})
		.then(reponse => console.log(response))
		.catch(err => console.log("Error on /api/deleteHint", err));
	}
}

export const activateHint = hintID => {
	return dispatch => {
		dispatch({type: ACTIVATE_HINT, hintID});
		axios.put(`/api/activateHint?id=${hintID}`, {
			withCredentials: true
		})
		.then(reponse => console.log(response))
		.catch(err => console.log("Error on /api/activateHint", err));
	}
}

export const deactivateHint = hintID => {
	return dispatch => {
		dispatch({type: DEACTIVATE_HINT, hintID});
		axios.put(`/api/deactivateHint?id=${hintID}`, {
			withCredentials: true
		})
		.then(response => console.log("Error on /ape/deactivateHint", reponse))
		.catch(err => console.log(err));
	}
}
