import '../styles/loading-screen.css'
import locationIcon from "../../public/icons8-location-96.png"

export default function LoadingScreen() {
    return (
        <div className="loading-screen">
            <h1 className="loading-screen-copy">IP Address Tracker</h1> 
            <img className="loading-screen-icon" src={locationIcon} alt="" />
        </div>
    )
}