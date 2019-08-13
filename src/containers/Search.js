import React from 'react';

const Search = ({searchTerm, onType}) => {
    return (
        <div className="search-field">
        <div className="input-group">
            <div className="input-group-prepend">
                <span className="input-group-text">Search</span>
            </div>
            <input className="form-control" type="search" name="search" placeholder="Can you not..." value={searchTerm} onChange={onType}/>
        </div>
        </div>
    )
}

export default Search;