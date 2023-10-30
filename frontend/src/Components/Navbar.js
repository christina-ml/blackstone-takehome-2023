import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import "./Navbar.scss";

const Navbar = () => {
	const [currentTab, setCurrentTab] = React.useState(0);
	const handleTabChange = (event, selectedTab) => {
		setCurrentTab(selectedTab);
	};

	return (
		<div className="Navbar">
			<Box>
				<Tabs
					onChange={handleTabChange}
					value={currentTab}
					aria-label="Tabs where selection follows focus"
					selectionFollowsFocus
				>
					<Tab label="Meeting Rooms" style={{minWidth: "33.33%"}} />
					<Tab label="Bookings" style={{minWidth: "33.33%"}} />
					<Tab label="New Room" style={{minWidth: "33.33%"}} />
				</Tabs>
			</Box>
		</div>
	);
};

export default Navbar;
