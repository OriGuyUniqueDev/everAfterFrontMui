/* eslint-disable @typescript-eslint/no-empty-interface */
import { Stack, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";

interface LandingPageLeftSideNavBarProps {}

const LandingPageLeftSideNavBar: FunctionComponent<LandingPageLeftSideNavBarProps> = () => {
	return (
		<Stack gap={3} direction={"row"} width={"100%"} alignItems={"center"}>
			<NavLink to={"/"}>
				<Typography variant="h5" fontFamily={"Pacifico"} noWrap sx={{ letterSpacing: "0.1rem" }}>
					EverAfter
				</Typography>
			</NavLink>
			<NavLink to={"/#features"}>
				<Typography fontFamily={"Abril Fatface"} color={"text.primary"} variant="body1" fontSize={18}>
					Features
				</Typography>
			</NavLink>
			<NavLink to={"about"}>
				<Typography fontFamily={"Abril Fatface"} color={"text.primary"} variant="body1" fontSize={18} display={{ xs: "none", md: "block" }}>
					About
				</Typography>
			</NavLink>
		</Stack>
	);
};

export default LandingPageLeftSideNavBar;
