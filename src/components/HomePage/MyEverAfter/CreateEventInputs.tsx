/* eslint-disable @typescript-eslint/no-empty-interface */
import { useUserAndEventContext } from "@/contexts/UserAndEventContexts";
import RegisterNewUserEventType from "@/interfaces/RegisterNewUserEventType";
import UserFromServerType from "@/interfaces/UserFromServerType";
import { getAllUsers } from "@/services/userService";
import { Stack, TextField, FormControlLabel, Checkbox, Button, CircularProgress, Typography, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { lightGreen } from "@mui/material/colors";
import { DateField } from "@mui/x-date-pickers";
import { FormikProps } from "formik";
import moment, { Moment } from "moment";
import { FunctionComponent, useEffect, useState } from "react";

interface CreateEventInputsProps {
	formik: FormikProps<RegisterNewUserEventType>;
	value: Moment | Date | undefined;
	isLoadingCreateEvent: boolean;
}

const CreateEventInputs: FunctionComponent<CreateEventInputsProps> = ({ formik, value, isLoadingCreateEvent }) => {
	const { user } = useUserAndEventContext();
	const [listOfUsers, setListOfUsers] = useState<UserFromServerType["email"][]>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await getAllUsers();
				const updatedList: UserFromServerType["email"][] = [];
				data.forEach((user: UserFromServerType) => {
					if (user.businessAccount === false) updatedList.push(user.email);
				});
				setListOfUsers(updatedList);
			} catch (error) {
				throw new Error("error");
			}
		};
		fetchData();
	}, []);
	return (
		<Stack gap={1}>
			<TextField
				InputLabelProps={{
					placeholder: "Email Address",
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
				required
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
					disabled={user.businessAccount === true ? false : true}
					value={formik.values.connectedUser}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					required
					label="Connect the event to?"
				>
					{listOfUsers.map((user) => {
						return (
							<MenuItem
								key={user}
								value={user}
							>
								{user}
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
						value={user.businessAccount ? user.eventPannerName : formik.values.eventPlanner}
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
				<></>
			)}
			<Button
				type="submit"
				variant="contained"
			>
				{isLoadingCreateEvent ? (
					<>
						<CircularProgress size={24} /> <Typography sx={{ color: "#fff", ml: 1 }}>Creating</Typography>
					</>
				) : (
					"Create New Event"
				)}
			</Button>
		</Stack>
	);
};

export default CreateEventInputs;
