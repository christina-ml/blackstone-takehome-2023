import React from "react";
import "./SingleMeetingRoom.scss";

import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { GoPeople } from "react-icons/go";

const SingleMeetingRoom = ({ meetingRoom }) => {
	return (
		<div className="SingleMeetingRoom">
			<div className="SingleMeetingRoom__name">{meetingRoom.name}</div>
			<div className="SingleMeetingRoom__capacity">
				<GoPeople />
				<span className="SingleMeetingRoom__capacity__capacityDetails">
					Capacity: {meetingRoom.capacity}
				</span>
			</div>
			<div className="SingleMeetingRoom__floor">
				<HiOutlineBuildingOffice2 />
				<span className="SingleMeetingRoom__floor__floorDetails">
					Floor: {meetingRoom.floor}
				</span>
			</div>
		</div>
	);
};

export default SingleMeetingRoom;
