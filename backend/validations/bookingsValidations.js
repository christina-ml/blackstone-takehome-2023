/*
    Create a booking for a meeting room
    All fields are required except attendees
    Validates that room is available to book
*/
const validateCreateBooking = (req, res, next) => {
    const { start_date, end_date } = req.body;

	if (start_date < end_date) {
        // continue
        return next();
    } else {
		return res.status(400).json({ error: "end date must come after start date." });
    }
};

module.exports = { validateCreateBooking };
