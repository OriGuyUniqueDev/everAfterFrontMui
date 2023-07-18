import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./styles/muiTheme";
import ReactDOM from "react-dom/client";
import "./styles/main.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import Layout from "./layout/Layout";
import React from "react";
import { AuthProvider } from "react-auth-kit";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<LocalizationProvider dateAdapter={AdapterMoment}>
			<AuthProvider
				authType={"localstorage"}
				authName={"everAfterAuth"}
				cookieDomain={window.location.hostname}
				cookieSecure={false}
			>
				<ThemeProvider theme={theme}>
					<BrowserRouter>
						<Layout>
							<Router />
						</Layout>
					</BrowserRouter>
				</ThemeProvider>
			</AuthProvider>
		</LocalizationProvider>
	</React.StrictMode>
);
