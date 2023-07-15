import ReactDOM from "react-dom/client";
import { theme } from "./styles/muiTheme";
import "./styles/main.css";

import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import Layout from "./layout/Layout";
import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import { AuthProvider } from "react-auth-kit";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import de from "date-fns/locale/de";
import enGB from "date-fns/locale/en-GB";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<LocalizationProvider
			dateAdapter={AdapterDateFns}
			adapterLocale={enGB}
		>
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
