import { useState, useEffect } from "react";
import Header from "./Header";
import Map from "./Map";

export default function DataWrapper() {
    const [data, setData] = useState({})
    const [error, setError] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    const handleStateChangeData = (newValue) => {
        setData(newValue)
    }
    const handleStateChangeError = (newValue) => {
        setError(newValue)
    }

    useEffect(() => {
      const cachedIp = localStorage.getItem('userIp')
      setIsLoading(true)

      const fetchData = async () => {
        try {
          let userIp;
          if (cachedIp) {
            userIp = cachedIp;
          } else {
          // First API call to fetch User's IP address. If IP address is cached, skip this API call.
          const userIpResponse = await fetch(`https://ipapi.co/json/`)
          if (!userIpResponse.ok) {
            throw new Error("Failed to fetch user IP address.")
          }
          const userIpData = await userIpResponse.json()
          userIp = await userIpData.ip
          localStorage.setItem('userIp', userIp);
          }

          // Second API call to fetch complete User's IP Address information
          const userInformationResponse = await fetch(`/.netlify/functions/getIPAddress?ipAddress=${userIp}`)
          if (!userInformationResponse.ok) {
            throw new Error("Failed to fetch user IP address information. Please check number of available requests associated with the API key at https://geo.ipify.org/statistics.")
          }
          const userInformation = await userInformationResponse.json()
          setData(userInformation)
        } catch(error) {
          setError(error)
          console.log(error)
        }

        setIsLoading(false)
      }

      fetchData()
    }, [])

      return (
        <>
        {isLoading ? 
        
        <div className="loading-screen">
        <h1 className="loading-screen-copy">IP Address Tracker</h1> 
        </div>
        : 
        
        <>
        <Header 
            data={data}
            error={error}
            onStateChangeData={handleStateChangeData}
            onStateChangeError={handleStateChangeError}
        />
        <Map
            data={data}
            error={error}
        />
        </>
        }

      </>
      )
}