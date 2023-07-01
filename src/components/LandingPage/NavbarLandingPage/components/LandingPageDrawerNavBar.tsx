import { Drawer, Stack, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import LandingPageButtons from "./LandingPageButtons";
import LandingPageDrawerLeftNavBar from "./LandingPageDrawerLeftNavBar";

interface LandingPageDrawerNavBarProps {
	isOpenDrawer: boolean;
	handleOpenDrawer: VoidFunction;
}

const LandingPageDrawerNavBar: FunctionComponent<LandingPageDrawerNavBarProps> = ({ isOpenDrawer, handleOpenDrawer }) => {
	return (
		<Drawer open={isOpenDrawer} onClose={handleOpenDrawer}>
			<Stack spacing={3} paddingX={4} paddingY={4} paddingTop={10} justifyContent="space-between" height={"100%"}>
				<LandingPageDrawerLeftNavBar />
				<LandingPageButtons showButtons={true} />
			</Stack>
		</Drawer>
	);
};

export default LandingPageDrawerNavBar;
