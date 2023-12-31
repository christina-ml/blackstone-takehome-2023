import React from "react";
import "./BookingsDetails.scss";

// react icons
import { GoStopwatch } from "react-icons/go"
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

// Helper functions
import convertISOStringToDate from "../Helpers/convertISOStringToDate";
import convertISOStringToTime from "../Helpers/convertISOStringToTime";
import { Link } from "react-router-dom";

const BookingsDetails = ({ booking }) => {
	return (
		<div className="BookingsDetails">
			<div className="BookingsDetails__bookingName">
				<Link to={`/bookings/${booking.id}`}>{booking.meeting_name}</Link>
			</div>
			<div className="BookingsDetails__meetingRoomName">
				{booking.name}
			</div>
			<div className="BookingsDetails__details">
				<GoStopwatch 
					style={{
						verticalAlign: "bottom",
						fontSize: "20px",
						marginRight: "10px",
					}}
				/>
				Start: {convertISOStringToDate(booking.start_date)} {convertISOStringToTime(booking.start_date)}
			</div>
			<div className="BookingsDetails__details">
				<GoStopwatch 
					style={{
						verticalAlign: "bottom",
						fontSize: "20px",
						marginRight: "10px",
					}}
				/>
				End: {convertISOStringToDate(booking.end_date)} {convertISOStringToTime(booking.end_date)}
			</div>
			<div className="BookingsDetails__details">
				<HiOutlineBuildingOffice2 
					style={{
						verticalAlign: "bottom",
						fontSize: "20px",
						marginRight: "10px",
					}}
				/>
				Floor: {booking.floor}
			</div>
		</div>
	);
};

export default BookingsDetails;
