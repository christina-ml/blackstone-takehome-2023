const express = require("express");
const meetingRooms = express.Router();

const {
    getAllMeetingRooms,
    createMeetingRoom
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
meetingRooms.post("/", async (req, res)=> {
    const { body } = req;
    try {
        const newMeetingRoom = await createMeetingRoom(body);
        if (newMeetingRoom.id){
            res.status(200).json(newMeetingRoom);
        } else {
            res.status(500).json({ error: "Error: meeting room creation error" });
        }
    } catch (err) {
        console.log(err);
    }
})

// View room bookings

module.exports = meetingRooms;