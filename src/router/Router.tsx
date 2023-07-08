/* eslint-disable @typescript-eslint/no-empty-interface */
import AboutSection from "@/components/LandingPage/About/AboutSection";
import useDrawers from "@/hooks/useDrawers";
import HomePage from "@/pages/HomePage";
import LandingPage from "@/pages/LandingPage";
import LoginPage from "@/pages/LoginPage";
import RegistrationPage from "@/pages/RegistrationPage";
import { FunctionComponent } from "react";
import { RequireAuth } from "react-auth-kit";
import { Route, Routes } from "react-router-dom";

interface RouterProps {}

const Router: FunctionComponent<RouterProps> = () => {
	const { functions, useStates } = useDrawers();
	return (
		<Routes>
			<Route path="/" element={<LandingPage />}>
				<Route path="welcomeBackLetsLogin" element={<LoginPage handleClickOpen={functions.openLoginSection} open={useStates.openLoginSection.openLoginDrawer} />} />
			</Route>
			<Route path="/about" element={<AboutSection />} />
			<Route path="/happyToSeeYouRegister" element={<RegistrationPage handleClickOpen={functions.openRegistrationDrawer} open={useStates.openRegistrationDrawer.openRegDrawer} />} />
			<Route
				path="/yourWedding"
				element={
					<RequireAuth loginPath="/welcomeBackLetsLogin">
						<HomePage />
					</RequireAuth>
				}
			/>
		</Routes>
	);
};

export default Router;
