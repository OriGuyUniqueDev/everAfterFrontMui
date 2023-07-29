/* eslint-disable @typescript-eslint/no-empty-interface */
import { useUserAndEventContext } from "@/contexts/UserAndEventContexts";
import { TableContainer, Table, TableHead, TableRow, TableCell, IconButton, TableBody } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { FunctionComponent } from "react";
import { deleteExpanse, deleteGuest } from "@/services/eventService";

interface GuestTableProps {}

const GuestTable: FunctionComponent<GuestTableProps> = () => {
	const { event, user, handleGetOneEvent } = useUserAndEventContext();

	return (
		<TableContainer>
			<Table
				sx={{ width: "80%", mx: "auto", overflow: "scroll" }}
				aria-label="simple table"
			>
				<TableHead>
					<TableRow>
						<TableCell>ID</TableCell>
						<TableCell align="center">Guest Name</TableCell>
						<TableCell align="center">Groom or Bride Side?</TableCell>
						<TableCell align="center">Amount</TableCell>
						<TableCell align="center">Actions</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{event.guestList.map((guest) => (
						<TableRow key={guest.id}>
							<TableCell
								component="th"
								scope="row"
							>
								{guest.id}
							</TableCell>
							<TableCell align="center">{guest.guestName}</TableCell>
							<TableCell align="center">{guest.isBrideSide ? "Bride Side 👰" : "Groom Side 🤵‍♂️"}</TableCell>
							<TableCell align="center">{guest.amount}</TableCell>
							<TableCell align="center">
								<IconButton
									aria-label="delete"
									color="error"
									onClick={async () => {
										try {
											const isConfirm = confirm(`Are You Sure you want to DELETE ${guest.guestName} ?`);
											if (isConfirm) {
												await deleteGuest(user.eventData, guest.id, user, { amount: guest.amount, isBrideSide: guest.isBrideSide });
												handleGetOneEvent();
											}
										} catch (error) {
											console.log(error);
										}
									}}
								>
									<DeleteForeverIcon />
								</IconButton>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default GuestTable;
