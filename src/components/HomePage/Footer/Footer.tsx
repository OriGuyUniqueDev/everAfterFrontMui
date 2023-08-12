/* eslint-disable @typescript-eslint/no-empty-interface */
import { AppBar, Container, Toolbar, Stack, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
	return (
		<AppBar
			position="relative"
			sx={{ bgcolor: "transparent" }}
		>
			<Container maxWidth="xl">
				<Toolbar>
					<Stack
						gap={3}
						direction={"row"}
						justifyContent="space-between"
						alignItems={"center"}
						width={"100%"}
					>
						<NavLink to={"/"}>
							<Typography
								variant="h5"
								fontFamily={"Pacifico"}
								noWrap
								sx={{ letterSpacing: "0.1rem" }}
							>
								EverAfter
							</Typography>
						</NavLink>
						<Typography
							variant="body1"
							noWrap
						>
							Designed and Developed By Ori Guy, Want To Hire Me?{" "}
							<a
								style={{ textDecoration: "underline" }}
								href="/OriGuyResume.pdf"
								download
							>
								Click Here for CV
							</a>
						</Typography>
					</Stack>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default Footer;
