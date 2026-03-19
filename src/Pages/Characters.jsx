import * as arraySorter from "../utils/arraySorter";

import CharacterList from "../Components/CharacterList";
import {getSearchInfoTitles ,getCharactersInfoTitles,errorText} from "../utils/translator";

import "../Styles/CharactersPage.css"

export default function Characters({ characters,searchTerm,setSearchTerm,setSearchType,language, title=getSearchInfoTitles(language).searchResult}) {
    
    const charactersInfoTitles = getCharactersInfoTitles(language)

    if (!characters || characters.error) {
        return (
            <div className="characters-page">
                <h1>{charactersInfoTitles.characters}</h1>
                <p>{errorText(language)} {characters?.error || "Unknown error"}</p>
            </div>
        );
    }
   

    const charactersResult = arraySorter.getCharactersByName(characters, searchTerm);
    return (<div>
        <h1>{charactersInfoTitles.characters}</h1>
    <   CharacterList charactersResult={charactersResult} setSearchType ={setSearchType} setSearchTerm = {setSearchTerm} title={title} language={language}/>
    </div>);
}
