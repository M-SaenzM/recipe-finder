import React from "react";

import '../styles/searchBar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
    
    return (
        <>
            <div className="search-input">
                <input placeholder="Search a Recipe"></input>
                <a><FontAwesomeIcon icon={faSearch} style={{ color: 'grey', fontSize: '24px' }}/></a>
                
            </div>
        </>
    );
    
}

export default SearchBar;