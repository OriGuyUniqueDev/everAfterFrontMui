import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutSection from "./components/LandingPage/About/AboutSection";
import LandingPageHome from "./components/LandingPage/LandingPageHome/LandingPageHome";
import LandingPage from "./pages/LandingPage";

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
		<RouterProvider router={router} />
	</React.StrictMode>
);
