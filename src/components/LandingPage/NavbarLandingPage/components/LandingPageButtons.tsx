/* eslint-disable @typescript-eslint/no-empty-interface */
import LoginPage from "@/pages/LoginPage";
import { Stack, Button } from "@mui/material";
import { FunctionComponent, useState } from "react";

interface LandingPageButtonsProps {
	showButtons: boolean;
	openLoginPageHandler: () => void;
}

const LandingPageButtons: FunctionComponent<LandingPageButtonsProps> = ({ showButtons, openLoginPageHandler }) => {
	return (
		<>
			<Stack direction={"row"} gap={3} display={{ xs: showButtons ? "flex" : "none", md: "flex" }}>
				<Button onClick={openLoginPageHandler} sx={{ fontFamily: "Pacifico", width: "10rem", textTransform: "none", fontSize: 18 }} size={"small"} variant="contained" color="secondary">
					Login
				</Button>

				<Button sx={{ width: "10rem", color: "#fff", outlineColor: "#fff", textTransform: "none", fontSize: 18 }} variant="outlined" size={"small"}>
					SignUp
				</Button>
			</Stack>
		</>
	);
};

export default LandingPageButtons;
