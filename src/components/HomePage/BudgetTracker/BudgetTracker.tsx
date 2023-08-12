/* eslint-disable @typescript-eslint/no-empty-interface */
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

import ContentWrapper from "@/components/LandingPage/components/ContentWrapper";
import { Box, Button, Checkbox, CircularProgress, Divider, FormControlLabel, FormGroup, List, ListItem, ListItemText, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { FunctionComponent, useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import useEvents from "@/hooks/useEvents";
import useUsers from "@/hooks/useUsers";
import { useAuthUser } from "react-auth-kit";
import ExpensesType from "@/interfaces/ExpensesType";
import { useUserAndEventContext } from "@/contexts/UserAndEventContexts";
import { updateEvent, updateEventExpanse } from "@/services/eventService";
import AddExpanseForm from "./components/AddExpanseForm";
import ExpanseDataInfo from "./components/ExpanseDataInfo";
import AddBudgetForm from "./components/AddBudgetForm";
import ExpenseTable from "./components/ExpenseTable";

interface BudgetTrackerProps {}

const BudgetTracker: FunctionComponent<BudgetTrackerProps> = () => {
	const [isLoading, setLoading] = useState(false);
	const { user, event, handleGetOneEvent, handleGetOneUser } = useUserAndEventContext();

	return (
		<ContentWrapper alignItemsPosition={""}>
			<Stack
				my={3}
				width={"100%"}
				minHeight={"100vh"}
			>
				<Stack spacing={"2.1rem"}>
					<Typography
						marginTop={"2.1rem"}
						variant="h1"
						sx={{ fontSize: { xs: "2.5rem", lg: "3.75rem" } }}
						fontWeight={400}
					>
						MyBudget
					</Typography>
					<Typography
						variant="body1"
						sx={{ fontSize: { xs: "1.2rem", lg: "1.5rem" } }}
						fontWeight={400}
					>
						Keep track of your wedding expenses and stay on budget with ease.
					</Typography>
					<Stack marginTop={"4.13rem"}>
						{event.budget > 0 ? (
							<Typography
								variant="body1"
								sx={{ fontSize: { xs: "3.5rem", lg: "5rem" } }}
								fontWeight={400}
								color={"#81C784"}
							>
								{event.leftToSpend}
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
							<AddBudgetForm />
						)}
					</Stack>
				</Stack>
				{/* left card */}
				{event.budget > 0 ? (
					<>
						<Stack
							width={"100%"}
							height={"23.5rem"}
							// direction={"row"}
							sx={{ flexDirection: { xs: "column", md: "row" } }}
							justifyContent="space-between"
						>
							<Grid
								sx={{ border: "3px solid #7986CB", boxShadow: "0px 4px 26px 14px #232C43", borderRadius: "0.625rem", padding: "1.5rem 1.25rem", flexDirection: { xs: "column", md: "row" } }}
								width={"100%"}
								justifyContent={"space-between"}
								container
							>
								<Grid
									xs={12}
									md={5}
									mb={2}
								>
									<ExpanseDataInfo />
								</Grid>
								<Grid xs={0}>
									<Divider
										orientation="vertical"
										sx={{ backgroundColor: "#7986CB", width: "0.25rem", borderRadius: 9999 }}
									/>
								</Grid>
								{/* add expanse form */}
								<Grid
									xs={12}
									md={6}
								>
									<AddExpanseForm />
								</Grid>
							</Grid>
							<ExpenseTable />
						</Stack>
					</>
				) : (
					<Typography marginTop={6}>To Add Expanse Add Budget First</Typography>
				)}
			</Stack>
		</ContentWrapper>
	);
};

export default BudgetTracker;
