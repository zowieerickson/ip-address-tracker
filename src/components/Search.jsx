import { useState, useEffect } from 'react'
import '../styles/search.css'
import SearchButton from './Button.jsx'

export function handleSearch(e) {
    onStateChangeInputSearch(e.target.value)
}

export default function Search({
    inputSearch,
    onStateChangeInputSearch,
    data,
    onStateChangeData,
    error,
    onStateChangeError }) {
    
    const [inputSearchValue, setInputSearchValue] = useState("")


    function updateInput(e) {
        setInputSearchValue(e.target.value)
    }

    useEffect(() => {
        if (inputSearch) {
          fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_l362GxODBiG9tJIJfKdhGQ4ohag3l&ipAddress=${inputSearch}`)
            .then(response => response.json())
            .then(json => onStateChangeData(json))
            .catch(error => onStateChangeError(error));
            console.log(data)
        }
      }, [inputSearch]);
    
    function handleKeyDown(e) {
        if (e.key === "Enter") {
            e.preventDefault();
            onStateChangeInputSearch(e.target.value)
        }
    }

    

    return (
        <div className="search-wrapper">
            <input 
            onChange={updateInput}
            onKeyDown={handleKeyDown}
            value={inputSearchValue}
            type="search" 
            className="search" 
            placeholder="Search for any IP address or domain" 
            name="" 
            id="" 
            />
            <SearchButton onClick={e => onStateChangeInputSearch(inputSearchValue)}></SearchButton>
        </div>
    )
}