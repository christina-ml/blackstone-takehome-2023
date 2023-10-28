const checkName = (req, res, next) => {
    const { name, capacity, floor } = req.body;
    // check that name was provided
	if (!name) {
		return res.status(400).json({ error: "name must be provided" });
	}

    // check that name is a string
	if (typeof name !== "string") {
		return res.status(400).json({ error: "name must be a string" });
	}

    // check that capacity is a number
    if (typeof capacity !== "number") {
        return res.status(400).json({ error: "capacity must be a number" });
	}

    // check that floor is a number
    if (typeof floor !== "number") {
        return res.status(400).json({ error: "floor must be a number" });
	}

    // continue
    next();
};

module.exports = { checkName };
