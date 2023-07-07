import { Stack, Button } from "@mui/material";
import { FunctionComponent } from "react";

interface ActionSectionLoginProps {
	handleClickOpen: () => void;
}

const ActionSectionLogin: FunctionComponent<ActionSectionLoginProps> = ({ handleClickOpen }) => {
	return (
		<Stack direction={"row"} spacing={3}>
			<Button type="submit" variant="contained" size="large" color="secondary">
				Login
			</Button>
			<Button variant="outlined" size="large" color="primary" onClick={handleClickOpen}>
				Cancel
			</Button>
		</Stack>
	);
};

export default ActionSectionLogin;
