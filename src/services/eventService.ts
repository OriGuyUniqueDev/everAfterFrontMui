import LoginDataType from "@/interfaces/LoginDataType";
import axios, { AxiosError, AxiosResponse } from "axios";
import { errorMsg, successMsg } from "./toastsMsg";
import { useAuthHeader, useSignIn } from "react-auth-kit";
import RegistrationDataType from "@/interfaces/RegistrationDataType";
import { AuthStateUserObject } from "react-auth-kit/dist/types";
import EventToServerType from "@/interfaces/EventToServerType";
import RegisterNewUserEventType from "@/interfaces/RegisterNewUserEventType";
import UserFromServerType from "@/interfaces/UserFromServerType";

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
			data: {
				email: user.email,
			},
		});

		return data;
	} catch (err) {
		return Promise.reject(err.message);
	}
}
export async function updateEvent(eventId: AuthStateUserObject | string | null, updatedData: EventToServerType, user: UserFromServerType) {
	try {
		const { data } = await api.patch(`events/${eventId}`, updatedData, {
			data: {
				email: user.email,
			},
		});

		return data;
	} catch (err) {
		return Promise.reject(err.message);
	}
}
export async function updateEventExpanse(eventId: AuthStateUserObject | string | null, updatedData: any, user: UserFromServerType) {
	try {
		const { data } = await api.patch(`events/updateExpanse/${eventId}`, updatedData, {
			data: {
				email: user.email,
			},
		});

		return data;
	} catch (err) {
		return Promise.reject(err.message);
	}
}
export async function updateEventGuestList(eventId: AuthStateUserObject | string | null, updatedData: any, user: UserFromServerType) {
	try {
		const { data } = await api.patch(`events/updateGuest/${eventId}`, updatedData, {
			data: {
				email: user.email,
			},
		});

		return data;
	} catch (err) {
		return Promise.reject(err.message);
	}
}
export async function updateEventTaskList(eventId: AuthStateUserObject | string | null, updatedData: any, user: UserFromServerType) {
	try {
		const { data } = await api.patch(`events/updateTask/${eventId}`, updatedData, {
			data: {
				email: user.email,
			},
		});

		return data;
	} catch (err) {
		return Promise.reject(err.message);
	}
}
export async function deleteExpanse(eventId: AuthStateUserObject | string | null, expanseId: string, user: UserFromServerType, expanseInfo) {
	try {
		console.log(expanseInfo);

		const { data } = await api.patch(`events/deleteExpanse/${eventId}/${expanseId}`, expanseInfo, {
			data: {
				email: user.email,
			},
		});

		return data;
	} catch (err) {
		return Promise.reject(err.message);
	}
}
export async function deleteGuest(eventId: AuthStateUserObject | string | null, guestId: string | number, user: UserFromServerType, guestInfo) {
	try {
		const { data } = await api.patch(`events/deleteGuest/${eventId}/${guestId}`, guestInfo, {
			data: {
				email: user.email,
			},
		});

		return data;
	} catch (err) {
		return Promise.reject(err.message);
	}
}
export async function deleteTask(eventId: AuthStateUserObject | string | null, taskId: string | number, user: UserFromServerType, taskInfo) {
	try {
		const { data } = await api.patch(`events/deleteTask/${eventId}/${taskId}`, taskInfo, {
			data: {
				email: user.email,
			},
		});

		return data;
	} catch (err) {
		return Promise.reject(err.message);
	}
}
