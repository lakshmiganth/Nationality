import React from "react";
import genderIcon from "../images/gender-icon.png";
import ageIcon from "../images/age-icon.png";
import nationalityIcon from "../images/nationality-icon.png";

export default function Data({ name, gender, age, nationality, switchScreen }) {
	// Make 1st letter uppercase
	const updatedName = name.charAt(0).toUpperCase() + name.slice(1);

	// Creating nationality string using array
	let str = "";
	nationality.map((value, index) => {
		return (str = str.concat(
			" " + value + (index === nationality.length - 1 ? "" : " | ")
		));
	});

	// If API fails to fetch data for given name
	const noDataDiv = (
		<div className="no-data-div">
			<h2>
				Sorry, but unfortunately we don't have information for this name at the
				moment. Please check again in the future or try another name. Thank you.
			</h2>
		</div>
	);

	return (
		<>
			{gender && age && nationality ? (
				<div className="data-container">
					<div className="card-name">
						<h2>Hello {updatedName}!</h2>
						<p>Using our algorithm we have predicted:</p>
					</div>
					<div className="card card-gender">
						<div className="card-content">
							<div className="card-front">
								<h2>Gender</h2>
								<img src={genderIcon} alt="Gender sign" />
							</div>
							<div className="card-back">
								<h2>{gender}</h2>
							</div>
						</div>
					</div>
					<div className="card card-age">
						<div className="card-content">
							<div className="card-front">
								<h2>Age</h2>
								<img src={ageIcon} alt="Birthday cake" />
							</div>
							<div className="card-back">
								<h2>{age} Years Old</h2>
							</div>
						</div>
					</div>
					<div className="card card-nationality">
						<div className="card-content">
							<div className="card-front">
								<h2>Nationality</h2>
								<img src={nationalityIcon} alt="Earth" />
							</div>
							<div className="card-back">
								<h2>{str}</h2>
							</div>
						</div>
					</div>
				</div>
			) : (
				noDataDiv
			)}
			<button className="restart-btn" onClick={switchScreen} />
		</>
	);
}
