import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

// Material UI
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import styled from "@mui/system/styled";

// StyledTab component for setting background color for active Tab from MUI
const StyledTab = styled(Tab)(({ selected }) => (
    {
        backgroundColor: selected ? "white" : "lightgrey",
        border: selected ? "2px solid #4d4d4d" : "1px solid #4d4d4d",
        borderStyle: selected ? "solid solid" : "none solid",
        borderRadius: selected ? "5px" : "0px",
		color: selected ? "rgb(74,74,74)" : "rgb(74,74,74)",
        margin: selected ? "-1px 0px -1px 0px" : "0px",
        "&.Mui-selected": {
            backgroundColor: selected ? "white" : "lightgrey",
            color: selected ? "rgb(74,74,74)" : "rgb(74,74,74)",
            boxShadow: selected ? "0px 0px 0px 2px #4d4d4d" : "0px",
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
						selected={currentTab === 0}
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
						selected={currentTab === 1}
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
						selected={currentTab === 2}
						component={Link}
						to="/meetingrooms/new"
					/>
				</Tabs>
			</Box>
		</div>
	);
};

export default Navbar;