import { useState, useEffect } from "react";
import InfoPane from "./InfoPane";

export default function DataWrapper() {
    const [initialIp, setInitialIp] = useState({});
    const [data, setData] = useState({})
    const [error, setError] = useState({});

  
    useEffect(() => {
      fetch(`https://api.ipify.org?format=json`)
        .then(response => response.json())
        .then(json => {
            setInitialIp(json);
            // Make the second API call here, once the initialIp state is updated
            fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_wlkmwxC4IWSmbVuwksl7DqRyieXon&ipAddress=${json.ip}`)
              .then(response => response.json())
              .then(json => setData(json))
              .catch(error => setError(error));
          })
          .catch(error => setError(error));
      }, []);
      
      return (
        <>
            <InfoPane
                data={data}
            />
        </>
      )
}