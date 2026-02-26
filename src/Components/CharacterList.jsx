//renders all characters with the provided data in a flex container.

import { emptyText } from "../utils/translator";
import SearchTypes from "../Enums/SearchTypes";
import CharacterDetails from "../Pages/CharacterDetails";

export default function CharacterList({ characters , setSearchType,setSearchTerm,title,language}) {
        const CHARACTER_PER_ROWS = 3;

        function handleClick(characterName){
            console.log(characterName)
            setSearchType(SearchTypes.CHARACTERS);
            setSearchTerm(characterName);
        }
        
        let content = <p>{emptyText}</p>
        if (characters.length == 1){
             content = <CharacterDetails character={characters[0]} setSearchType={setSearchType} setSearchTerm={setSearchTerm} language={language}/>
        }
        else{
            let rows = []
            let currentRow = []
            characters.forEach(characterDetails => {
             
                    currentRow.push(
                    <div key={characterDetails.index+"_"+characterDetails.fullname} className="character-card" onClick={()=>{handleClick(characterDetails.fullName)}}>
                        <img src={characterDetails.image} alt={characterDetails.fullName} className="character-image" />
        
                        <h3>{characterDetails.fullName}</h3>
                        <p>House: {characterDetails.hogwartsHouse}</p>
                    </div>);

                if (currentRow.length ==CHARACTER_PER_ROWS){
                    rows.push(
                        <div className="row-container" key={"row_"+rows.length}>
                            {currentRow.map(element=>element)}
                        </div>
                    )
                    currentRow = []
                }
            })
            content = <div className="characters-list">
                        {rows.map(r=>r)}
                    </div>
            
        }


        return (
            <div className="characters-page">
                <h2>{title}</h2>
                {content}
            </div>
        );
    }