// Dependencies
const express = require("express");

// Configuration
const app = express();

// Controllers
const meetingRoomsController = require("./controllers/meetingRoomsController.js");

// Middleware
app.use(express.json());
app.use("/meeting-rooms", meetingRoomsController);

// Routes
app.get("/", (_req, res) => {
	res.send("Welcome to the Meeting Room Bookings app for Blackstone!");
});

app.get("*", (_req, res)=>{
    res.status(404).json({error: "404 Page not found."});
});

module.exports = app;