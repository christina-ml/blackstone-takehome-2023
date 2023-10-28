const db = require("../db/dbConfig.js");

// get all meeting rooms
const getAllMeetingRooms = async() => {
    try {
        const allMeetingRooms = await db.any("SELECT * FROM meeting_rooms");
        return allMeetingRooms;
    } catch (error) {
        return error;
    }
}

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
    getMeetingRoomById,
    createMeetingRoom
};