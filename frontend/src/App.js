import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";

// Components
import Home from "./Components/Home";
import SingleMeetingRoom from "./Components/SingleMeetingRoom";
import NewMeetingRoom from "./Components/NewMeetingRoom";
import Bookings from "./Components/Bookings";
import SingleBooking from "./Components/SingleBooking";
import PageNotFound from "./Components/PageNotFound";
import Navbar from "./Components/Navbar";

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar/>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/meetingrooms/:id" element={<SingleMeetingRoom />} />
					<Route path="/meetingrooms/new" element={<NewMeetingRoom />} />
					<Route path="/bookings" element={<Bookings />} />
					<Route path="/bookings/:id" element={<SingleBooking  />} />
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
