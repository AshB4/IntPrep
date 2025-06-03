import { useState, useEffect } from "react";

function PotterApi() {
    const [spells, setSpells] = useState([]);
    const [searchSpells, setSearchSpells] = useState("");

    useEffect(() => { const fetchSpells = async () => {
        try{
            const response = await fetch("https://hp-api.onrender.com/api/spells");

        const data = await response.json();
        setSpells(data);
        } catch (error) {
        console.error("Must of been the Nargles:", error);
    }
    } ;
	fetchSpells();
}, []);

const filteredSpells = searchSpells
? spells.filter(
	(spell) =>
		(spell.name || "")
			.toLowerCase()
			.includes(searchSpells.toLowerCase()) ||
		(spell.description || "")
			.toLowerCase()
			.includes(searchSpells.toLowerCase())
): spells;

return (
	<div>
		<h1>Harry Potter Spells</h1>
		<input
			type="text"
			placeholder="Search for a spell..."
			value={searchSpells}
			onChange={(e) => setSearchSpells(e.target.value)} />

	<p>Searching for: {searchSpells}</p>
		<p>Total matches: {filteredSpells.length}</p>
		<div className="found-spells"
		 style={{ marginBottom: "10px",
		  			padding: "5px", 
		 			border: "1px solid #ccc",
		  			borderRadius: "5px" }}>

			{filteredSpells.map((spell) => (
				<div key={spell.id || spell.name}>
					<h2>{spell.name}</h2>
					<p>{spell.description}</p>
				</div>
			))}


		{spells.slice(0, 10).map((spell) => (
			<div key={spell.id || spell.name}>
				<h2>{spell.name}</h2>
				<p>{spell.description}</p>
			</div>
		))}
	</div>
</div>
)};
export default PotterApi;