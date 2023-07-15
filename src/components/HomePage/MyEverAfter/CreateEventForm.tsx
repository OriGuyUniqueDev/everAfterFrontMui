import RegisterNewUserEventType from "@/interfaces/RegisterNewUserEventType";
import { Stack, TextField, FormControlLabel, Checkbox, Button, CircularProgress, Typography } from "@mui/material";
import { DateField } from "@mui/x-date-pickers";
import { startOfDay } from "date-fns";
import { FormikProps } from "formik";
import { FunctionComponent } from "react";
import CreateEventInputs from "./CreateEventInputs";

interface CreateEventFormProps {
	formik: FormikProps<RegisterNewUserEventType>;
	value: dateFns | undefined;
	isLoadingCreateEvent: boolean;
}

const CreateEventForm: FunctionComponent<CreateEventFormProps> = ({ formik, isLoadingCreateEvent, value }) => {
	return (
		<form onSubmit={formik.handleSubmit}>
			<Stack
				gap={3}
				marginTop={4}
				alignItems={"center"}
			>
				<CreateEventInputs
					formik={formik}
					value={value}
					isLoadingCreateEvent={isLoadingCreateEvent}
				/>
			</Stack>
		</form>
	);
};

export default CreateEventForm;
