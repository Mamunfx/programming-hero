import { useEffect, useState } from "react";
import Country from "./Country";
import './Box.css'
export default function Countries() {
    const [countries , setCountries]=useState([]);


    
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])


    return(
        <div>
            <h1>length : {countries.length}</h1>;
            
            <div className="boxcss">
            {
                countries.map(country => <Country key={country.cca3} country={country} className="indivuji"></Country>)
            }
            </div>
        </div>
    )
}