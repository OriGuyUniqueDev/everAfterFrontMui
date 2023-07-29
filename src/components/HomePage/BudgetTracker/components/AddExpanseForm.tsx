/* eslint-disable @typescript-eslint/no-empty-interface */
import { useUserAndEventContext } from "@/contexts/UserAndEventContexts";
import ExpensesType from "@/interfaces/ExpensesType";
import { updateEventExpanse, updateEvent } from "@/services/eventService";
import { Typography, Stack, TextField, Button, CircularProgress } from "@mui/material";
import { FormikProps, useFormik } from "formik";
import { FunctionComponent } from "react";
import * as yup from "yup";

interface AddExpanseFormProps {}

const AddExpanseForm: FunctionComponent<AddExpanseFormProps> = () => {
	const { user, event, handleGetOneEvent, handleGetOneUser, isLoadingEvent, isLoadingUser } = useUserAndEventContext();

	const addExpanseFormik = useFormik<ExpensesType>({
		initialValues: {
			id: 0,
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
			try {
				values.id = event.expenses?.length ? event.expenses?.length + 1 : 1;
				const updateEventData = {
					alreadyPaid: event.alreadyPaid + values.deposit,
					totalBudget: event.budget,
					totalSpent: event.totalSpent + values.totalCost,
					leftToSpend: event.leftToSpend - values.totalCost,
				};
				updateEventExpanse(user.eventData, values, user);
				updateEvent(user.eventData, updateEventData, user);
				addExpanseFormik.resetForm();
				handleGetOneEvent();
			} catch (error) {
				console.log(error);
			}
		},
	});
	return (
		<form onSubmit={addExpanseFormik.handleSubmit}>
			<Typography
				variant="body1"
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
					value={addExpanseFormik.values.name}
					onChange={addExpanseFormik.handleChange}
					onBlur={addExpanseFormik.handleBlur}
					required
					margin="dense"
					id="name"
					inputProps={{
						style: { fontFamily: '"Fredoka", sans-serif', fontWeight: 600 },
					}}
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
					disabled={!(addExpanseFormik.isValid && addExpanseFormik.dirty) || isLoadingEvent}
					sx={{ textTransform: "capitalize", fontSize: 18 }}
					type="submit"
					variant="contained"
					size="large"
					color="secondary"
				>
					{isLoadingEvent ? (
						<>
							<CircularProgress size={24} /> <Typography sx={{ color: "#fff", ml: 1 }}>Checking</Typography>
						</>
					) : (
						"Add Expanse"
					)}
				</Button>
			</Stack>
		</form>
	);
};

export default AddExpanseForm;
