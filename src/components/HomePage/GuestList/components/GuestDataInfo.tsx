/* eslint-disable @typescript-eslint/no-empty-interface */
import { useUserAndEventContext } from "@/contexts/UserAndEventContexts";
import { Stack, Typography } from "@mui/material";
import { FunctionComponent, useEffect } from "react";

interface GuestDataInfoProps {}

const GuestDataInfo: FunctionComponent<GuestDataInfoProps> = () => {
	const { event, user, handleGetOneEvent, isLoadingEvent } = useUserAndEventContext();
	useEffect(() => {
		handleGetOneEvent();
	}, []);
	return (
		<Stack>
			<Typography
				variant="body2"
				fontSize={"1.5rem"}
				fontWeight={600}
				marginBottom="1.2rem"
			>
				MyGuest Info
			</Typography>
			<Stack
				width={"100%"}
				spacing={"0.875rem"}
			>
				<Stack
					justifyContent={"space-between"}
					direction="row"
					width={"100%"}
				>
					<Typography
						variant="body1"
						fontSize={"1.25rem"}
						fontWeight={400}
					>
						Total Guests:
					</Typography>
					<Typography
						variant="body1"
						fontSize={"1.25rem"}
						fontWeight={400}
					>
						{event.totalGuestByList}
					</Typography>
				</Stack>
				<Stack
					justifyContent={"space-between"}
					direction="row"
					width={"100%"}
				>
					<Typography
						variant="body1"
						fontSize={"1.25rem"}
						fontWeight={400}
					>
						Bride Side:
					</Typography>
					<Typography
						variant="body1"
						fontSize={"1.25rem"}
						fontWeight={400}
					>
						{event.brideSide}
					</Typography>
				</Stack>
				<Stack
					justifyContent={"space-between"}
					direction="row"
					width={"100%"}
				>
					<Typography
						variant="body1"
						fontSize={"1.25rem"}
						width={"fit"}
						fontWeight={400}
					>
						Groom Side:
					</Typography>
					<Typography
						variant="body1"
						fontSize={"1.25rem"}
						fontWeight={400}
					>
						{event.groomSide}
					</Typography>
				</Stack>
			</Stack>
		</Stack>
	);
};

export default GuestDataInfo;
