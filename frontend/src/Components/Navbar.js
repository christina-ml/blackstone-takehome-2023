import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

// Material UI
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import styled from "@mui/system/styled";

// StyledTab component for setting background color for active Tab from MUI
const StyledTab = styled(Tab)(({ isActive }) => (
    {
        backgroundColor: isActive ? "white" : "lightgrey",
        border: isActive ? "2px solid #4d4d4d" : "1px solid #4d4d4d",
        borderStyle: isActive ? "solid solid" : "none solid",
        borderRadius: isActive ? "5px" : "0px",
		color: isActive ? "rgb(74,74,74)" : "rgb(74,74,74)",
        margin: isActive ? "-1px 0px -1px 0px" : "0px",
        "&.Mui-selected": {
            backgroundColor: isActive ? "white" : "lightgrey",
            color: isActive ? "rgb(74,74,74)" : "rgb(74,74,74)",
            boxShadow: isActive ? "0px 0px 0px 2px #4d4d4d" : "0px",
        },
    }
));

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
                    indicatorColor="none"
                    color="secondary"
					aria-label="tabs for meeting rooms, bookings, and new room"
				>
					<StyledTab
						label="Meeting Rooms"
						style={{
							minWidth: "33.33%",
							textTransform: "capitalize",
							fontSize: "18px",
						}}
						value={0}
						isActive={currentTab === 0}
						component={Link}
						to="/"
					/>
					<StyledTab
						label="Bookings"
						style={{
							minWidth: "33.33%",
							textTransform: "capitalize",
							fontSize: "18px",
						}}
						value={1}
						isActive={currentTab === 1}
						component={Link}
						to="/bookings"
					/>
					<StyledTab
						label="New Room"
						style={{
							minWidth: "33.33%",
							textTransform: "capitalize",
							fontSize: "18px",
						}}
						value={2}
						isActive={currentTab === 2}
						component={Link}
						to="/meetingrooms/new"
					/>
				</Tabs>
			</Box>
		</div>
	);
};

export default Navbar;