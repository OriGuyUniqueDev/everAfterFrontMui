import { createTheme } from "@mui/material";

export const theme = createTheme({
	palette: {
		primary: {
			main: "#7986cb",
		},
		secondary: {
			main: "#ff80ab",
		},
		background: {
			default: "#1f2937",
			paper: "#1f2937",
		},
		error: {
			main: "#dc2626",
		},
		warning: {
			main: "#fbbd23",
		},
		info: {
			main: "#64b5f6",
		},
		success: {
			main: "#36d399",
		},
		text: {
			primary: "#FFFFFF",
		},
	},
	typography: {
		fontFamily: '"Outfit", sans-serif',
		h1: {
			fontFamily: '"Pacifico", sans-serif',
		},
		h2: {
			fontFamily: '"Abril Fatface", sans-serif',
		},
		h3: {
			fontFamily: '"Abril Fatface", sans-serif',
		},
		h4: {
			fontFamily: '"Abril Fatface", sans-serif',
		},
		h5: {
			fontFamily: '"Abril Fatface", sans-serif',
		},
		h6: {
			fontFamily: '"Abril Fatface", sans-serif',
		},
	},
});
