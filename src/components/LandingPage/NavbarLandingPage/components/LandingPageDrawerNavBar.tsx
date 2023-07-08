import { Drawer, Stack, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import LandingPageButtons from "./LandingPageButtons";
import LandingPageDrawerLeftNavBar from "./LandingPageDrawerLeftNavBar";

interface LandingPageDrawerNavBarProps {
	isOpenDrawer: boolean;
	handleOpenDrawer: VoidFunction;
	openRegPageHandler: VoidFunction;
}

const LandingPageDrawerNavBar: FunctionComponent<LandingPageDrawerNavBarProps> = ({ isOpenDrawer, handleOpenDrawer, openRegPageHandler }) => {
	return (
		<Drawer open={isOpenDrawer} onClose={handleOpenDrawer}>
			<Stack spacing={3} paddingX={4} paddingY={4} paddingTop={10} justifyContent="space-between" height={"100%"}>
				<LandingPageDrawerLeftNavBar />
				<LandingPageButtons showButtons={true} openLoginPageHandler={handleOpenDrawer} openRegPageHandler={openRegPageHandler} />
			</Stack>
		</Drawer>
	);
};

export default LandingPageDrawerNavBar;
