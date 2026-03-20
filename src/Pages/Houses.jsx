import * as arraySorter from "../utils/arraySorter";

import "../Styles/HousesPage.css";

import { getHouseInfoTitles } from "../utils/translator";
import Languages from "../Enums/Languages";
import {HogwartsHousesFrench,HogwartsHousesItalian,HogwartsHousesSpanish} from "../Enums/HogwartsHouses";
import CharacterList from "../Components/CharacterList";
import { useCallback } from "react";
export default function Houses({ houses,selectedHouse,setSearchType,setSearchTerm,language}) {
   
    function houseColors(...colors){
        return <div className="row-container">{colors.map(c=><div key={"color_"+c} className="house-colors" style={{backgroundColor:c}}></div>)}</div>
    }
    const getTranslatedHouseName = useCallback((language)=>{
         switch(language){
            case Languages.FRENCH:
            return HogwartsHousesFrench[selectedHouse];
            case Languages.ITALIAN:
             return HogwartsHousesItalian[selectedHouse];
            case Languages.SPANISH:
             return  HogwartsHousesSpanish[selectedHouse];
            default:
             return selectedHouse
         }
    },[selectedHouse])

    const translatedHouse= getTranslatedHouseName(language);

    let houseData = arraySorter.getHouseByName(houses,translatedHouse);


    const titles = getHouseInfoTitles(language);

    let mainColor = "#2d313c";
    let secondaryColor = "#e2e8f0";

    let characters = houseData.characters;
    if (characters.length <2){
        characters = [characters]
    }

    if (houseData.colors.length > 1){
        mainColor = houseData.colors[0];
        secondaryColor = houseData.colors[1];

    }

    return (
        <div className="column-container">
                <div className="house-card">
                    <h1>{translatedHouse} {houseData.emoji}</h1>
                    <p><strong>{titles.founder}</strong> {houseData.founder}</p>
                    <div className="row-container"><strong>{titles.colors}</strong>{houseColors(mainColor,secondaryColor)}</div>

                </div>
            
            <CharacterList charactersResult={characters} setSearchType = {setSearchType} setSearchTerm={setSearchTerm} title={`${titles.members} ${translatedHouse}`} language={language} />
        </div>
    );
}
