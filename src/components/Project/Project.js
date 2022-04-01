import React, { useState } from "react";
import { Card } from "react-bootstrap";

function Project(props) {
	// This imports info for current project.
	const currentProject = useState(props)[0].projects;

	const name = currentProject.name;
	const description = currentProject.description;
	const image = currentProject.image;
	const techs = currentProject.technologies;
	const appLink = currentProject.deployed;
	const gitLink = currentProject.github;

	// Function: parses info from the array, then creates a list.
	function getProjects(projectArray) {
		let techList = "";

		for (var i = 0; i < projectArray.length; i++) {
			if (i === projectArray.length - 1) {
				techList += projectArray[i];
			} else {
				techList += projectArray[i] + ",";
			}
		}

		return techList;
	}

	return (
		<Card style={{ width: "18rem" }}>
			<Card.Img
				variant="top"
				src={require(`../../../public/images/${image}`)}
				className="card-image"
			/>
			<div className="center">
				<Card.Body>
					<Card.Title className="card-title">{name}</Card.Title>
					<Card.Text className="card-text">{description}</Card.Text>
					<Card.Subtitle className="card-subtitle">Techs Used</Card.Subtitle>
					<Card.Text className="card-techs">{getProjects(techs)}</Card.Text>
					<Card.Link href={appLink} target="_blank" className="card-link">
						{name} App
					</Card.Link>
					<br></br>
					<Card.Link href={gitLink} target="_blank" className="card-link">
						{name} Github
					</Card.Link>
				</Card.Body>
			</div>
		</Card>
	);
}

export default Project;