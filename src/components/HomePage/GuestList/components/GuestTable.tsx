/* eslint-disable @typescript-eslint/no-empty-interface */
import { useUserAndEventContext } from "@/contexts/UserAndEventContexts";
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { FunctionComponent } from "react";

interface GuestTableProps {}

const GuestTable: FunctionComponent<GuestTableProps> = () => {
	const { event } = useUserAndEventContext();
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
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default GuestTable;
