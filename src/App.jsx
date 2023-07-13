import { useEffect, useState } from 'react';
import Header from "./components/Header.jsx"
import Search from "./components/Search.jsx"
import Map from "./components/Map.jsx"
import './App.css'




function App() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      fetch(`https://api.ipify.org?format=json`)
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => setError(error));
      }, []);
      
      console.log(error)
      console.log(data)
  return (
    <>
      <Header />
      {/* <p>Your IP Address is {data.ip}</p> */}
      {data ? <h2 className="ip">{JSON.stringify(data.ip, null, 2)}</h2> : 'Loading...'}
      <Map />
    </>
  )
}

export default App
