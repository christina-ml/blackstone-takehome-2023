import React, { useEffect, useState } from "react";
import axios from "axios";
import MeetingRooms from "./MeetingRooms";
import "./Home.scss";
import AvailableMeetingRoomBookings from "./AvailableMeetingRoomBookings";
import AvailableRooms from "./AvailableRooms";

import convertISOStringToDate from "../Helpers/convertISOStringToDate";
import convertISOStringToTime from "../Helpers/convertISOStringToTime";

const API = process.env.REACT_APP_API_URL;

const Home = () => {
	// availableMeetingRoomBookingsBySearchCriteria
	const [available, setAvailable] = useState({
		start_date: "",
		end_date: "",
		floor: "",
		capacity: "",
	});

	const [meetingRooms, setMeetingRooms] = useState([]);
	const [loading, setLoading] = useState(false);
	const [startDateSearch, setStartDateSearch] = useState('');
	const [endDateSearch, setEndDateSearch] = useState('');
	const [floorSearch, setFloorSearch] = useState('');
	const [capacitySearch, setCapacitySearch] = useState('');

	useEffect(() => {
		setLoading(true);
		axios
			.get(API + "/meeting-rooms")
			.then((res) => {
				setMeetingRooms(res.data);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div className="Home">
			<AvailableMeetingRoomBookings
				available={available}
				setAvailable={setAvailable}
				setStartDateSearch={setStartDateSearch}
				setEndDateSearch={setEndDateSearch}
				setFloorSearch={setFloorSearch}
				setCapacitySearch={setCapacitySearch}
			/>
			<div className="Home__hrTag">
				<hr />
			</div>
			{available.length ? (
				<div>
					<div  className="Home__availableRoomSearchDates">
						Available Rooms between {convertISOStringToDate(startDateSearch)} {convertISOStringToTime(startDateSearch)} and {convertISOStringToDate(endDateSearch)} {convertISOStringToTime(endDateSearch)}
						{floorSearch && 
							<span> on Floor: {floorSearch}</span>
						}
						{capacitySearch && 
							<span> and Capacity: {capacitySearch}</span>
						}
					</div>
					<AvailableRooms available={available} />
				</div>
			) : (
				<div>
					{meetingRooms.map((meetingRoom) => {
						return (
							<MeetingRooms
								key={meetingRoom.id}
								meetingRoom={meetingRoom}
							/>
						);
					})}
				</div>
			)}

			{loading && (
				<div className="Home__loadingView">
					Loading...
					<div className="Home__loadingView__spinnerIcon"></div>
				</div>
			)}
		</div>
	);
};

export default Home;
