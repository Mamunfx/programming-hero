

import { useState } from 'react';
import './Box.css';

export default function Country({ country }) {
    console.log(country);
    const { name, flags } = country;
    const [visited, setVisited] = useState(false);
    const [addedCountry, setAddingCountry] = useState([]);

    const handVisited = () => {
        setVisited(!visited);
    }

    const handleAdding = (nam) => {
        setAddingCountry(nam);
    }

    return (
        <div className="indivuji">
            <h3>Name : {name.common}</h3>
            <img src={flags.png} alt={`${name.common} flag`} />
            <button onClick={handVisited}>
                {visited ? "Visited" : "Not Visited"}
            </button>
            {/* Implement handleAdding if necessary */}
            <button>Country added</button>
        </div>
    );
}