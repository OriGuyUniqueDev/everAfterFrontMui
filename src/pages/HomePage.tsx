/* eslint-disable @typescript-eslint/no-empty-interface */
import useUsers from "@/hooks/useUsers";
import { getUser } from "@/services/userService";
import { FunctionComponent, useEffect } from "react";
import { useAuthUser } from "react-auth-kit";

interface HomePageProps {}

const HomePage: FunctionComponent<HomePageProps> = () => {
	const auth = useAuthUser();
	const data = auth();
	const { handleGetOneUser, user, isLoading } = useUsers(data.email);

	useEffect(() => {
		handleGetOneUser();
	}, []);

	return <div></div>;
};

export default HomePage;
