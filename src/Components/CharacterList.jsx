//renders all characters with the provided data in a flex container.

import { emptyText } from "../utils/translator";
import SearchTypes from "../Enums/SearchTypes";
import CharacterDetails from "../Pages/CharacterDetails";


export default function CharacterList({ characters , setSearchType,setSearchTerm,title,language}) {
  

        function handleClick(characterName){
            setSearchType(SearchTypes.CHARACTERS);
            setSearchTerm(characterName);
        }
        let content = <p>{emptyText}</p>
        if (characters.length == 1){
             content = <CharacterDetails character={characters[0]} setSearchType={setSearchType} setSearchTerm={setSearchTerm} language={language}/>
        }
        else{
            content = <div className="characters-list">
                        {characters.map(character => (
                            <div key={character.index} className="character-card" onClick={(character)=>handleClick(character.fullname)}>
                                <img src={character.image} alt={character.fullname} className="character-image" />
                                <h3>{character.fullname}</h3>
                                <p>House: {character.hogwartsHouse}</p>
                       
                            </div>
                        ))}
                    </div>
        }


        return (
            <div className="characters-page">
                <h2>{title}</h2>
                {content}
            </div>
        );
    }