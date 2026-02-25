
import { searchText } from "../utils/translator";
import SearchTypes from "../Enums/SearchTypes"
export default function SearchTypeSelector({searchType, setSearchType,language}) {
    return (
        <div className="row-container">
            <label htmlFor="search-select">{searchText(language)}</label>
            <select
                id="search-select"
                value={searchType}
                onChange={(e) => setSearchType(e.target.value)}
            >
                {Object.values(SearchTypes).map((search) => (
                    <option key={search} value={search}>
                        {search}
                    </option>
                ))}
            </select>
        </div>
    );
}