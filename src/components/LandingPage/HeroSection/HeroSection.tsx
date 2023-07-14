/* eslint-disable @typescript-eslint/no-empty-interface */
import { FunctionComponent } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import ContentWrapper from "../components/ContentWrapper";
import HeroSectionLeftSide from "./HeroSectionLeftSide";
import HeroSectionRightSide from "./HeroSectionRightSide";

interface HeroSectionProps {}

const HeroSection: FunctionComponent<HeroSectionProps> = () => {
	return (
		<ContentWrapper alignItemsPosition={"center"}>
			<Grid alignItems={"center"} container>
				<HeroSectionLeftSide />
				<HeroSectionRightSide imgSrc={"/images/hero.png"} />
			</Grid>
		</ContentWrapper>
	);
};

export default HeroSection;
