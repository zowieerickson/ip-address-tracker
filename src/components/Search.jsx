import { useState, useEffect } from 'react'
import '../styles/search.css'
import SearchButton from './Button.jsx'

export function handleSearch(e) {
    console.log('ayo')
}

export default function Search({
    inputSearch,
    onStateChangeInputSearch,
    data,
    onStateChangeData,
    error,
    onStateChangeError }) {

    useEffect(() => {
        if (inputSearch) {
          fetch(
            `https://geo.ipify.org/api/v2/country,city?apiKey=at_l362GxODBiG9tJIJfKdhGQ4ohag3l&ipAddress=${inputSearch}`
          )
            .then(response => response.json())
            .then(json => onStateChangeData(json))
            .catch(error => onStateChangeError(error));
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
            onKeyDown={handleKeyDown}
            type="search" 
            className="search" 
            placeholder="Search for any IP address or domain" 
            name="" 
            id="" 
            />
            <SearchButton onClick={handleKeyDown}></SearchButton>
        </div>
    )
}