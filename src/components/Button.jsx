import '../styles/button.css'

function Button({ type, buttonClass, onClick, children, ariaLabel }) {
    return (
        <button type={type} className={buttonClass} onClick={onClick} aria-label={ariaLabel} >
            {children}
        </button>
    )
}

export default function SearchButton({ onClick }) {
    return (
        <Button buttonClass="btn-search" onClick={onClick} ariaLabel="Submit search" type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 58 58" fill="none">
                <path d="M0 0H43C51.2843 0 58 6.71573 58 15V43C58 51.2843 51.2843 58 43 58H0V0Z" fill="black"/>
                <path d="M26 23L32 29L26 35" stroke="white" strokeWidth="3"/>
            </svg>
        </Button>
    )
}