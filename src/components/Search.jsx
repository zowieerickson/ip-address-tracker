import { useState, useEffect } from 'react'
import SearchButton from './Button.jsx'
import '../styles/search.css'

export function handleSearch(e) {
    onStateChangeInputSearch(e.target.value)
}

export default function Search({
    inputSearch,
    onStateChangeInputSearch,
    onStateChangeData,
    onStateChangeError }) {
    
    const [inputSearchValue, setInputSearchValue] = useState("")

    // Check if the search input is an IP address or a domain
    const isIpAddress = /^(\d{1,3}\.){3}\d{1,3}$/.test(inputSearchValue);

    // Perform the API request based on whether it's an IP address or a domain
    const apiUrl = isIpAddress
    ? `/.netlify/functions/getIPAddress?ipAddress=${inputSearchValue}`
    : `/.netlify/functions/getIPAddress?domain=${inputSearchValue}`;

    function updateInput(e) {
        setInputSearchValue(e.target.value)
    }

    useEffect(() => {

        if (inputSearch) {
          fetch(apiUrl)
          .then(response => {
              if(!response.ok) {
                  throw new Error('Data not found');
                } else {
                    onStateChangeError('')
                    return response.json()
                }
            })
            .then(json => onStateChangeData(json))
            .catch(error => {
                onStateChangeError(error.message)
            });
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
            placeholder={window.innerWidth > 450 ? "Search for any IP address or domain" : "Search IP addresses"}
            name="" 
            id="" 
            />
            <SearchButton onClick={e => onStateChangeInputSearch(inputSearchValue)}></SearchButton>
        </div>
    )
}