
import { getSearchInfoTitles } from "../utils/translator";
import SearchTypeSelector from "./SearchTypeSelector";
import SearchTypes from "../Enums/SearchTypes";
import HouseSelector from "./HouseSelector";

import "../Styles/Searchbar.css";

export default function Searchbar({searchTerm, setSearchTerm,searchType ,setSearchType,selectedHouse,setSelectedHouse,houseIcons,language}) {
    
    function handleRandomClick(){
        setTimeout(()=>setSearchTerm("RANDOM"), 1*10^-10000)
        setSearchTerm("");

    }

    const searchIntoTitles = getSearchInfoTitles(language)
    return (
        <div className="searchbar-container">

            <SearchTypeSelector searchType={searchType} setSearchType={setSearchType} language={language}></SearchTypeSelector>
            
            
            {searchType === SearchTypes.HOUSES ?
            <HouseSelector selectedHouse={selectedHouse} setSelectedHouse={setSelectedHouse} houseIcons={houseIcons}/>
            :
            <div className="row-container">
            <input 
                type="text" 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
                className="search-input"
                placeholder={searchIntoTitles.search}
            />
            <button className="random-button" onClick={handleRandomClick}>{searchIntoTitles.random}</button>
            <button onClick={()=>setSearchTerm("")}>{searchIntoTitles.reset}</button>
            </div>
            }
        </div>
    );
}

