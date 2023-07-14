import RegistrationDataType from "@/interfaces/RegistrationDataType";
import { TypeOfUserType } from "@/interfaces/TypeOfUserType";
import { Stack, Typography, TextField, FormControlLabel, styled, Switch, Checkbox } from "@mui/material";
import { FormikProps } from "formik";
import { FunctionComponent } from "react";

interface RegisterLoginDetailsProps {
	formik: FormikProps<RegistrationDataType>;
	showBusinessReg: boolean;
	handleShowBusinessForm: () => void;
}

const RegisterLoginDetails: FunctionComponent<RegisterLoginDetailsProps> = ({ formik, handleShowBusinessForm, showBusinessReg }) => {
	const BusinessAccount = styled(Switch)(({ theme }) => ({
		padding: 8,
		"& .MuiSwitch-track": {
			borderRadius: 22 / 2,
			"&:before, &:after": {
				content: '""',
				position: "absolute",
				top: "50%",
				transform: "translateY(-50%)",
				width: 16,
				height: 16,
			},
			"&:before": {
				backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(theme.palette.getContrastText(theme.palette.primary.main))}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
				left: 12,
			},
			"&:after": {
				backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(theme.palette.getContrastText(theme.palette.primary.main))}" d="M19,13H5V11H19V13Z" /></svg>')`,
				right: 12,
			},
		},
		"& .MuiSwitch-thumb": {
			boxShadow: "none",
			width: 16,
			height: 16,
			margin: 2,
		},
	}));
	return (
		<Stack>
			<Typography fontSize={16} variant="h6">
				Login Details
			</Typography>
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

			<FormControlLabel
				control={
					<Checkbox
						onChange={() => {
							formik.handleChange;
							if (formik.values.businessAccount === false) {
								formik.values.businessAccount = true;
								formik.values.typeOfUser = TypeOfUserType.Business;
								formik.values.brideName = "";
								formik.values.groomName = "";
								formik.values.fullName = "";
							} else {
								formik.values.businessAccount = false;
								formik.values.typeOfUser = TypeOfUserType.Business;
								formik.values.eventPannerName = "";
							}
						}}
						onClick={handleShowBusinessForm}
						value={formik.values.businessAccount}
						name="businessAccount"
						onBlur={formik.handleBlur}
						id="businessAccount"
					/>
				}
				label="Business Account?"
			/>
		</Stack>
	);
};

export default RegisterLoginDetails;
