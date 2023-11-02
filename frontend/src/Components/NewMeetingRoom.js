import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./NewMeetingRoom.scss";
import Button from "./Button/Button";

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
	};

	const [newMeetingRoom, setNewMeetingRoom] = useState({
		name: "",
		capacity: "",
		floor: "",
	});

	const handleTextChange = (event) => {
		setNewMeetingRoom({
			...newMeetingRoom,
			[event.target.id]: event.target.value,
		});
	};

	const handleNumberChange = (event) => {
		setNewMeetingRoom({
			...newMeetingRoom,
			[event.target.id]: event.target.value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		addMeetingRoom(newMeetingRoom);
		navigate(`/`);
	};

	return (
		<div className="NewMeetingRoom">
			<div className="NewMeetingRoom__roomName">Create a Room</div>

			<form
				className="NewMeetingRoom__newMeetingRoomForm"
				onSubmit={handleSubmit}
			>
				<table>
					<tbody>
						<tr>
							<td>
								<label htmlFor="name">Room Name:</label>
							</td>
							<td>
								<input
									id="name"
									value={newMeetingRoom.name}
									type="text"
									onChange={handleTextChange}
									placeholder="New meeting room name"
									required
								/>
							</td>
						</tr>
						<tr>
							<td>
								<label htmlFor="floor">Floor:</label>
							</td>
							<td>
								<input
									id="floor"
									value={newMeetingRoom.floor}
									type="number"
									onChange={handleNumberChange}
									placeholder="22"
									required
								/>
							</td>
						</tr>
						<tr>
							<td>
								<label htmlFor="capacity">Capacity:</label>
							</td>
							<td>
								<input
									id="capacity"
									value={newMeetingRoom.capacity}
									type="number"
									onChange={handleNumberChange}
									min="0"
									placeholder="4"
									required
								/>
							</td>
						</tr>
					</tbody>
				</table>
				<Button 
					type="submit"
					buttonText="Submit"
					onClick={handleSubmit}
				/>
			</form>
			<hr />
		</div>
	);
};

export default NewMeetingRoom;
