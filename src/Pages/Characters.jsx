import * as arraySorter from "../utils/arraySorter";

import CharacterList from "../Components/CharacterList";
import { redirect } from "react-router-dom";
export default function Characters({ characters,searchTerm }) {
      
    if (!characters || characters.error) {
        return (
            <div className="characters-page">
                <h2>Characters</h2>
                <p>Failed to load characters: {characters?.error || "Unknown error"}</p>
            </div>
        );
    }
    
    const charactersResult = arraySorter.getCharactersByName(characters, searchTerm);

    if (charactersResult.length === 1) {
        redirect(`/characters/${charactersResult[0].id}`);
    }
    else{
        return <CharacterList characters={charactersResult} title="Search Results" />
    }
}
