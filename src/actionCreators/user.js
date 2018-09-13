import { LIST_USER, EDIT_USER } from "ActionTypes";
import axios from "Axios";

export const listUser = () => {
	return dispatch => {
		axios
			.get("/api/listUsers", {
				params: { page: 1 },
				withCredentials: true
			})
			.then(response => dispatch({ type: LIST_USER, users: response.data }))
			.catch(err => console.log("Error on /api/login", err));
	};
};

export const editUser = user => {
	return dispatch => {
		dispatch({ type: 'EDIT_USER' });
		console.log("User being sent: ", user);
		axios.post('/api/editUser', user)
		.then(response => console.log(response))
		.catch(err => console.log("Error on /api/editUser", err));
	}
};
