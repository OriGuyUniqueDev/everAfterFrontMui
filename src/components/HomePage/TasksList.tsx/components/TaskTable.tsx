/* eslint-disable @typescript-eslint/no-empty-interface */
import { useUserAndEventContext } from "@/contexts/UserAndEventContexts";
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { FunctionComponent } from "react";

interface TaskTableProps {}

const TaskTable: FunctionComponent<TaskTableProps> = () => {
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
						<TableCell align="center">Task Name</TableCell>
						<TableCell align="center">High or Low Side?</TableCell>
						<TableCell align="center">Completed?</TableCell>
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
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default TaskTable;
