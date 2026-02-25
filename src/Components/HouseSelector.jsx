

import HogwartsHouses from "../Enums/HogwartsHouses"
export default function HouseSelector({selectedHouse, setSelectedHouse}) {
    return (
        <div className="row-container">
            <label htmlFor="house-select">Select a House:</label>
            <select
                id="house-select"
                value={selectedHouse}
                onChange={(e) => setSelectedHouse(e.target.value)}
            >
                {Object.values(HogwartsHouses).map((house) => (
                    <option key={house} value={house}>
                        {house}
                    </option>
                ))}
            </select>
        </div>
    );
}