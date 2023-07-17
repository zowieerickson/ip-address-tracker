import '../styles/error-message.css'

export default function ErrorMessage() {
    return (
        <section class="error-wrapper">
            <h3 className="error-title">No results found</h3>
            <p>Double-check if the IP address or domain entered is correct.</p>
        </section>
    )
}