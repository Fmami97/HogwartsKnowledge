import * as arraySorter from "../utils/arraySorter";

import "../Styles/housesPage.css";
import Characters from "../Pages/Characters";
import { getHouseInfoTitles } from "../utils/translator";
import Languages from "../Enums/Languages";
import {HogwartsHousesFrench,HogwartsHousesItalian,HogwartsHousesSpanish} from "../Enums/HogwartsHouses";
export default function Houses({ houses,selectedHouse,setSearchType,setSearchTerm,language}) {
   

    function houseColors(...colors){
        return <div className="row-container">{colors.map(c=><div className="house-colors" style={{backgroundColor:c}}></div>)}</div>
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
    let titles = getHouseInfoTitles(language);
    let mainColor = "#2d313c";
    let secondaryColor = "#e2e8f0";
    if (houseData.colors.length > 1){
        mainColor = houseData.colors[0];
        secondaryColor = houseData.colors[1];

    }
    return (
        <div className="column-container">
            <h2>{selectedHouse}</h2>
                <div className="house-card" style={{backgroundColor:mainColor,color:secondaryColor}}>
                    <h3>{houseData.name} {houseData.emoji}</h3>
                    <p><strong>{titles.founder}</strong> {houseData.founder}</p>
                    <div className="row-container"><strong>{titles.colors}</strong>{houseColors(mainColor,secondaryColor)}</div>
                    <p><strong>{titles.animal}</strong> {houseColors(houseData.colors)}</p>

                </div>
            
            <Characters characters={houseData.characters} setSearchType = {setSearchType} setSearchTerm={setSearchTerm} language={language} title={`${titles.members} ${selectedHouse}`}/>
        </div>
    );
}
