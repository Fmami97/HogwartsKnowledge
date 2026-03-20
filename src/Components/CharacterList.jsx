//renders all characters with the provided data in a flex container.

import { emptyText,emptyCharacterText,getSearchInfoTitles } from "../utils/translator";
import SearchTypes from "../Enums/SearchTypes";
import CharacterDetails from "../Pages/CharacterDetails";

export default function CharacterList({ charactersResult , setSearchType,setSearchTerm,title,language}) {

        function handleClick(characterName){
            setSearchType(SearchTypes.CHARACTERS);
            setSearchTerm(characterName);
        }
        
        let content = <p>{emptyText(language)}</p>
        if(charactersResult && charactersResult.length>0){
            if (charactersResult.length == 1){
                 content = <CharacterDetails character={charactersResult[0]} setSearchType={setSearchType} setSearchTerm={setSearchTerm} language={language}/>
            }
            else{
                let items = []

                charactersResult.forEach(characterDetails => {
                    if(characterDetails.error && characterDetails.fullname){
                        items.push(
                            <div key={characterDetails.index+"_"+characterDetails.fullname} className="character-card">
                                <h3>{ characterDetails.fullname}</h3>
                                <p>{emptyCharacterText(language)}</p>
                            </div>
                        )
                    }
                    else{
                    items.push(<div key={characterDetails.index+"_"+characterDetails.fullname} className="character-card" onClick={()=>{handleClick(characterDetails.fullName)}}>
                             <img src={characterDetails.image} alt={characterDetails.fullName} className="character-images" />
                
                            <h3>{characterDetails.fullName}</h3>
                             <p>{getSearchInfoTitles(language).house}: {characterDetails.hogwartsHouse}</p>
                         </div>);

                }
                })
                content = <div className="characters-list">
                            {items.map(r=>r)}
                        </div>
            }
        }


        return (
            <div className="characters-page">
                <h2>{title}</h2>
                {content}
            </div>
        );
    }