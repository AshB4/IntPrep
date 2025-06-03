/** @format */

import React, { useState } from "react";
import BetterButton from "../componets/BetterButton";

function CounterBetterButton({ start = 0 }) {
	const [count, setCount] = useState(start);
	const [history, setHistory] = useState([start]);

	const increment = () => {
			const next = count + 1;
        setCount(next);
			setHistory((prevHistory) => [...prevHistory, next]);
			return next;
		};

		const decriment = () => {
			const next = count - 1;
			setCount(next);
			setHistory((prevHistory) => [...prevHistory, next]);
			return next;
		};


	const reset = () => {
		setCount(start);
		setHistory([start]);
	};

	return (
		<div>
			<p>Count: {count}</p>
            <div>
			<BetterButton onClick={increment}>Increment</BetterButton>
            <br></br>
			<BetterButton onClick={decriment}>Decrement</BetterButton>
			<br></br>
			<BetterButton onClick={reset}>Reset</BetterButton>
            </div>
			<p>History: {history.join(", ")}</p>
		</div>
	);
};
export default CounterBetterButton;

// A+ Sharpening Point};
// Spread operator in setHistory: copies old history,
// adds new count (immutability, triggers re-render)
// setCount(prev => ...) is best for using previous state (async safe)
// start = 0 in function param: default prop value
// Props/destructuring: mention if component gets props
// useState for both count and history
// Explained increment: prev + 1 bumps count, updates history
// Reset: sets both back to start value
// History: history.join(', ') shows count progression
