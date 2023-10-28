DROP DATABASE IF EXISTS meeting_room_bookings;
CREATE DATABASE meeting_room_bookings;

\c meeting_room_bookings;

DROP TABLE IF EXISTS meeting_rooms;

CREATE TABLE meeting_rooms (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL,
    capacity SMALLINT NOT NULL,
    floor SMALLINT NOT NULL
);

DROP TABLE IF EXISTS bookings;

CREATE TABLE bookings (
    id SERIAL PRIMARY KEY,
    meeting_name VARCHAR(255) UNIQUE NOT NULL,
    meeting_room_id INTEGER NOT NULL REFERENCES meeting_rooms(id) ON DELETE CASCADE,
    start_date TIMESTAMP NOT NULL,
    end_date TIMESTAMP NOT NULL CHECK (start_date < end_date),
    attendees TEXT
);