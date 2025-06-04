/** @format */

import { Link } from "react-router-dom";
import BetterCard from "../componets/BetterCard";

const projects = [
	{
		title: "Harry Potter API",
		path: "/harrypotter",
		description: "Summon spells and characters from Hogwarts.",
	},
	{
		title: "Chuck Norris Jokes",
		path: "/chucknorris",
		description: "Facts so strong, they break the DOM.",
	},
	{
		title: "Dog Image Generator",
		path: "/dog",
		description: "Puppy pics to brighten your code.",
	},
	{
		title: "Button Counters",
		path: "/counters",
		description: "A clicky playground of state & sass.",
	},
	{
		title: "Feedback Widget",
		path: "/feedback",
		description: "Rate your vibes, one click at a time.",
	},
	{
		title: "Form Demo",
		path: "/form",
		description: "Controlled chaos in input form.",
	},
	{
		title:"Mars Rover Explorer",
		path: "/mars-rover",
		description: "Explore the Red Planet's photos and data.",
	},
];

export default function Home() {
	return (
		<div>
			<h1>🚀 Practice Playground</h1>
			<p>Explore magical, cosmic, and experimental components below ✨</p>
			<br></br>
			<div className="card-wrapper">
				{projects.map(({ title, path, description }) => (
					<BetterCard key={path}>
						<Link to={path}>
							<h2>{title}</h2>
							<p>{description}</p>
						</Link>
					</BetterCard>
				))}
			</div>

			<br></br>
		</div>
	);
}
