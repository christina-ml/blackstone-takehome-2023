import axios from "axios";
import React from "react";
import Button from "./Button/Button";
import { useNavigate } from "react-router-dom";

import "./AvailableMeetingRoomBookings.scss";

import convertDateTimeStrToPOST from "../Helpers/convertDateTimeStringToPost";

const API = process.env.REACT_APP_API_URL;

const AvailableMeetingRoomBookings = ({ available, setAvailable }) => {
	const navigate = useNavigate();

	const getAvailable = (available) => {
		const { start_date, end_date, floor, capacity } = available;

		// add query strings to search through form submission
		if (start_date && end_date && floor && capacity === undefined) {
			// if floor
			axios
				.get(
					API +
						"/meeting-rooms/available?start_date=" +
						start_date +
						"&end_date=" +
						end_date +
						"&floor=" +
						floor
				)
				.then((res) => {
					setAvailable(res.data);
				})
				.catch((err) => {
					console.log(err);
				});
		} else if (start_date && end_date && capacity && floor === undefined) {
			// if capacity
			axios
				.get(
					API +
						"/meeting-rooms/available?start_date=" +
						start_date +
						"&end_date=" +
						end_date +
						"&capacity=" +
						capacity
				)
				.then((res) => {
					setAvailable(res.data);
				})
				.catch((err) => {
					console.log(err);
				});
		} else if (start_date && end_date && floor && capacity) {
			// if floor and capacity
			axios
				.get(
					API +
						"/meeting-rooms/available?start_date=" +
						start_date +
						"&end_date=" +
						end_date +
						"&floor=" +
						floor +
						"&capacity=" +
						capacity
				)
				.then((res) => {
					setAvailable(res.data);
				})
				.catch((err) => {
					console.log(err);
				});
		} else {
			// else start_date & end_date, which are required fields
			axios
				.get(
					API +
						"/meeting-rooms/available?start_date=" +
						start_date +
						"&end_date=" +
						end_date
				)
				.then((res) => {
					setAvailable(res.data);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	};

	const handleNumberChange = (event) => {
		setAvailable({
			...available,
			[event.target.id]: event.target.value,
		});
	};

	const handleDateAndTimeChange = (event) => {
		/*
			Convert date and time format from form: type="datetime-local"
			To be able to POST to backend in the same format as the `seed.sql` data
		*/
		const convertedDateTime = convertDateTimeStrToPOST(event.target.value);

		setAvailable({
			...available,
			[event.target.id]: convertedDateTime,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		getAvailable(available);
		navigate(`/`);
	};

	return (
		<div className="Available">
			<div>Find available rooms:</div>
			<form className="Available__availableForm" onSubmit={handleSubmit}>
				<table>
					<tbody>
						<tr>
							<td>
								<label htmlFor="start_date">Start:</label>
							</td>
							<td>
								<input
									id="start_date"
									value={available.start_date}
									type="datetime-local"
									onChange={handleDateAndTimeChange}
									style={{ width: "min-content" }}
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
									value={available.end_date}
									type="datetime-local"
									onChange={handleDateAndTimeChange}
									style={{ width: "min-content" }}
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
									value={available.floor}
									type="number"
									onChange={handleNumberChange}
									placeholder="22"
									style={{ width: "120px" }}
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
									value={available.capacity}
									type="number"
									onChange={handleNumberChange}
									min="0"
									placeholder="4"
									style={{
										textAlign: "center",
										width: "50px",
									}}
								/>
							</td>
						</tr>
					</tbody>
				</table>
				<Button
					type="submit"
					buttonText="Find"
					onClick={handleSubmit}
				/>
			</form>
		</div>
	);
};

export default AvailableMeetingRoomBookings;
