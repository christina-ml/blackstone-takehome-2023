import React from "react";
import "./MeetingRooms.scss";

import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { GoPeople } from "react-icons/go";
import { Link } from "react-router-dom";

const MeetingRooms = ({ meetingRoom }) => {
	return (
		<div className="MeetingRooms">
			<div className="MeetingRooms__name">
				<Link to={`meetingrooms/${meetingRoom.id}`}>{meetingRoom.name}</Link>
			</div>
			<div className="MeetingRooms__capacity">
				<GoPeople />
				<span className="MeetingRooms__capacity__capacityDetails">
					Capacity: {meetingRoom.capacity}
				</span>
			</div>
			<div className="MeetingRooms__floor">
				<HiOutlineBuildingOffice2 />
				<span className="MeetingRooms__floor__floorDetails">
					Floor: {meetingRoom.floor}
				</span>
			</div>
		</div>
	);
};

export default MeetingRooms;
