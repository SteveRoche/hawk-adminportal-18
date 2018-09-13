import { LIST_USER } from "ActionTypes";
import axios from "Axios";

export const listUser = () => {
	return dispatch => {
		axios
			.get("/api/listUsers", {
				params: {page : 1},
				withCredentials: true
			})
			.then(response => dispatch({ type: LIST_USER, users: response.data }))
			.catch(err => console.log("Error on /api/login", err));
		// return dispatch({ type: LIST_USER });
	};
};
