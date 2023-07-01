/* eslint-disable @typescript-eslint/no-empty-interface */
import { Stack, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";

interface LandingPageDrawerLeftNavBarProps {}

const LandingPageDrawerLeftNavBar: FunctionComponent<LandingPageDrawerLeftNavBarProps> = () => {
	return (
		<Stack spacing={3}>
			<NavLink to={"#features"}>
				<Typography fontFamily={"Abril Fatface"} color={"text.primary"} variant="body1" fontSize={24}>
					Features
				</Typography>
			</NavLink>
			<NavLink to={"about"}>
				<Typography fontFamily={"Abril Fatface"} color={"text.primary"} variant="body1" fontSize={24}>
					About
				</Typography>
			</NavLink>
		</Stack>
	);
};

export default LandingPageDrawerLeftNavBar;
