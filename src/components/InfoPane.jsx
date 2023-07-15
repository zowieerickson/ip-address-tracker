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
                <div className="info-details first">
                    <h2 className="info-details-title">IP Address</h2>
                    <p className="info-details-body">{data.ip}</p>
                </div>
            </section>
            <section className="info-item ">
                <div className="info-details">
                    <h2 className="info-details-title">Location</h2>
                    <p className="info-details-body">{data.location.city}, {data.location.region}<br />{data.location.postalCode}</p>
                </div>
            </section>
            <section className="info-item ">
                <div className="info-details">
                    <h2 className="info-details-title">Timezone</h2>
                    <p className="info-details-body">UTC {data.location.timezone}</p>
                </div>
            </section>
            <section className="info-item ">
                <div className="info-details">
                    <h2 className="info-details-title">ISP</h2>
                    <p className="info-details-body">{data.isp}</p>
                </div>
            </section>
        </section>
    )
}