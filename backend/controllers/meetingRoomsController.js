const express = require("express");
const meetingRooms = express.Router();

const {
    getAllMeetingRooms,
} = require("../queries/meetingRooms");

// View all meeting rooms
meetingRooms.get("/", async (req, res)=> {
    try {
        const allMeetingRooms = await getAllMeetingRooms();
        if (allMeetingRooms[0]){
            res.status(200).json(allMeetingRooms);
        } else {
            res.status(500).json({ error: "Error: there are no meeting rooms" });
        }
    } catch (err) {
        console.log(err);
    }
})

// Create a meeting room

// View room bookings

module.exports = meetingRooms;