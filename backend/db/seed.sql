\c meeting_room_bookings;

INSERT INTO meeting_rooms (name, capacity, floor) VALUES
('Meeting Room 1', 6, 22),
('Boardroom 2', 12, 21),
('Hub', 30, 22);

INSERT INTO bookings (meeting_name, meeting_room_id, start_date, end_date, attendees) VALUES
('Team Alpha - Scrum Standup', 1, '2021-10-29 10:56:00', '2021-10-29 14:56:00', 'jdoe@email.com, bdylan@email.com'),
('Star Team - Backlog Refinement', 1, '2021-11-11 11:12:01', '2021-11-11 13:12:01', 'SASchwarzman@email.com, michaelC@email.com'),
('Project Eureka - Requirements Gathering', 2, '2022-11-09 15:15:21', '2022-11-09 15:45:21', 'JGFinley@email.com, JonathanG@email.com'),
('Star Team - Backlog Refinement 2', 1, '2022-11-11 05:23:44', '2022-11-11 13:20:44', 'JStecher@email.com, cAnderson@email.com'),
('Team Beta - Scrum Requirements', 3, '2021-08-29 10:56:00', '2021-08-29 14:56:00', 'PaigeR@email.com, vSawhney@email.com'),
('Project Cyber - Tech Huddle', 2, '2022-11-08 15:15:21', '2022-11-08 15:45:21', 'JoanS@email.com, nGalakatos@email.com'),
('Team Blackstone - Scrum Standup Fun', 3, '2022-11-11 05:23:44', '2022-11-11 13:20:44', 'JBaratta@email.com, WayneB@email.com');