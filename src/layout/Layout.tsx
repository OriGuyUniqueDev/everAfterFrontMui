import Footer from "@/components/HomePage/Footer/Footer";
import NavbarHomePage from "@/components/HomePage/NavbarHomePage/NavbarHomePage";
import NavbarLandingPage from "@/components/LandingPage/NavbarLandingPage/NavbarLandingPage";
import React, { FunctionComponent } from "react";
import { useIsAuthenticated } from "react-auth-kit";

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
	const authenticated = useIsAuthenticated();
	const isAuthenticated = authenticated();
	return (
		<>
			{isAuthenticated ? <NavbarHomePage /> : <NavbarLandingPage />}

			{children}
			<Footer />
		</>
	);
};

export default Layout;
