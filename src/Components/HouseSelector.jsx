

import HogwartsHouses from "../Enums/HogwartsHouses"

export default function HouseSelector({selectedHouse, setSelectedHouse,houseIcons}) {
    
    //IMPORTANT: both the icons and the enum must be on the same order for this to work

    let houses = Object.keys(HogwartsHouses);

    let content=[];
    for(let i = 0; i < houseIcons.length;i++){
        
        content.push(
        <button key={HogwartsHouses[houses[i]]} className={`house-button ${selectedHouse === HogwartsHouses[houses[i]] ? "active" : ""}`} onClick={() => setSelectedHouse(HogwartsHouses[houses[i]])}>
                    
                    <span>{houseIcons[i]}</span>
                </button>
                )
    }


    return (
        <div className="row-container">
        
            {content}
        </div>
    );
}