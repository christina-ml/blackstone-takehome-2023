const db = require("../db/dbConfig.js");

/* 
    get all bookings
    List all future bookings
*/
const getAllBookings = async () => {
	try {
		const allBookings = await db.any("SELECT * FROM bookings WHERE start_date >= CURRENT_TIMESTAMP");
		return allBookings;
	} catch (err) {
		return err;
	}
};

// get all future bookings and meetingRooms
const getAllBookingsAndMeetingRooms = async () => {
	try {
		const allBookingsAndMeetingRooms = await db.any("SELECT * FROM bookings JOIN meeting_rooms ON bookings.meeting_room_id = meeting_rooms.id WHERE bookings.start_date >= CURRENT_TIMESTAMP");
		return allBookingsAndMeetingRooms;
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

// get bookings by id with meeting rooms
const getBookingByIdWithMeetingRooms = async(id) => {
    try {
        const bookingByIdWithMeetingRoom = await db.oneOrNone("SELECT * FROM bookings JOIN meeting_rooms ON bookings.meeting_room_id = meeting_rooms.id WHERE bookings.id=$1", id);
        return bookingByIdWithMeetingRoom;
    } catch (error) {
        return error;
    }
}

// create a booking
const createBooking = async (booking) => {
    const { meeting_name, meeting_room_id, start_date, end_date, attendees }  = booking;

    const bookingAlreadyExists = await db.oneOrNone("SELECT * FROM bookings WHERE meeting_room_id = $1 AND (start_date >= $2 AND end_date <= $3)",
        [meeting_room_id, start_date, end_date]
    );

    try {
        if (!bookingAlreadyExists){
            // console.log ("No conflicts found; proceed with the booking")
            // console.log("bookingAlreadyExists:", bookingAlreadyExists)

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
        } else {
            // console.log("-->:", bookingAlreadyExists)
            // console.log("error - booking already exists. There is a conflict; do not proceed with the booking")
        }


    } catch (err) {
        return err;
    }
}

// Delete a booking by its ID
const deleteBookingById = async (id) => {
    try {
		const deletedBooking = await db.one("DELETE FROM bookings WHERE id = $1 RETURNING *", id);
		return deletedBooking;
	} catch (err) {
		return err;
	}
}

module.exports = {
	getAllBookings,
    getAllBookingsAndMeetingRooms,
    getBookingById,
    getBookingByIdWithMeetingRooms,
    createBooking,
    deleteBookingById
};