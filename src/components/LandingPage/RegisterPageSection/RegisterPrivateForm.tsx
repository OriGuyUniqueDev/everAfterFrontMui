import RegistrationDataType from "@/interfaces/RegistrationDataType";
import { Stack, Typography, TextField } from "@mui/material";
import { FormikProps } from "formik";
import { FunctionComponent } from "react";

interface RegisterPrivateFormProps {
	formik: FormikProps<RegistrationDataType>;
}

const RegisterPrivateForm: FunctionComponent<RegisterPrivateFormProps> = ({ formik }) => {
	return (
		<Stack>
			<Typography fontSize={16} variant="h6">
				Introduce your self
			</Typography>
			<TextField
				InputLabelProps={{
					placeholder: "Full Name",
					style: { color: "#bbb" },
				}}
				sx={{ width: "20rem" }}
				value={formik.values.fullName}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				required
				margin="dense"
				id="fullName"
				label="Full Name"
				type="fullName"
				variant="outlined"
				name="fullName"
				error={formik.touched.fullName && Boolean(formik.errors.fullName)}
				helperText={formik.touched.fullName && formik.errors.fullName}
			/>
			<TextField
				InputLabelProps={{
					placeholder: "Bride Name",
					style: { color: "#bbb" },
				}}
				sx={{ width: "20rem" }}
				value={formik.values.brideName}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				required
				margin="dense"
				id="brideName"
				label="Bride Name"
				type="brideName"
				variant="outlined"
				name="brideName"
				error={formik.touched.brideName && Boolean(formik.errors.brideName)}
				helperText={formik.touched.brideName && formik.errors.brideName}
			/>
			<TextField
				InputLabelProps={{
					placeholder: "Groom Name",
					style: { color: "#bbb" },
				}}
				sx={{ width: "20rem" }}
				value={formik.values.groomName}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				required
				margin="dense"
				id="groomName"
				label="Groom Name"
				type="groomName"
				variant="outlined"
				name="groomName"
				error={formik.touched.groomName && Boolean(formik.errors.groomName)}
				helperText={formik.touched.groomName && formik.errors.groomName}
			/>
		</Stack>
	);
};

export default RegisterPrivateForm;
