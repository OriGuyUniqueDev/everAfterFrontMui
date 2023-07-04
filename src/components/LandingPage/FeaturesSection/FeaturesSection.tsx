/* eslint-disable @typescript-eslint/no-empty-interface */
import { Box, Stack, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import ContentWrapper from "../components/ContentWrapper";
import Grid from "@mui/material/Unstable_Grid2";
import FeatureCard from "./FeatureCard";
import FeatureCardType from "@/interfaces/FeatureCardType";
import FeatureCardContainer from "./FeatureCardContainer";

interface FeaturesSectionProps {}

const featureData: FeatureCardType[] = [
	{
		imgSrc: "/public/features/shekel.svg",
		cardHeader: "Budget Planning",
		cardContent: "Keep track of your wedding expenses and ensure you're staying within your budget with our easy-to-use budget planning tool",
		imgAlt: "shekel icon",
	},
	{
		imgSrc: "/public/features/vManagment.svg",
		cardHeader: "Vendor Management",
		cardContent: "Manage your vendors in one place by keeping track of who you've booked, who you still need to book, and all important vendor details.",
		imgAlt: "vManagment icon",
	},
	{
		imgSrc: "/public/features/guestList.svg",
		cardHeader: "Guest List Management",
		cardContent: " Keep track of your guest list and easily manage RSVPs with our guest list management tool",
		imgAlt: "guestList icon",
	},
	{
		imgSrc: "/public/features/timeLine.svg",
		cardHeader: "Timeline Planning",
		cardContent: "Never miss a deadline with our timeline planning tool, which helps you stay on track with all of your wedding planning tasks.",
		imgAlt: "timeLine icon",
	},
	{
		imgSrc: "/public/features/events.svg",
		cardHeader: "Multiple Events",
		cardContent: "Our business account allows you to manage multiple events, perfect for wedding planners or those planning multiple events at once.",
		imgAlt: "events icon",
	},
	{
		imgSrc: "/public/features/mobileAccess.svg",
		cardHeader: "Mobile Access",
		cardContent: " Access your wedding planning tools on-the-go with our web based app, available for all browsers.",
		imgAlt: "mobileAccess icon",
	},
];

const FeaturesSection: FunctionComponent<FeaturesSectionProps> = () => {
	return (
		<span id="feature">
			<ContentWrapper alignItemsPosition={"start"}>
				<Stack width={"100%"}>
					<Typography marginBottom={15} fontSize={{ xs: 56, md: 70, lg: 60 }} sx={{ textDecoration: "underline", textAlign: "center", width: "100%" }} variant="h1" color={"text.primary"}>
						Features
					</Typography>
					<FeatureCardContainer featureData={featureData} />
				</Stack>
			</ContentWrapper>
		</span>
	);
};

export default FeaturesSection;
