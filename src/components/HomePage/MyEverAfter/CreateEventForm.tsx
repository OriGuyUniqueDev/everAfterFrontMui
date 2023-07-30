import RegisterNewUserEventType from "@/interfaces/RegisterNewUserEventType";
import Stack from "@mui/material/Stack";
import { FormikProps } from "formik";
import { Moment } from "moment";
import { FunctionComponent } from "react";
import CreateEventInputs from "./CreateEventInputs";

interface CreateEventFormProps {
	formik: FormikProps<RegisterNewUserEventType>;
	value: Moment | Date | undefined;
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
