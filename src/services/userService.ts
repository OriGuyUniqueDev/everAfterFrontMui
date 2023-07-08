import LoginDataType from "@/interfaces/LoginDataType";
import axios from "axios";
import { errorMsg, successMsg } from "./toastsMsg";
import { useSignIn } from "react-auth-kit";
import RegistrationDataType from "@/interfaces/RegistrationDataType";

const api = axios.create({
	baseURL: import.meta.env.VITE_SERVER_URL,
	headers: {
		"Content-Type": "application/json",
		Accept: "application/json",
		Authorization: `Bearer ${localStorage.getItem("everAfter")}`,
	},
});

export async function login(userData: LoginDataType) {
	return await api
		.post("/login", userData)
		.then((res) => res.data)
		.then((err) => err);
}
export async function register(userData: RegistrationDataType) {
	return await api
		.post("/registerMe", userData)
		.then((res) => res.data)
		.then((err) => err);
}
