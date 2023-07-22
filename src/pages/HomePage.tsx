/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
import Stack from "@mui/material/Stack";
import { createEvent } from "@/services/eventService";
import { AxiosError } from "axios";
import { useFormik } from "formik";
import { FunctionComponent, useEffect, useState } from "react";
import { useAuthUser, useSignIn } from "react-auth-kit";
import { errorMsg, successMsg } from "@/services/toastsMsg";
import ContentWrapper from "@/components/LandingPage/components/ContentWrapper";
import useUsers from "@/hooks/useUsers";
import RegisterNewUserEventType from "@/interfaces/RegisterNewUserEventType";
import WelcomeMyEverAfter from "@/components/HomePage/MyEverAfter/WelcomeMyEverAfter";
import CreateEventForm from "@/components/HomePage/MyEverAfter/CreateEventForm";
import * as yup from "yup";
import MyEverAfterCard from "@/components/HomePage/MyEverAfter/MyEverAfterCard";
import { Moment } from "moment";
import { useUserAndEventContext } from "@/contexts/UserAndEventContexts";

interface HomePageProps {}

const HomePage: FunctionComponent<HomePageProps> = () => {
	const auth = useAuthUser();
	const [value, setValue] = useState<Moment | Date | undefined>(undefined);
	const [isLoadingCreateEvent, setLoadingCreateEvent] = useState(false);
	const data = auth();
	const { event, handleGetOneEvent, handleGetOneUser, user } = useUserAndEventContext();

	const formik = useFormik<RegisterNewUserEventType>({
		initialValues: {
			numOfGuest: 0,
			eventUser: data!.id,
			hasVenue: false,
			dateOfWedding: new Date(),
			eventPlanner: "",
			venueName: "",
			hasEventPlanner: false,
			budget: 0,
			totalBudget: 0,
			mealPrice: 0,
			presents: 0,
			totalGuestByList: 0,
			brideSide: 0,
			groomSide: 0,
			guestList: [],
			totalSpent: 0,
			leftToSpend: 0,
			alreadyPaid: 0,
			expenses: [],
			todoCompleted: 0,
			todoHigh: 0,
			todoLow: 0,
			totalTodoLeft: 0,
			tasks: [],
		},
		validationSchema: yup.object({
			numOfGuest: yup.number(),
			totalBudget: yup.number(),
			totalGuestByList: yup.number(),
			totalSpent: yup.number(),
			leftToSpend: yup.number(),
			alreadyPaid: yup.number(),
			brideSide: yup.number(),
			groomSide: yup.number(),
			budget: yup.number(),
			presents: yup.number(),
			mealPrice: yup.number(),
			tasks: yup.array(),
			guestList: yup.array(),
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
				console.log(values);

				const res = await createEvent(values);

				successMsg("Event Created");
				handleGetOneUser();
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
					<Stack
						gap={6}
						direction="row"
						width={"100%"}
						justifyContent={"center"}
						marginTop={4}
					>
						<MyEverAfterCard user={user} />
						{/* <MyEverAfterCard
							user={user}
							event={event}
						/>
						<MyEverAfterCard
							user={user}
							event={event}
						/> */}
					</Stack>
				</Stack>
			)}
		</ContentWrapper>
	);
};

export default HomePage;
