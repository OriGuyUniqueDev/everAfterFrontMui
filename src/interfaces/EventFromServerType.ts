import ExpensesType from "./ExpensesType";
import GuestType from "./GuestType";
import TodoType from "./TodoType";

export default interface EventFromServerType {
	numOfGuest: number;
	alreadyPaid: number;
	leftToSpend: number;
	totalSpent: number;
	expenses: ExpensesType[];
	eventUser: string;
	totalBudget: number;
	eventPlanner: string;
	groomSide: number;
	brideSide: number;
	guestList: GuestType[];
	totalGuestByList: number;
	hasEventPlanner: boolean;
	hasVenue: boolean;
	venueName: string;
	dateOfWedding: string;
	budget: number;
	presents: number;
	mealPrice: number;
	tasks: TodoType[];
	totalTodoLeft: number;
	todoCompleted: number;
	todoHigh: number;
	todoLow: number;
	_id: string;
	connectedUser: string;
}
