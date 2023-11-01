import React, { useEffect, useState } from "react";
import "./SingleBooking.scss";

// react icons
import { GoStopwatch } from "react-icons/go";

// Helper functions
import convertISOStringToDate from "../Helpers/convertISOStringToDate";
import convertISOStringToTime from "../Helpers/convertISOStringToTime";
import { useParams } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

const SingleBooking = () => {
	const [booking, setBooking] = useState([]);

	let { id } = useParams();

	useEffect(() => {
		axios
			.get(API + `/bookings/${id}`)
			.then((res) => {
				setBooking(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [id]);

	const { meeting_name, start_date, end_date} = booking;

	return (
		<div className="SingleBooking">
			<div className="SingleBooking__meetingName">
				{meeting_name}
			</div>
			<div className="SingleBooking__details">
				<GoStopwatch 
					style={{
						verticalAlign: "bottom",
						fontSize: "20px",
						marginRight: "10px",
					}}
				/>
				Start: {convertISOStringToDate(start_date)} {convertISOStringToTime(start_date)}
			</div>
			<div className="SingleBooking__details">
				<GoStopwatch 
					style={{
						verticalAlign: "bottom",
						fontSize: "20px",
						marginRight: "10px",
					}}
				/>
				End: {convertISOStringToDate(end_date)} {convertISOStringToTime(end_date)}
			</div>
		</div>
	);
};

export default SingleBooking;
