/* eslint-disable @typescript-eslint/no-empty-interface */
import RegisterNewUserEventType from "@/interfaces/RegisterNewUserEventType";
import { Stack, TextField, FormControlLabel, Checkbox, Button, CircularProgress, Typography } from "@mui/material";
import { DateField } from "@mui/x-date-pickers";
import { startOfDay } from "date-fns";
import { FormikProps } from "formik";
import { FunctionComponent } from "react";

interface CreateEventInputsProps {
	formik: FormikProps<RegisterNewUserEventType>;
	value: dateFns | undefined;
	isLoadingCreateEvent: boolean;
}

const CreateEventInputs: FunctionComponent<CreateEventInputsProps> = ({ formik, value, isLoadingCreateEvent }) => {
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
				minDate={startOfDay(new Date())}
				sx={{ width: "20rem" }}
				onChange={(newValue) => {
					formik.setFieldValue("dateOfWedding", newValue, false);
				}}
				slotProps={{ textField: { InputLabelProps: { placeholder: "Wedding Date", style: { color: "#bbb" } }, helperText: formik.errors.dateOfWedding ? formik.errors.dateOfWedding : "Day/Month/Year", FormHelperTextProps: { style: { color: "#fff" } } } }}
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
				control={
					<Checkbox
						name="hasEventPlanner"
						id="hasEventPlanner"
						onBlur={formik.handleBlur}
						onChange={formik.handleChange}
						value={formik.values.hasEventPlanner}
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
						value={formik.values.eventPlanner}
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
