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
		hasVenue: false,
		numOfGuest: 0,
		tasks: [],
		venueName: "",
	});
	const [events, setEvents] = useState<EventFromServerType[] | null>(null);
	const [isLoading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const handleGetOneEvent = async () => {
		try {
			setLoading(true);
			const event = await getEvent(eventId, user);

			setLoading(false);
			setError(null);
			setEvent(event);
		} catch (error) {
			setLoading(false);
			setError(error);
			setEvent({
				_id: "",
				budget: 0,
				dateOfWedding: "",
				eventPlanner: "",
				eventUser: "",
				hasEventPlanner: false,
				hasVenue: false,
				numOfGuest: 0,
				tasks: [],
				venueName: "",
			});
		}
	};
	const handleGetAllEvents = async () => {
		try {
			setLoading(true);
			const events = await getAllUsers();
			setLoading(false);
			setError(null);
			setEvents(events);
		} catch (error) {
			setLoading(false);
			setError(error);
			setEvents([]);
		}
	};
	return {
		handleGetOneEvent,
		handleGetAllEvents,
		event,
		isLoading,
		error,
	};
};

export default useEvents;
