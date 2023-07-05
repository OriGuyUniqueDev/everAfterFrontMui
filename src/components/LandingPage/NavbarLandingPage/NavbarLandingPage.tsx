/* eslint-disable @typescript-eslint/no-empty-interface */
import { AppBar, Button, Container, Stack, Toolbar } from "@mui/material";
import { FunctionComponent, useState } from "react";
import DrawerNavBar from "./components/LandingPageDrawerNavBar";
import LandingPageButtons from "./components/LandingPageButtons";
import LandingPageHamburger from "./components/LandingPageHamburger";
import LandingPageLeftSideNavBar from "./components/LandingPageLeftSideNavBar";
import LoginPage from "@/pages/LoginPage";

interface NavbarLandingPageProps {}

const NavbarLandingPage: FunctionComponent<NavbarLandingPageProps> = () => {
	const [isOpenDrawerMenu, setOpenDrawerMenu] = useState(false);
	const [open, setOpen] = useState(false);
	const handleOpenDrawerMenu = () => {
		setOpenDrawerMenu(!isOpenDrawerMenu);
	};
	const handleClickOpen = () => {
		setOpen((prev) => !prev);
	};

	return (
		<AppBar position="relative" sx={{ bgcolor: "transparent" }}>
			<Container maxWidth="xl">
				<Toolbar>
					<Stack gap={3} direction={"row"} justifyContent="space-between" alignItems={"center"} width={"100%"}>
						<LandingPageLeftSideNavBar />
						<LandingPageButtons showButtons={false} openLoginPageHandler={handleClickOpen} />
					</Stack>
					<LandingPageHamburger handleOpenDrawer={handleOpenDrawerMenu} />
				</Toolbar>
			</Container>
			<DrawerNavBar isOpenDrawer={isOpenDrawerMenu} handleOpenDrawer={handleOpenDrawerMenu} />
			<LoginPage handleClickOpen={handleClickOpen} handleClose={handleClickOpen} open={open} />
		</AppBar>
	);
};

export default NavbarLandingPage;
