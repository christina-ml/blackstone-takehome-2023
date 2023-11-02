\c meeting_room_bookings;

INSERT INTO meeting_rooms (name, capacity, floor) VALUES
('Meeting Room 1', 6, 22),
('Boardroom 2', 12, 18),
('Hub', 30, 22),
('Interview Meeting Room', 10, 21);

INSERT INTO bookings (meeting_name, meeting_room_id, start_date, end_date, attendees) VALUES
('Team Alpha - Scrum Standup', 1, '2024-10-29 10:56:00', '2024-10-29 14:56:00', 'jdoe@email.com, bdylan@email.com'),
('Star Team - Backlog Refinement', 1, '2024-11-11 11:12:01', '2024-11-11 13:12:01', 'SASchwarzman@email.com, michaelC@email.com'),
('Project Eureka - Requirements Gathering', 2, '2023-12-09 15:15:21', '2023-12-09 15:45:21', 'JGFinley@email.com, JonathanG@email.com'),
('Star Team - Backlog Refinement 2', 1, '2023-12-11 05:23:44', '2023-12-11 13:20:44', 'JStecher@email.com, cAnderson@email.com'),
('Team Beta - Scrum Requirements', 3, '2024-08-29 10:56:00', '2024-08-29 14:56:00', 'PaigeR@email.com, vSawhney@email.com'),
('Project Cyber - Tech Huddle', 4, '2023-12-08 15:15:21', '2023-12-08 15:45:21', 'JoanS@email.com, nGalakatos@email.com'),
('Blackstone Team - Takehome Review', 2, '2023-11-06 10:15:21', '2023-11-06 10:45:21', 'robertP@email.com, ashimS@email.com'),
('Blackstone Cyber Team - Final Interviews', 4, '2023-11-06 12:30:21', '2023-11-06 14:00:21', 'lenny@email.com, james@email.com'),
('Pursuit Fellows - Pizza and Coding', 2, '2023-11-09 16:00:46', '2023-11-09 19:00:23', 'tim@email.com, jordan@email.com'),
('Team Blackstone - Scrum Standup Fun', 3, '2025-11-11 05:23:44', '2025-11-11 13:20:44', 'JBaratta@email.com, WayneB@email.com');