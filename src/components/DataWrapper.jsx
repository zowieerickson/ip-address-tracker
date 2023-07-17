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
            setInitialIp(json);
          })
          .catch((error) => setError(error));
      }, []);
    
      useEffect(() => {
        if (initialIp.ip) {
          fetch(
            `https://geo.ipify.org/api/v2/country,city?apiKey=at_l362GxODBiG9tJIJfKdhGQ4ohag3l&ipAddress=${initialIp.ip}`
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
      }, [data]);
      
    //   if (!data || !data.location || !data.location.lat) {
    //     // return <div>Hoe...</div>;

    //   return (
    //     <>
    //     <header>
    //         <Header />
    //         <Search 
    //             data={data}
    //             error={error}
    //             inputSearch={inputSearch}
    //             lat={lat}
    //             long={long}
    //             onStateChangeData={handleStateChangeData}
    //             onStateChangeError={handleStateChangeError}
    //             onStateChangeInputSearch={handleStateChangeInputSearch}
    //         />
    //         {/* <InfoPane
    //             data={data}
    //         /> */}
    //         <section className="info">
    //             <section className="info-item ">
    //                 <div className="info-details first">
    //                     <h2 className="info-details-title">IP Address</h2>
    //                     {/* <p className="info-details-body">{data.ip}</p> */}
    //                 </div>
    //             </section>
    //             <section className="info-item ">
    //                 <div className="info-details">
    //                     <h2 className="info-details-title">Location</h2>
    //                     {/* <p className="info-details-body">{data.location.city}, {stateNameToAbbreviation(data.location.region) ? stateNameToAbbreviation(data.location.region) : data.location.region}<br />{data.location.postalCode}</p> */}
    //                 </div>
    //             </section>
    //             <section className="info-item ">
    //                 <div className="info-details">
    //                     <h2 className="info-details-title">Timezone</h2>
    //                     {/* <p className="info-details-body">UTC {data.location.timezone}</p> */}
    //                 </div>
    //             </section>
    //             <section className="info-item ">
    //                 <div className="info-details">
    //                     <h2 className="info-details-title">ISP</h2>
    //                     {/* <p className="info-details-body">{data.isp}</p> */}
    //                 </div>
    //             </section>
    //         </section>
    //     </header>
    //     <Map 
    //         data={data}
    //         lat={lat}
    //         long={long}
    //     />
    //   </>

    //   )
    //   }

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
            />
        </header>
        <Map 
            data={data}
            lat={lat}
            long={long}
        />
      </>

      )
}