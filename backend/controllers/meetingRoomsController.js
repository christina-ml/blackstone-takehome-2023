const express = require("express");
const meetingRooms = express.Router();

const {
    getAllMeetingRooms,
    getMeetingRoomById,
    createMeetingRoom
} = require("../queries/meetingRooms");

// Controller for nested route
const meetingRoomsBookingsController = require("./meetingRoomsBookingsController.js");
meetingRooms.use("/:meetingRoomId/bookings", meetingRoomsBookingsController);

/*
    GET	/api/meeting-rooms
    View all meeting rooms
*/
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

/*
    GET  /api/meeting-rooms/:id
    Get all meeting rooms by id
*/
meetingRooms.get("/:id", async (req, res)=> {
    const { id } = req.params;
    try {
        const meetingRoom = await getMeetingRoomById(id);
        if (meetingRoom){
            res.status(200).json(meetingRoom);
        } else {
            res.status(500).json({ error: `Error: meeting room with ID ${id} not found.` });
        } 
    } catch (err) {
        console.log(err);
    }
})

/*
    POST    /api/meeting-rooms
    Create a meeting room
*/ 
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

/*
    Extra challenge
    POST	/api/meeting-rooms/available
*/

module.exports = meetingRooms;