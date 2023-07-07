/* eslint-disable @typescript-eslint/no-empty-interface */
import { AppBar, Button, Container, Stack, Toolbar } from "@mui/material";
import { FunctionComponent, useState } from "react";
import DrawerNavBar from "./components/LandingPageDrawerNavBar";
import LandingPageButtons from "./components/LandingPageButtons";
import LandingPageHamburger from "./components/LandingPageHamburger";
import LandingPageLeftSideNavBar from "./components/LandingPageLeftSideNavBar";
import LoginPage from "@/pages/LoginPage";
import RegistrationPage from "@/pages/RegistrationPage";

interface NavbarLandingPageProps {}

const NavbarLandingPage: FunctionComponent<NavbarLandingPageProps> = () => {
	const [isOpenDrawerMenu, setOpenDrawerMenu] = useState(false);
	const [openLoginDrawer, setOpenLoginDrawer] = useState(false);
	const [openRegDrawer, setRegDrawer] = useState(false);
	const handleOpenDrawerMenu = () => {
		setOpenDrawerMenu(!isOpenDrawerMenu);
	};
	const handleLoginOpen = () => {
		setOpenLoginDrawer((prev) => !prev);
	};
	const handleRegOpen = () => {
		setRegDrawer((prev) => !prev);
	};

	return (
		<AppBar position="relative" sx={{ bgcolor: "transparent" }}>
			<Container maxWidth="xl">
				<Toolbar>
					<Stack gap={3} direction={"row"} justifyContent="space-between" alignItems={"center"} width={"100%"}>
						<LandingPageLeftSideNavBar />
						<LandingPageButtons showButtons={false} openLoginPageHandler={handleLoginOpen} openRegPageHandler={handleRegOpen} />
					</Stack>
					<LandingPageHamburger handleOpenDrawer={handleOpenDrawerMenu} />
				</Toolbar>
			</Container>
			<DrawerNavBar isOpenDrawer={isOpenDrawerMenu} handleOpenDrawer={handleOpenDrawerMenu} />
			<LoginPage handleClickOpen={handleLoginOpen} open={openLoginDrawer} />
			<RegistrationPage handleClickOpen={handleRegOpen} open={openRegDrawer} />
		</AppBar>
	);
};

export default NavbarLandingPage;
