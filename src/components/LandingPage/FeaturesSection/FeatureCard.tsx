/* eslint-disable @typescript-eslint/no-empty-interface */
import { FunctionComponent } from "react";
import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

interface FeatureCardProps {
	cardHeader: string;
	cardContent: string;
	imgSrc: string;
	imgAlt: string;
}

const FeatureCard: FunctionComponent<FeatureCardProps> = ({ imgSrc, cardHeader, cardContent, imgAlt }) => {
	return (
		<Grid sm={12} md={6} lg={4}>
			<Card sx={{ display: "flex", height: 250, flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 3 }}>
				<img src={imgSrc} alt={imgAlt} />
				<CardContent sx={{ display: "flex", flexDirection: "column", placeItems: "center", gap: 2 }}>
					<Typography gutterBottom color={"secondary"} sx={{ textDecoration: "underline" }} variant={"h3"} fontSize={32} component={"h4"}>
						{cardHeader}
					</Typography>
					<Typography variant={"body1"} fontSize={16} textAlign={"center"} component={"p"}>
						{cardContent}
					</Typography>
				</CardContent>
			</Card>
		</Grid>
	);
};

export default FeatureCard;
