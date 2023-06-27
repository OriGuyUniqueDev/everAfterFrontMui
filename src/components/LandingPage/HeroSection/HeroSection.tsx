/* eslint-disable @typescript-eslint/no-empty-interface */
import { Typography } from "@mui/material";
import { FunctionComponent } from "react";

interface HeroSectionProps {}

const HeroSection: FunctionComponent<HeroSectionProps> = () => {
	return (
		<Typography
			variant="h1"
			color={"primary"}
		>
			HeroSection
		</Typography>
	);
};

export default HeroSection;

{
	/* <div>HeroSection</div> */
}
