import axios from "axios";

export const api = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
	headers: {
		Authorization: `Bearer ${localStorage.getItem("token")}`,
	},
	withCredentials: true,
});
