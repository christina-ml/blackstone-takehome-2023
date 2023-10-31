import React from "react";
import "./PageNotFound.scss";
import { Link } from "react-router-dom";

const PageNotFound = () => {
	return (
	<div className="PageNotFound">
		<div className="PageNotFound__notFoundMessage">
			<h2>404 Error - Page Not Found</h2>
		</div>
		<div className="PageNotFound__description">
			We're sorry the page you are looking for does not exist
		</div>
		<div  className="PageNotFound_returnHome">
			<Link to="/">
					Return Home
			</Link>
		</div>

	</div>
	);
};

export default PageNotFound;
