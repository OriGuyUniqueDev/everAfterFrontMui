import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutSection from "./components/LandingPage/About/AboutSection";
import LandingPage from "./pages/LandingPage";
import { theme } from "./styles/muiTheme";
import "./styles/main.css";
import { AuthProvider, RequireAuth } from "react-auth-kit";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import useDrawers from "./hooks/useDrawers";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import Layout from "./layout/Layout";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { ThemeProvider } from "@mui/material/styles";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	// <React.StrictMode>
	<LocalizationProvider dateAdapter={AdapterDateFns}>
		<AuthProvider authType={"localstorage"} authName={"everAfterAuth"} cookieDomain={window.location.hostname} cookieSecure={false}>
			<ThemeProvider theme={theme}>
				<BrowserRouter>
					<Layout>
						<Router />
					</Layout>
				</BrowserRouter>
			</ThemeProvider>
		</AuthProvider>
	</LocalizationProvider>
	// </React.StrictMode>
);
