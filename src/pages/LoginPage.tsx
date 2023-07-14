/* eslint-disable @typescript-eslint/no-empty-interface */
import ActionSectionLogin from "@/components/LandingPage/LoginPageSection/ActionSectionLogin";
import InputSectionLogin from "@/components/LandingPage/LoginPageSection/InputSectionLogin";
import TopSectionLogin from "@/components/LandingPage/LoginPageSection/TopSectionLogin";
import FormikLoginConfig from "@/configuration/FormikLoginConfig";
import useDrawers from "@/hooks/useDrawers";
import LoginDataType from "@/interfaces/LoginDataType";
import LoginUserServerResType from "@/interfaces/LoginUserServerResType";
import { errorMsg, successMsg } from "@/services/toastsMsg";
import { login } from "@/services/userService";
import { Stack, Drawer } from "@mui/material";
import { AxiosError, AxiosResponse } from "axios";
import { useFormik } from "formik";
import React from "react";
import { FunctionComponent, useState } from "react";
import { useSignIn } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import * as yup from "yup";

interface LoginPageProps {
	handleClickOpen: VoidFunction;
	open: boolean;
}

const LoginPage: FunctionComponent<LoginPageProps> = ({ handleClickOpen, open }) => {
	const signIn = useSignIn();
	const navigate = useNavigate();
	const [isLoading, setLoading] = useState(false);
	const formik = useFormik<LoginDataType>({
		initialValues: {
			email: "",
			password: "",
		} as LoginDataType,
		validationSchema: yup.object({
			email: yup.string().required().email("Invalid Email"),
			password: yup.string().required().min(6, "Too Short, Should be at least 6 characters"),
		}),
		async onSubmit(values: LoginDataType) {
			try {
				setLoading(true);
				const res: LoginUserServerResType = await login(values);
				signIn({
					token: res.access_token,
					expiresIn: 720,
					tokenType: "Bearer",
					authState: { email: res.email },
				});
				successMsg("welcome");
				setLoading(false);
				handleClickOpen();
				navigate("/MyEverAfter");
			} catch (err) {
				setLoading(true);
				const error = err as AxiosError;
				errorMsg(error.message);
				setLoading(false);
			}
		},
	});
	return (
		<>
			<Drawer anchor={"bottom"} open={open} onClose={handleClickOpen}>
				<form onSubmit={formik.handleSubmit}>
					<Stack spacing={2} sx={{ mx: 10, my: 5 }}>
						<TopSectionLogin />
						<InputSectionLogin formik={formik} />
						<ActionSectionLogin isLoading={isLoading} handleClickOpen={handleClickOpen} formik={formik} />
					</Stack>
				</form>
			</Drawer>
		</>
	);
};

export default LoginPage;
