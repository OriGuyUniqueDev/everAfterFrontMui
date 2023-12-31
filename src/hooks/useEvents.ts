import EventFromServerType from "@/interfaces/EventFromServerType";
import UserFromServerType from "@/interfaces/UserFromServerType";
import { getEvent } from "@/services/eventService";
import { getAllUsers, getUser } from "@/services/userService";
import { useState } from "react";
import { AuthStateUserObject } from "react-auth-kit/dist/types";
import { json } from "react-router-dom";

const useEvents = (eventId: AuthStateUserObject | string | null, user: UserFromServerType) => {
	const [event, setEvent] = useState<EventFromServerType>({
		_id: "",
		budget: 0,
		brideSide: 0,
		expenses: [],
		groomSide: 0,
		guestList: [],
		todoCompleted: 0,
		todoHigh: 0,
		todoLow: 0,
		totalGuestByList: 0,
		totalTodoLeft: 0,
		dateOfWedding: "",
		eventPlanner: "",
		eventUser: "",
		hasEventPlanner: false,
		alreadyPaid: 0,
		leftToSpend: 0,
		mealPrice: 0,
		presents: 0,
		totalBudget: 0,
		totalSpent: 0,
		hasVenue: false,
		numOfGuest: 0,
		tasks: [],
		venueName: "",
		connectedUser: "",
	});
	const [events, setEvents] = useState<EventFromServerType[] | null>(null);
	const [isLoadingEvent, setLoadingEvent] = useState(true);
	const [error, setError] = useState(null);

	const handleGetOneEvent = async () => {
		try {
			setLoadingEvent(true);
			const eventFromServer = await getEvent(eventId, user);
			if (JSON.stringify(eventFromServer) === JSON.stringify(event)) {
				setLoadingEvent(false);
				return;
			} else {
				setError(null);
				setEvent(eventFromServer);
				setLoadingEvent(false);
			}
		} catch (error) {
			setLoadingEvent(false);
			setError(error);
			setEvent({
				_id: "",
				budget: 0,
				brideSide: 0,
				expenses: [],
				groomSide: 0,
				guestList: [],
				todoCompleted: 0,
				todoHigh: 0,
				todoLow: 0,
				totalGuestByList: 0,
				totalTodoLeft: 0,
				dateOfWedding: "",
				eventPlanner: "",
				eventUser: "",
				hasEventPlanner: false,
				alreadyPaid: 0,
				leftToSpend: 0,
				mealPrice: 0,
				presents: 0,
				totalBudget: 0,
				totalSpent: 0,
				hasVenue: false,
				numOfGuest: 0,
				tasks: [],
				venueName: "",
				connectedUser: "",
			});
		}
	};
	const handleGetAllEvents = async () => {
		try {
			setLoadingEvent(true);
			const events = await getAllUsers();
			setLoadingEvent(false);
			setError(null);
			setEvents(events);
		} catch (error) {
			setLoadingEvent(false);
			setError(error);
			setEvents([]);
		}
	};
	return {
		handleGetOneEvent,
		handleGetAllEvents,
		event,
		isLoadingEvent,
		error,
	};
};

export default useEvents;
