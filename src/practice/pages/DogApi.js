/** @format */
import React, { useState, useEffect } from "react";

//dog.ceo/api/breeds/image/random
// Example API call to fetch a random joke
// This component fetches a joke from an API and displays it
// How to explain this code you ask?
//

function DogApi() {
	const [state, setState] = useState("");

	// useEffect to fetch data when the component mounts
	// This is where we make the API call
	// We use an async function inside useEffect to handle the promise
	// We also handle errors in case the fetch fails

useEffect(() => {
	const fetchDogApi = async () => {
		try {
			const response = await fetch("https://dog.ceo/api/breeds/image/random");
			if (!response.ok) throw new Error("Bad response");
			const data = await response.json();
			setState(data.message);
		} catch (err) {
			console.error("Error:", err);
		}
	};
	fetchDogApi();
}, []);

	return (
		<div>
			<h1>Dog API</h1>
			<div>
				<img src={state} alt="Random Dog" style={{ maxWidth: "80%", height: "auto" }} />
			</div>
		</div>
	);

};
export default DogApi;
