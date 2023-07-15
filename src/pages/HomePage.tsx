/* eslint-disable @typescript-eslint/no-empty-interface */
import ContentWrapper from "@/components/LandingPage/components/ContentWrapper";
import useUsers from "@/hooks/useUsers";
import RegisterNewUserEventType from "@/interfaces/RegisterNewUserEventType";
import { createEvent } from "@/services/eventService";
import { CheckBox, Label } from "@mui/icons-material";
import { Box, Button, Checkbox, CircularProgress, FormControlLabel, Stack, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from "@mui/material";
import { DateField, DatePicker } from "@mui/x-date-pickers";
import { AxiosError } from "axios";
import { startOfDay } from "date-fns";
import enGB from "date-fns/locale/en-GB";
import { Dayjs } from "dayjs";
import { useFormik } from "formik";
import { FunctionComponent, useEffect, useState } from "react";
import { useAuthUser } from "react-auth-kit";
import * as yup from "yup";
import { errorMsg, successMsg } from "@/services/toastsMsg";
import WelcomeMyEverAfter from "@/components/HomePage/MyEverAfter/WelcomeMyEverAfter";
import CreateEventInputs from "@/components/HomePage/MyEverAfter/CreateEventInputs";
import CreateEventForm from "@/components/HomePage/MyEverAfter/CreateEventForm";
import useEvents from "@/hooks/useEvents";

interface HomePageProps {}

const HomePage: FunctionComponent<HomePageProps> = () => {
	const auth = useAuthUser();
	const [value, setValue] = useState<dateFns | undefined>(undefined);
	const [isLoadingCreateEvent, setLoadingCreateEvent] = useState(false);
	const data = auth();
	const { handleGetOneUser, user, isLoading } = useUsers(data!.email);
	const { event, handleGetOneEvent } = useEvents(user.eventData, user);

	const formik = useFormik({
		initialValues: {
			numOfGuest: "",
			eventUser: data.id,
			hasVenue: false,
			dateOfWedding: value,
			eventPlanner: "",
			venueName: "",
			hasEventPlanner: false,
			budget: 0,
			tasks: [],
		},
		validationSchema: yup.object({
			numOfGuest: yup.number(),
			budget: yup.number(),
			tasks: yup.array(),
			hasVenue: yup.boolean(),
			dateOfWedding: yup.date(),
			eventPlanner: yup.string(),
			eventUser: yup.string(),
			venueName: yup.string(),
			hasEventPlanner: yup.boolean(),
		}),

		async onSubmit(values: RegisterNewUserEventType) {
			try {
				setLoadingCreateEvent(true);
				const res = await createEvent(values);
				successMsg("Event Created");
				handleGetOneUser();
				handleGetOneEvent();
				setLoadingCreateEvent(false);
			} catch (err) {
				const error = err as AxiosError;
				errorMsg(error.response?.data.message);
				setLoadingCreateEvent(false);
			}
		},
	});

	useEffect(() => {
		handleGetOneUser();
		handleGetOneEvent();
	}, []);

	return (
		<ContentWrapper alignItemsPosition={"center"}>
			{user.eventData.length <= 0 ? (
				<>
					<Stack width={"100%"}>
						<WelcomeMyEverAfter user={user} />
						<CreateEventForm
							formik={formik}
							value={value}
							isLoadingCreateEvent={isLoadingCreateEvent}
						/>
					</Stack>
				</>
			) : (
				<Stack width={"100%"}>
					<WelcomeMyEverAfter user={user} />
					<Box>
						<Typography variant="h5">My EverAfter</Typography>
						<Typography variant="h5">
							The Wedding of {user.brideName} {user.groomName}
						</Typography>
						<Table>
							<TableHead>
								<TableRow>
									<TableCell>Category</TableCell>
									<TableCell>Info</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								<TableCell>est Guest List</TableCell>
								<TableCell>{event.numOfGuest}</TableCell>
							</TableBody>
						</Table>
					</Box>
				</Stack>
			)}
		</ContentWrapper>
	);
};

export default HomePage;
