import LoginDataType from "@/interfaces/LoginDataType";
import axios, { AxiosError, AxiosResponse } from "axios";
import { errorMsg, successMsg } from "./toastsMsg";
import { useAuthHeader, useSignIn } from "react-auth-kit";
import RegistrationDataType from "@/interfaces/RegistrationDataType";
import { AuthStateUserObject } from "react-auth-kit/dist/types";
import EventToServerType from "@/interfaces/EventToServerType";
import RegisterNewUserEventType from "@/interfaces/RegisterNewUserEventType";

const api = axios.create({
	baseURL: import.meta.env.VITE_SERVER_URL,
	headers: {
		"Content-Type": "application/json",
		Accept: "application/json",
		Authorization: `Bearer ${localStorage.getItem("everAfterAuth")}`,
	},
});
export async function createEvent(eventData: RegisterNewUserEventType) {
	return await api
		.post("events", eventData)
		.then((res) => res.data)
		.then((err) => err);
}
export async function getEvent(eventId: AuthStateUserObject | string | null, user: UserFromServerType) {
	try {
		const { data } = await api.get(`events/${eventId}`, {
			params: {
				email: user.email,
			},
		});

		return data;
	} catch (err) {
		return Promise.reject(err.message);
	}
}
