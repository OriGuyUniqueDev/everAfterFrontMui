import LoginDataType from "@/interfaces/LoginDataType";
import { Stack, Button, CircularProgress, Typography } from "@mui/material";
import { green } from "@mui/material/colors";
import { FormikProps } from "formik";
import { FunctionComponent } from "react";

interface ActionSectionLoginProps {
	handleClickOpen: () => void;
	formik: FormikProps<LoginDataType>;
	isLoading: boolean;
}

const ActionSectionLogin: FunctionComponent<ActionSectionLoginProps> = ({ handleClickOpen, formik, isLoading }) => {
	return (
		<Stack direction={"row"} spacing={3}>
			<Button disabled={!(formik.isValid && formik.dirty) || isLoading} sx={{ textTransform: "capitalize", fontSize: 18 }} type="submit" variant="contained" size="large" color="secondary">
				{isLoading ? (
					<>
						<CircularProgress size={24} /> <Typography sx={{ color: "#fff", ml: 1 }}>Checking</Typography>
					</>
				) : (
					"Login"
				)}
			</Button>
			<Button sx={{ textTransform: "capitalize", fontSize: 18 }} variant="outlined" size="large" color="primary" onClick={handleClickOpen}>
				Cancel
			</Button>
		</Stack>
	);
};

export default ActionSectionLogin;
