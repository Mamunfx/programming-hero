import { useState } from 'react';
import './Box.css'

export default function Country({country}) {
    console.log(country)
    const {name}=country;
    const {flags}=country;

    const {visited,setVisited}=useState(false);
    const [addedCountry, setAddingCountry]=useState([])

    const handVisited = () => {
        setVisited(!visited);
    }
    const handleAdding = (nam)=>{
        setAddingCountry(nam);
    }
    return(
        <div className="indivuji">
         <h3>Name : {name.common}</h3>
         <img src={flags.png}></img>
         <button onClick={handVisited}>visited</button>
         {visited ? 'visited' : 'not visited'}
                <button>Country added </button>
        </div>
    )
}