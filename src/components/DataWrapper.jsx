import { useState, useEffect } from "react";
import InfoPane from "./InfoPane";
import Header from "./Header";
import Search from "./Search";
import Map from "./Map";
import API_KEY from "../apikey.jsx"

export default function DataWrapper() {
    const [initialIp, setInitialIp] = useState(null);
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
        fetch(`https://ipapi.co/json/`)
          .then((response) => response.json())
          .then((json) => {
            setInitialIp(json.ip);
          })
          .catch((error) => setError(error));
      }, []);

      useEffect(() => {
        if (initialIp) {
          fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${initialIp}`)
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => setError(error));
        }
      }, [initialIp]);

      return (
        <>
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
                error={error}
            />
        </header>
        <Map
            data={data}
            error={error}
        />
      </>

      )
}