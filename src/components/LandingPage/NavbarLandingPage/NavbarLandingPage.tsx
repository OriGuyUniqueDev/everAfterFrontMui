/* eslint-disable @typescript-eslint/no-empty-interface */
import { AppBar, Button, Container, Stack, Toolbar } from "@mui/material";
import { FunctionComponent, useEffect, useState } from "react";
import DrawerNavBar from "./components/LandingPageDrawerNavBar";
import LandingPageButtons from "./components/LandingPageButtons";
import LandingPageHamburger from "./components/LandingPageHamburger";
import LandingPageLeftSideNavBar from "./components/LandingPageLeftSideNavBar";
import LoginPage from "@/pages/LoginPage";
import RegistrationPage from "@/pages/RegistrationPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useDrawers from "@/hooks/useDrawers";
import { useLocation } from "react-router-dom";

interface NavbarLandingPageProps {}

const NavbarLandingPage: FunctionComponent<NavbarLandingPageProps> = () => {
	const { functions, useStates } = useDrawers();
	const { pathname } = useLocation();
	useEffect(() => {
		if (pathname === "/welcomeBackLetsLogin") {
			console.log(pathname);
			functions.openLoginSection();
		}
	}, [pathname]);
	return (
		<AppBar position="relative" sx={{ bgcolor: "transparent" }}>
			<ToastContainer />
			<Container maxWidth="xl">
				<Toolbar>
					<Stack gap={3} direction={"row"} justifyContent="space-between" alignItems={"center"} width={"100%"}>
						<LandingPageLeftSideNavBar />
						<LandingPageButtons showButtons={false} openLoginPageHandler={functions.openLoginSection} openRegPageHandler={functions.openRegistrationDrawer} />
					</Stack>
					<LandingPageHamburger handleOpenDrawer={functions.openMenu} />
				</Toolbar>
			</Container>
			<DrawerNavBar isOpenDrawer={useStates.openMenu.isOpenDrawerMenu} handleOpenDrawer={functions.openMenu} openRegPageHandler={functions.openRegistrationDrawer} />
			<LoginPage handleClickOpen={functions.openLoginSection} open={useStates.openLoginSection.openLoginDrawer} />
			<RegistrationPage handleClickOpen={functions.openRegistrationDrawer} open={useStates.openRegistrationDrawer.openRegDrawer} />
		</AppBar>
	);
};

export default NavbarLandingPage;
