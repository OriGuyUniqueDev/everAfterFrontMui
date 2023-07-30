export default interface EventToServerType {
	numOfGuest?: number;
	eventUser?: string;
	eventPlanner?: string;
	hasEventPlanner?: boolean;
	hasVenue?: boolean;
	venueName?: string;
	dateOfWedding?: string;
	leftToSpend?: number;
	alreadyPaid?: number;
	totalBudget?: number;
	totalSpent?: number;
	budget?: number;
	presents?: number;
	mealPrice?: number;
	tasks?: string[];
	_id?: string;
	totalGuestByList?: number;
	groomSide?: number;
	brideSide?: number;
}
