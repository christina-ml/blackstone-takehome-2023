import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

const NewMeetingRoom = () => {
	const navigate = useNavigate();

	const addMeetingRoom = (newMeetingRoom) => {
		axios
			.post(`${API}/meeting-rooms`, newMeetingRoom)
			.then(
				() => {
					navigate(`/`);
				},
				(err) => console.error(err)
			)
			.catch((c) => console.warn("catch", c));
	}

	const [newMeetingRoom, setNewMeetingRoom] = useState({
		name: "",
		capacity: "",
		floor: ""
	});

	const handleTextChange = (event) => {
		setNewMeetingRoom({...newMeetingRoom, [event.target.id]: event.target.value});
	}

	const handleNumberChange = (event) => {
		setNewMeetingRoom({...newMeetingRoom, [event.target.id]: event.target.value});
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		addMeetingRoom(newMeetingRoom);
		navigate(`/`);
	}

	return(
		<div className="NewMeetingRoom">
			<div>Create a Room</div>
			<form onSubmit={handleSubmit}>
				<label htmlFor="name">Name:</label>
				<input 
					id="name"
					value={newMeetingRoom.name}
					type="text"
					onChange={handleTextChange}
					placeholder="New meeting room name"
					required
				/>
				<label htmlFor="floor">Floor:</label>
				<input 
					id="floor"
					value={newMeetingRoom.floor}
					type="number"
					onChange={handleNumberChange}
					placeholder="22"
					required
				/>
				<label htmlFor="capacity">Capacity:</label>
				<input 
					id="capacity"
					value={newMeetingRoom.capacity}
					type="number"
					onChange={handleNumberChange}
					min="0"
					placeholder="4"
					required
				/>
				<br />
				<input type="submit" />
			</form>
			<hr />
		</div>
	);
};

export default NewMeetingRoom;
