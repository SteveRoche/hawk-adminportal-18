import { LIST_USER, EDIT_USER } from "ActionTypes";
import axios from "Axios";

export const listUser = () => {
	//TODO: Pagination
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
