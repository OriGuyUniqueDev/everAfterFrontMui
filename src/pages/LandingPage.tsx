/* eslint-disable @typescript-eslint/no-empty-interface */
import Footer from "@/components/HomePage/Footer/Footer";
import ContactSection from "@/components/LandingPage/ContactSection/ContactSection";
import FeaturesSection from "@/components/LandingPage/FeaturesSection/FeaturesSection";
import HeroSection from "@/components/LandingPage/HeroSection/HeroSection";
import NavbarLandingPage from "@/components/LandingPage/NavbarLandingPage/NavbarLandingPage";
import useDrawers from "@/hooks/useDrawers";
import { Functions } from "@mui/icons-material";
import React, { FunctionComponent, useEffect } from "react";
import { useIsAuthenticated } from "react-auth-kit";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

interface LandingPageProps {}

const LandingPage: FunctionComponent<LandingPageProps> = () => {
	const isAuthenticated = useIsAuthenticated();
	const navigate = useNavigate();
	useEffect(() => {
		if (isAuthenticated()) {
			navigate("/MyEverAfter");
		}
		console.log("only on render");
	});

	return (
		<>
			<HeroSection />
			<FeaturesSection />
			<ContactSection />
		</>
	);
};

export default LandingPage;
