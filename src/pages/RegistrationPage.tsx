/* eslint-disable @typescript-eslint/no-empty-interface */
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Paper, Typography, Backdrop, Box, Fade, Modal, SxProps, Stack, Drawer } from "@mui/material";
import { useFormik } from "formik";
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";

interface RegistrationPageProps {
	handleClickOpen: () => void;
	open: boolean;
}

const RegistrationPage: FunctionComponent<RegistrationPageProps> = ({ handleClickOpen, open }) => {
	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: yup.object({
			email: yup.string().required().email("Invalid Email"),
			password: yup.string().required().min(6, "Too Short, Should be at least 6 characters"),
		}),
		onSubmit(values) {
			console.log(values);
		},
	});
	return (
		<>
			<Drawer anchor={"bottom"} open={open} onClose={handleClickOpen}>
				<form onSubmit={formik.handleSubmit}>
					<Stack spacing={2} sx={{ mx: 10, my: 5 }}>
						<Typography variant="h4">Lets Login 👋</Typography>
						<Typography variant="body1" fontSize={20} color={"#fff"}>
							Welcome, this is the first step to organize the wedding of your DREAMS{" "}
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
							autoFocus
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

						<Stack direction={"row"} spacing={3}>
							<Button type="submit" variant="contained" size="large" color="secondary">
								Login
							</Button>
							<Button variant="outlined" size="large" color="primary" onClick={handleClickOpen}>
								Cancel
							</Button>
						</Stack>
					</Stack>
				</form>
			</Drawer>
		</>
	);
};

export default RegistrationPage;
