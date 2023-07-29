/* eslint-disable @typescript-eslint/no-empty-interface */
import { useUserAndEventContext } from "@/contexts/UserAndEventContexts";
import { deleteGuest, deleteTask } from "@/services/eventService";
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, IconButton } from "@mui/material";
import { FunctionComponent } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

interface TaskTableProps {}

const TaskTable: FunctionComponent<TaskTableProps> = () => {
	const { event, user, handleGetOneEvent } = useUserAndEventContext();
	return (
		<TableContainer>
			<Table
				sx={{ width: "80%", mx: "auto", overflow: "scroll" }}
				aria-label="simple table"
			>
				<TableHead>
					<TableRow>
						<TableCell>ID</TableCell>
						<TableCell align="center">Task Name</TableCell>
						<TableCell align="center">High or Low Side?</TableCell>
						<TableCell align="center">Completed?</TableCell>
						<TableCell align="center">Actions</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{event.tasks.map((task) => (
						<TableRow key={task.id}>
							<TableCell
								component="th"
								scope="row"
							>
								{task.id}
							</TableCell>
							<TableCell align="center">{task.task}</TableCell>
							<TableCell align="center">{task.priority}</TableCell>
							<TableCell align="center">{task.completed ? "✔️" : "❌"}</TableCell>
							<TableCell align="center">
								<IconButton
									aria-label="delete"
									color="error"
									onClick={async () => {
										try {
											const isConfirm = confirm(`Are You Sure you want to DELETE ${task.task} ?`);
											if (isConfirm) {
												await deleteTask(user.eventData, task.id, user, { completed: task.completed, priority: task.priority });
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

export default TaskTable;
