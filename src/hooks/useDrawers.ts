import { useState } from "react";

export default function useDrawers() {
	const [isOpenDrawerMenu, setOpenDrawerMenu] = useState(false);
	const [openLoginDrawer, setOpenLoginDrawer] = useState(false);
	const [openRegDrawer, setRegDrawer] = useState(false);
	const handleOpenDrawerMenu = () => {
		setOpenDrawerMenu(!isOpenDrawerMenu);
	};
	const handleLoginOpen = () => {
		setOpenLoginDrawer((prev) => !prev);
	};
	const handleRegOpen = () => {
		setRegDrawer((prev) => !prev);
	};

	return {
		useStates: {
			openMenu: {
				isOpenDrawerMenu: isOpenDrawerMenu,
				setOpenDrawerMenu: setOpenDrawerMenu,
			},
			openLoginSection: {
				openLoginDrawer: openLoginDrawer,
				setOpenDrawerMenu: setOpenLoginDrawer,
			},
			openRegistrationDrawer: {
				openRegDrawer: openRegDrawer,
				setRegDrawer: setRegDrawer,
			},
		},
		functions: {
			openMenu: handleOpenDrawerMenu,
			openLoginSection: handleLoginOpen,
			openRegistrationDrawer: handleRegOpen,
		},
	};
}
