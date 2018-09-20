import { LIST_USER, EDIT_USER, DELETE_USER, BAN_USER, UNBAN_USER, CLEAR_USER, SEARCH_USER } from "ActionTypes";
import axios from "Axios";

export const listUser = page => {
	//TODO: Pagination
	return dispatch => {
		axios
			.get("/api/listUsers", {
				params: { page: page },
				withCredentials: true
			})
			.then(response => dispatch({ type: LIST_USER, users: response.data.data }))
			.catch(err => console.log("Error on /api/login", err));
	};
};

export const editUser = user => {
	return dispatch => {
		dispatch({ type: EDIT_USER });
		axios
			.post("/api/editUser", _.omit(user, "access"))
			.then(response => {
				if (user.access === "0") {
					axios
						.post(`/api/revokeAdmin?id=${user.id}`, {
							withCredentials: true
						})
						.catch(err => console.log("Error on /api/revokeAdmin", err));
				} else if (user.access === "9") {
					const id = 13;
					axios.post(`/api/makeAdmin?id=${user.id}`).catch(err => console.log("Error on /api/makeAdmin", err));
				}
			})
			.catch(err => console.log("Error on /api/editUser", err));
	};
};

export const deleteUser = userID => {
	return dispatch => {
		dispatch({ type: DELETE_USER, userID });
		axios
			.post(`/api/deleteUser?id=${userID}`, {
				withCredentials: true
			})
			.then(response => console.log(response))
			.catch(err => console.log("Error on /api/deleteUser", err));
	};
};

export const banUser = userID => {
	return dispatch => {
		dispatch({ type: BAN_USER, userID });
		axios
			.post(`/api/banUser?id=${userID}`, {
				withCredentials: true
			})
			.then(response => console.log(response))
			.catch(err => console.log("Error on /api/banUser", err));
	};
};

export const unbanUser = userID => {
	return dispatch => {
		dispatch({ type: UNBAN_USER, userID });
		axios
			.post(`/api/unbanUser?id=${userID}`, {
				withCredentials: true
			})
			.then(response => console.log(response))
			.catch(err => console.log("Error on /api/unbanUser", err));
	};
};

export const clearUser = () => {
	return dispatch => dispatch({ type: CLEAR_USER });
};

export const searchUser = search => {
	return dispatch => {
		axios
			.get("/api/searchUser", {
				params: { username: search },
				withCredentials: true
			})
			.then(response => dispatch({ type: SEARCH_USER, users: response.data.data }))
			.catch(err => console.log("Error on /api/searchUser", err));
	};
};
