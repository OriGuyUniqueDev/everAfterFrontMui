import LoginDataType from "@/interfaces/LoginDataType";
import { TextField } from "@mui/material";
import { FormikProps } from "formik";
import { FunctionComponent } from "react";

interface InputSectionLoginProps {
	formik: FormikProps<LoginDataType>;
}

const InputSectionLogin: FunctionComponent<InputSectionLoginProps> = ({ formik }) => {
	return (
		<>
			<TextField
				InputLabelProps={{
					placeholder: "Email Address",
					style: { color: "#bbb" },
				}}
				sx={{ width: "20rem" }}
				value={formik.values.email}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				required
				margin="dense"
				id="email"
				label="Email Address"
				type="email"
				variant="outlined"
				name="email"
				error={formik.touched.email && Boolean(formik.errors.email)}
				helperText={formik.touched.email && formik.errors.email}
			/>
			<TextField
				InputLabelProps={{
					placeholder: "Email Address",
					style: { color: "#bbb" },
				}}
				sx={{ width: "20rem" }}
				value={formik.values.password}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				name="password"
				required
				margin="dense"
				id="password"
				label="Password"
				type="password"
				variant="outlined"
				error={formik.touched.password && Boolean(formik.errors.password)}
				helperText={formik.touched.password && formik.errors.password}
			/>
		</>
	);
};

export default InputSectionLogin;
