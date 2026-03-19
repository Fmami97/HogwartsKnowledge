
import { getSearchInfoTitles } from "../utils/translator";
import SearchTypes from "../Enums/SearchTypes"
export default function SearchTypeSelector({searchType, setSearchType,language}) {
    let searchInfoTitles = getSearchInfoTitles(language)
    
    return (
        <div className="row-container">
            <label htmlFor="search-select">{searchInfoTitles.search}</label>
            <select
                id="search-select"
                value={searchType}
                onChange={(e) => setSearchType(e.target.value)}
            >
                {Object.values(SearchTypes).map((search) => (
                    <option key={search} value={search}>
                        {searchInfoTitles[search]}
                    </option>
                ))}
            </select>
        </div>
    );
}