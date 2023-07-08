/* eslint-disable @typescript-eslint/no-empty-interface */
import { FunctionComponent } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import FeatureCardType from "@/interfaces/FeatureCardType";
import FeatureCard from "./FeatureCard";
import { Typography } from "@mui/material";

interface FeatureCardContainerProps {
	featureData: FeatureCardType[];
}

const FeatureCardContainer: FunctionComponent<FeatureCardContainerProps> = ({ featureData }) => {
	return (
		<Grid justifyContent={"space-evenly"} spacing={10} alignItems={"stretch"} container>
			{featureData.length > 0 ? (
				featureData.map((featureCard) => {
					return <FeatureCard key={featureCard.cardHeader} cardHeader={featureCard.cardHeader} cardContent={featureCard.cardContent} imgSrc={featureCard.imgSrc} imgAlt={featureCard.imgAlt} />;
				})
			) : (
				<Typography color={"error"}>Oops, no feature to show</Typography>
			)}
		</Grid>
	);
};

export default FeatureCardContainer;
