import '../styles/search.css'

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
            <svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 58 58" fill="none">
<path d="M0 0H43C51.2843 0 58 6.71573 58 15V43C58 51.2843 51.2843 58 43 58H0V0Z" fill="black"/>
<path d="M26 23L32 29L26 35" stroke="white" strokeWidth="3"/>
</svg>
        </div>
    )
}