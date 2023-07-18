import { FunctionComponent } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import EventFromServerType from "@/interfaces/EventFromServerType";
import moment from "moment";

interface MyEverAfterCardTableProps {
	event: EventFromServerType;
}

const MyEverAfterCardTable: FunctionComponent<MyEverAfterCardTableProps> = ({ event }) => {
	return (
		<Table>
			<TableHead>
				<TableRow>
					<TableCell>
						<Typography>Category</Typography>
					</TableCell>
					<TableCell>
						<Typography>Info</Typography>
					</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				<TableRow>
					<TableCell>
						<Typography>est Guest List</Typography>
					</TableCell>
					<TableCell>
						<Typography>{event.numOfGuest}</Typography>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Typography>Budget</Typography>
					</TableCell>
					<TableCell>
						<Typography>{event.budget}</Typography>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Typography>Date Of Wedding</Typography>
					</TableCell>
					<TableCell>
						<Typography>{moment(new Date(event.dateOfWedding)).format("DD/MM/YYYY")}</Typography>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Typography>Location</Typography>
					</TableCell>
					<TableCell>
						<Typography>{event.venueName}</Typography>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Typography>Days Left</Typography>
					</TableCell>
					<TableCell>
						<Typography>{moment(event.dateOfWedding).diff(new Date(), "days", false)}</Typography>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Typography>Event Planner</Typography>
					</TableCell>
					<TableCell>
						<Typography>{event.eventPlanner}</Typography>
					</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	);
};

export default MyEverAfterCardTable;
