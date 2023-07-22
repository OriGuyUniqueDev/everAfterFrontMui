/* eslint-disable @typescript-eslint/no-empty-interface */
import ContentWrapper from "@/components/LandingPage/components/ContentWrapper";
import { useUserAndEventContext } from "@/contexts/UserAndEventContexts";
import EventFromServerType from "@/interfaces/EventFromServerType";
import TodoType from "@/interfaces/TodoType";
import { updateEvent, updateEventTaskList } from "@/services/eventService";
import { Button, CircularProgress, Divider, FormControl, InputLabel, MenuItem, Select, Stack, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

import { FunctionComponent } from "react";
import AddGuestForm from "../GuestList/components/AddGuestForm";
import GuestDataInfo from "../GuestList/components/GuestDataInfo";
import GuestTable from "../GuestList/components/GuestTable";
import * as yup from "yup";
import TaskDataInfo from "./components/TaskDataInfo";
import AddTaskForm from "./components/AddTaskForm";
import TaskTable from "./components/TaskTable";

interface TasksListProps {}

const TasksList: FunctionComponent<TasksListProps> = () => {
	const { event, handleGetOneEvent, isLoadingEvent, user } = useUserAndEventContext();
	const formik = useFormik<TodoType>({
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
		onSubmit(values) {
			values.id = event.tasks?.length > 0 ? event.tasks?.length + 1 : 1;

			const updateEventData = {
				totalTodoLeft: event.totalTodoLeft + 1,
				todoCompleted: event.todoCompleted,
				todoHigh: values.priority === "High" ? event.todoHigh + 1 : event.todoHigh,
				todoLow: values.priority === "Low" ? event.todoLow + 1 : event.todoLow,
			};

			try {
				updateEvent(user.eventData, updateEventData, user);
				updateEventTaskList(user.eventData, values, user);
				handleGetOneEvent();
			} catch (error) {
				console.log(error);
			}
		},
	});

	return (
		<ContentWrapper alignItemsPosition={""}>
			<Stack width={"100%"}>
				<Stack spacing={"2.1rem"}>
					<Typography
						marginTop={"2.1rem"}
						variant="h1"
						fontSize={"3.75rem"}
						fontWeight={400}
					>
						MyTasks
					</Typography>
					<Typography
						variant="body1"
						fontSize={"1.5rem"}
						fontWeight={400}
					>
						Keep track of your wedding to-do list and stay organized.
					</Typography>
				</Stack>
				<Stack marginTop={"4.13rem"}>
					{event.totalTodoLeft > 0 ? (
						<>
							<Stack width={"100%"}>
								<Typography
									variant="body1"
									fontSize={"5rem"}
									fontWeight={400}
									color={"#81C784"}
								>
									{event.totalTodoLeft}
									<Typography
										component={"span"}
										color={"#fff"}
										variant="h1"
										fontSize={"1rem"}
										fontWeight={400}
									>
										Todo Left
									</Typography>
								</Typography>
								<Stack
									width={"100%"}
									height={"23.5rem"}
									direction={"row"}
									justifyContent="space-between"
								>
									<Grid
										sx={{ border: "3px solid #7986CB", boxShadow: "0px 4px 26px 14px #232C43", borderRadius: "0.625rem", padding: "1.5rem 1.25rem" }}
										direction="row"
										width={"100%"}
										justifyContent={"space-between"}
										container
									>
										<Grid xs={5}>
											<TaskDataInfo />
										</Grid>
										<Grid xs={0}>
											<Divider
												orientation="vertical"
												sx={{ backgroundColor: "#7986CB", width: "0.25rem", borderRadius: 9999 }}
											/>
										</Grid>
										{/* add expanse form */}
										<Grid xs={6}>
											<AddTaskForm />
										</Grid>
									</Grid>
									<TaskTable />
								</Stack>
							</Stack>
						</>
					) : (
						<form onSubmit={formik.handleSubmit}>
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
									sx={{ width: "20rem" }}
									margin="dense"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.task}
									id="task"
									label="Task Name"
									type="text"
									variant="outlined"
									name="task"
									error={formik.touched.task && Boolean(formik.errors.task)}
									helperText={formik.touched.task && formik.errors.task}
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
										sx={{ width: "20rem" }}
										name="priority"
										value={formik.values.priority}
										label="High or Low?"
										onChange={formik.handleChange}
									>
										<MenuItem value={"Low"}>Low</MenuItem>
										<MenuItem value={"High"}>High</MenuItem>
									</Select>
								</FormControl>
								<Button
									disabled={!(formik.isValid && formik.dirty) || isLoadingEvent}
									sx={{ textTransform: "capitalize", fontSize: 18, width: "20rem" }}
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
					)}
				</Stack>
			</Stack>
		</ContentWrapper>
	);
};

export default TasksList;
