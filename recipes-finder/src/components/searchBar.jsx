import React, {useState} from "react";

import '../styles/searchBar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({onSearch}) => {
    const [searchValue, setSearchValue] = useState('');
    
    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
    }
    const handleSubmit = () => {
        //alert(`value: ${searchValue}`);
       
        
        if (searchValue) {
          onSearch(searchValue);
        }
    }

    const handleEnterKey = (e) => {
        if (e.key === 'Enter'){
            handleSubmit();
        }
    }

    return (
        <>
            <div className="search-input">
                <input 
                    placeholder="Search a Recipe!"
                    
                    onChange={handleInputChange}
                    onKeyDown={handleEnterKey}
                ></input>
                <a onClick={handleSubmit}><FontAwesomeIcon icon={faSearch} style={{ color: 'grey', fontSize: '24px' }}/></a>
                
            </div>
        </>
    );
    
}

export default SearchBar;