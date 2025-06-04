/** @format */

import React, { useState } from "react";
import BetterButton from "../componets/BetterButton";
//I’m importing React and the useState hook to manage local state. 
//I’m also importing a custom button component called BetterButton
//  for better styling and functionality.

// This component is a counter with increment, decrement, and reset functionality
// and takes a start prop — defaulting to 0 if none is provided.
function CounterBetterButton({ start = 0 }) {
	const [count, setCount] = useState(start);
	//count tracks the current value. I initialize it with start.
	const [history, setHistory] = useState([start]);
	//istory is an array of all count values after each change.
	//  It starts with just the initial value.

	//This function increses the count by 1,
	const increment = () => {
		const next = count + 1;
		setCount(next);
		// Spread operator in setHistory: copies old history,
		setHistory((prevHistory) => [...prevHistory, next]);
		return next;
	};
	// This function updates and decreses the count by 1,
	const decrement = () => {
		const next = count - 1;
		setCount(next);
		setHistory((prevHistory) => [...prevHistory, next]);
		return next;
	};

	//Appends next to the history array immutably using the spread operator
	//Returning next is optional but useful for testing or chaining if needed.

	// adds new count (immutability, triggers re-render)
	const reset = () => {
		setCount(start);
		setHistory([start]);
	};
	//Resets everything back to the initial state.
	//This clears the interaction history too, so it’s a true reset.

	return (
		<div>
			{/* Display the current count */}
			<p>Count: {count}</p>
			<div>
				{/* Buttons to control the counter */}
				<BetterButton onClick={increment}>Increment</BetterButton>
				<br></br>
				<BetterButton onClick={decrement}>Decrement</BetterButton>
				<br></br>
				<BetterButton onClick={reset}>Reset</BetterButton>
			</div>
			{/* Converts the history array into a readable string to show a visual trail
			of interactions. */}
			<p>History: {history.join(", ")}</p>
		</div>
	);
};
export default CounterBetterButton;

// This is a reusable counter component that tracks both the count and a history of changes. I used useState twice — once for the counter, and once for the history log. When updating history, I used a functional update (prev => [...prev, next]) to ensure accuracy, even if updates are batched. All the buttons are wrapped in a custom component called BetterButton, which centralizes styling and accessibility. Resetting clears both count and history to return the app to its initial state.
// I built this to practice modularity, state management, and clear UI feedback.


