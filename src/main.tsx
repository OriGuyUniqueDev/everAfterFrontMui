import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <LandingPage />,
		children: [
			{
				path: "about",
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<React.StrictMode></React.StrictMode>);
