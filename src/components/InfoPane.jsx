import "../styles/info-pane.css"

export default function InfoPane({
    data,
    error 
}) {

    if (!data || !data.location || !data.location.lat) {
        return 
    }

    // State dictionary
    function stateNameToAbbreviation(name) {
        let states = {
            "arizona": "AZ",
            "alabama": "AL",
            "alaska": "AK",
            "arkansas": "AR",
            "california": "CA",
            "colorado": "CO",
            "connecticut": "CT",
            "district of columbia": "DC",
            "delaware": "DE",
            "florida": "FL",
            "georgia": "GA",
            "hawaii": "HI",
            "idaho": "ID",
            "illinois": "IL",
            "indiana": "IN",
            "iowa": "IA",
            "kansas": "KS",
            "kentucky": "KY",
            "louisiana": "LA",
            "maine": "ME",
            "maryland": "MD",
            "massachusetts": "MA",
            "michigan": "MI",
            "minnesota": "MN",
            "mississippi": "MS",
            "missouri": "MO",
            "montana": "MT",
            "nebraska": "NE",
            "nevada": "NV",
            "new hampshire": "NH",
            "new jersey": "NJ",
            "new mexico": "NM",
            "new york": "NY",
            "north carolina": "NC",
            "north dakota": "ND",
            "ohio": "OH",
            "oklahoma": "OK",
            "oregon": "OR",
            "pennsylvania": "PA",
            "rhode island": "RI",
            "south carolina": "SC",
            "south dakota": "SD",
            "tennessee": "TN",
            "texas": "TX",
            "utah": "UT",
            "vermont": "VT",
            "virginia": "VA",
            "washington": "WA",
            "west virginia": "WV",
            "wisconsin": "WI",
            "wyoming": "WY",
            "american samoa": "AS",
            "guam": "GU",
            "northern mariana islands": "MP",
            "puerto rico": "PR",
            "us virgin islands": "VI",
            "us minor outlying islands": "UM"
        }
    
        let a = name.trim().replace(/[^\w ]/g, "").toLowerCase(); //Trim, remove all non-word characters with the exception of spaces, and convert to lowercase
        if(states[a] !== null) {
            return states[a];
        }
    
        return null;
    }

    return (
        <>
            {error.length > 1 ? ''
            :
            <section className="info">
                    <div className="info-details first">
                        <h2 className="info-details-title">IP Address</h2>
                        <p className="info-details-body">{data.ip}</p>
                    </div>
                    <div className="info-details">
                        <h2 className="info-details-title">Location</h2>
                        <p className="info-details-body">{data.location.city}, {stateNameToAbbreviation(data.location.region) ? stateNameToAbbreviation(data.location.region) : data.location.region} <br className="large" />{data.location.postalCode}</p>
                    </div>
                    <div className="info-details">
                        <h2 className="info-details-title">Timezone</h2>
                        <p className="info-details-body">UTC {data.location.timezone}</p>
                    </div>
                    <div className="info-details">
                        <h2 className="info-details-title">ISP</h2>
                        <p className="info-details-body">{data.isp}</p>
                    </div>
            </section>
            }
        </>
    )
}