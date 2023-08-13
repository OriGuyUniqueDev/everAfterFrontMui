import useEvents from "@/hooks/useEvents";
import useUsers from "@/hooks/useUsers";
import EventFromServerType from "@/interfaces/EventFromServerType";
import UserFromServerType from "@/interfaces/UserFromServerType";
import React, { useState, useContext, createContext, FC, useEffect } from "react";
import { useAuthUser } from "react-auth-kit";

type UserAndEventContextType = {
	user: UserFromServerType;
	event: EventFromServerType;
	handleGetOneUser: VoidFunction;
	handleGetOneEvent: VoidFunction;
	isLoadingUser: boolean;
	isLoadingEvent: boolean;
	setUser: React.Dispatch<React.SetStateAction<UserFromServerType>>;
	setEventDataInUser: (eventData: string) => Promise<void>;
};

const UserAndEventContext = createContext<UserAndEventContextType | null>(null);

type UserAndEventContextProps = {
	children: React.ReactNode;
};

export const UserAndEventContextProvider: FC<UserAndEventContextProps> = ({ children }) => {
	const auth = useAuthUser();
	let payloadData = auth();
	console.log(payloadData);

	const { user, handleGetOneUser, isLoadingUser, setUser, setEventDataInUser } = useUsers(payloadData);
	const { event, handleGetOneEvent, isLoadingEvent } = useEvents(user.eventData, user);

	useEffect(() => {
		payloadData = auth();
		handleGetOneUser();
		handleGetOneEvent();
	}, [user.eventData]);

	return <UserAndEventContext.Provider value={{ user, handleGetOneUser, event, handleGetOneEvent, isLoadingEvent, isLoadingUser, setUser, setEventDataInUser }}>{children}</UserAndEventContext.Provider>;
};

export const useUserAndEventContext = (): UserAndEventContextType => {
	const context = useContext(UserAndEventContext);
	if (!context) throw new Error("useUserAndEventContext must be used within a UserAndEventContextProvider");
	return context;
};
