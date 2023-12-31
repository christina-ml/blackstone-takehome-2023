const db = require("../db/dbConfig.js");

// get all meeting rooms
const getAllMeetingRooms = async() => {
    try {
        const allMeetingRooms = await db.any(`
        SELECT * FROM meeting_rooms
        `);
        // const allMeetingRooms = await db.any(`
        // SELECT * FROM meeting_rooms 
        // LEFT JOIN bookings 
        // ON meeting_rooms.id = bookings.meeting_room_id
        // `);
        return allMeetingRooms;
    } catch (error) {
        return error;
    }
}

// TO DO: meeting rooms that have no bookings between the selected dates
// get all meetingRooms and bookings outside of start_date and end_date range
/*
    Examples:
    http://localhost:3333/meeting-rooms/available?start_date=2022-11-08T20:15:21.000Z&end_date=2022-11-13T18:20:44.000Z
    
    http://localhost:3333/meeting-rooms/available?start_date=2022-11-08T20:15:21.000Z&end_date=2022-11-13T18:20:44.000Z&floor=22

    http://localhost:3333/meeting-rooms/available?start_date=2022-11-08T20:15:21.000Z&end_date=2022-11-13T18:20:44.000Z&floor=22&capacity=30
*/
const getAllMeetingRoomsAndBookingsNotBetweenStartAndEnd = async (start_date, end_date, floor, capacity) => {
	try {
		const allMeetingRoomsAndBookingsNotBtwnStartAndEnd = await db.any(`
        SELECT * FROM meeting_rooms 
        LEFT JOIN bookings 
        ON  meeting_rooms.id = bookings.meeting_room_id
        WHERE (bookings.start_date > $2 OR bookings.end_date < $1)
            AND (meeting_rooms.floor = $3 OR $3 IS NULL)
            AND (meeting_rooms.capacity <= $4 OR $4 IS NULL)
        `, [
            start_date,
            end_date,
            floor,
            capacity
        ]);
		return allMeetingRoomsAndBookingsNotBtwnStartAndEnd;
	} catch (err) {
		return err;
	}
};

// get meeting room by id
const getMeetingRoomById = async(id) => {
    try {
        const meetingRoom = await db.oneOrNone("SELECT * FROM meeting_rooms WHERE id=$1", id);
        return meetingRoom;
    } catch (error) {
        return error;
    }
}

// Create a meeting room
const createMeetingRoom = async (meeting) => {
    try {
        const newMeetingRoom = await db.one(
            "INSERT INTO meeting_rooms (name, capacity, floor) VALUES($1, $2, $3) RETURNING *",
            [meeting.name, meeting.capacity, meeting.floor]
        )
        return newMeetingRoom;
    } catch (error) {
        return error;
    }
}

// View room bookings

module.exports = {
    getAllMeetingRooms,
    getAllMeetingRoomsAndBookingsNotBetweenStartAndEnd,
    getMeetingRoomById,
    createMeetingRoom
};