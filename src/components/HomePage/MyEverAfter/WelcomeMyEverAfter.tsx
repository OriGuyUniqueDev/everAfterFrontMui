/* eslint-disable @typescript-eslint/no-empty-interface */
import useUsers from "@/hooks/useUsers";
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
				fontSize={70}
			>
				Welcome {user.brideName} & {user.groomName}
			</Typography>
			<Typography
				width={"100%"}
				marginTop={5}
				fontSize={24}
				textAlign={"center"}
				variant="body1"
			>
				{user.eventData.length <= 0 ? "Let's Start Planing Your EverAfter day" : "This Will be an amazing EverAfter"}
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
