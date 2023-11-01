import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import "./SingleMeetingRoomBookings.scss";

// react icons
import { GoStopwatch } from "react-icons/go";

// Helper functions
import convertISOStringToDate from "../Helpers/convertISOStringToDate";
import convertISOStringToTime from "../Helpers/convertISOStringToTime";

const API = process.env.REACT_APP_API_URL;

const SingleMeetingRoomBookings = () => {
	const [meetingRoomBookings, setMeetingRoomBookings] = useState([]);

	let { id } = useParams();

	useEffect(() => {
		axios
			.get(API + `/meeting-rooms/${id}/bookings`)
			.then((res) => {
				setMeetingRoomBookings(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [id]);

	return (
		<div className="SingleMeetingRoomBookings">
			{meetingRoomBookings.map((meetingRoomBooking) => {
				const { meeting_name, start_date, end_date } =
					meetingRoomBooking;

				return (
					<div className="SingleMeetingRoomBookingDetails" key={meetingRoomBooking.id}>
						<div className="SingleMeetingRoomBookingDetails__bookingName">
							<Link to={`/bookings/${id}`}>{meeting_name}</Link>
						</div>
						<div className="SingleMeetingRoomBookingDetails__details">
							<GoStopwatch
								style={{
									verticalAlign: "bottom",
									fontSize: "20px",
									marginRight: "10px",
								}}
							/>
							Start: {convertISOStringToDate(start_date)}{" "}
							{convertISOStringToTime(start_date)}
						</div>
						<div className="SingleMeetingRoomBookingDetails__details">
							<GoStopwatch
								style={{
									verticalAlign: "bottom",
									fontSize: "20px",
									marginRight: "10px",
								}}
							/>
							End: {convertISOStringToDate(end_date)}{" "}
							{convertISOStringToTime(end_date)}
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default SingleMeetingRoomBookings;
