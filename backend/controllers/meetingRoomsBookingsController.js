const express = require("express");
const meetingRoomsBookings = express.Router({ mergeParams: true });

const {
    getAllBookingsByMeetingRoomId, 
} = require("../queries/meetingRoomsBookings");

/*
    GET	/api/meeting-rooms/:id/bookings
    View room bookings - by meeting room ID
*/
meetingRoomsBookings.get("/", async (req, res) => {
	const { meetingRoomId } = req.params;

	try {
		const allBookingsByMeetingRoomId = await getAllBookingsByMeetingRoomId(meetingRoomId);
		if (allBookingsByMeetingRoomId[0]) {
			res.status(200).json(allBookingsByMeetingRoomId);
		} else {
			res.status(500).json({ error: `Error: there are no bookings for meeting room ID ${meetingRoomId}` });
		}
	} catch (err) {
		console.log(err);
	}
});

module.exports = meetingRoomsBookings;
