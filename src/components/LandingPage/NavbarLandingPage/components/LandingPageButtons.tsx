/* eslint-disable @typescript-eslint/no-empty-interface */
import { Stack, Button } from "@mui/material";
import { FunctionComponent } from "react";

interface LandingPageButtonsProps {
	showButtons: boolean;
}

const LandingPageButtons: FunctionComponent<LandingPageButtonsProps> = ({ showButtons }) => {
	return (
		<Stack direction={"row"} gap={3} display={{ xs: showButtons ? "flex" : "none", md: "flex" }}>
			<Button sx={{ fontFamily: "Pacifico", fontWeight: "700", width: "8rem" }} size={"medium"} variant="contained" color="secondary">
				Login
			</Button>
			<Button sx={{ width: "8rem", color: "#fff", outlineColor: "#fff" }} variant="outlined" size={"medium"}>
				SignUp
			</Button>
		</Stack>
	);
};

export default LandingPageButtons;
