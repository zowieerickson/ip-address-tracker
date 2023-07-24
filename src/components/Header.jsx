import Search from './Search.jsx'
import InfoPane from './InfoPane.jsx'
import "../styles/header.css"

export default function Header({ 
    data,
    error,
    onStateChangeError,
    onStateChangeData,
 }) {

    return (
        <header>
            <h1>IP Address Tracker</h1>
            <Search 
                onStateChangeError={onStateChangeError}
                onStateChangeData={onStateChangeData}
                
            />
            <InfoPane 
                data={data}
                error={error}
            />
        </header>
    )
}