import EventFromServerType from "@/interfaces/EventFromServerType";
import UserFromServerType from "@/interfaces/UserFromServerType";
import { getEvent } from "@/services/eventService";
import { getAllUsers, getUser } from "@/services/userService";
import { useState } from "react";
import { AuthStateUserObject } from "react-auth-kit/dist/types";

const useEvents = (eventId: AuthStateUserObject | string | null, user: UserFromServerType) => {
	const [event, setEvent] = useState<EventFromServerType>({
		_id: "",
		budget: 0,
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
	});
	const [events, setEvents] = useState<EventFromServerType[] | null>(null);
	const [isLoadingEvent, setLoadingEvent] = useState(true);
	const [error, setError] = useState(null);

	const handleGetOneEvent = async () => {
		try {
			setLoadingEvent(true);
			const event = await getEvent(eventId, user);

			setLoadingEvent(false);
			setError(null);
			setEvent(event);
		} catch (error) {
			setLoadingEvent(false);
			setError(error);
			setEvent({
				_id: "",
				budget: 0,
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
