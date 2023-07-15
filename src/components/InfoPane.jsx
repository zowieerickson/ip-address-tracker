import "../styles/info-pane.css"

export default function InfoPane({ initialIp }) {
    console.log(initialIp)
    // console.log(initialIp.ip)

    return (
        <section className="info">
            <section className="info-item ">
                <div className="info-details">
                    <h2>IP Address</h2>
                    <p>{initialIp}</p>
                </div>
            </section>
            <div className="vl"></div>
            <section className="info-item ">
                <div className="info-details">
                    <h2>Location</h2>
                    <p>Brooklyn, NY 10001</p>
                </div>
            </section>
            <div className="vl"></div>
            <section className="info-item ">
                <div className="info-details">
                    <h2>Timezone</h2>
                    <p>UTC -05:00</p>
                </div>
            </section>
            <div className="vl"></div>
            <section className="info-item ">
                <div className="info-details">
                    <h2>ISP</h2>
                    <p>SpaceX Starlink</p>
                </div>
            </section>
        </section>
    )
}