/* eslint-disable @typescript-eslint/no-empty-interface */
import HomePageNavLeftSide from "@/components/HomePage/NavbarHomePage/components/HomePageNavLeftSide";
import { useUserAndEventContext } from "@/contexts/UserAndEventContexts";
import useDrawers from "@/hooks/useDrawers";
import { Stack, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { useIsAuthenticated } from "react-auth-kit";
import { NavLink } from "react-router-dom";

interface LandingPageDrawerLeftNavBarProps {
	handleOpenDrawer: VoidFunction;
}

const LandingPageDrawerLeftNavBar: FunctionComponent<LandingPageDrawerLeftNavBarProps> = ({ handleOpenDrawer }) => {
	const { user } = useUserAndEventContext();

	const authenticated = useIsAuthenticated();
	const isAuthenticated = authenticated();

	return (
		<Stack spacing={3}>
			{isAuthenticated ? (
				<>
					<NavLink
						onClick={handleOpenDrawer}
						to={"/MyEverAfter"}
					>
						<Typography
							variant="h5"
							fontFamily={"Pacifico"}
							noWrap
							sx={{ letterSpacing: "0.1rem" }}
						>
							EverAfter
						</Typography>
					</NavLink>
					<NavLink
						onClick={handleOpenDrawer}
						to={"/MyEverAfter"}
					>
						<Typography
							color={"text.primary"}
							variant="body1"
							fontSize={18}
						>
							My EverAfter
						</Typography>
					</NavLink>
					<NavLink
						onClick={handleOpenDrawer}
						to={"MyBudget"}
					>
						<Typography
							color={"text.primary"}
							variant="body1"
							fontSize={18}
						>
							My Budget
						</Typography>
					</NavLink>
					<NavLink
						onClick={handleOpenDrawer}
						to={"MyGuests"}
					>
						<Typography
							color={"text.primary"}
							variant="body1"
							fontSize={18}
						>
							My Guests
						</Typography>
					</NavLink>
					<NavLink
						onClick={handleOpenDrawer}
						to={"MyTasks"}
					>
						<Typography
							color={"text.primary"}
							variant="body1"
							fontSize={18}
						>
							My Tasks
						</Typography>
					</NavLink>
					{user.businessAccount ? (
						<NavLink to={"MyEvents"}>
							<Typography
								color={"text.primary"}
								variant="body1"
								fontSize={18}
								display={{ xs: "none", lg: "block" }}
							>
								My Events
							</Typography>
						</NavLink>
					) : (
						""
					)}
				</>
			) : (
				<>
					<NavLink
						onClick={handleOpenDrawer}
						to={"#features"}
					>
						<Typography
							fontFamily={"Abril Fatface"}
							color={"text.primary"}
							variant="body1"
							fontSize={24}
						>
							Features
						</Typography>
					</NavLink>
					<NavLink
						onClick={handleOpenDrawer}
						to={"about"}
					>
						<Typography
							fontFamily={"Abril Fatface"}
							color={"text.primary"}
							variant="body1"
							fontSize={24}
						>
							About
						</Typography>
					</NavLink>
				</>
			)}
		</Stack>
	);
};

export default LandingPageDrawerLeftNavBar;
