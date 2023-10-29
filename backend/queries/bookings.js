const db = require("../db/dbConfig.js");

// get all bookings
const getAllBookings = async () => {
	try {
		const allBookings = await db.any("SELECT * FROM bookings");
		return allBookings;
	} catch (err) {
		return err;
	}
};

// get bookings  by id
const getBookingById = async(id) => {
    try {
        const bookingById = await db.oneOrNone("SELECT * FROM bookings WHERE id=$1", id);
        return bookingById;
    } catch (error) {
        return error;
    }
}

// create a booking
const createBooking = async (booking) => {
    const { meeting_name, meeting_room_id, start_date, end_date, attendees }  = booking;
    try {
        const newBooking = await db.oneOrNone(
            "INSERT INTO bookings (meeting_name, meeting_room_id, start_date, end_date, attendees) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [
                meeting_name,
                meeting_room_id,
                start_date,
                end_date,
                attendees
            ]
        );
        return newBooking;

    } catch (err) {
        return err;
    }
}

module.exports = {
	getAllBookings,
    getBookingById,
    createBooking
};