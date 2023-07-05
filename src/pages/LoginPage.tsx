/* eslint-disable @typescript-eslint/no-empty-interface */
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Paper, Typography, Backdrop, Box, Fade, Modal, SxProps, Stack, Drawer } from "@mui/material";
import { FunctionComponent } from "react";

interface LoginPageProps {
	handleClickOpen: () => void;
	handleClose: () => void;
	open: boolean;
}

const LoginPage: FunctionComponent<LoginPageProps> = ({ handleClose, handleClickOpen, open }) => {
	const style: SxProps = {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: "auto",
		bgcolor: "background.paper",
		// border: "2px solid #000",
		boxShadow: 24,
		borderRadius: 5,
		p: 4,
	};
	return (
		<>
			<Drawer anchor={"bottom"} open={open} onClose={handleClickOpen}>
				<Stack spacing={2} sx={{ mx: 10, my: 5 }}>
					<Typography variant="h4">Lets Login 👋</Typography>
					<Typography variant="body1" fontSize={20} color={"#fff"}>
						Welcome, this is the first step to organize the wedding of your DREAMS{" "}
					</Typography>
					<TextField
						InputLabelProps={{
							placeholder: "Email Address",
							style: { color: "#bbb" },
						}}
						sx={{ width: "20rem" }}
						required
						autoFocus
						margin="dense"
						id="email"
						label="Email Address"
						type="email"
						variant="outlined"
					/>
					<TextField
						InputLabelProps={{
							placeholder: "Email Address",
							style: { color: "#bbb" },
						}}
						sx={{ width: "20rem" }}
						required
						margin="dense"
						id="password"
						label="Password"
						type="password"
						variant="outlined"
					/>
					<Stack direction={"row"} spacing={3}>
						<Button variant="contained" size="large" color="secondary" onClick={handleClickOpen}>
							Login
						</Button>
						<Button variant="outlined" size="large" color="primary" onClick={handleClickOpen}>
							Cancel
						</Button>
					</Stack>
				</Stack>
			</Drawer>
		</>
	);
};

export default LoginPage;
