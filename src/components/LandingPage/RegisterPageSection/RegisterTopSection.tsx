/* eslint-disable @typescript-eslint/no-empty-interface */
import { Typography } from "@mui/material";
import { FunctionComponent } from "react";

interface RegisterTopSectionProps {}

const RegisterTopSection: FunctionComponent<RegisterTopSectionProps> = () => {
	return (
		<>
			<Typography variant="h4">Lets Register 👋</Typography>
			<Typography variant="body1" fontSize={20} color={"#fff"}>
				Welcome, this is the first step to organize the wedding of your DREAMS{" "}
			</Typography>
		</>
	);
};

export default RegisterTopSection;
