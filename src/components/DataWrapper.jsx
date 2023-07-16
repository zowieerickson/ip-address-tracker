import { useState, useEffect } from "react";
import InfoPane from "./InfoPane";
import Header from "./Header";
import Search from "./Search";

export default function DataWrapper() {
    const [initialIp, setInitialIp] = useState({});
    const [data, setData] = useState({})
    const [error, setError] = useState({});
    const [inputSearch, setInputSearch] = useState('')

    const handleStateChangeData = (newValue) => {
        setData(newValue)
    }
    const handleStateChangeError = (newValue) => {
        setError(newValue)
    }
    const handleStateChangeInputSearch = (newValue) => {
        setInputSearch(newValue)
    }
  
    useEffect(() => {
      fetch(`https://api.ipify.org?format=json`)
        .then(response => response.json())
        .then(json => {
            setInitialIp(json);
            // Make the second API call here, once the initialIp state is updated
            fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_l362GxODBiG9tJIJfKdhGQ4ohag3l&ipAddress=${json.ip}`)
              .then(response => response.json())
              .then(json => setData(json))
              .catch(error => setError(error));
          })
          .catch(error => setError(error));
      }, []);
      
      return (
        <header>
            <Header />
            <Search 
                data={data}
                error={error}
                inputSearch={inputSearch}
                onStateChangeData={handleStateChangeData}
                onStateChangeError={handleStateChangeError}
                onStateChangeInputSearch={handleStateChangeInputSearch}
            />
            <InfoPane
                data={data}
            />
        </header>
      )
}