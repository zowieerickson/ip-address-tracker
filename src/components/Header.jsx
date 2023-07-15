import Search from './Search.jsx'
import InfoPane from './InfoPane.jsx'
import "../styles/header.css"

export default function Header() {

    return (
        <header>
            <h1>IP Address Tracker</h1>
            <Search></Search>
        </header>
    )
}