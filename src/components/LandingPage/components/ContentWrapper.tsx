import { Container } from "@mui/material";
import React, { FunctionComponent } from "react";

interface ContentWrapperProps {
	children: React.ReactNode;
	alignItemsPosition: string;
}

const ContentWrapper: FunctionComponent<ContentWrapperProps> = ({ children, alignItemsPosition }) => {
	return (
		<Container sx={{ minHeight: "92svh", display: "flex", alignItems: { alignItemsPosition } }} maxWidth={"xl"}>
			{children}
		</Container>
	);
};

export default ContentWrapper;
