/** @format */

import { useEffect, useState } from "react";
import BetterButton from "../componets/BetterButton";

function JokeApi() {
	const [joke, setJoke] = useState("");
	const [error, setError] = useState("");

	const fetchJoke = async () => {
		try {
			setError(""); // Clear previous errors
			const response = await fetch("https://api.chucknorris.io/jokes/random");
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			const data = await response.json();
			setJoke(data.value);
		} catch (err) {
			console.error("Oh no :", err);
			setError("Failed to fetch joke. Please try again later.");
		}
	};

	useEffect(() => {
		fetchJoke();
	}, []);

	return (
		<div style={{ padding: "1rem", color: "white" }}>
			<h1>Chuck Norris Jokes</h1>
			{error ? <p style={{ color: "red" }}>{error}</p> : <p>{joke}</p>}
			<BetterButton onClick={fetchJoke}>Get New Joke</BetterButton>
		</div>
	);
}

export default JokeApi;
