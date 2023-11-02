const express = require("express");
const bookings = express.Router();

const {
    getAllBookings,
	getAllBookingsAndMeetingRooms, 
	getBookingById,
	getBookingByIdWithMeetingRooms,
    createBooking,
	deleteBookingById
} = require("../queries/bookings");

// import validations file, and then inject as middleware into POST
const { validateCreateBooking } = require("../validations/bookingsValidations.js");

/*
	GET	/api/bookings
	// get all bookings
	get all bookings and meeting rooms
*/
bookings.get("/", async (_req, res) => {
	try {
		// const allBookings = await getAllBookings();
		const allBookings = await getAllBookingsAndMeetingRooms();
		if (allBookings[0]) {
			res.status(200).json(allBookings);
		} else {
			res.status(500).json({ error: "Error: there are no bookings" });
		}
	} catch (err) {
		console.log(err);
	}
});

/*
    GET	/api/bookings/:id
    // Get booking by booking id
	Get booking by booking id and meeting rooms
*/
bookings.get("/:id", async (req, res)=> {
    const { id } = req.params;
    try {
        // const booking = await getBookingById(id);
		const booking = await getBookingByIdWithMeetingRooms(id);
        if (booking){
            res.status(200).json(booking);
        } else {
            res.status(500).json({ error: `Error: booking with ID ${id} not found.` });
        } 
    } catch (err) {
        console.log(err);
    }
})

/*
	POST	/api/bookings
	Create a booking

	Create a booking for a meeting room
	All fields are required except attendees
	Validates that room is available to book
*/
bookings.post("/", validateCreateBooking, async (req, res) => {
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

/*
	DELETE	/api/bookings/:id
	Delete a booking by its ID
*/
bookings.delete("/:id", async (req, res) => {
	const { id } = req.params;
	try {
		const deletedBooking = await deleteBookingById(id);
		if (deletedBooking.id) {
			res.status(200).json(deletedBooking);
		} else {
			res.status(404).json({ error: `Booking with id ${id} not found` });
		}
	} catch (err) {
		console.log(err);
	}
})

module.exports = bookings;
