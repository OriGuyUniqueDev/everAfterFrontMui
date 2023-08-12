import { Drawer, Stack, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { useIsAuthenticated } from "react-auth-kit";
import LandingPageButtons from "./LandingPageButtons";
import CloseIcon from "@mui/icons-material/Close";
import LandingPageDrawerLeftNavBar from "./LandingPageDrawerLeftNavBar";

interface LandingPageDrawerNavBarProps {
	isOpenDrawer: boolean;
	handleOpenDrawer: VoidFunction;
	openRegPageHandler: VoidFunction;
	openLoginPageHandler: VoidFunction;
}

const LandingPageDrawerNavBar: FunctionComponent<LandingPageDrawerNavBarProps> = ({ isOpenDrawer, handleOpenDrawer, openRegPageHandler, openLoginPageHandler }) => {
	return (
		<Drawer
			open={isOpenDrawer}
			onClose={handleOpenDrawer}
		>
			<Stack
				spacing={3}
				paddingX={4}
				paddingY={4}
				paddingTop={10}
				justifyContent="space-between"
				height={"100%"}
			>
				<CloseIcon
					onClick={handleOpenDrawer}
					sx={{ position: "absolute", top: 20, right: 20 }}
				/>
				<LandingPageDrawerLeftNavBar handleOpenDrawer={handleOpenDrawer} />
				<LandingPageButtons
					showButtons={true}
					openLoginPageHandler={openLoginPageHandler}
					openRegPageHandler={openRegPageHandler}
					handleOpenDrawer={handleOpenDrawer}
				/>
			</Stack>
		</Drawer>
	);
};

export default LandingPageDrawerNavBar;
