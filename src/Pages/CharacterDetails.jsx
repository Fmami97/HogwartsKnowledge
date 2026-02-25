import CharacterList from "../Components/CharacterList";
import {getCharactersInfoTitles} from "../utils/translator";
export default function CharacterDetails({character,setSearchType,setSearchTerm,language}) {
    console.log(language)
    const titles = getCharactersInfoTitles(language)

    console.log(character);
    console.log(titles);

    return !character?(
        <div className="character-details">
            <h2>Character not found</h2>
            <p>Sorry, we couldn't find the character you're looking for.</p>
        </div>
    )
    :(
        <div className="column-container">
        <div className="character-details">
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.fullname} className="character-image" />
            <p><strong>{titles.nickname}</strong> {character.nickname || "Unknown"}</p>
            <p><strong>{titles.house}</strong> {character.hogwartsHouse || "Unknown"}</p>
            <p><strong>{titles.birthdate}</strong> {character.birthdate || "Unknown"}</p>
            <p><strong>{titles.interpretedBy}</strong> {character.interpretedBy || "Unknown"}</p>
            </div>
            <CharacterList characters={character.relatedCharacters}setSearchType={setSearchType} setSearchTerm={setSearchTerm} title={titles.children}/>    
        </div>
);
}