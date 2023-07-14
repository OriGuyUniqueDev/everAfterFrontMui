/* eslint-disable @typescript-eslint/no-empty-interface */
import LoginPage from "@/pages/LoginPage";
import { Stack, Button, Typography } from "@mui/material";
import { FunctionComponent, useState } from "react";
import { useIsAuthenticated, useSignOut } from "react-auth-kit";

interface LandingPageButtonsProps {
	showButtons: boolean;
	openLoginPageHandler: () => void;
	openRegPageHandler: () => void;
}

const LandingPageButtons: FunctionComponent<LandingPageButtonsProps> = ({ showButtons, openLoginPageHandler, openRegPageHandler }) => {
	const authenticated = useIsAuthenticated();
	const signOut = useSignOut();

	const isAuthenticated = authenticated();
	return (
		<>
			{isAuthenticated ? (
				<>
					<Stack direction={"row"} gap={3} display={{ xs: showButtons ? "flex" : "none", md: "flex" }}>
						<Button onClick={() => signOut()} sx={{ width: "10rem", color: "#fff", outlineColor: "#fff", textTransform: "none", fontSize: 18 }} variant="outlined" size={"small"}>
							Logout
						</Button>
					</Stack>
				</>
			) : (
				<>
					<Stack direction={"row"} gap={3} display={{ xs: showButtons ? "flex" : "none", md: "flex" }}>
						<Button onClick={openLoginPageHandler} sx={{ fontFamily: "Pacifico", width: "10rem", textTransform: "none", fontSize: 18 }} size={"small"} variant="contained" color="secondary">
							Login
						</Button>

						<Button onClick={openRegPageHandler} sx={{ width: "10rem", color: "#fff", outlineColor: "#fff", textTransform: "none", fontSize: 18 }} variant="outlined" size={"small"}>
							SignUp
						</Button>
					</Stack>
				</>
			)}
		</>
	);
};

export default LandingPageButtons;
