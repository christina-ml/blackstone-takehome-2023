// Dependencies
const express = require("express");

// Configuration
const app = express();

// Routes
app.get("/", (_req, res) => {
	res.send("Welcome to the Meeting Room Bookings app for Blackstone!");
});

app.get("*", (_req, res)=>{
    res.status(404).json({error: "404 Page not found."});
});

module.exports = app;