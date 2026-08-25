import { useEffect, useState } from "react";
import { getCountry } from "../services/countryApi";

function Location() {
    const [country, setCountry] = useState(null);

    useEffect(() => {
        const loadCountry = async () => {
            try {
                const data = await getCountry("Nepal");
                setCountry(data);
            } catch (error) {
                console.error(error);
            }
        };

        loadCountry();
    }, []);

    if (!country) {
        return (
            <section className="section">
                <p>Loading location...</p>
            </section>
        );
    }

    return (
        <section className="section">
            <div className="section-heading">
                <p>LOCATION</p>
                <h2>About My Country</h2>
            </div>

            <div className="location-card">
                <img
                    src={country.flags?.svg}
                    alt={country.name.common}
                />

                <div className="location-info">
                    <h3>{country.name.common}</h3>

                    <p>Capital: {country.capital?.[0]}</p>
                    <p>Region: {country.region}</p>
                    <p>
                        Population: {country.population.toLocaleString()}
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Location;