/* eslint-disable @typescript-eslint/no-empty-interface */
import RegistrationPage from "@/pages/RegistrationPage";
import { Button, Stack, Typography } from "@mui/material";
import { FunctionComponent, useState } from "react";
import ContentWrapper from "../components/ContentWrapper";

interface ContactSectionProps {}

const ContactSection: FunctionComponent<ContactSectionProps> = () => {
	const [showContactDrawer, setShowContactDrawer] = useState(false);
	function handleShowContactDrawer() {
		setShowContactDrawer((prev) => !prev);
	}
	return (
		<ContentWrapper
			heightPercentage="60svh"
			alignItemsPosition={"center"}
		>
			<Stack
				width={"100%"}
				justifyContent={"top"}
				alignItems={"center"}
			>
				<Typography
					marginBottom={5}
					marginTop={10}
					fontSize={{ xs: 40, md: 70, lg: 60 }}
					sx={{ textDecoration: "underline", textAlign: "center", width: "100%" }}
					variant="h2"
					color={"text.primary"}
				>
					Let's Get Started
				</Typography>
				<Typography
					marginBottom={{ xs: 4, md: 10 }}
					fontSize={22}
					sx={{ textDecoration: "", textAlign: "center", width: "100%" }}
					variant="body1"
					fontWeight={200}
					color={"text.primary"}
				>
					Join the EverAfter community and start planning your dream wedding today.{" "}
				</Typography>
				<Button
					onClick={handleShowContactDrawer}
					sx={{ fontFamily: "Pacifico", width: "18rem", textTransform: "none", fontSize: 24 }}
					size={"small"}
					variant="contained"
					color="secondary"
				>
					Register
				</Button>
				<RegistrationPage
					handleClickOpen={handleShowContactDrawer}
					open={showContactDrawer}
				/>
			</Stack>
		</ContentWrapper>
	);
};

export default ContactSection;
