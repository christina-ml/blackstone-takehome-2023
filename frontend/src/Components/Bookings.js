import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleBooking from "./SingleBooking";

const API = process.env.REACT_APP_API_URL;

const Bookings = () => {
	const [allBookings, setAllBookings] = useState([]);

	useEffect(() => {
		axios
			.get(API + '/bookings')
			.then((res) => {
				setAllBookings(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div>
			{allBookings.map((booking) => {
				return (
					<SingleBooking 
						key={booking.id} 
						booking={booking} 
					/>
				)
			})}
		</div>
	);
};

export default Bookings;
