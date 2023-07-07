/* eslint-disable @typescript-eslint/no-empty-interface */
import { Typography } from "@mui/material";
import { FunctionComponent } from "react";

interface TopSectionLoginProps {}

const TopSectionLogin: FunctionComponent<TopSectionLoginProps> = () => {
	return (
		<>
			<Typography variant="h4">Lets Login 👋</Typography>
			<Typography variant="body1" fontSize={20} color={"#fff"}>
				Welcome Back, Let's continue your journey to the wedding of your DREAMS{" "}
			</Typography>
		</>
	);
};

export default TopSectionLogin;
