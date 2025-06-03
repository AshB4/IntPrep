/** @format */

import { Link } from "react-router-dom";

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
];

export default function Home() {
	return (
		<div >
			<h1>
				🚀 Practice Playground
			</h1>
			<p>
				Explore magical, cosmic, and experimental components below ✨
			</p>
			<div>
				{projects.map(({ title, path, description }) => (
					<Link
						key={path}
						to={path}>
						<h2>{title}</h2>
						<p>{description}</p>
					</Link>
				))}
			</div>
		</div>
	);
}
