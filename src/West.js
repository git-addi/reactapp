import React from "react";
import nba from "nba-api-client";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const West = (props) => {
	const westTeams = props.teamData;
	const westImgs = westTeams.map((team, index) => {
		const logoUrls = nba.getTeamLogoURLs(team.Abbrev);
		const logo = logoUrls[0];

		return (
			<Link to={`/TopPlayers/${team.Abbrev}`}>
				<img key={index} alt="" src={logo} style={{ height: "6em" }} />
			</Link>
		);
	});

	return (
		<>
			<div>{westImgs}</div>
			<Link to="/">
				<Button variant="warning">back home</Button>
			</Link>
		</>
	);
};

export default West;
