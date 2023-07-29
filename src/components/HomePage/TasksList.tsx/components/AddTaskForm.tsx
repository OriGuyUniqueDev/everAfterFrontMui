/* eslint-disable @typescript-eslint/no-empty-interface */
import { useUserAndEventContext } from "@/contexts/UserAndEventContexts";
import GuestType from "@/interfaces/GuestType";
import TodoType from "@/interfaces/TodoType";
import { updateEventGuestList, updateEvent, updateEventTaskList } from "@/services/eventService";
import { Typography, Stack, TextField, FormControlLabel, Checkbox, Button, CircularProgress, Select, FormControl, InputLabel, MenuItem } from "@mui/material";
import { useFormik } from "formik";
import { FunctionComponent } from "react";
import * as yup from "yup";

interface AddTaskFormProps {}

const AddTaskForm: FunctionComponent<AddTaskFormProps> = () => {
	const { user, event, handleGetOneEvent, handleGetOneUser, isLoadingEvent, isLoadingUser } = useUserAndEventContext();

	const addTaskFormik = useFormik<TodoType>({
		enableReinitialize: true,
		initialValues: {
			id: 0,
			priority: "Low",
			task: "",
			completed: false,
		},
		validationSchema: yup.object({
			priority: yup.string().equals(["High", "Low"]),
			task: yup.string(),
		}),
		async onSubmit(values: TodoType) {
			try {
				values.id = event.tasks?.length > 0 ? event.tasks?.length + 1 : 1;
				const updateEventData = {
					totalTodoLeft: event.totalTodoLeft + 1,
					todoCompleted: event.todoCompleted,
					todoHigh: values.priority === "High" ? event.todoHigh + 1 : event.todoHigh,
					todoLow: values.priority === "Low" ? event.todoLow + 1 : event.todoLow,
				};
				updateEventTaskList(user.eventData, values, user);
				updateEvent(user.eventData, updateEventData, user);
				addTaskFormik.resetForm();

				handleGetOneEvent();
			} catch (error) {
				console.log(error);
			}
		},
	});
	return (
		<form onSubmit={addTaskFormik.handleSubmit}>
			<Typography
				variant="body2"
				fontSize={"1.5rem"}
				fontWeight={600}
				marginBottom="1.2rem"
			>
				Add Task
			</Typography>
			<Stack
				direction={"column"}
				spacing={"0.875rem"}
			>
				<TextField
					InputLabelProps={{
						placeholder: "Task Name",
						style: { color: "#bbb" },
					}}
					required
					margin="dense"
					onChange={addTaskFormik.handleChange}
					onBlur={addTaskFormik.handleBlur}
					value={addTaskFormik.values.task}
					id="task"
					label="Task Name"
					type="text"
					variant="outlined"
					inputProps={{
						style: { fontFamily: '"Fredoka", sans-serif', fontWeight: 600 },
					}}
					name="task"
					error={addTaskFormik.touched.task && Boolean(addTaskFormik.errors.task)}
					helperText={addTaskFormik.touched.task && addTaskFormik.errors.task}
				/>
				<FormControl fullWidth>
					<InputLabel
						sx={{ color: "#bbb" }}
						id="priorityID"
					>
						High or Low?
					</InputLabel>
					<Select
						labelId="priorityID"
						id="priority"
						name="priority"
						value={addTaskFormik.values.priority}
						label="High or Low?"
						onChange={addTaskFormik.handleChange}
					>
						<MenuItem value={"Low"}>Low</MenuItem>
						<MenuItem value={"High"}>High</MenuItem>
					</Select>
				</FormControl>
				<Button
					disabled={!(addTaskFormik.isValid && addTaskFormik.dirty) || isLoadingEvent}
					sx={{ textTransform: "capitalize", fontSize: 18 }}
					type="submit"
					variant="contained"
					size="large"
					color="secondary"
				>
					{isLoadingEvent ? (
						<>
							<CircularProgress size={24} /> <Typography sx={{ color: "#fff", ml: 1 }}>Checking</Typography>
						</>
					) : (
						"Add Task"
					)}
				</Button>
			</Stack>
		</form>
	);
};

export default AddTaskForm;
