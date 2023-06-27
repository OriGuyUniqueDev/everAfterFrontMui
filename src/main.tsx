import { ThemeProvider } from "@emotion/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutSection from "./components/LandingPage/About/AboutSection";
import LandingPageHome from "./components/LandingPage/LandingPageHome/LandingPageHome";
import LandingPage from "./pages/LandingPage";
import { theme } from "./styles/muiTheme";
import "./styles/main.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <LandingPage />,
		children: [
			{
				path: "/",
				element: <LandingPageHome />,
			},
			{
				path: "about",
				element: <AboutSection />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<RouterProvider router={router} />
		</ThemeProvider>
	</React.StrictMode>
);
