/* eslint-disable @typescript-eslint/no-empty-interface */
import { FunctionComponent } from "react";
import ContactSection from "../ContactSection/ContactSection";
import FeaturesSection from "../FeaturesSection/FeaturesSection";
import HeroSection from "../HeroSection/HeroSection";

interface LandingPageHomeProps {}

const LandingPageHome: FunctionComponent<LandingPageHomeProps> = () => {
	return (
		<>
			<HeroSection />
			<FeaturesSection />
			{/* <ContactSection /> */}
		</>
	);
};

export default LandingPageHome;
