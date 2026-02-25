import * as arraySorter from "../utils/arraySorter";

import HogwartsHouses from "../Enums/HogwartsHouses";
import { useState,React}  from "react";
import CharacterList from "../Components/CharacterList";
import { HouseSelector } from "../Components/HouseSelector";
export default function Houses({ houses }) {
      
   
   const [selectedHouse, setSelectedHouse] = useState(HogwartsHouses.GRYFFINDOR);
 
   let houseData = arraySorter.getHouseByName(houses,selectedHouse);


    return (
        !houses ?(
            <div className="houses-page">
                <h2>Houses</h2>
                <p>Failed to load houses: {houses?.error || "Unknown error"}</p>
            </div>
        )
        :
        <div className="houses-page">
            <h2>{selectedHouse}</h2>
                <HouseSelector selectedHouse={selectedHouse} setSelectedHouse={setSelectedHouse} />
                <div className="house-details">
                    <h3>{houseData.name}</h3>
                    <p>Founder: {houseData.founder}</p>
                    <p>House Ghost: {houseData.ghost}</p>
                    <p>House Colors: {houseData.colors.join(", ")}</p>
                </div>
            
            <CharacterList characters={houseData.characters} title={`Characters in ${selectedHouse}`} />
        </div>
    );
}
