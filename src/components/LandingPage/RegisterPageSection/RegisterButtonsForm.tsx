import { Stack, Button } from "@mui/material";
import { FunctionComponent } from "react";

interface RegisterButtonsFormProps {
	handleClickOpen: () => void;
}

const RegisterButtonsForm: FunctionComponent<RegisterButtonsFormProps> = ({ handleClickOpen }) => {
	return (
		<Stack direction={"row"} spacing={3}>
			<Button type="submit" variant="contained" size="large" color="secondary">
				Register
			</Button>
			<Button variant="outlined" size="large" color="primary" onClick={handleClickOpen}>
				Cancel
			</Button>
		</Stack>
	);
};

export default RegisterButtonsForm;
