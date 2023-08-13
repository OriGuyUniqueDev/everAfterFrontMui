import LoginDataType from "@/interfaces/LoginDataType";
import axios, { AxiosError, AxiosResponse } from "axios";
import { errorMsg, successMsg } from "./toastsMsg";
import { useAuthHeader, useSignIn } from "react-auth-kit";
import RegistrationDataType from "@/interfaces/RegistrationDataType";
import { AuthStateUserObject } from "react-auth-kit/dist/types";

const api = axios.create({
	baseURL: import.meta.env.NODE_ENV === "dev" ? import.meta.env.VITE_SERVER_URL_DEV : import.meta.env.VITE_SERVER_URL_PROD,
	headers: {
		"Content-Type": "application/json",
		"Access-Control-Allow-Origin": "https://ever-after.netlify.app/",
		"Access-Control-Allow-Credentials": true,
		Accept: "application/json",
		Authorization: `Bearer ${localStorage.getItem("everAfterAuth")}`,
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
		.post("/users/registerMe", userData)
		.then((res) => res.data)
		.then((err) => err);
}
export async function getUser(userEmail: AuthStateUserObject | string | null) {
	try {
		const { data } = await api.get(`users/${userEmail}`);

		return data;
	} catch (err) {
		return Promise.reject(err.message);
	}
}
export async function updateUser(userEmail: AuthStateUserObject | string | null, updateUserData: any, user: any) {
	try {
		const { data } = await api.patch(`users/${userEmail}`, updateUserData, {
			data: {
				email: user.email,
			},
		});

		return data;
	} catch (err) {
		return Promise.reject(err.message);
	}
}
export async function getAllUsers() {
	try {
		const { data } = await api.get(`users`);
		return data;
	} catch (err) {
		return Promise.reject(err.message);
	}
}
