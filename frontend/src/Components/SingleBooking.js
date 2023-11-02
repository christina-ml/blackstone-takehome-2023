import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./SingleBooking.scss";

import Button from "./Button/Button";

// react icons
import { GoStopwatch } from "react-icons/go";

// Helper functions
import convertISOStringToDate from "../Helpers/convertISOStringToDate";
import convertISOStringToTime from "../Helpers/convertISOStringToTime";

const API = process.env.REACT_APP_API_URL;

const SingleBooking = () => {
	const [booking, setBooking] = useState([]);
	const navigate = useNavigate();
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

	const { meeting_name, start_date, end_date } = booking;

	const handleDelete = () => {
		axios
			.delete(`${API}/bookings/${id}`)
			.then((res) => {
				navigate("/bookings");
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className="SingleBooking">
			<div className="SingleBooking__meetingName">{meeting_name}</div>
			<div className="SingleBooking__details">
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
			<div className="SingleBooking__details">
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
			<Button buttonText="Cancel" onClick={handleDelete} />
		</div>
	);
};

export default SingleBooking;
