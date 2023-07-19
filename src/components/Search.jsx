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
          fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_Lpk6ACLoZBGus7XaUqEKrdZWarErf&ipAddress=${inputSearch}`)
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