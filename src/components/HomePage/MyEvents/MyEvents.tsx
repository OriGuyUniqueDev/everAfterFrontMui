/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-empty-interface */
import ContentWrapper from "@/components/LandingPage/components/ContentWrapper";
import { useUserAndEventContext } from "@/contexts/UserAndEventContexts";
import { ListOfUserType } from "@/interfaces/ListOfUserType";
import RegisterNewUserEventType from "@/interfaces/RegisterNewUserEventType";
import { createEvent, findAllBusinessUsersEvents } from "@/services/eventService";
import { successMsg, errorMsg } from "@/services/toastsMsg";
import { getAllUsers, getUser, getUserById, updateUser } from "@/services/userService";
import { Box, Button, Checkbox, CircularProgress, FormControl, FormControlLabel, InputLabel, List, ListItem, MenuItem, Modal, Select, Stack, TextField, Typography } from "@mui/material";
import { AxiosError } from "axios";
import { useFormik } from "formik";
import { FunctionComponent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateEventForm from "../MyEverAfter/CreateEventForm";
import * as yup from "yup";
import { useAuthUser } from "react-auth-kit";
import { DateField } from "@mui/x-date-pickers";
import moment, { Moment } from "moment";
import UserFromServerType from "@/interfaces/UserFromServerType";

interface MyEventsProps {}

const MyEvents: FunctionComponent<MyEventsProps> = () => {
	const { user, handleGetOneUser, isLoadingEvent, setUser, handleGetOneEvent, setEventDataInUser, event } = useUserAndEventContext();
	const [userEmailEventSelected, setUserEmailEventSelected] = useState("");
	const [listOfUsers2, setListOfUsers2] = useState<UserFromServerType["email"][]>([]);
	const [value, setValue] = useState<Moment | Date | undefined>(undefined);
	const [isLoadingCreateEvent, setLoadingCreateEvent] = useState(false);

	const auth = useAuthUser();
	const data = auth();
	const formik = useFormik<RegisterNewUserEventType>({
		initialValues: {
			numOfGuest: event.numOfGuest,
			eventUser: data!.id,
			hasVenue: event.hasVenue,
			dateOfWedding: new Date(event.dateOfWedding),
			eventPlanner: user.fullName,
			venueName: event.venueName,
			hasEventPlanner: true,
			budget: event.budget,
			totalBudget: event.totalBudget,
			mealPrice: event.mealPrice,
			presents: event.presents,
			totalGuestByList: event.totalGuestByList,
			brideSide: event.brideSide,
			groomSide: event.groomSide,
			guestList: event.guestList,
			totalSpent: event.totalSpent,
			leftToSpend: event.leftToSpend,
			alreadyPaid: event.alreadyPaid,
			expenses: event.expenses,
			todoCompleted: event.todoCompleted,
			todoHigh: event.todoHigh,
			todoLow: event.todoLow,
			totalTodoLeft: event.totalTodoLeft,
			tasks: event.tasks,
			connectedUser: event.connectedUser,
		},
		validationSchema: yup.object({
			numOfGuest: yup.number(),
			totalBudget: yup.number(),
			totalGuestByList: yup.number(),
			totalSpent: yup.number(),
			leftToSpend: yup.number(),
			alreadyPaid: yup.number(),
			brideSide: yup.number(),
			groomSide: yup.number(),
			budget: yup.number(),
			presents: yup.number(),
			mealPrice: yup.number(),
			tasks: yup.array(),
			guestList: yup.array(),
			hasVenue: yup.boolean(),
			dateOfWedding: yup.date(),
			eventPlanner: yup.string(),
			eventUser: yup.string(),
			venueName: yup.string(),
			hasEventPlanner: yup.boolean(),
		}),

		async onSubmit(values: RegisterNewUserEventType) {
			try {
				setLoadingCreateEvent(true);
				const updatedEvent = {
					numOfGuest: values.numOfGuest,
					eventUser: data!.id,
					hasVenue: values.hasVenue,
					dateOfWedding: values.dateOfWedding,
					eventPlanner: user.fullName,
					venueName: values.venueName,
					hasEventPlanner: values.hasEventPlanner,
					budget: event.budget,
					totalBudget: event.totalBudget,
					mealPrice: event.mealPrice,
					presents: event.presents,
					totalGuestByList: event.totalGuestByList,
					brideSide: event.brideSide,
					groomSide: event.groomSide,
					guestList: event.guestList,
					totalSpent: event.totalSpent,
					leftToSpend: event.leftToSpend,
					alreadyPaid: event.alreadyPaid,
					expenses: event.expenses,
					todoCompleted: event.todoCompleted,
					todoHigh: event.todoHigh,
					todoLow: event.todoLow,
					totalTodoLeft: event.totalTodoLeft,
					tasks: event.tasks,
					connectedUser: values.connectedUser,
				};
				const res = await createEvent(updatedEvent);

				successMsg("Event Created/Updated");
				handleGetOneUser();
				handleGetOneEvent();
				setLoadingCreateEvent(false);
				handleClose();
			} catch (err) {
				const error = err as AxiosError;
				console.log(error);

				errorMsg(error.response?.data.message);
				setLoadingCreateEvent(false);
			}
		},
	});
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const [listOfUsers, setListOfUsers] = useState<ListOfUserType[]>([
		{
			brideName: "",
			eventData: "",
			groomName: "",
		},
	]);
	const style = {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: 400,
		bgcolor: "background.paper",
		border: "2px solid #000",
		boxShadow: 24,
		p: 4,
	};
	const navigate = useNavigate();
	useEffect(() => {
		handleGetOneUser();
		const getUsersEventData = async () => {
			const data = await findAllBusinessUsersEvents(user.email, user);
			setListOfUsers(data);
		};
		const fetchData = async () => {
			try {
				const data = await getAllUsers();

				// const userEmailEventSelectedUpdated = await getUserById(event.eventUser);
				// setUserEmailEventSelected(userEmailEventSelectedUpdated);
				const updatedList: UserFromServerType["email"][] = [];
				data.forEach((user: UserFromServerType) => {
					if (user.businessAccount === false) updatedList.push(user.email);
				});
				setListOfUsers2(updatedList);
			} catch (error) {
				console.log(error);
			}
		};

		fetchData();
		getUsersEventData();
	}, []);
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
						MyEvents
					</Typography>
					<Typography
						variant="body1"
						fontSize={"1.5rem"}
						fontWeight={300}
						width={"60%"}
					>
						Just choose the event and update the data you need, by the way you and your client can update and see the updated data
					</Typography>
				</Stack>
				<Stack
					spacing={3}
					width={"30rem"}
				>
					<Button
						sx={{ marginTop: 5 }}
						onClick={handleOpen}
						variant="contained"
						color="info"
					>
						Update/Add Event
					</Button>
					{listOfUsers?.map((userInArray) => {
						return (
							<Typography
								fontSize={26}
								key={userInArray.eventData}
								variant="body1"
								textAlign={"left"}
								marginTop={5}
								sx={{ textTransform: "capitalize", justifyContent: "flex-start", width: "fit", cursor: "pointer" }}
								onClick={async () => {
									await updateUser(
										user.email,
										{
											eventData: userInArray.eventData,
										},
										user
									);
									handleGetOneUser();
									handleGetOneEvent();
									navigate("/MyEverAfter");
								}}
							>
								{userInArray.brideName} & {userInArray.groomName} event ❤️
							</Typography>
						);
					})}
				</Stack>
				<Modal
					open={open}
					onClose={handleClose}
					aria-labelledby="add-event-modal"
					aria-describedby="add-event-description"
				>
					<Box sx={style}>
						<Typography
							fontSize={26}
							textAlign="left"
							fontWeight={600}
							variant="body1"
						>
							Add Or Update Existing Event
						</Typography>
						<form onSubmit={formik.handleSubmit}>
							<Stack gap={1}>
								<TextField
									InputLabelProps={{
										placeholder: "est Guest Number",
										style: { color: "#bbb" },
									}}
									sx={{ width: "20rem" }}
									value={formik.values.numOfGuest}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									required
									margin="dense"
									id="numOfGuest"
									label="est Guest Number"
									type="number"
									variant="outlined"
									name="numOfGuest"
									error={formik.touched.numOfGuest && Boolean(formik.errors.numOfGuest)}
									helperText={formik.touched.numOfGuest && formik.errors.numOfGuest}
								/>
								{/* <TextField
									InputLabelProps={{
										placeholder: "Connect the event to ?",
										style: { color: user.businessAccount === true ? "#bbb" : "" },
									}}
									sx={{ width: "20rem" }}
									value={formik.values.connectedUser}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									margin="dense"
									id="connectedUser"
									label="Connect the event to ?"
									type="email"
									variant="outlined"
									name="connectedUser"
									disabled={user.businessAccount === true ? false : true}
									// error={formik.touched.numOfGuest && Boolean(formik.errors.numOfGuest)}
									// helperText={formik.touched.numOfGuest && formik.errors.numOfGuest}
								/> */}
								<FormControl fullWidth>
									<InputLabel id="connectedUser">Connect the event to?</InputLabel>
									<Select
										labelId="connectedUser"
										id="connectedUserSelect"
										name="connectedUser"
										displayEmpty
										disabled={user.businessAccount === true ? false : true}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										value={formik.values.connectedUser}
										required
										label="Connect the event to?"
										sx={{ width: "20rem" }}
									>
										{listOfUsers2.map((user2) => {
											return (
												<MenuItem
													key={user2}
													value={user2}
													selected={user2 === event.connectedUser ? true : false}
												>
													{user2}
												</MenuItem>
											);
										})}
									</Select>
								</FormControl>
								<DateField
									label="Wedding Date"
									value={value}
									onError={(newError: any) => {
										switch (newError) {
											case "minDate":
												formik.setFieldError("dateOfWedding", "Its allowed to choose future dates only ");
												break;

											default:
												formik.setFieldError("dateOfWedding", newError);

												break;
										}
									}}
									// minDate={moment().calendar()}

									sx={{ width: "20rem" }}
									onChange={(newValue) => {
										formik.setFieldValue("dateOfWedding", newValue, false);
									}}
									slotProps={{ textField: { InputLabelProps: { placeholder: "Wedding Date", style: { color: "#bbb" } } } }}
								/>
								<FormControlLabel
									control={
										<Checkbox
											name="hasVenue"
											id="hasVenue"
											onBlur={formik.handleBlur}
											onChange={formik.handleChange}
											value={formik.values.hasVenue}
											checked={formik.values.hasVenue}
										/>
									}
									label="Have You Closed a Venue Yet?"
								/>
								{formik.values.hasVenue ? (
									<>
										<TextField
											InputLabelProps={{
												placeholder: "Venue Name",
												style: { color: "#bbb" },
											}}
											sx={{ width: "20rem" }}
											value={formik.values.venueName}
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											required
											margin="dense"
											id="venueName"
											label="Venue Name"
											type="text"
											variant="outlined"
											name="venueName"
											error={formik.touched.venueName && Boolean(formik.errors.venueName)}
											helperText={formik.touched.venueName && formik.errors.venueName}
										/>
									</>
								) : (
									<></>
								)}
								<FormControlLabel
									checked={user.businessAccount === true ? true : formik.values.hasEventPlanner}
									disabled={user.businessAccount === false ? false : true}
									value={user.businessAccount === false ? formik.values.hasEventPlanner : true}
									control={
										<Checkbox
											name="hasEventPlanner"
											id="hasEventPlanner"
											onBlur={formik.handleBlur}
											onChange={formik.handleChange}
											value={user.businessAccount === false ? formik.values.hasEventPlanner : true}
											checked={true}
											// disabled={user.businessAccount}
										/>
									}
									label="Do you have an Event Planner?"
								/>
								{formik.values.hasEventPlanner ? (
									<>
										<TextField
											InputLabelProps={{
												placeholder: "Event Planner",
												style: { color: "#bbb" },
											}}
											sx={{ width: "20rem" }}
											value={user.fullName}
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											required
											margin="dense"
											id="eventPlanner"
											label="Event Planner"
											type="text"
											variant="outlined"
											name="eventPlanner"
											error={formik.touched.eventPlanner && Boolean(formik.errors.eventPlanner)}
											helperText={formik.touched.eventPlanner && formik.errors.eventPlanner}
											InputProps={{
												readOnly: user.businessAccount,
											}}
										/>
									</>
								) : (
									<>
										<Typography>test</Typography>
									</>
								)}
								<Button
									type="submit"
									variant="contained"
									sx={{ width: "20rem" }}
								>
									{isLoadingCreateEvent ? (
										<>
											<CircularProgress size={24} /> <Typography sx={{ color: "#fff", ml: 1 }}>Creating</Typography>
										</>
									) : (
										"Update/Add New Event"
									)}
								</Button>
							</Stack>
						</form>
						{/* <Typography
							id="add-event-modal"
							variant="h6"
							component="h2"
						>
							Text in a modal
						</Typography>
						<Typography
							id="add-event-description"
							sx={{ mt: 2 }}
						>
							Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
						</Typography> */}
					</Box>
				</Modal>
			</Stack>
		</ContentWrapper>
	);
};

export default MyEvents;
