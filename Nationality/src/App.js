import "./App.css";
import React from "react";
import { useState, useEffect, useRef } from "react";
import Home from "./components/Home";
import Data from "./components/Data";
import countryCodes from "./countryCodes";

export default function App() {
	const [predict, setPredict] = useState(false);
	const [name, setName] = useState();
	const [gender, setGender] = useState();
	const [age, setAge] = useState();
	const [nationality, setNationality] = useState([]);

	// Home to main page & vice versa
	function switchScreen(e) {
		e.preventDefault();
		// Name validation check
		name.search(/^[a-zA-Z]*$/) === 0
			? setPredict((prevState) => !prevState)
			: alert(
					"Please enter your first name using only alphanumeric letters and without any spaces."
			  );
	}

	// Update name in state
	function changeName(e) {
		const name = e.target.value;
		setName(name);
	}
	<a href="https://iradesign.io">Illustrations by IRA Design</a>;

	// Using country codes from DB find and get full country name
	function codeToCountry(data) {
		const CountriesArray = data.country.map((country) => {
			return countryCodes[country.country_id];
		});
		setNationality(CountriesArray);
	}

	// Skip API fetch on First Render
	const intialValue = useRef(false);

	useEffect(() => {
		if (intialValue.current && predict) {
			console.log("API Fetch");
			// Gender
			fetch(`https://api.genderize.io?name=${name}`)
				.then((res) => res.json())
				.then((data) => {
					setGender(data.gender);
				});
			// Age
			fetch(`https://api.agify.io?name=${name}`)
				.then((res) => res.json())
				.then((data) => setAge(data.age));
			// Nationality
			fetch(`https://api.nationalize.io?name=${name}`)
				.then((res) => res.json())
				.then((data) => codeToCountry(data));
		} else intialValue.current = true;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [predict]);

	return (
		<>
			<h1>Predictator</h1>
			{!predict ? (
				<Home switchScreen={switchScreen} changeName={changeName} />
			) : (
				<Data
					name={name}
					gender={gender}
					age={age}
					nationality={nationality}
					switchScreen={switchScreen}
				/>
			)}
		</>
	);
}
