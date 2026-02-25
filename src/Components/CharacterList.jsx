//renders all characters with the provided data in a flex container.


import { Link } from "react-router-dom";


export default function CharacterList({ characters ,title="Characters"}) {
  
        return (
            <div className="characters-page">
                <h2>{title}</h2>
                {characters.length ===0?(
                    <p>No characters found.</p>
                ):(
                    <div className="characters-list">
                        {characters.map(character => (
                            <Link key={character.index} to={`/characters/${character.id}`} className="character-card">
                            <div key={character.fullname} className="character-card">
                                <Image src={character.image} alt={character.fullname} className="character-image" />
                                <h3>{character.fullname}</h3>
                                <p>House: {character.hogwartsHouse}</p>
                            </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        );
    }