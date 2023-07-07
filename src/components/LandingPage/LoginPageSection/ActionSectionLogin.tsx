import LoginDataType from "@/interfaces/LoginDataType";
import { Stack, Button } from "@mui/material";
import { FormikProps } from "formik";
import { FunctionComponent } from "react";

interface ActionSectionLoginProps {
	handleClickOpen: () => void;
	formik: FormikProps<LoginDataType>;
}

const ActionSectionLogin: FunctionComponent<ActionSectionLoginProps> = ({ handleClickOpen, formik }) => {
	return (
		<Stack direction={"row"} spacing={3}>
			<Button disabled={!(formik.isValid && formik.dirty)} type="submit" variant="contained" size="large" color="secondary">
				Login
			</Button>
			<Button variant="outlined" size="large" color="primary" onClick={handleClickOpen}>
				Cancel
			</Button>
		</Stack>
	);
};

export default ActionSectionLogin;
