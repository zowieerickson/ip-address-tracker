import '../styles/map.css'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, useMap } from 'react-leaflet'

export default function Map() {

    return (
        // <h1>Map</h1>
        <MapContainer center={[51.505, -0.09]} zoom={13}>
              <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
        </MapContainer>
    )
}