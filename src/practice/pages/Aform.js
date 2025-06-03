/** @format */

import React, { useState } from "react";
import BetterButton from "../componets/BetterButton	";

const Aform = () => {
	const [nameInput, setNameInput] = useState("");
	const [ageInput, setAgeInput] = useState("");
	const [emailInput, setEmailInput] = useState("");
	const [stateInput, setStateInput] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault(); // remove that semicolon after if
		if (!nameInput.trim() || !ageInput || !emailInput.trim()) {
			alert("Please fill out all fields correctly.");
			return;
		}
		alert(`Hey Thanks ${nameInput} from ${stateInput} for your submission!`);
	};

	return (
		<div className="form-container">
			<form onSubmit={handleSubmit} className="Aform">
				<label className="NameLabel">Name:</label>
				<input
					maxLength="50"
					className="NameInput"
					aria-label="Enter your Name"
					value={nameInput}
					onChange={(e) => setNameInput(e.target.value)}
				/>

				<label className="AgeLabel">Age:</label>
				<input
					type="number"
					className="AgeInput"
					aria-label="Enter your Age"
					min="0"
					max="120"
					value={ageInput}
					onChange={(e) => setAgeInput(e.target.value)}
				/>

				<label className="EmailLabel">Email:</label>
				<input
					type="email"
					className="EmailInput"
					aria-label="Enter your Email"
					pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
					value={emailInput}
					onChange={(e) => setEmailInput(e.target.value)}
				/>

				<label className="StateLabel">State:</label>
				<select
					className="StateInput"
					aria-label="Select your State"
					value={stateInput}
					onChange={(e) => setStateInput(e.target.value)}>
					<option value="">-- Select a state --</option>
					<option>Louisiana</option>
					<option>Texas</option>
					<option>California</option>
					<option>New York</option>
					<option>Illinois</option>
					<option>Florida</option>
					<option>Georgia</option>
					<option>Ohio</option>
					<option>Pennsylvania</option>
				</select>

				<br />
				<BetterButton type="submit" className="SubmitButton">
					Submit
				</BetterButton>
			</form>
		</div>
	);
};

export default Aform;
