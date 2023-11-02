import React from "react";
import "./AvailableRooms.scss";

import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { GoPeople } from "react-icons/go";
import { Link } from "react-router-dom";

const AvailableRooms = ({ available }) => {
    /*
        filter out duplicate meeting_room_id
        The backend fetches all bookings, 
        to have access to the start_date and end_date 
        to determine whether or not a room is available
    */
   // variable for new set to identify unique meeting_room_id's
   let filteredSet = new Set();
    let filteredAvailable = available.filter((availableBookingInRoom) => {
        if (!filteredSet.has(availableBookingInRoom.meeting_room_id)){
            filteredSet.add(availableBookingInRoom.meeting_room_id);
            return true;
        }
       return false;
    })

	return (
		<div>
			{filteredAvailable.map((availableBooking) => {
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
