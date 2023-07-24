import { useState, useEffect } from 'react'
import SearchButton from './Button.jsx'
import '../styles/search.css'

export default function Search({
    onStateChangeData,
    onStateChangeError 
}) {
    
    const [inputSearch, setInputSearch] = useState("")
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
            .then(json => {
                onStateChangeData(json)
            })
            .catch(error => {
                onStateChangeError(error.message)
            });
        }
      }, [inputSearch]);
    
    function handleKeyDown(e) {
        if (e.key === "Enter") {
            e.preventDefault();
            setInputSearch(e.target.value)
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
            name="q" 
            />
            <SearchButton onClick={e => setInputSearch(inputSearchValue)}></SearchButton>
        </div>
    )
}