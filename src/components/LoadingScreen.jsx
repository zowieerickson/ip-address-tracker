import '../styles/loading-screen.css'
import locationIcon from "../../public/icons8-location-96.png"

export default function LoadingScreen() {
    return (
        <div className="loading-screen">
            <h1 className="loading-copy">IP Address Tracker</h1> 
            <span className="loading-bar"></span>
            <img className="loading-icon" src={locationIcon} alt="" />
        </div>
    )
}