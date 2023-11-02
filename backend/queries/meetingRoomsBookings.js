const db = require("../db/dbConfig.js");

// get all bookings
const getAllBookingsByMeetingRoomId = async (meeting_room_id) => {
    try {
        const allBookingsByMeetingRoomId = await db.any(
            `SELECT * FROM meeting_rooms 
			LEFT JOIN bookings
			ON meeting_rooms.id = bookings.meeting_room_id
			WHERE meeting_room_id = $1 
			AND start_date >= CURRENT_TIMESTAMP`,
            meeting_room_id
        );
        return allBookingsByMeetingRoomId;
    } catch (err) {
        return err;
    }
};


module.exports = {
	getAllBookingsByMeetingRoomId,
};
