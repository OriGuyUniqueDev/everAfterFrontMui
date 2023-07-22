/* eslint-disable @typescript-eslint/no-empty-interface */
import { Stack, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { NavLink } from "react-router-dom";
import useDrawers from "@/hooks/useDrawers";

interface HomePageNavLeftSideProps {}

const HomePageNavLeftSide: FunctionComponent<HomePageNavLeftSideProps> = () => {
	return (
		<Stack
			gap={3}
			direction={"row"}
			width={"100%"}
			alignItems={"center"}
		>
			<NavLink to={"/MyEverAfter"}>
				<Typography
					variant="h5"
					fontFamily={"Pacifico"}
					noWrap
					sx={{ letterSpacing: "0.1rem" }}
				>
					EverAfter
				</Typography>
			</NavLink>
			<Link to={"/MyEverAfter"}>
				<Typography
					color={"text.primary"}
					variant="body1"
					fontSize={18}
					display={{ xs: "none", lg: "block" }}
				>
					My EverAfter
				</Typography>
			</Link>
			<NavLink to={"MyBudget"}>
				<Typography
					color={"text.primary"}
					variant="body1"
					fontSize={18}
					display={{ xs: "none", lg: "block" }}
				>
					My Budget
				</Typography>
			</NavLink>
			<NavLink to={"MyGuests"}>
				<Typography
					color={"text.primary"}
					variant="body1"
					fontSize={18}
					display={{ xs: "none", lg: "block" }}
				>
					My Guests
				</Typography>
			</NavLink>
			<NavLink to={"MyTasks"}>
				<Typography
					color={"text.primary"}
					variant="body1"
					fontSize={18}
					display={{ xs: "none", lg: "block" }}
				>
					My Tasks
				</Typography>
			</NavLink>
		</Stack>
	);
};

export default HomePageNavLeftSide;
