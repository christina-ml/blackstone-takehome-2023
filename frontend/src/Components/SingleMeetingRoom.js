import React from "react";
import "./SingleMeetingRoom.scss";

const SingleMeetingRoom = ({meetingRoom}) => {
	return (
		<div className="SingleMeetingRoom">
			<div>
				ID: {meetingRoom.id}
			</div>
			<div>
				Name: {meetingRoom.name}
			</div>
			<div>
				Capacity: {meetingRoom.capacity}
			</div>
			<div>
				Floor: {meetingRoom.floor}
			</div>
		</div>
	);
};

export default SingleMeetingRoom;
