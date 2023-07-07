/* eslint-disable @typescript-eslint/no-empty-interface */
import Footer from "@/components/HomePage/Footer/Footer";
import NavbarLandingPage from "@/components/LandingPage/NavbarLandingPage/NavbarLandingPage";
import { FunctionComponent } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

interface LandingPageProps {}

const LandingPage: FunctionComponent<LandingPageProps> = () => {
	return (
		<>
			<NavbarLandingPage />
			{/* <ToastContainer /> */}

			<Outlet />
			<Footer />
		</>
	);
};

export default LandingPage;
