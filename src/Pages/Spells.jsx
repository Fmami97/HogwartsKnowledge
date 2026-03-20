import * as arraySorter from "../utils/arraySorter";
import { getSearchInfoTitles ,emptyText,errorText } from "../utils/translator";
import "../Styles/SpellsPage.css"
export default function Spells({ spells,searchTerm,language }) {
      
    if (!spells || spells.error) {
        return (
            <div className="spells-page">
                <h1>{getSearchInfoTitles(language).spells}</h1>
                <p>{errorText(language)}: {spells?.error || "Unknown error"}</p>
            </div>
        );
    }
    const spellsResult = arraySorter.getSpellsByName(spells, searchTerm);

    if (spellsResult.length === 0) {
        return (
            <div className="spells-page">
                <h1>{getSearchInfoTitles(language).spells}</h1>
                <p>{emptyText(language)}</p>
                
        </div>
    );
}
return(
    <div className="spells-page">
        <h1>{getSearchInfoTitles(language).spells}</h1>
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