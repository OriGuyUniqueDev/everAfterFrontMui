/* eslint-disable @typescript-eslint/no-empty-interface */
import useDrawers from "@/hooks/useDrawers";
import LoginPage from "@/pages/LoginPage";
import RegistrationPage from "@/pages/RegistrationPage";
import { AppBar, Container, Stack, Toolbar } from "@mui/material";
import { FunctionComponent } from "react";
import { ToastContainer } from "react-toastify";
import HomePageNavLeftSide from "./components/HomePageNavLeftSide";
import DrawerNavBar from "@/components/LandingPage/NavbarLandingPage/components/LandingPageDrawerNavBar";
import LandingPageHamburger from "@/components/LandingPage/NavbarLandingPage/components/LandingPageHamburger";
import HomePageNavButtons from "./components/HomePageNavButtons";

interface NavbarHomePageProps {}

const NavbarHomePage: FunctionComponent<NavbarHomePageProps> = () => {
	const { functions, useStates } = useDrawers();
	return (
		<AppBar
			position="relative"
			sx={{ bgcolor: "transparent" }}
		>
			<ToastContainer />
			<Container maxWidth="xl">
				<Toolbar>
					<Stack
						gap={3}
						direction={"row"}
						justifyContent="space-between"
						alignItems={"center"}
						width={"100%"}
					>
						<HomePageNavLeftSide />
						<HomePageNavButtons showButtons={false} />
						<LandingPageHamburger handleOpenDrawer={functions.openMenu} />
					</Stack>
				</Toolbar>
			</Container>
			<DrawerNavBar
				isOpenDrawer={useStates.openMenu.isOpenDrawerMenu}
				handleOpenDrawer={functions.openMenu}
				openRegPageHandler={functions.openRegistrationDrawer}
				openLoginPageHandler={functions.openLoginSection}
			/>
			<LoginPage
				handleClickOpen={functions.openLoginSection}
				open={useStates.openLoginSection.openLoginDrawer}
			/>
			<RegistrationPage
				handleClickOpen={functions.openRegistrationDrawer}
				open={useStates.openRegistrationDrawer.openRegDrawer}
			/>
		</AppBar>
	);
};

export default NavbarHomePage;
