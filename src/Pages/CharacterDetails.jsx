import { useParams } from 'react-router-dom';

import CharacterList from "../Components/CharacterList";

export default function CharacterDetails() {

    const {index,characters}= useParams();

    const character = characters.find(c => c.index === index);

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
            <Image src={character.image} alt={character.fullname} className="character-image" />
            <p><strong>Nickname:</strong> {character.nickname || "Unknown"}</p>
            <p><strong>House:</strong> {character.hogwartsHouse || "Unknown"}</p>
            <p><strong>Birthdate:</strong> {character.birthdate || "Unknown"}</p>
            <p><strong>Played by:</strong> {character.interpretedBy || "Unknown"}</p>
            </div>
            <CharacterList characters={character.relatedCharacters} title="Children of this character" />    
        </div>
);
}