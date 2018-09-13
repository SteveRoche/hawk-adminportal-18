import { LOGIN } from "ActionTypes";

export const login = () => {
	return dispatch => {
		dispatch({ type: LOGIN });
	};
};
