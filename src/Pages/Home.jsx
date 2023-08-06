import { useEffect, useState } from "react";
import CountryCard from "../components/CountryCard.jsx";
import "./Home.css";
import { getAllCountries } from "../services/index.ts";

function Home() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        getAllCountries().then((result) => {
            setCountries(result.data);
        });
    }, []);

    return (
        <div className="app">
            <div className="country-card-wrapper">
                {countries.map((country, idx) => (
                    <CountryCard
                        key={idx}
                        name={country.name.common}
                        capital={country.capital}
                        population={country.population}
                        flagUrl={country.flags.png}
                    />
                ))}
            </div>
        </div>
    );
}

export default Home;
