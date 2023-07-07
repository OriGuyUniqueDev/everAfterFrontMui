/* eslint-disable @typescript-eslint/no-empty-interface */
import ActionSectionLogin from "@/components/LandingPage/LoginPageSection/ActionSectionLogin";
import InputSectionLogin from "@/components/LandingPage/LoginPageSection/InputSectionLogin";
import TopSectionLogin from "@/components/LandingPage/LoginPageSection/TopSectionLogin";
import FormikLoginConfig from "@/configuration/FormikLoginConfig";
import LoginDataType from "@/interfaces/LoginDataType";
import { Stack, Drawer } from "@mui/material";
import { useFormik } from "formik";
import { FunctionComponent } from "react";

interface LoginPageProps {
	handleClickOpen: () => void;
	open: boolean;
}

const LoginPage: FunctionComponent<LoginPageProps> = ({ handleClickOpen, open }) => {
	const formik = useFormik<LoginDataType>(FormikLoginConfig);
	return (
		<>
			<Drawer anchor={"bottom"} open={open} onClose={handleClickOpen}>
				<form onSubmit={formik.handleSubmit}>
					<Stack spacing={2} sx={{ mx: 10, my: 5 }}>
						<TopSectionLogin />
						<InputSectionLogin formik={formik} />
						<ActionSectionLogin handleClickOpen={handleClickOpen} />
					</Stack>
				</form>
			</Drawer>
		</>
	);
};

export default LoginPage;
