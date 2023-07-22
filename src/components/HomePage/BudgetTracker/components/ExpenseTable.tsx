/* eslint-disable @typescript-eslint/no-empty-interface */
import { useUserAndEventContext } from "@/contexts/UserAndEventContexts";
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { FunctionComponent } from "react";

interface ExpenseTableProps {}

const ExpenseTable: FunctionComponent<ExpenseTableProps> = () => {
	const { event } = useUserAndEventContext();
	return (
		<TableContainer>
			<Table
				sx={{ width: "80%", mx: "auto", overflow: "scroll" }}
				aria-label="simple table"
			>
				<TableHead>
					<TableRow>
						<TableCell>ID</TableCell>
						<TableCell align="center">Expense Name</TableCell>
						<TableCell align="center">Price</TableCell>
						<TableCell align="center">Deposit</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{event.expenses.map((expense) => (
						<TableRow key={expense.id}>
							<TableCell
								component="th"
								scope="row"
							>
								{expense.id}
							</TableCell>
							<TableCell align="center">{expense.name}</TableCell>
							<TableCell align="center">{expense.totalCost}</TableCell>
							<TableCell align="center">{expense.deposit}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default ExpenseTable;
