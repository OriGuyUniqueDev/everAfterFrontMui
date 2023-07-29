/* eslint-disable @typescript-eslint/no-empty-interface */
import { useUserAndEventContext } from "@/contexts/UserAndEventContexts";
import ExpensesType from "@/interfaces/ExpensesType";
import GuestType from "@/interfaces/GuestType";
import { updateEventExpanse, updateEvent, updateEventGuestList } from "@/services/eventService";
import { Typography, Stack, TextField, Button, CircularProgress, Checkbox, FormControlLabel } from "@mui/material";
import { useFormik } from "formik";
import { FunctionComponent } from "react";
import * as yup from "yup";

interface AddGuestFormProps {}

const AddGuestForm: FunctionComponent<AddGuestFormProps> = () => {
	const { user, event, handleGetOneEvent, handleGetOneUser, isLoadingEvent, isLoadingUser } = useUserAndEventContext();

	const addGuestFormik = useFormik<GuestType>({
		enableReinitialize: true,
		initialValues: {
			id: 0,
			guestName: "",
			isBrideSide: false,
			amount: 0,
		},
		validationSchema: yup.object({
			guestName: yup.string().required("guestName: is required"),
			isBrideSide: yup.boolean(),
			amount: yup.number().required("Total Cost: is required"),
		}),
		async onSubmit(values: GuestType) {
			try {
				values.id = event.guestList?.length > 0 ? event.guestList?.length + 1 : 1;
				const updateEventData = {
					totalGuestByList: event.totalGuestByList + values.amount,
					groomSide: !values.isBrideSide ? event.groomSide + values.amount : event.groomSide,
					brideSide: values.isBrideSide ? event.brideSide + values.amount : event.brideSide,
				};
				updateEventGuestList(user.eventData, values, user);
				updateEvent(user.eventData, updateEventData, user);
				addGuestFormik.resetForm({
					values: { id: 0, guestName: "", isBrideSide: false, amount: 0 },
				});

				handleGetOneEvent();
			} catch (error) {
				console.log(error);
			}
		},
	});
	return (
		<form onSubmit={addGuestFormik.handleSubmit}>
			<Typography
				variant="body2"
				fontSize={"1.5rem"}
				fontWeight={600}
				marginBottom="1.2rem"
			>
				Add Guest
			</Typography>
			<Stack
				direction={"column"}
				spacing={"0.875rem"}
			>
				<TextField
					InputLabelProps={{
						placeholder: "Guest Name",
						style: { color: "#bbb" },
					}}
					required
					margin="dense"
					onChange={addGuestFormik.handleChange}
					onBlur={addGuestFormik.handleBlur}
					value={addGuestFormik.values.guestName}
					id="guestName"
					label="Guest Name"
					inputProps={{
						style: { fontFamily: '"Fredoka", sans-serif', fontWeight: 600 },
					}}
					type="text"
					variant="outlined"
					name="guestName"
					error={addGuestFormik.touched.guestName && Boolean(addGuestFormik.errors.guestName)}
					helperText={addGuestFormik.touched.guestName && addGuestFormik.errors.guestName}
				/>
				<FormControlLabel
					control={
						<Checkbox
							name="isBrideSide"
							id="isBrideSide"
							checked={addGuestFormik.values.isBrideSide}
							onChange={() => {
								addGuestFormik.setFieldValue("isBrideSide", !addGuestFormik.values.isBrideSide);
							}}
							onBlur={addGuestFormik.handleBlur}
							size="medium"
							required={false}
						/>
					}
					label="Bride Side 👰 ? check for yes"
				/>
				<TextField
					InputLabelProps={{
						placeholder: "How Much are They?",
						style: { color: "#bbb" },
					}}
					value={addGuestFormik.values.amount}
					onChange={addGuestFormik.handleChange}
					onBlur={addGuestFormik.handleBlur}
					required
					margin="dense"
					id="amount"
					label="How Much are They?"
					type="number"
					variant="outlined"
					name="amount"
					error={addGuestFormik.touched.amount && Boolean(addGuestFormik.errors.amount)}
					helperText={addGuestFormik.touched.amount && addGuestFormik.errors.amount}
				/>
				<Button
					disabled={!(addGuestFormik.isValid && addGuestFormik.dirty) || isLoadingEvent}
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
						"Add Guest"
					)}
				</Button>
			</Stack>
		</form>
	);
};

export default AddGuestForm;
