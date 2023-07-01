/* eslint-disable @typescript-eslint/no-empty-interface */
import { AppBar, Button, Container, Stack, Toolbar } from "@mui/material";
import { FunctionComponent, useState } from "react";
import DrawerNavBar from "./components/LandingPageDrawerNavBar";
import LandingPageButtons from "./components/LandingPageButtons";
import LandingPageHamburger from "./components/LandingPageHamburger";
import LandingPageLeftSideNavBar from "./components/LandingPageLeftSideNavBar";

interface NavbarLandingPageProps {}

const NavbarLandingPage: FunctionComponent<NavbarLandingPageProps> = () => {
	const [isOpenDrawer, setOpenDrawer] = useState(false);
	const handleOpenDrawer = () => {
		setOpenDrawer(!isOpenDrawer);
	};
	return (
		<AppBar position="relative" sx={{ bgcolor: "transparent" }}>
			<Container maxWidth="xl">
				<Toolbar>
					<Stack gap={3} direction={"row"} justifyContent="space-between" alignItems={"center"} width={"100%"}>
						<LandingPageLeftSideNavBar />
						<LandingPageButtons showButtons={false} />
					</Stack>
					<LandingPageHamburger handleOpenDrawer={handleOpenDrawer} />
				</Toolbar>
			</Container>
			<DrawerNavBar isOpenDrawer={isOpenDrawer} handleOpenDrawer={handleOpenDrawer} />
		</AppBar>
	);
};

export default NavbarLandingPage;
