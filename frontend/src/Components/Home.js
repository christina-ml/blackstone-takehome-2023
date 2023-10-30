import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleMeetingRoom from "./SingleMeetingRoom";

const API = process.env.REACT_APP_API_URL;

const Home = () => {
	const [meetingRooms, setMeetingRooms] = useState([]);

	useEffect(() => {
		axios.get( API + "/meeting-rooms" )
		.then((res)=>{
			setMeetingRooms(res.data);
		}).catch((err)=>{
		  console.log(err);
		})
	  }, []);

	return (
		<div>
			{meetingRooms.map((meetingRoom) => {
              return (
			  	<SingleMeetingRoom 
					key={meetingRoom.id} 
					meetingRoom={meetingRoom}
				/>
			  );
            })}
		</div>
	)
};

export default Home;
