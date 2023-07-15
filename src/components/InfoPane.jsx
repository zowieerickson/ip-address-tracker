import "../styles/info-pane.css"

export default function InfoPane({ data }) {

    
    if (!data) {
        return <div>Loading...</div>
    }

    if (!data.location) {
        return <div>Loading...</div>
    }

    if (!data.location.timezone) {
        return <div>Loading...</div>
    }

    console.log(data)

    return (
        <section className="info">
            <section className="info-item ">
                <div className="info-details">
                    <h2>IP Address</h2>
                    <p>{data.ip}</p>
                </div>
            </section>
            <div className="vl"></div>
            <section className="info-item ">
                <div className="info-details">
                    <h2>Location</h2>
                    <p>{data.location.city}, {data.location.region} {data.location.postalCode}</p>
                </div>
            </section>
            <div className="vl"></div>
            <section className="info-item ">
                <div className="info-details">
                    <h2>Timezone</h2>
                    <p>UTC {data.location.timezone}</p>
                </div>
            </section>
            <div className="vl"></div>
            <section className="info-item ">
                <div className="info-details">
                    <h2>ISP</h2>
                    <p>{data.isp}</p>
                </div>
            </section>
        </section>
    )
}