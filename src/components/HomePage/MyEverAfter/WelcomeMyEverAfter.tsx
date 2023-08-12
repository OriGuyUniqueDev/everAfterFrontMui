/* eslint-disable @typescript-eslint/no-empty-interface */
import UserFromServerType from "@/interfaces/UserFromServerType";
import { Typography } from "@mui/material";
import { FunctionComponent } from "react";

interface WelcomeMyEverAfterProps {
	user: UserFromServerType;
}

const WelcomeMyEverAfter: FunctionComponent<WelcomeMyEverAfterProps> = ({ user }) => {
	return (
		<>
			<Typography
				width={"100%"}
				marginTop={5}
				textAlign={"center"}
				variant="h1"
				fontSize={{ xs: 38, md: 70, lg: 60 }}
			>
				{!user.businessAccount ? `Welcome ${user.brideName} & ${user.groomName}` : `Welcome ${user.fullName}`}
			</Typography>
			<Typography
				width={"100%"}
				marginTop={5}
				fontSize={20}
				textAlign={"center"}
				variant="body1"
			>
				{user.businessAccount ? (user.eventData.length <= 0 ? "as Business account you can manage multiple events, ENJOY" : "Here is the event information to change please visit MyEvents") : user.eventData.length <= 0 ? "Let's Start Planing Your EverAfter day" : "This Will be an amazing EverAfter"}
			</Typography>
			<Typography
				width={"100%"}
				marginTop={5}
				fontSize={24}
				textAlign={"center"}
				variant="h5"
			>
				Event Details:
			</Typography>
		</>
	);
};

export default WelcomeMyEverAfter;
