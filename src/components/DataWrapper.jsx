import { useState, useEffect } from "react";
import InfoPane from "./InfoPane";
import Header from "./Header";
import Search from "./Search";
import Map from "./Map";

export default function DataWrapper() {
    const [initialIp, setInitialIp] = useState({});
    const [data, setData] = useState({})
    const [error, setError] = useState({});
    const [inputSearch, setInputSearch] = useState('')
    const [lat, setLat] = useState('')
    const [long, setLong] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    const handleStateChangeData = (newValue) => {
        setData(newValue)
    }
    const handleStateChangeError = (newValue) => {
        setError(newValue)
    }
    const handleStateChangeInputSearch = (newValue) => {
        setInputSearch(newValue)
    }
    const handleStateChangeLatitude = (newValue) => {
        setLat(newValue)
    }
    const handleStateChangeLongitude = (newValue) => {
        setLong(newValue)
    }

    useEffect(() => {
        fetch(`https://api.ipify.org?format=json`)
          .then((response) => response.json())
          .then((json) => {
            setInitialIp(json.ip);
          })
          .catch((error) => setError(error));
      }, []);

      useEffect(() => {
        if (initialIp) {
          fetch(
            `https://geo.ipify.org/api/v2/country,city?apiKey=at_eDKMcV2xt90NAI5eZh747DLEmo7mb&ipAddress=${initialIp}`
          )
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => setError(error));
        }
      }, [initialIp]);
  
      useEffect(() => {
        if (data.location) {
          setLat(data.location.lat);
          setLong(data.location.lng);
        }
      }, [data.location]);

      return (
        <>
        <header>
            <Header />
            <Search 
                data={data}
                error={error}
                inputSearch={inputSearch}
                lat={lat}
                long={long}
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
            lat={lat}
            long={long}
        />
      </>

      )
}