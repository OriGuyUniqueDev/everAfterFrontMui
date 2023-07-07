import RegistrationDataType from "@/interfaces/RegistrationDataType";
import { Stack, Typography, TextField } from "@mui/material";
import { FormikProps } from "formik";
import { FunctionComponent } from "react";

interface RegisterBusinessFormProps {
	formik: FormikProps<RegistrationDataType>;
}

const RegisterBusinessForm: FunctionComponent<RegisterBusinessFormProps> = ({ formik }) => {
	return (
		<Stack>
			<Typography fontSize={16} variant="h6">
				Introduce your self and your business
			</Typography>
			<TextField
				InputLabelProps={{
					placeholder: "Event Planner Name",
					style: { color: "#bbb" },
				}}
				sx={{ width: "20rem" }}
				value={formik.values.eventPannerName}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				required
				margin="dense"
				id="eventPannerName"
				label="Event Planner Name"
				type="eventPannerName"
				variant="outlined"
				name="eventPannerName"
				error={formik.touched.eventPannerName && Boolean(formik.errors.eventPannerName)}
				helperText={formik.touched.eventPannerName && formik.errors.eventPannerName}
			/>
		</Stack>
	);
};

export default RegisterBusinessForm;
