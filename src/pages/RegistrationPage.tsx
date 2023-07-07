/* eslint-disable @typescript-eslint/no-empty-interface */
import RegisterBusinessForm from "@/components/LandingPage/RegisterPageSection/RegisterBusinessForm";
import RegisterButtonsForm from "@/components/LandingPage/RegisterPageSection/RegisterButtonsForm";
import RegisterLoginDetails from "@/components/LandingPage/RegisterPageSection/RegisterLoginDetails";
import RegisterPrivateForm from "@/components/LandingPage/RegisterPageSection/RegisterPrivateForm";
import RegisterTopSection from "@/components/LandingPage/RegisterPageSection/RegisterTopSection";
import FormikRegistrationConfig from "@/configuration/FormikRegistrationConfig";
import RegistrationDataType from "@/interfaces/RegistrationDataType";
import { TypeOfUserType } from "@/interfaces/TypeOfUserType";
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Paper, Typography, Backdrop, Box, Fade, Modal, SxProps, Stack, Drawer, styled, Switch, FormControlLabel, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useFormik } from "formik";
import { FunctionComponent, useState } from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";

interface RegistrationPageProps {
	handleClickOpen: () => void;
	open: boolean;
}

const RegistrationPage: FunctionComponent<RegistrationPageProps> = ({ handleClickOpen, open }) => {
	const [showBusinessReg, setShowBusinessReg] = useState(false);
	const formik = useFormik<RegistrationDataType>(FormikRegistrationConfig);

	function handleShowBusinessForm() {
		setShowBusinessReg((prev) => !prev);
	}

	return (
		<>
			<Drawer anchor={"bottom"} open={open} onClose={handleClickOpen}>
				<form onSubmit={formik.handleSubmit}>
					<Stack spacing={2} sx={{ mx: 10, my: 5 }}>
						<RegisterTopSection />
						<Stack spacing={2} direction={{ xs: "column", lg: "row" }}>
							<RegisterLoginDetails formik={formik} showBusinessReg={showBusinessReg} handleShowBusinessForm={handleShowBusinessForm} />
							{showBusinessReg ? <RegisterBusinessForm formik={formik} /> : <RegisterPrivateForm formik={formik} />}
						</Stack>
						<RegisterButtonsForm handleClickOpen={handleClickOpen} />
					</Stack>
				</form>
			</Drawer>
		</>
	);
};

export default RegistrationPage;
