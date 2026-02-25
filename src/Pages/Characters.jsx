import * as arraySorter from "../utils/arraySorter";

import CharacterList from "../Components/CharacterList";
import {searchResultText} from "../utils/translator";
export default function Characters({ characters,searchTerm,setSearchTerm,setSearchType,language}) {
      
    if (!characters || characters.error) {
        return (
            <div className="characters-page">
                <h2>Characters</h2>
                <p>Failed to load characters: {characters?.error || "Unknown error"}</p>
            </div>
        );
    }
    
    const charactersResult = arraySorter.getCharactersByName(characters, searchTerm);
    return <CharacterList characters={charactersResult} setSearchType ={setSearchType} setSearchTerm = {setSearchTerm} title={searchResultText(language)} language={language}/>
    
}
