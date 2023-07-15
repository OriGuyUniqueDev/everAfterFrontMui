/* eslint-disable @typescript-eslint/no-empty-interface */
import RegisterBusinessForm from "@/components/LandingPage/RegisterPageSection/RegisterBusinessForm";
import RegisterButtonsForm from "@/components/LandingPage/RegisterPageSection/RegisterButtonsForm";
import RegisterLoginDetails from "@/components/LandingPage/RegisterPageSection/RegisterLoginDetails";
import RegisterPrivateForm from "@/components/LandingPage/RegisterPageSection/RegisterPrivateForm";
import RegisterTopSection from "@/components/LandingPage/RegisterPageSection/RegisterTopSection";
import FormikRegistrationConfig from "@/configuration/FormikRegistrationConfig";
import LoginDataType from "@/interfaces/LoginDataType";
import LoginUserServerResType from "@/interfaces/LoginUserServerResType";
import RegistrationDataType from "@/interfaces/RegistrationDataType";
import { TypeOfUserType } from "@/interfaces/TypeOfUserType";
import { errorMsg, successMsg } from "@/services/toastsMsg";
import { login, register } from "@/services/userService";
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Paper, Typography, Backdrop, Box, Fade, Modal, SxProps, Stack, Drawer, styled, Switch, FormControlLabel, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { AxiosError } from "axios";
import { useFormik } from "formik";
import { FunctionComponent, useState } from "react";
import { useSignIn } from "react-auth-kit";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";

interface RegistrationPageProps {
	handleClickOpen: () => void;
	open: boolean;
}

const RegistrationPage: FunctionComponent<RegistrationPageProps> = ({ handleClickOpen, open }) => {
	const [showBusinessReg, setShowBusinessReg] = useState(false);
	const navigate = useNavigate();
	const signIn = useSignIn();
	const formik = useFormik<RegistrationDataType>({
		initialValues: {
			email: "",
			password: "",
			brideName: "",
			businessAccount: showBusinessReg,
			eventPannerName: "",
			fullName: "",
			groomName: "",
			typeOfUser: TypeOfUserType.Private,
			eventData: "No Event Connected",
		} as RegistrationDataType,
		validationSchema: yup.object().shape({
			email: yup.string().required().email("Invalid Email"),
			password: yup.string().required().min(6, "Too Short, Should be at least 6 characters"),
			eventData: yup.string().notRequired(),
			businessAccount: yup.boolean().required(),
			brideName: yup.string().when("businessAccount", ([businessAccount]) => {
				if (businessAccount) return yup.string().oneOf([""]);
				return yup.string().required().min(2, "Too Short, Should be at least 2 characters");
			}),
			eventPannerName: yup.string().when("businessAccount", ([businessAccount]) => {
				if (businessAccount) return yup.string().required().min(2, "Too Short, Should be at least 2 characters");
				return yup.string().notRequired().max(0);
			}),
			fullName: yup.string().when("businessAccount", ([businessAccount]) => {
				if (businessAccount) return yup.string().oneOf([""]);
				return yup.string().required().min(2, "Too Short, Should be at least 2 characters");
			}),
			groomName: yup.string().when("businessAccount", ([businessAccount]) => {
				if (businessAccount) return yup.string().oneOf([""]);
				return yup.string().required().min(2, "Too Short, Should be at least 2 characters");
			}),
			// typeOfUser: yup.string().equals([TypeOfUserType]).required(),
		}),
		async onSubmit(values: RegistrationDataType) {
			const valuesToRegister = values;
			if (valuesToRegister.businessAccount === true) {
				valuesToRegister.typeOfUser = TypeOfUserType.Business;
			} else {
				valuesToRegister.typeOfUser = TypeOfUserType.Private;
			}

			try {
				const res: LoginUserServerResType = await register(values);
				const loginData: LoginDataType = {
					email: res.email,
					password: values.password,
				};
				const res2: LoginUserServerResType = await login(loginData);
				signIn({
					token: res2.access_token,
					expiresIn: 720,
					tokenType: "Bearer",
					authState: { email: res2.email, id: res2.id, typeOfUser: res2.typeOfUser, eventUser: res2.eventUser },
				});
				handleClickOpen();
				successMsg("welcome");
				navigate("/MyEverAfter");
			} catch (err) {
				const error = err as AxiosError;
				errorMsg(`${error.response?.data.message}`);
			}
		},
	});

	function handleShowBusinessForm() {
		setShowBusinessReg((prev) => !prev);
	}

	return (
		<>
			<Drawer
				anchor={"bottom"}
				open={open}
				onClose={handleClickOpen}
			>
				<form onSubmit={formik.handleSubmit}>
					<Stack
						spacing={2}
						sx={{ mx: 10, my: 5 }}
					>
						<RegisterTopSection />
						<Stack
							spacing={2}
							direction={{ xs: "column", lg: "row" }}
						>
							<RegisterLoginDetails
								formik={formik}
								showBusinessReg={showBusinessReg}
								handleShowBusinessForm={handleShowBusinessForm}
							/>
							{showBusinessReg ? <RegisterBusinessForm formik={formik} /> : <RegisterPrivateForm formik={formik} />}
						</Stack>
						<RegisterButtonsForm
							formik={formik}
							handleClickOpen={handleClickOpen}
						/>
					</Stack>
				</form>
			</Drawer>
		</>
	);
};

export default RegistrationPage;
