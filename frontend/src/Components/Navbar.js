import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

// Material UI
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

const Navbar = () => {
	const [currentTab, setCurrentTab] = useState(0);
	const handleTabChange = (_event, selectedTab) => {
		setCurrentTab(selectedTab);
	};

	return (
		<div className="Navbar">
			<Box>
				<Tabs
					onChange={handleTabChange}
					value={currentTab}
                    aria-label="tabs for meeting rooms, bookings, and new room"
				>
                        <Tab 
                            label="Meeting Rooms" 
                            style={{minWidth: "33.33%", textTransform: "capitalize", fontSize: "17px"}} 
                            component={Link}
                             to="/"
                        />
					<Tab 
                        label="Bookings" 
                        style={{minWidth: "33.33%", textTransform: "capitalize", fontSize: "17px"}} 
                        component={Link} 
                        to="/bookings"
                    />
					<Tab 
                        label="New Room" 
                        style={{minWidth: "33.33%", textTransform: "capitalize", fontSize: "17px"}} 
                        component={Link}
                        to="/meetingrooms/new"
                    />
				</Tabs>
			</Box>
		</div>
	);
};

export default Navbar;