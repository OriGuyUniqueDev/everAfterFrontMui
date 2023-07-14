import UserFromServerType from "@/interfaces/UserFromServerType";
import { getAllUsers, getUser } from "@/services/userService";
import { useState } from "react";
import { AuthStateUserObject } from "react-auth-kit/dist/types";

const useUsers = (userEmail: AuthStateUserObject | string | null) => {
	const [user, setUser] = useState<UserFromServerType>({
		_id: "",
		fullName: "",
		businessAccount: false,
		brideName: "",
		groomName: "",
		typeOfUser: "",
		eventPannerName: "",
		email: "",
	});
	const [users, setUsers] = useState(null);
	const [isLoading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const handleGetOneUser = async () => {
		try {
			setLoading(true);
			const user = await getUser(userEmail);
			setLoading(false);
			setError(null);
			setUser(user);
		} catch (error) {
			setLoading(false);
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
			});
		}
	};
	const handleGetAllUsers = async () => {
		try {
			setLoading(true);
			const users = await getAllUsers();
			setLoading(false);
			setError(null);
			setUsers(users);
		} catch (error) {
			setLoading(false);
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
			});
		}
	};
	return {
		handleGetOneUser,
		handleGetAllUsers,
		user,
		isLoading,
		error,
	};
};

export default useUsers;