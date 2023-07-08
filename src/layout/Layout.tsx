import Footer from "@/components/HomePage/Footer/Footer";
import NavbarLandingPage from "@/components/LandingPage/NavbarLandingPage/NavbarLandingPage";
import React, { FunctionComponent } from "react";

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
	return (
		<>
			<NavbarLandingPage />

			{children}
			<Footer />
		</>
	);
};

export default Layout;
