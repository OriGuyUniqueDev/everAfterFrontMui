/* eslint-disable @typescript-eslint/no-empty-interface */
import { FunctionComponent, useEffect, useState } from "react";
import Box from "@mui/material/Box/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import EventFromServerType from "@/interfaces/EventFromServerType";
import UserFromServerType from "@/interfaces/UserFromServerType";
import moment from "moment";
import useEvents from "@/hooks/useEvents";
import MyEverAfterCardTable from "./MyEverAfterCardTable";
import { useUserAndEventContext } from "@/contexts/UserAndEventContexts";
import { Button, Modal } from "@mui/material";
import { style } from "@mui/system";

interface MyEverAfterCardProps {
	user: UserFromServerType;
}

const MyEverAfterCard: FunctionComponent<MyEverAfterCardProps> = ({ user }) => {
	const { handleGetOneEvent, event } = useUserAndEventContext();

	useEffect(() => {
		handleGetOneEvent();
	}, [event]);

	return (
		<Box
			sx={{ border: "3px solid #7986CB", boxShadow: "0px 4px 26px 14px #232C43", borderRadius: "0.625rem", padding: "1.5rem 1.25rem", display: "flex", flexDirection: "column", gap: "0.625rem", overflowX: "auto" }}
			minWidth={"21rem"}
			mb={6}
		>
			<Typography
				variant="body1"
				fontSize={24}
			>
				My EverAfter
			</Typography>
			<Typography variant="body1">{user.businessAccount ? "" : `The Wedding of ${user.brideName} ${user.groomName}`}</Typography>
			<MyEverAfterCardTable event={event} />
		</Box>
	);
};

export default MyEverAfterCard;
