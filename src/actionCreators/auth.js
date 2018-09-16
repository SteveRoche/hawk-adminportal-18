import { LOGIN, LOGOUT } from "ActionTypes";

export const login = () => {
	return dispatch => {
		dispatch({ type: LOGIN });
	};
};

export const logout = () => {
	return dispatch => {
		dispatch({type: LOGOUT});
	}
}