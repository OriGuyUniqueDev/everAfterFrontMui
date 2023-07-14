/* eslint-disable @typescript-eslint/no-empty-interface */
import ContentWrapper from "@/components/LandingPage/components/ContentWrapper";
import useUsers from "@/hooks/useUsers";
import RegisterNewUserEventType from "@/interfaces/RegisterNewUserEventType";
import { Stack, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { FunctionComponent, useEffect } from "react";
import { useAuthUser } from "react-auth-kit";

import * as yup from "yup";

interface HomePageProps {}

const HomePage: FunctionComponent<HomePageProps> = () => {
	const auth = useAuthUser();
	const data = auth();
	const { handleGetOneUser, user, isLoading } = useUsers(data!.email);
	const formik = useFormik({
		initialValues: {
			guestNum: null,
			hasVanue: false,
			eventDate: new Date(),
			eventPlanner: "",
		},
		validationSchema: yup.object({
			guestNum: yup.number(),
			hasVanue: yup.boolean(),
			eventDate: yup.date(),
			eventPlanner: yup.string(),
		}),
		async onSubmit(values: RegisterNewUserEventType) {
			console.log(values);
		},
	});

	useEffect(() => {
		handleGetOneUser();
	}, []);

	return (
		<ContentWrapper alignItemsPosition={"center"}>
			<Stack width={"100%"}>
				<Typography width={"100%"} marginTop={5} textAlign={"center"} variant="h1">
					Welcome {user.brideName} & {user.groomName}
				</Typography>
				<Typography width={"100%"} marginTop={5} fontSize={24} textAlign={"center"} variant="body1">
					Let's Start Planing Your EverAfter day
				</Typography>
				<Typography width={"100%"} marginTop={5} fontSize={24} textAlign={"center"} variant="h5">
					Event Details:
				</Typography>
				<form onSubmit={formik.handleSubmit}>
					<TextField
						InputLabelProps={{
							placeholder: "Email Address",
							style: { color: "#bbb" },
						}}
						sx={{ width: "20rem" }}
						value={formik.values.guestNum}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						required
						margin="dense"
						id="guestNum"
						label="est Guest Number"
						type="number"
						variant="outlined"
						name="guestNum"
						error={formik.touched.guestNum && Boolean(formik.errors.guestNum)}
						helperText={formik.touched.guestNum && formik.errors.guestNum}
					/>
				</form>
			</Stack>
		</ContentWrapper>
	);
};

export default HomePage;
