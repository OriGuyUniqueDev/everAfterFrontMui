import RegistrationDataType from "@/interfaces/RegistrationDataType";
import { Stack, Button } from "@mui/material";
import { FormikProps } from "formik";
import { FunctionComponent } from "react";

interface RegisterButtonsFormProps {
	handleClickOpen: () => void;
	formik: FormikProps<RegistrationDataType>;
}

const RegisterButtonsForm: FunctionComponent<RegisterButtonsFormProps> = ({ handleClickOpen, formik }) => {
	return (
		<Stack direction={"row"} spacing={3}>
			<Button disabled={!(formik.isValid && formik.dirty)} type="submit" variant="contained" size="large" color="secondary">
				Register
			</Button>
			<Button variant="outlined" size="large" color="primary" onClick={handleClickOpen}>
				Cancel
			</Button>
		</Stack>
	);
};

export default RegisterButtonsForm;
