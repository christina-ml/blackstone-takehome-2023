import React, { useEffect, useState } from "react";
import axios from "axios";
import MeetingRooms from "./MeetingRooms";
import "./Home.scss";
import AvailableMeetingRoomBookings from "./AvailableMeetingRoomBookings";
import AvailableRooms from "./AvailableRooms";

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
			/>
			<div className="Home__hrTag">
				<hr />
			</div>
			{available.length ? (
				<AvailableRooms available={available} />
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
