import UserFromServerType from "@/interfaces/UserFromServerType";
import { getAllUsers, getUser } from "@/services/userService";
import { useState } from "react";
import { AuthStateUserObject } from "react-auth-kit/dist/types";

const useUsers = (payloadData: AuthStateUserObject | string | null) => {
	const [user, setUser] = useState<UserFromServerType>({
		_id: "",
		fullName: "",
		businessAccount: false,
		brideName: "",
		groomName: "",
		typeOfUser: "",
		eventPannerName: "",
		email: "",
		eventData: "",
	});
	const [users, setUsers] = useState(null);
	const [isLoadingUser, setLoadingUser] = useState(true);
	const [error, setError] = useState(null);

	const handleGetOneUser = async (id?: string) => {
		let user;
		if (payloadData !== null) {
			try {
				setLoadingUser(true);
				user = await getUser(id === undefined ? payloadData.email! : id);
				setLoadingUser(false);
				setError(null);
				setUser(user);
			} catch (error) {
				setLoadingUser(false);
				setError(error);
				setUser({
					_id: "",
					fullName: "",
					businessAccount: false,
					brideName: "",
					groomName: "",
					typeOfUser: "",
					eventPannerName: "",
					email: "",
					eventData: "",
				});
			}
		} else {
			return "";
		}
	};
	const handleGetAllUsers = async () => {
		try {
			setLoadingUser(true);
			const users = await getAllUsers();
			setLoadingUser(false);
			setError(null);
			setUsers(users);
		} catch (error) {
			setLoadingUser(false);
			setError(error);
			setUser({
				_id: "",
				fullName: "",
				businessAccount: false,
				brideName: "",
				groomName: "",
				typeOfUser: "",
				eventPannerName: "",
				email: "",
				eventData: "",
			});
		}
	};
	const setEventDataInUser = async (eventData: string) => {
		setUser({
			...user,
			eventData: eventData,
		});
	};
	return {
		handleGetOneUser,
		setEventDataInUser,
		handleGetAllUsers,
		setUser,
		user,
		isLoadingUser,
		error,
	};
};

export default useUsers;
