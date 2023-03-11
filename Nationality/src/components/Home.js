import React from "react";
import rocketImage from "../images/rocket.svg";

export default function Home(props) {
	return (
		<>
			<img src={rocketImage} alt="Rocketship" className="rocketship" />
			<div className="home-container">
				<h2>Enter your name</h2>
				<form onSubmit={props.switchScreen}>
					<input
						type="textbox"
						id="name-textbox"
						placeholder="e.g. Jack"
						onChange={props.changeName}
					/>
					<input type="submit" value="Predict" id="submit-btn" />
				</form>
			</div>
		</>
	);
}
