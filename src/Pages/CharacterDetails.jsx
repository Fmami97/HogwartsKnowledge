import CharacterList from "../Components/CharacterList";
import {getCharactersInfoTitles,emptyCharacterText} from "../utils/translator";


export default function CharacterDetails({character,setSearchType,setSearchTerm,language}) {
    const titles = getCharactersInfoTitles(language)

    let emptyText = emptyCharacterText(language);
    
    if (Array.isArray(character) && character.length == 1){
        character = character[0];
    }

    

    return (!character || character.error)?(

        (!character)?(
        <div className="character-details">
            <h3>Character not found</h3>
            <p>Sorry, we couldn't find the character you're looking for.</p>
            

        </div>
        ):
        <div className="character-details">
            <h3>{character.fullname}</h3>
            <p>{emptyText}</p>
        </div>
    )
    :(
        <div className="column-container">
        <div className="character-details">
            <img src={character.image} alt={character.fullName} id="character-image" />
            <h3>{character.fullName}</h3>
            <p><strong>{titles.nickname}</strong> {character.nickname || "Unknown"}</p>
            <p><strong>{titles.house}</strong> {character.hogwartsHouse || "Unknown"}</p>
            <p><strong>{titles.birthdate}</strong> {character.birthdate || "Unknown"}</p>
            <p><strong>{titles.interpretedBy}</strong> {character.interpretedBy || "Unknown"}</p>
            </div>
            {character.children&&character.children.length>0 &&<CharacterList charactersResult={character.children}setSearchType={setSearchType} setSearchTerm={setSearchTerm} title={titles.children} language={language}/> }   
        </div>
);
}