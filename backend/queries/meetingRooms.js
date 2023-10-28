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

module.exports = {
    getAllMeetingRooms,
};