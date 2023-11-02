const db = require("../db/dbConfig.js");

// get all bookings
const getAllBookingsByMeetingRoomId = async (meeting_room_id) => {
	try {
		const allBookings = await db.any(
			"SELECT * FROM bookings WHERE meeting_room_id = $1 AND start_date >= CURRENT_TIMESTAMP",
			meeting_room_id
		);
		return allBookings;
	} catch (err) {
		return err;
	}
};

module.exports = {
	getAllBookingsByMeetingRoomId,
};
