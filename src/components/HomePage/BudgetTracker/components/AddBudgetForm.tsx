/* eslint-disable @typescript-eslint/no-empty-interface */
import { useUserAndEventContext } from "@/contexts/UserAndEventContexts";
import { updateEvent } from "@/services/eventService";
import { Stack, TextField, Button, CircularProgress, Typography } from "@mui/material";
import { useFormik } from "formik";
import { FunctionComponent } from "react";
import * as yup from "yup";

interface AddBudgetFormProps {}

const AddBudgetForm: FunctionComponent<AddBudgetFormProps> = () => {
	const { user, event, handleGetOneEvent, handleGetOneUser, isLoadingEvent } = useUserAndEventContext();

	const addBudgetFormik = useFormik({
		initialValues: {
			budget: event.budget,
			numOfGuest: event.numOfGuest,
			mealPrice: event.budget,
			presents: event.presents,
			leftToSpend: event.leftToSpend,
		},
		validationSchema: yup.object({
			budget: yup.number(),
			numOfGuest: yup.number(),
			mealPrice: yup.number(),
		}),
		async onSubmit(values) {
			values.budget = addBudgetFormik.values.mealPrice * addBudgetFormik.values.numOfGuest + addBudgetFormik.values.presents;
			values.leftToSpend = values.budget;

			try {
				const res = await updateEvent(user.eventData, { budget: values.budget, leftToSpend: values.budget }, user);
				handleGetOneEvent();
				addBudgetFormik.resetForm();
			} catch (error) {
				console.log(error);
			}
		},
	});
	return (
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
					value={addBudgetFormik.values.mealPrice}
					onChange={addBudgetFormik.handleChange}
					onBlur={addBudgetFormik.handleBlur}
					required
					margin="dense"
					id="mealPrice"
					label="avg Present"
					type="number"
					variant="outlined"
					name="mealPrice"
					error={addBudgetFormik.touched.mealPrice && Boolean(addBudgetFormik.errors.mealPrice)}
					helperText={addBudgetFormik.touched.mealPrice && addBudgetFormik.errors.mealPrice}
				/>
				<TextField
					InputLabelProps={{
						placeholder: "Known Presents",
						style: { color: "#bbb" },
					}}
					sx={{ width: "20rem" }}
					value={addBudgetFormik.values.presents}
					onChange={addBudgetFormik.handleChange}
					onBlur={addBudgetFormik.handleBlur}
					required
					margin="dense"
					id="presents"
					label="Known Presents"
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
					sx={{ width: "10rem" }}
					value={addBudgetFormik.values.mealPrice * addBudgetFormik.values.numOfGuest + addBudgetFormik.values.presents}
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
					disabled={!(addBudgetFormik.isValid && addBudgetFormik.dirty) || isLoadingEvent}
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
	);
};

export default AddBudgetForm;
