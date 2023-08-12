/* eslint-disable @typescript-eslint/no-empty-interface */
import { useUserAndEventContext } from "@/contexts/UserAndEventContexts";
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Box, IconButton, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { deleteExpanse } from "@/services/eventService";

interface ExpenseTableProps {}

const ExpenseTable: FunctionComponent<ExpenseTableProps> = () => {
	const { event, user, handleGetOneEvent } = useUserAndEventContext();
	return (
		<TableContainer sx={{ overflowX: "auto" }}>
			<Table
				sx={{ width: "80%", mx: "auto", overflowY: "scroll" }}
				aria-label="simple table"
			>
				<TableHead>
					<TableRow>
						<TableCell>ID</TableCell>
						<TableCell align="center"> Name</TableCell>
						<TableCell align="center">Price</TableCell>
						<TableCell align="center">Deposit</TableCell>
						<TableCell align="center">Actions</TableCell>
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
							<TableCell align="center">
								<Typography>{expense.name}</Typography>
							</TableCell>
							<TableCell align="center">
								<Typography>{expense.totalCost}</Typography>
							</TableCell>
							<TableCell align="center">
								<Typography color={"#36d399"}>{expense.deposit}</Typography>
							</TableCell>
							<TableCell align="center">
								<IconButton
									aria-label="delete"
									color="error"
									onClick={async () => {
										try {
											const isConfirm = confirm(`Are You Sure you want to DELETE ${expense.name} ?`);
											if (isConfirm) {
												await deleteExpanse(user.eventData, expense.id, user, { totalCost: expense.totalCost, deposit: expense.deposit });
												handleGetOneEvent();
											}
										} catch (error) {
											console.log(error);
										}
									}}
								>
									<DeleteForeverIcon />
								</IconButton>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default ExpenseTable;
