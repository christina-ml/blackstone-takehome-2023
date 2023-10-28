const express = require("express");
const bookings = express.Router();

const {
    getAllBookings, 
    createBooking 
} = require("../queries/bookings");

// GET	/api/bookings
bookings.get("/", async (req, res) => {
	try {
		const allBookings = await getAllBookings();
		if (allBookings[0]) {
			res.status(200).json(allBookings);
		} else {
			res.status(500).json({ error: "Error: there are no bookings" });
		}
	} catch (err) {
		console.log(err);
	}
});

// GET	/api/bookings/:id

// POST	/api/bookings
// Create a booking
bookings.post("/", async (req, res) => {
	const { body } = req;
	try {
		const newBooking = await createBooking(body);
		if (newBooking) {
			res.status(200).json(newBooking);
		} else {
			res.status(500).json({ error: "Error: booking creation error" });
		}
	} catch (err) {
		console.log(err);
	}
});

// DELETE	/api/bookings/:id

module.exports = bookings;