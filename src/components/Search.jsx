import '../styles/search.css'
import SearchButton from './Button.jsx'

export default function Search() {

    function handleKeyDown(e) {
        // If the user presses the "Enter" key on the keyboard
        if (e.key === "Enter") {
            // Cancel the default action, if needed
            e.preventDefault();
            // Trigger
            console.log("ayo")
        }
    }

    return (
        <div className="search-wrapper">
            <input 
            onKeyDown={handleKeyDown}
            type="search" 
            className="search" 
            placeholder="Search for any IP address or domain" 
            name="" 
            id="" 
            />
            <SearchButton></SearchButton>
            
        </div>
    )
}