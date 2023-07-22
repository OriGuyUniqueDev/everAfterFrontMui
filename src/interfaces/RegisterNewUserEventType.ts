import moment, { Moment } from "moment";
import ExpensesType from "./ExpensesType";
import GuestType from "./GuestType";
import TodoType from "./TodoType";

export default interface RegisterNewUserEventType {
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
	dateOfWedding: Date | Moment;
	budget: number;
	presents: number;
	mealPrice: number;
	tasks: TodoType[];
	totalTodoLeft: number;
	todoCompleted: number;
	todoHigh: number;
	todoLow: number;
}
