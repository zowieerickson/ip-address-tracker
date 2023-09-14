import L from 'leaflet';
import { MapContainer,  Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import ErrorMessage from './ErrorMessage';
import LocationIcon from '../assets/images/icon-location-black.svg';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css'
import '../styles/map.css'

let DefaultIcon = L.icon({
    iconUrl: LocationIcon,
    shadowUrl: iconShadow
});
L.Marker.prototype.options.icon = DefaultIcon;

// Stadia Map
const mapUrl = `https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png`;

  export default function Map({
    data,
    error 
  }) {

    if (!data || !data.location || !data.location.lat) {
      return 
    }

    const newLocation = [data.location.lat, data.location.lng]

    function ChangeMapView({ coords }) {
        const map = useMap();
        map.setView(coords, map.getZoom());
        return null;
      }

    return (
      <>
      {error.length > 1 && <ErrorMessage />}
        <main hidden={error.length > 1 ? true : false}>
          <MapContainer center={newLocation} zoom={16}>
              <TileLayer url={mapUrl} />
              <Marker position={newLocation}>
              <Popup>
                  <b>{data.ip}</b>
                  <br />
                  {data.location.city}, {data.location.region}, {data.location.country}
              </Popup>
              </Marker>
              <ChangeMapView coords={newLocation} />
          </MapContainer>
        </main>
      </>
    )
}