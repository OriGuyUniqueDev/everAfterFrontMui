/* eslint-disable @typescript-eslint/no-empty-interface */
import { useUserAndEventContext } from "@/contexts/UserAndEventContexts";
import { Stack, Typography } from "@mui/material";
import { FunctionComponent, useEffect } from "react";

interface TaskDataInfoProps {}

const TaskDataInfo: FunctionComponent<TaskDataInfoProps> = () => {
	const { event, user, handleGetOneEvent, isLoadingEvent } = useUserAndEventContext();
	useEffect(() => {
		handleGetOneEvent();
	}, [event]);
	return (
		<Stack>
			<Typography
				variant="body2"
				fontSize={"1.5rem"}
				fontWeight={600}
				marginBottom="1.2rem"
			>
				MyTasks Summary
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
						Completed Tasks:
					</Typography>
					<Typography
						variant="body1"
						fontSize={"1.25rem"}
						fontWeight={400}
					>
						{event.todoCompleted}
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
						High Priority:
					</Typography>
					<Typography
						variant="body1"
						fontSize={"1.25rem"}
						fontWeight={400}
					>
						{event.todoHigh}
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
						Low Priority:
					</Typography>
					<Typography
						variant="body1"
						fontSize={"1.25rem"}
						fontWeight={400}
					>
						{event.todoLow}
					</Typography>
				</Stack>
			</Stack>
		</Stack>
	);
};

export default TaskDataInfo;
