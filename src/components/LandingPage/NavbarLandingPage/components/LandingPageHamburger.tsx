import { IconButton } from "@mui/material";
import { FunctionComponent } from "react";
import MenuIcon from "@mui/icons-material/Menu";

interface LandingPageHamburgerProps {
	handleOpenDrawer: () => void;
}

const LandingPageHamburger: FunctionComponent<LandingPageHamburgerProps> = ({ handleOpenDrawer }) => {
	return (
		<IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenDrawer} color="inherit" sx={{ display: { xs: "block", lg: "none" } }}>
			<MenuIcon />
		</IconButton>
	);
};

export default LandingPageHamburger;
