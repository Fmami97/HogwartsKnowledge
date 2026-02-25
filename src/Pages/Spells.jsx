import * as arraySorter from "../utils/arraySorter";

export default function Spells({ spells,searchTerm }) {
      
    if (!spells || spells.error) {
        return (
            <div className="spells-page">
                <h2>Spells</h2>
                <p>Failed to load spells: {spells?.error || "Unknown error"}</p>
            </div>
        );
    }
    const spellsResult = arraySorter.getSpellsByName(spells, searchTerm);

    if (spellsResult.length === 0) {
        return (
            <div className="spells-page">
                <h2>Spells</h2>
                <p>No spells found for the provided search term.</p>
        </div>
    );
}
return(
    <div className="spells-page">
        <h2>Spells</h2>
        <div className="spells-list">
            {spellsResult.map(spell => (
                <div key={spell.index} className="spell-card">
                    <h3>{spell.spell}</h3>
                    <p>{spell.use}</p>
                </div>
            ))}
        </div>
    </div>
)
}