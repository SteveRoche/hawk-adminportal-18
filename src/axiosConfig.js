import axios from "axios";

const axiosConfig = {
	headers: { "Content-Type": "application/json" }
};

export default axios.create(axiosConfig);
