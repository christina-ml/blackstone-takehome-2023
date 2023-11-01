import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { GoPeople } from "react-icons/go";
import "./SingleMeetingRoom.scss";
import SingleMeetingRoomBookings from "./SingleMeetingRoomBookings";

const API = process.env.REACT_APP_API_URL;

const SingleMeetingRoom = () => {
	const [meetingRoom, setMeetingRoom] = useState([]);

	let { id } = useParams();

	useEffect(() => {
		axios
			.get(API + `/meeting-rooms/${id}`)
			.then((res) => {
				setMeetingRoom(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [id]);

	return (
		<div className="SingleMeetingRoom">
			<div className="SingleMeetingRoom__details">
				<div className="SingleMeetingRoom__details__name">
					{meetingRoom.name}
				</div>
				<div className="SingleMeetingRoom__details__capacity">
					<GoPeople
						style={{
							verticalAlign: "bottom",
							fontSize: "20px",
							marginRight: "5px",
						}}
					/>
					<span className="MeetingRooms__details__capacity__capacityDetails">
						Capacity: {meetingRoom.capacity}
					</span>
				</div>
				<div className="SingleMeetingRoom__details__floor">
					<HiOutlineBuildingOffice2
						style={{
							verticalAlign: "bottom",
							fontSize: "20px",
							marginRight: "5px",
						}}
					/>
					<span className="MeetingRooms__details__floor__floorDetails">
						Floor: {meetingRoom.floor}
					</span>
				</div>
			</div>
			<hr />
			<SingleMeetingRoomBookings  />
		</div>
	);
};

export default SingleMeetingRoom;
