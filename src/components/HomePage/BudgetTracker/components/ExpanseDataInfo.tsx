/* eslint-disable @typescript-eslint/no-empty-interface */
import { FunctionComponent, useEffect } from "react";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { Typography, Stack } from "@mui/material";
import { UserAndEventContextProvider, useUserAndEventContext } from "@/contexts/UserAndEventContexts";

interface ExpanseDataInfoProps {}

const ExpanseDataInfo: FunctionComponent<ExpanseDataInfoProps> = () => {
	const { event, user, handleGetOneEvent, isLoadingEvent } = useUserAndEventContext();
	useEffect(() => {
		handleGetOneEvent();
	}, [isLoadingEvent]);
	return (
		<Stack>
			<Typography
				variant="body2"
				fontSize={"1.5rem"}
				fontWeight={600}
				marginBottom="1.2rem"
			>
				MyBudget
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
						Total Budget:
					</Typography>
					<Typography
						variant="body1"
						fontSize={"1.25rem"}
						fontWeight={400}
					>
						{event.totalBudget}
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
						Total Spent:
					</Typography>
					<Typography
						variant="body1"
						fontSize={"1.25rem"}
						fontWeight={400}
					>
						{event.totalSpent}
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
						Left To Spend:
					</Typography>
					<Typography
						variant="body1"
						fontSize={"1.25rem"}
						fontWeight={400}
					>
						{event.leftToSpend}
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
						Already Paid:
					</Typography>
					<Typography
						variant="body1"
						fontSize={"1.25rem"}
						fontWeight={400}
					>
						{event.alreadyPaid}
					</Typography>
				</Stack>
			</Stack>
		</Stack>
	);
};

export default ExpanseDataInfo;
