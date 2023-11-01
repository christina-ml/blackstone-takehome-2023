import React, { useEffect, useState } from "react";
import axios from "axios";
import MeetingRooms from "./MeetingRooms";
import "./Home.scss";

const API = process.env.REACT_APP_API_URL;

const Home = () => {
	const [meetingRooms, setMeetingRooms] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		axios.get( API + "/meeting-rooms" )
		.then((res)=>{
			setMeetingRooms(res.data);
			setLoading(false);
		}).catch((err)=>{
		  console.log(err);
		})
	}, []);

	return (
		<div className="Home">
			{/* <div className="Home__hrTag">
				<hr />
			</div> */}
			{meetingRooms.map((meetingRoom) => {
              return (
			  	<MeetingRooms 
					key={meetingRoom.id} 
					meetingRoom={meetingRoom}
				/>
			  );
            })}

			{loading && 
				<div className="Home__loadingView">
					Loading...
					<div className="Home__loadingView__spinnerIcon"></div>
				</div>
			}
		</div>
	)
};

export default Home;
