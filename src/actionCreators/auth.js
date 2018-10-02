import { LOGIN, LOGOUT } from "ActionTypes";
import axios from "Axios";

export const login = () => {
	return dispatch => {
		dispatch({ type: LOGIN });
	};
};

export const logout = () => {
	return dispatch => {
		axios.get("/api/logout");
		dispatch({ type: LOGOUT });
	};
};
