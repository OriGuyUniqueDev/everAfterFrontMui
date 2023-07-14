/* eslint-disable @typescript-eslint/no-empty-interface */
import Button from "@mui/material/Button";
import { FunctionComponent } from "react";
import { useSignOut } from "react-auth-kit";

interface HomePageNavButtonsProps {
	showButtons: boolean;
}

const HomePageNavButtons: FunctionComponent<HomePageNavButtonsProps> = ({ showButtons }) => {
	const signOut = useSignOut();

	return (
		<>
			<Button onClick={() => signOut()} sx={{ display: { xs: showButtons ? "flex" : "none", lg: "flex" }, width: "10rem", color: "#fff", outlineColor: "#fff", textTransform: "none", fontSize: 18 }} variant="outlined" size={"small"}>
				Logout
			</Button>
		</>
	);
};

export default HomePageNavButtons;
