export default interface RegisterNewUserEventType {
	numOfGuest: number | string;
	budget: number;
	hasVenue: boolean;
	dateOfWedding: dateFns | undefined;
	eventPlanner: string;
	eventUser: string;
	venueName: string;
	hasEventPlanner: boolean;
	tasks: string[];
}
