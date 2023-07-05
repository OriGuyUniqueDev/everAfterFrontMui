import { Container } from "@mui/material";
import React, { FunctionComponent } from "react";

interface ContentWrapperProps {
	children: React.ReactNode;
	alignItemsPosition: string;
	heightPercentage?: string;
}

const ContentWrapper: FunctionComponent<ContentWrapperProps> = ({ children, alignItemsPosition, heightPercentage }) => {
	return (
		<Container sx={{ minHeight: heightPercentage ? heightPercentage : "92svh", display: "flex", alignItems: { alignItemsPosition } }} maxWidth={"xl"}>
			{children}
		</Container>
	);
};

export default ContentWrapper;
