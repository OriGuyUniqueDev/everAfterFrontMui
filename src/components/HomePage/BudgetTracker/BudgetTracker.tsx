/* eslint-disable @typescript-eslint/no-empty-interface */
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

import ContentWrapper from "@/components/LandingPage/components/ContentWrapper";
import { Box, Button, CircularProgress, Divider, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { FunctionComponent, useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import useEvents from "@/hooks/useEvents";
import useUsers from "@/hooks/useUsers";
import { useAuthUser } from "react-auth-kit";
import ExpensesType from "@/interfaces/ExpensesType";

interface BudgetTrackerProps {}

const BudgetTracker: FunctionComponent<BudgetTrackerProps> = () => {
	const [isLoading, setLoading] = useState(false);
	const { user } = useUsers();
	const { event, handleGetOneEvent } = useEvents();
	console.log(event);

	const addExpanseFormik = useFormik<ExpensesType>({
		initialValues: {
			name: "",
			totalCost: 0,
			deposit: 0,
		},
		validationSchema: yup.object({
			name: yup.string().required("Name: is required"),
			totalCost: yup.number().required("Total Cost: is required"),
			deposit: yup.number().required("Total Cost: is required"),
		}),
		async onSubmit(values: ExpensesType) {
			console.log("asdd", values);
		},
	});
	const addBudgetFormik = useFormik({
		initialValues: {
			budget: event.budget,
			numOfGuest: event.numOfGuest,
			mealPrice: event.budget,
			presents: event.presents,
		},
		validationSchema: yup.object({
			budget: yup.number(),
			numOfGuest: yup.number(),
			mealPrice: yup.number(),
		}),
		async onSubmit(values) {
			console.log(values);
		},
	});
	return (
		<ContentWrapper alignItemsPosition={""}>
			<Stack>
				<Stack spacing={"2.1rem"}>
					<Typography
						marginTop={"2.1rem"}
						variant="h1"
						fontSize={"3.75rem"}
						fontWeight={400}
					>
						MyBudget
					</Typography>
					<Typography
						variant="body1"
						fontSize={"1.5rem"}
						fontWeight={400}
					>
						Keep track of your wedding expenses and stay on budget with ease.
					</Typography>
					<Stack marginTop={"4.13rem"}>
						{event.budget > 0 ? (
							<Typography
								variant="body1"
								fontSize={"5rem"}
								fontWeight={400}
								color={"#81C784"}
							>
								{event.budget}
								<Typography
									component={"span"}
									color={"#fff"}
									variant="h1"
									fontSize={"1rem"}
									fontWeight={400}
								>
									left to spent
								</Typography>
							</Typography>
						) : (
							<form onSubmit={addBudgetFormik.handleSubmit}>
								<Stack spacing={2}>
									<TextField
										InputLabelProps={{
											placeholder: "How Many Guests?",
											style: { color: "#bbb" },
										}}
										sx={{ width: "20rem" }}
										value={addBudgetFormik.values.numOfGuest}
										onChange={addBudgetFormik.handleChange}
										onBlur={addBudgetFormik.handleBlur}
										required
										margin="dense"
										id="numOfGuest"
										label="How Many Guests?"
										type="number"
										variant="outlined"
										name="numOfGuest"
										error={addBudgetFormik.touched.numOfGuest && Boolean(addBudgetFormik.errors.numOfGuest)}
										helperText={addBudgetFormik.touched.numOfGuest && addBudgetFormik.errors.numOfGuest}
									/>
									<TextField
										InputLabelProps={{
											placeholder: "avg Present",
											style: { color: "#bbb" },
										}}
										sx={{ width: "20rem" }}
										value={addBudgetFormik.values.presents}
										onChange={addBudgetFormik.handleChange}
										onBlur={addBudgetFormik.handleBlur}
										required
										margin="dense"
										id="presents"
										label="avg Present"
										type="number"
										variant="outlined"
										name="presents"
										error={addBudgetFormik.touched.presents && Boolean(addBudgetFormik.errors.presents)}
										helperText={addBudgetFormik.touched.presents && addBudgetFormik.errors.presents}
									/>
									<TextField
										InputLabelProps={{
											placeholder: "Total Budget",
											style: { color: "#bbb" },
										}}
										sx={{ width: "20rem" }}
										value={addBudgetFormik.values.budget}
										onChange={addBudgetFormik.handleChange}
										onBlur={addBudgetFormik.handleBlur}
										required
										margin="dense"
										id="budget"
										label="Total Budget"
										type="number"
										variant="outlined"
										name="budget"
										error={addBudgetFormik.touched.budget && Boolean(addBudgetFormik.errors.budget)}
										helperText={addBudgetFormik.touched.budget && addBudgetFormik.errors.budget}
									/>
									<Button
										disabled={!(addExpanseFormik.isValid && addExpanseFormik.dirty) || isLoading}
										sx={{ textTransform: "capitalize", fontSize: 18, width: "20rem" }}
										type="submit"
										variant="contained"
										size="large"
										color="secondary"
									>
										{isLoading ? (
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
				{/* left card */}
				{event.budget > 0 ? (
					<Grid
						sx={{ border: "3px solid #7986CB", boxShadow: "0px 4px 26px 14px #232C43", borderRadius: "0.625rem", padding: "1.5rem 1.25rem" }}
						minWidth={"37rem"}
						direction="row"
						justifyContent={"space-between"}
						container
					>
						<Grid xs={4}>
							<Typography
								variant="body2"
								fontSize={"1.5rem"}
								fontWeight={600}
								marginBottom="1.2rem"
							>
								MyBudget
							</Typography>
							<Stack
								width={"100%"}
								spacing={"0.875rem"}
							>
								<Stack
									justifyContent={"space-between"}
									direction="row"
									width={"100%"}
								>
									<Typography
										variant="body1"
										fontSize={"1.25rem"}
										fontWeight={400}
									>
										Total Budget:
									</Typography>
									<Typography
										variant="body1"
										fontSize={"1.25rem"}
										fontWeight={400}
									>
										140000
									</Typography>
								</Stack>
								<Stack
									justifyContent={"space-between"}
									direction="row"
									width={"100%"}
								>
									<Typography
										variant="body1"
										fontSize={"1.25rem"}
										fontWeight={400}
									>
										Total Spent:
									</Typography>
									<Typography
										variant="body1"
										fontSize={"1.25rem"}
										fontWeight={400}
									>
										16000
									</Typography>
								</Stack>
								<Stack
									justifyContent={"space-between"}
									direction="row"
									width={"100%"}
								>
									<Typography
										variant="body1"
										fontSize={"1.25rem"}
										fontWeight={400}
									>
										Left To Spend:
									</Typography>
									<Typography
										variant="body1"
										fontSize={"1.25rem"}
										fontWeight={400}
									>
										100000
									</Typography>
								</Stack>
								<Stack
									justifyContent={"space-between"}
									direction="row"
									width={"100%"}
								>
									<Typography
										variant="body1"
										fontSize={"1.25rem"}
										fontWeight={400}
									>
										Already Paid:
									</Typography>
									<Typography
										variant="body1"
										fontSize={"1.25rem"}
										fontWeight={400}
									>
										4000
									</Typography>
								</Stack>
							</Stack>
						</Grid>
						<Grid xs={0}>
							<Divider
								orientation="vertical"
								sx={{ backgroundColor: "#7986CB", width: "0.25rem", borderRadius: 9999 }}
							/>
						</Grid>
						{/* add expanse form */}
						<Grid xs={6}>
							<form onSubmit={addExpanseFormik.handleSubmit}>
								<Typography
									variant="body2"
									fontSize={"1.5rem"}
									fontWeight={600}
									marginBottom="1.2rem"
								>
									Add Expanse
								</Typography>
								<Stack
									direction={"column"}
									spacing={"0.875rem"}
								>
									<TextField
										InputLabelProps={{
											placeholder: "Expanse Name",
											style: { color: "#bbb" },
										}}
										sx={{ width: "20rem" }}
										value={addExpanseFormik.values.name}
										onChange={addExpanseFormik.handleChange}
										onBlur={addExpanseFormik.handleBlur}
										required
										margin="dense"
										id="name"
										label="Expanse Name"
										type="text"
										variant="outlined"
										name="name"
										error={addExpanseFormik.touched.name && Boolean(addExpanseFormik.errors.name)}
										helperText={addExpanseFormik.touched.name && addExpanseFormik.errors.name}
									/>
									<TextField
										InputLabelProps={{
											placeholder: "Price",
											style: { color: "#bbb" },
										}}
										sx={{ width: "20rem" }}
										value={addExpanseFormik.values.totalCost}
										onChange={addExpanseFormik.handleChange}
										onBlur={addExpanseFormik.handleBlur}
										required
										margin="dense"
										id="totalCost"
										label="Price"
										type="number"
										variant="outlined"
										name="totalCost"
										error={addExpanseFormik.touched.totalCost && Boolean(addExpanseFormik.errors.totalCost)}
										helperText={addExpanseFormik.touched.totalCost && addExpanseFormik.errors.totalCost}
									/>
									<TextField
										InputLabelProps={{
											placeholder: "Already Paid (Deposit)",
											style: { color: "#bbb" },
										}}
										sx={{ width: "20rem" }}
										value={addExpanseFormik.values.deposit}
										onChange={addExpanseFormik.handleChange}
										onBlur={addExpanseFormik.handleBlur}
										required
										margin="dense"
										id="deposit"
										label="Already Paid (Deposit)"
										type="number"
										variant="outlined"
										name="deposit"
										error={addExpanseFormik.touched.deposit && Boolean(addExpanseFormik.errors.deposit)}
										helperText={addExpanseFormik.touched.deposit && addExpanseFormik.errors.deposit}
									/>
									<Button
										disabled={!(addExpanseFormik.isValid && addExpanseFormik.dirty) || isLoading}
										sx={{ textTransform: "capitalize", fontSize: 18, width: "20rem" }}
										type="submit"
										variant="contained"
										size="large"
										color="secondary"
									>
										{isLoading ? (
											<>
												<CircularProgress size={24} /> <Typography sx={{ color: "#fff", ml: 1 }}>Checking</Typography>
											</>
										) : (
											"Add Expanse"
										)}
									</Button>
								</Stack>
							</form>
						</Grid>
					</Grid>
				) : (
					<Typography marginTop={6}>To Add Expanse Add Budget First</Typography>
				)}
			</Stack>
		</ContentWrapper>
	);
};

export default BudgetTracker;
