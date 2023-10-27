// Dependencies
const express = require("express");

// Configuration
const app = express();

app.get("/", (req, res) => {
	res.send("Hello Blackstone takehome backend!");
});

module.exports = app;