import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./NewBooking.scss";
import Button from "./Button/Button";

// Helper function
import convertDateTimeStrToPOST from "../Helpers/convertDateTimeStringToPost";

const API = process.env.REACT_APP_API_URL;

const NewBooking = () => {
	const navigate = useNavigate();
	const { id } = useParams();

	const addMeetingRoom = (newBooking) => {
		axios
			.post(`${API}/bookings`, newBooking)
			.then(
				() => {
					navigate(`/`);
				},
				(err) => console.error(err)
			)
			.catch((c) => console.warn("catch", c));
	};

	// set meeting room ID to current meeting room
	const [newBooking, setNewBooking] = useState({
		meeting_name: "",
		meeting_room_id: `${id}`,
		start_date: "",
		end_date: "",
		attendees: "",
	});

	const handleTextChange = (event) => {
		setNewBooking({
			...newBooking,
			[event.target.id]: event.target.value,
		});
	};

	const handleDateAndTimeChange = (event) => {
		/*
			Convert date and time format from form: type="datetime-local"
			To be able to POST to backend in the same format as the `seed.sql` data
		*/
		const convertedDateTime = convertDateTimeStrToPOST(event.target.value);

		setNewBooking({
			...newBooking,
			[event.target.id]: convertedDateTime,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		addMeetingRoom(newBooking);
		navigate(`/`);
	};

	return (
		<div className="NewBooking">
			<div className="NewBooking__roomName">Book Room:</div>
			<form
				className="NewBooking__newBookingForm"
				onSubmit={handleSubmit}
			>
				<table>
					<tbody>
						<tr>
							<td>
								<label htmlFor="meeting_name">
									Meeting Name:
								</label>
							</td>
							<td>
								<input
									id="meeting_name"
									value={newBooking.meeting_name}
									type="text"
									onChange={handleTextChange}
									placeholder=""
									required
								/>
							</td>
						</tr>
						<tr>
							<td>
								<label htmlFor="start_date">Start:</label>
							</td>
							<td>
								<input
									id="start_date"
									value={newBooking.start_date}
									type="datetime-local"
									onChange={handleDateAndTimeChange}
									required
								/>
							</td>
						</tr>
						<tr>
							<td>
								<label htmlFor="end_date">End:</label>
							</td>
							<td>
								<input
									id="end_date"
									value={newBooking.end_date}
									type="datetime-local"
									onChange={handleDateAndTimeChange}
									required
								/>
							</td>
						</tr>
						<tr>
							<td>
								<label htmlFor="attendees">Attendees:</label>
							</td>
							<td>
								<input
									id="attendees"
									value={newBooking.attendees}
									type="text"
									onChange={handleTextChange}
									min="0"
									placeholder=""
								/>
							</td>
						</tr>
					</tbody>
				</table>
				<Button
					type="submit"
					buttonText="Submit"
				/>
			</form>
		</div>
	);
};

export default NewBooking;
