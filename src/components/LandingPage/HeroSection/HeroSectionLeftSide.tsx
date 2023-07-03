/* eslint-disable @typescript-eslint/no-empty-interface */
import { FunctionComponent } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Stack, Typography, Button } from "@mui/material";

interface HeroSectionLeftSideProps {}

const HeroSectionLeftSide: FunctionComponent<HeroSectionLeftSideProps> = () => {
	return (
		<Grid xs={12} lg={6}>
			<Stack alignItems={{ xs: "center", lg: "start" }} gap={8}>
				<Stack gap={3} direction={"column"}>
					<Grid>
						<Typography fontSize={{ xs: 56, md: 70, lg: 60 }} textAlign={{ xs: "center", lg: "left" }}>
							Find your happily ever after with
							<Typography fontSize={{ xs: 56, md: 70, lg: 60 }} textAlign={{ xs: "center", lg: "left" }} fontFamily={"pacifico"} component={"span"} color={"secondary"}>
								{" "}
								EverAfter
							</Typography>
						</Typography>
					</Grid>

					<Grid>
						<Typography fontSize={{ xs: 16, md: 20, lg: 22 }} fontWeight={"100"} textAlign={{ xs: "center", lg: "left" }}>
							Looking for a magical and unforgettable wedding? EverAfter has got you covered. Our platform offers everything you need to plan your dream wedding, from venue selection to vendor bookings. Sign up now and start planning your happily ever after.
						</Typography>
					</Grid>
				</Stack>

				<Stack direction={{ xs: "column", lg: "row" }} gap={1}>
					<Button sx={{ fontFamily: "Pacifico", fontWeight: "700", width: "13rem", textTransform: "none" }} size={"large"} variant="contained" color="secondary">
						Start Planning
					</Button>

					<Button sx={{ width: "13rem", color: "#fff", outlineColor: "#fff", textTransform: "none" }} variant="outlined" size={"large"}>
						Discover EverAfter
					</Button>
				</Stack>
			</Stack>
		</Grid>
	);
};

export default HeroSectionLeftSide;