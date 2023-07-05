/* eslint-disable @typescript-eslint/no-empty-interface */
import { FunctionComponent } from "react";
import Grid from "@mui/material/Unstable_Grid2";

interface HeroSectionRightSideProps {
	imgSrc: string;
}

const HeroSectionRightSide: FunctionComponent<HeroSectionRightSideProps> = ({ imgSrc }) => {
	return (
		<Grid display={{ xs: "none", lg: "flex" }} lg={6}>
			<img width={"100%"} src={imgSrc} />
		</Grid>
	);
};

export default HeroSectionRightSide;
