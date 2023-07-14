import '../styles/map.css'
import 'leaflet/dist/leaflet.css'
import { MapContainer as LeafletMap,  Marker, Popup, TileLayer, useMap } from 'react-leaflet'

// GET ONE in https://docs.mapbox.com/help/how-mapbox-works/access-tokens/";
const ACCESS_TOKEN = "pk.eyJ1Ijoiem93aWVoZXlyZWFsIiwiYSI6ImNsazJqc29lZjBlMGszbnBibWtvMWtyN3oifQ.SaCH76qUhp8l1BnUkyR5CQ";

const URL = `https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=${ACCESS_TOKEN}`;
const ATTRIBUTION =
  'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';

const TOWER_LOCATION = [43.385807, -8.406524];

export default function Map() {

    return (
        <LeafletMap center={TOWER_LOCATION} zoom={16}>
            <TileLayer url={URL} attribution={ATTRIBUTION} />
            <Marker position={TOWER_LOCATION}>
            <Popup>
                <b>Tower of Hercules</b>
                <br />
                UNESCO World Heritage site
            </Popup>
            </Marker>
        </LeafletMap>
    )
}