export default interface EventFromServerType {
	numOfGuest: number;
	eventUser: string;
	eventPlanner: string;
	hasEventPlanner: boolean;
	hasVenue: boolean;
	venueName: string;
	dateOfWedding: string;
	budget: number;
	tasks: string[];
	_id: string;
}
