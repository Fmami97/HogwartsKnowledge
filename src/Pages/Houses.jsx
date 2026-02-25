import * as arraySorter from "../utils/arraySorter";

import CharacterList from "../Components/CharacterList";
import { getHouseInfoTitles } from "../utils/translator";
import Languages from "../Enums/Languages";
import {HogwartsHousesFrench,HogwartsHousesItalian,HogwartsHousesSpanish} from "../Enums/HogwartsHouses";
export default function Houses({ houses,selectedHouse,setSearchType,setSearchTerm,language}) {
   

    function houseColors(colors){
        return <div className="row-container">{colors.map(c=><div style={"width:25;height:25;color:"+c}></div>)}</div>
    }

    let translatedHouse;
    switch(language){
        case Languages.FRENCH:
        translatedHouse = HogwartsHousesFrench[selectedHouse];
        break;
        case Languages.ITALIAN:
        translatedHouse = HogwartsHousesItalian[selectedHouse];
        break;
        case Languages.SPANISH:
        translatedHouse = HogwartsHousesSpanish[selectedHouse];
        break;
        default:
            translatedHouse = selectedHouse
    }


   let houseData = arraySorter.getHouseByName(houses,translatedHouse);
   console.log(houseData)
    let titles = getHouseInfoTitles(language);
    return (
        <div className="houses-page">
            <h2>{selectedHouse}</h2>
                <div className="house-details">
                    <h3>{houseData.name} {houseData.emoji}</h3>
                    <p><strong>{titles.founder}</strong> {houseData.founder}</p>
                    <p><strong>{titles.colors}</strong> {houseColors(houseData.colors)}</p>
                    <p><strong>{titles.animal}</strong> {houseColors(houseData.colors)}</p>

                </div>
            
            <CharacterList characters={houseData.characters} setSearchType = {setSearchType} setSearchTerm={setSearchTerm} title={`${titles.members} ${selectedHouse}`} language={language} />
        </div>
    );
}
