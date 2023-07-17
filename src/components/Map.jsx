import '../styles/map.css'
import 'leaflet/dist/leaflet.css'
import { useState } from 'react';
import { MapContainer as LeafletMap,  Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import ErrorMessage from './ErrorMessage';


// const ACCESS_TOKEN = "pk.eyJ1Ijoiem93aWVoZXlyZWFsIiwiYSI6ImNsazJqb28ycjBmdHkzZXExNDJzdDlheHEifQ.bqgdG7-FhnMhnjRASXlBYw";
// const URL = `https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=${ACCESS_TOKEN}`;
const URL = `https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`;
const ATTRIBUTION =
  'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';

  
  export default function Map({ data, lat, long }) {

    if (!data || !data.location || !data.location.lat) {
        return <ErrorMessage />
      }

    const TOWER_LOCATION = [27.43199, -82.39537];
    console.log("OLD LOC " + TOWER_LOCATION, TOWER_LOCATION)
    const NEW_LOCATION = [lat, long]
    console.log("NEW LOC " + NEW_LOCATION, NEW_LOCATION)

    // let TOWER_LOCATION = [data.location.lat, data.location.lng];

    function ChangeMapView({ coords }) {
        const map = useMap();
        map.setView(coords, map.getZoom());
      
        return null;
      }

    return (
        <LeafletMap center={NEW_LOCATION} zoom={16}>
            <TileLayer url={URL} attribution={ATTRIBUTION} />
            <Marker position={NEW_LOCATION}>
            <Popup>
                <b>Tower of Hercules</b>
                <br />
                UNESCO World Heritage site
            </Popup>
            </Marker>
            <ChangeMapView coords={NEW_LOCATION} />
        </LeafletMap>
    )
}