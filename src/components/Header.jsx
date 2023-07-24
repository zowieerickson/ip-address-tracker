import Search from './Search.jsx'
import InfoPane from './InfoPane.jsx'
import "../styles/header.css"

export default function Header({ 
    data,
    error,
    inputSearch,
    onStateChangeInputSearch,
    onStateChangeData,
    onStateChangeError }) {

    return (
        <header>
            <h1>IP Address Tracker</h1>
            <Search 
                data={data}
                error={error}
                inputSearch={inputSearch}
                onStateChangeData={onStateChangeData}
                onStateChangeError={onStateChangeError}
                onStateChangeInputSearch={onStateChangeInputSearch}
            />
            <InfoPane 
                data={data}
                error={error}
            />
        </header>
    )
}