import React from "react";

import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { GoPeople } from "react-icons/go";
import { Link } from "react-router-dom";

const AvailableRooms = ({ available }) => {
	return (
		<div className="AvailableRooms">
			{available.map((availableBooking) => {
				return (
					<div className="AvailableRooms">
						<div className="AvailableRooms__name">
							<Link
								to={`meetingrooms/${availableBooking.meeting_room_id}`}
							>
								{availableBooking.name}
							</Link>
						</div>
						<div className="AvailableRooms__capacity">
							<GoPeople />
							<span className="AvailableRooms__capacity__capacityDetails">
								Capacity: {availableBooking.capacity}
							</span>
						</div>
						<div className="AvailableRooms__floor">
							<HiOutlineBuildingOffice2 />
							<span className="AvailableRooms__floor__floorDetails">
								Floor: {availableBooking.floor}
							</span>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default AvailableRooms;
