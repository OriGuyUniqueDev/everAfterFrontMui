/* eslint-disable @typescript-eslint/no-empty-interface */
import { Typography } from "@mui/material";
import { FunctionComponent } from "react";

interface FeaturesSectionProps {}

const FeaturesSection: FunctionComponent<FeaturesSectionProps> = () => {
	return (
		<Typography
			variant="h4"
			color={"text.primary"}
		>
			FeaturesSection
		</Typography>
	);
};

export default FeaturesSection;
