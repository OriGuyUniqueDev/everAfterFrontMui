/* eslint-disable @typescript-eslint/no-empty-interface */
import { Button, Stack, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import ContentWrapper from "../components/ContentWrapper";

interface ContactSectionProps {}

const ContactSection: FunctionComponent<ContactSectionProps> = () => {
	return (
		<ContentWrapper heightPercentage="60svh" alignItemsPosition={"center"}>
			<Stack width={"100%"} justifyContent={"top"} alignItems={"center"}>
				<Typography marginBottom={5} marginTop={10} fontSize={{ xs: 56, md: 70, lg: 60 }} sx={{ textDecoration: "underline", textAlign: "center", width: "100%" }} variant="h2" color={"text.primary"}>
					Let's Get Started
				</Typography>
				<Typography marginBottom={10} fontSize={22} sx={{ textDecoration: "", textAlign: "center", width: "100%" }} variant="body1" color={"text.primary"}>
					Join the EverAfter community and start planning your dream wedding today.{" "}
				</Typography>
				<Button sx={{ fontFamily: "Pacifico", fontWeight: "100", width: "20rem", textTransform: "none", fontSize: 24 }} size={"large"} variant="contained" color="secondary">
					Register
				</Button>
			</Stack>
		</ContentWrapper>
	);
};

export default ContactSection;
