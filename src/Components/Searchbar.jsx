
import { searchText } from "../utils/translator";
import SearchTypeSelector from "./SearchTypeSelector";
import SearchTypes from "../Enums/SearchTypes";
import HouseSelector from "./HouseSelector";

export default function Searchbar({searchTerm, setSearchTerm,searchType ,setSearchType,selectedHouse,setSelectedHouse,language}) {
    return (
        <div className="searchbar-container">

            <SearchTypeSelector searchType={searchType} setSearchType={setSearchType} language={language}></SearchTypeSelector>
            
            {searchType === SearchTypes.HOUSES ?
            <HouseSelector selectedHouse={selectedHouse} setSelectedHouse={setSelectedHouse}/>
            :
            <input 
                type="text" 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
                className="search-input"
                placeholder={searchText(language)}
            />
            }
            <button className="random-button" onClick={()=>setSearchTerm("RANDOM")}>Random</button>
        </div>
    );
}

