import { useState, useEffect } from "react";
import Header from "./Header";
import Map from "./Map";

export default function DataWrapper() {
    const [data, setData] = useState({})
    const [error, setError] = useState({});

    const handleStateChangeData = (newValue) => {
        setData(newValue)
    }
    const handleStateChangeError = (newValue) => {
        setError(newValue)
    }

    useEffect(() => {
      const cachedIp = localStorage.getItem('userIp')

      const fetchData = async () => {
        try {
          let userIp;
          if (cachedIp) {
            userIp = cachedIp;
          } else {
          // First API call to fetch User's IP address. If IP address is cached, skip this API call.
          console.log('Making first API call')
          const userIpResponse = await fetch(`https://ipapi.co/json/`)
          const userIpData = await userIpResponse.json()
          userIp = await userIpData.ip
          localStorage.setItem('userIp', userIp);
          }

          // Second API call to fetch complete User's IP Address information
          const userInformationResponse = await fetch(`/.netlify/functions/getIPAddress?ipAddress=${userIp}`)
          const userInformation = await userInformationResponse.json()
          setData(userInformation)
        } catch(error) {
          setError(error)
        }
      }

      fetchData()
    }, [])

      return (
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
      )
}