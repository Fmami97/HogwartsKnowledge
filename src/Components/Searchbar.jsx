import React from 'react';
export default function Searchbar({searchTerm, setSearchTerm}) {

    

    return (
        <div className="searchbar-container">
            
            

            <input 
                type="text" 
                placeholder="Search for a character..." 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
                className="search-input"
            />
        </div>
    );
}

