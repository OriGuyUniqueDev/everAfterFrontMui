/* eslint-disable @typescript-eslint/no-empty-interface */
import BudgetTracker from "@/components/HomePage/BudgetTracker/BudgetTracker";
import Calculator from "@/components/HomePage/Calculator/Calculator";
import GuestList from "@/components/HomePage/GuestList/GuestList";
import TasksList from "@/components/HomePage/TasksList.tsx/TasksList";
import MyVendors from "@/components/HomePage/Vendors/MyVendors";
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
				path="/MyEverAfter"
				element={
					<RequireAuth loginPath="/welcomeBackLetsLogin">
						<HomePage />
					</RequireAuth>
				}
			></Route>

			<Route
				path="MyBudget"
				element={
					<RequireAuth loginPath="/welcomeBackLetsLogin">
						<BudgetTracker />
					</RequireAuth>
				}
			/>

			<Route
				path="MyGuests"
				element={
					<RequireAuth loginPath="/welcomeBackLetsLogin">
						<GuestList />
					</RequireAuth>
				}
			/>

			<Route
				path="MyTasks"
				element={
					<RequireAuth loginPath="/welcomeBackLetsLogin">
						<TasksList />
					</RequireAuth>
				}
			/>

			<Route
				path="MyCalculator"
				element={
					<RequireAuth loginPath="/welcomeBackLetsLogin">
						<Calculator />
					</RequireAuth>
				}
			/>

			<Route
				path="MyVendors"
				element={
					<RequireAuth loginPath="/welcomeBackLetsLogin">
						<MyVendors />
					</RequireAuth>
				}
			/>
		</Routes>
	);
};

export default Router;
