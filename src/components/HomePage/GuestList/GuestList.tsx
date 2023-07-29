/* eslint-disable @typescript-eslint/no-empty-interface */
import ContentWrapper from "@/components/LandingPage/components/ContentWrapper";
import { useUserAndEventContext } from "@/contexts/UserAndEventContexts";
import { Button, CircularProgress, Divider, Stack, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { FunctionComponent } from "react";
import AddBudgetForm from "../BudgetTracker/components/AddBudgetForm";
import * as yup from "yup";
import { updateEvent } from "@/services/eventService";
import AddGuestForm from "./components/AddGuestForm";
import GuestTable from "./components/GuestTable";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import AddExpanseForm from "../BudgetTracker/components/AddExpanseForm";
import ExpanseDataInfo from "../BudgetTracker/components/ExpanseDataInfo";
import ExpenseTable from "../BudgetTracker/components/ExpenseTable";
import GuestDataInfo from "./components/GuestDataInfo";

interface GuestListProps {}

const GuestList: FunctionComponent<GuestListProps> = () => {
	const { event, handleGetOneEvent, isLoadingEvent, user } = useUserAndEventContext();
	const formik = useFormik({
		initialValues: {
			numOfGuest: event.numOfGuest,
		},
		validationSchema: yup.object({
			numOfGuest: yup.number(),
		}),
		onSubmit(values) {
			try {
				updateEvent(user.eventData, values, user);
				handleGetOneEvent();
			} catch (error) {
				console.log(error);
			}
		},
	});
	return (
		<ContentWrapper alignItemsPosition={""}>
			<Stack width={"100%"}>
				<Stack spacing={"2.1rem"}>
					<Typography
						marginTop={"2.1rem"}
						variant="h1"
						fontSize={"3.75rem"}
						fontWeight={400}
					>
						MyGuests
					</Typography>
					<Typography
						variant="body1"
						fontSize={"1.5rem"}
						fontWeight={400}
					>
						Manage Your Wedding Guest List Effortlessly{" "}
					</Typography>
					<Stack marginTop={"4.13rem"}>
						{event.numOfGuest > 0 ? (
							<>
								<Stack width={"100%"}>
									<Typography
										variant="body1"
										fontSize={"5rem"}
										fontWeight={400}
										color={"#81C784"}
									>
										{event.numOfGuest}
										<Typography
											component={"span"}
											color={"#fff"}
											variant="h1"
											fontSize={"1rem"}
											fontWeight={400}
										>
											Guests
										</Typography>
									</Typography>
									<Stack
										width={"100%"}
										height={"23.5rem"}
										direction={"row"}
										justifyContent="space-between"
									>
										<Grid
											sx={{ border: "3px solid #7986CB", boxShadow: "0px 4px 26px 14px #232C43", borderRadius: "0.625rem", padding: "1.5rem 1.25rem" }}
											direction="row"
											width={"100%"}
											justifyContent={"space-between"}
											container
										>
											<Grid xs={5}>
												<GuestDataInfo />
											</Grid>
											<Grid xs={0}>
												<Divider
													orientation="vertical"
													sx={{ backgroundColor: "#7986CB", width: "0.25rem", borderRadius: 9999 }}
												/>
											</Grid>
											{/* add expanse form */}
											<Grid xs={6}>
												<AddGuestForm />
											</Grid>
										</Grid>
										<GuestTable />
									</Stack>
								</Stack>
							</>
						) : (
							<form onSubmit={formik.handleSubmit}>
								<Stack spacing={4}>
									<TextField
										InputLabelProps={{
											placeholder: "How Many Guests?",
											style: { color: "#bbb" },
										}}
										sx={{ width: "20rem" }}
										value={formik.values.numOfGuest}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										required
										margin="dense"
										id="numOfGuest"
										label="How Many Guests?"
										type="number"
										variant="outlined"
										name="numOfGuest"
										error={formik.touched.numOfGuest && Boolean(formik.errors.numOfGuest)}
										helperText={formik.touched.numOfGuest && formik.errors.numOfGuest}
									/>
									<Button
										disabled={!(formik.isValid && formik.dirty) || isLoadingEvent}
										sx={{ textTransform: "capitalize", fontSize: 18, width: "20rem" }}
										type="submit"
										variant="contained"
										size="large"
										color="secondary"
									>
										{isLoadingEvent ? (
											<>
												<CircularProgress size={24} /> <Typography sx={{ color: "#fff", ml: 1 }}>Updating</Typography>
											</>
										) : (
											"Update Budget"
										)}
									</Button>
								</Stack>
							</form>
						)}
					</Stack>
				</Stack>
			</Stack>
		</ContentWrapper>
	);
};

export default GuestList;
